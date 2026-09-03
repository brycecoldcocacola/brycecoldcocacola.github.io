// Real-orbit satellite field for the globe.
//
// Loads the build-time TLE bundle (src/data/satellites.json), propagates each
// object with satellite.js (SGP4) ONCE to build a cached orbit path, then
// animates a glowing head plus a dissipating motion trail sliding along that
// path — the "launched streak" look, not a cage of closed rings.
//
// Performance
// -----------
// The first version of this module drew a full orbit ring per object (338
// objects x 96 segments ~ 32k additive line segments) and re-propagated every
// TLE on every frame. Measured on an Intel UHD 750 at 1920x1080 @2x that was
// ~53 ms of a 56 ms frame — the globe itself is only ~3 ms — and 338 nearly
// identical LEO rings compressed to one radius read as a ball of string.
//
// So:
//   * ~50 objects chosen for *spread* (one per orbital plane, per-category
//     budget) instead of volume — see pickSats();
//   * trails instead of closed rings: ~1.5k line segments instead of ~32k;
//   * zero SGP4 work per frame. Each orbit is sampled into a ring buffer once
//     and the head/trail are an index walk along it, so per-frame cost is a few
//     thousand lerps.
//
// Coordinate system
// -----------------
// The globe maps a surface point (lat, lon) to a *fixed* local direction —
// i.e. its own frame is Earth-fixed (ECEF). The sun/day-night terminator
// already rides in that frame. Orbits, however, are inertial, so heads and
// trails are computed in an inertial/sidereal frame and the whole assembly is
// counter-rotated by -GMST every frame. That keeps every satellite glued to its
// own path, keeps geostationary satellites locked over their longitude, and
// makes the field turn with the globe when the user drags.
//
import * as THREE from "three";
import * as satellite from "satellite.js";
import bundle from "../data/satellites.json";

const PLANET_R = 1.78; // globe radius in scene units (matches SatelliteOrbit.jsx)
const ALT_REF_KM = 350; // altitude scale for the log compression below
const ALT_GAIN = 0.38; // how hard altitude is compressed into scene radius
const SPEED = 40; // time acceleration: LEO motion stays lively, GEO stays locked

// Sampling / trail shape.
const ORBIT_SAMPLES = 192; // cached points per orbit path
const TRAIL_SEGMENTS = 28; // line segments per trail
const TRAIL_ARC = 0.13; // how much of an orbit a trail covers (fraction)
const FADE_EXP = 1.8; // tail falloff steepness
const HEAD_SIZE = 0.075;
const TRAIL_GAIN = 1.35; // trail brightness at the head

// Curation: volume is what turned this into a yarn ball, so cap it and spend
// the budget on objects that are actually in different orbital planes.
const MAX_SATS = 56;
const MIN_PERIGEE_KM = 180;
const MIN_PERIOD_MIN = 85;
const MAX_PERIOD_MIN = 1500;
const MAX_ECC = 0.12;
const PLANE_MIN_INC_DEG = 1.5; // treat planes closer than this as duplicates ...
const PLANE_MIN_RAAN_DEG = 6; // ... when the node is also this close
const BUDGET = {
  station: 6,
  nav: 8,
  comms: 7,
  science: 6,
  weather: 6,
  resource: 4,
  military: 4,
  starlink: 8,
  radar: 3,
  default: 4,
};

// Colour per category (assigned by scripts/fetch-satellites.mjs).
const CATEGORY_COLORS = {
  station: "#ffffff",
  nav: "#ffd36e",
  comms: "#ff9d6b",
  starlink: "#8fd6ff",
  science: "#79f0b4",
  weather: "#9ec8ff",
  resource: "#5fe3d2",
  radar: "#a9b4ff",
  military: "#ff7d7d",
  default: "#c9d4e3",
};
const colorFor = (cat) => CATEGORY_COLORS[cat] || CATEGORY_COLORS.default;

const MU_EARTH = 398600.4418; // km^3/s^2
const RE_EARTH = 6371.0; // km

// Compress real altitude (km) into scene space: logarithmic so LEO hugs the
// globe while MEO/GEO still reach outward without flying off-screen. The gain
// is deliberately gentle — at 0.7 a geostationary ring landed at 2.4 planet
// radii and swept across the whole viewport (and the body copy).
function altitudeToWorldR(altKm) {
  const a = Number.isFinite(altKm) && altKm > 0 ? altKm : 0;
  return PLANET_R * (1 + ALT_GAIN * Math.log10(1 + a / ALT_REF_KM));
}

// Kepler's third law: semi-major axis (km) from an orbital period in minutes.
function semiMajorAxisKm(periodMin) {
  const t = (periodMin * 60) / (2 * Math.PI);
  return Math.cbrt(MU_EARTH * t * t);
}

// Angular difference on a 0..360 circle.
function wrapAngleDeg(a, b) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

// lat/lon (deg) -> local direction matching the globe's UV/sun mapping
// (lon 0 -> +X, lon +90E -> -Z, lat +90N -> +Y).
const _scratch = new THREE.Vector3();
function latLonToDir(latDeg, lonDeg, out) {
  const la = (latDeg * Math.PI) / 180;
  const lo = (lonDeg * Math.PI) / 180;
  const cl = Math.cos(la);
  return (out || _scratch).set(cl * Math.cos(lo), Math.sin(la), -cl * Math.sin(lo));
}

// Small soft round sprite so satellites read as glowing dots, not squares.
function makeDotTexture() {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0.0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.85)");
  g.addColorStop(1.0, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Choose which objects to draw. Three filters, all deterministic so the scene
 * looks the same on every load for a given TLE bundle:
 *
 *  1. Physically sane — drop decaying/decayed objects and long, eccentric
 *     ellipse orbits that render as weird loops rather than orbits.
 *  2. One per orbital plane — constellation shells (Starlink, GPS, Galileo)
 *     put dozens of satellites in near-identical planes. Drawing all of them is
 *     exactly what produced the ball of string, so near-duplicate planes are
 *     skipped and each drawn path says something different.
 *  3. A per-category budget — keeps every mission type on screen without any
 *     one group (92 navigation satellites!) taking over.
 */
function pickSats() {
  const seenIds = new Set();
  const byCat = new Map();
  const picked = [];
  const takenByCat = {};

  for (const s of bundle.sats) {
    if (picked.length >= MAX_SATS) break;

    // Line-1 carries the catalog id in columns 3-7.
    const id = s.line1.slice(2, 7).trim();
    if (!id || seenIds.has(id)) continue;
    seenIds.add(id);

    const cat = s.cat || "default";
    const budget = BUDGET[cat] ?? BUDGET.default;
    takenByCat[cat] = takenByCat[cat] || 0;
    if (takenByCat[cat] >= budget) continue;

    let rec;
    try {
      rec = satellite.twoline2satrec(s.line1, s.line2);
    } catch {
      continue;
    }
    if (!rec || rec.error || !(rec.no > 0)) continue;

    const periodMin = (2 * Math.PI) / rec.no;
    const ecc = rec.ecco;
    const perigee = semiMajorAxisKm(periodMin) * (1 - ecc) - RE_EARTH;
    if (perigee < MIN_PERIGEE_KM) continue;
    if (periodMin < MIN_PERIOD_MIN || periodMin > MAX_PERIOD_MIN) continue;
    if (!(ecc >= 0) || ecc > MAX_ECC) continue;

    const incDeg = (rec.inclo * 180) / Math.PI;
    const raanDeg = (rec.nodeo * 180) / Math.PI;
    let samePlane = false;
    for (const o of picked) {
      if (
        Math.abs(o.incDeg - incDeg) < PLANE_MIN_INC_DEG &&
        wrapAngleDeg(o.raanDeg, raanDeg) < PLANE_MIN_RAAN_DEG
      ) {
        samePlane = true;
        break;
      }
    }
    if (samePlane) continue;

    takenByCat[cat]++;
    picked.push({ rec, cat, name: s.name, periodMs: periodMin * 60000, incDeg, raanDeg });
    byCat.set(cat, (byCat.get(cat) || 0) + 1);
  }

  return picked;
}

/**
 * Propagate one orbit and cache it as a closed ring buffer of scene-space
 * points in the inertial/sidereal frame, sampled uniformly over exactly one
 * period starting at `t0`. Returns a Float32Array(ORBIT_SAMPLES * 3), or null
 * if SGP4 diverged anywhere along the path.
 */
function sampleOrbitPath(sat, t0) {
  const samples = new Float32Array(ORBIT_SAMPLES * 3);
  for (let i = 0; i < ORBIT_SAMPLES; i++) {
    const d = new Date(t0 + (sat.periodMs * i) / ORBIT_SAMPLES);
    const gmst = satellite.gstime(d);
    const pv = satellite.propagate(sat.rec, d);
    if (!pv.position) return null;
    const geo = satellite.eciToGeodetic(pv.position, gmst);
    // Sidereal (inertial) longitude = geodetic lon + GMST, so the path is a
    // rigid inertial curve that the group's -GMST spin maps back to Earth.
    const inertialLon = satellite.degreesLong(geo.longitude) + (gmst * 180) / Math.PI;
    const v = latLonToDir(
      satellite.degreesLat(geo.latitude),
      inertialLon,
      _scratch,
    ).multiplyScalar(altitudeToWorldR(geo.height));
    samples[i * 3] = v.x;
    samples[i * 3 + 1] = v.y;
    samples[i * 3 + 2] = v.z;
  }
  return samples;
}

// Read a position at a fractional sample index (wrapping) of a cached path.
const _lerpOut = new THREE.Vector3();
function sampleCached(samples, phase, out) {
  let f = phase % ORBIT_SAMPLES;
  if (f < 0) f += ORBIT_SAMPLES;
  const i0 = Math.floor(f);
  const i1 = (i0 + 1) % ORBIT_SAMPLES;
  const u = f - i0;
  const a = i0 * 3;
  const b = i1 * 3;
  return (out || _lerpOut).set(
    samples[a] + (samples[b] - samples[a]) * u,
    samples[a + 1] + (samples[b + 1] - samples[a + 1]) * u,
    samples[a + 2] + (samples[b + 2] - samples[a + 2]) * u,
  );
}

export class SatelliteField {
  /**
   * @param {THREE.Group} mountGroup group that already follows the globe's
   *   drag rotation (e.g. the same parent the meteor trails used).
   */
  constructor(mountGroup) {
    this.group = new THREE.Group();
    mountGroup.add(this.group);

    // GMST-rotating child: everything inside is expressed in an inertial
    // (sidereal-longitude) frame; the group spins by -GMST each frame.
    this.inertial = new THREE.Group();
    this.group.add(this.inertial);

    // Sample the real orbits once. Objects whose SGP4 path diverges are
    // dropped here so the draw buffers stay square with `this.sats`.
    const t0 = Date.now();
    this.sats = [];
    for (const sat of pickSats()) {
      const samples = sampleOrbitPath(sat, t0);
      if (!samples) continue;
      sat.samples = samples;
      sat.t0 = t0;
      this.sats.push(sat);
    }

    this._buildHeads();
    this._buildTrails();

    this.simTime = Date.now();
    this._lastReal = performance.now();
    this.update(); // seed initial positions
  }

  _buildHeads() {
    const n = this.sats.length;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      c.set(colorFor(this.sats[i].cat));
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: HEAD_SIZE,
      map: makeDotTexture(),
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.heads = new THREE.Points(geo, mat);
    this.heads.frustumCulled = false;
    this.headPos = pos;
    this.inertial.add(this.heads);
  }

  /**
   * All trails live in ONE LineSegments draw call. Per-vertex colour carries the
   * tail falloff (additive blending, so a darkening colour *is* the fade) and
   * never changes — only positions are rewritten each frame.
   */
  _buildTrails() {
    const n = this.sats.length;
    const verts = n * TRAIL_SEGMENTS * 2;
    const positions = new Float32Array(verts * 3);
    const colors = new Float32Array(verts * 3);
    const c = new THREE.Color();
    const fadeAt = (k) => Math.pow(1 - k / TRAIL_SEGMENTS, FADE_EXP) * TRAIL_GAIN;

    let v = 0;
    for (let i = 0; i < n; i++) {
      c.set(colorFor(this.sats[i].cat));
      for (let k = 0; k < TRAIL_SEGMENTS; k++) {
        // Segment k runs from trail point k (newer) to k + 1 (older).
        const f0 = fadeAt(k);
        const f1 = fadeAt(k + 1);
        colors[v * 3] = c.r * f0;
        colors[v * 3 + 1] = c.g * f0;
        colors[v * 3 + 2] = c.b * f0;
        v++;
        colors[v * 3] = c.r * f1;
        colors[v * 3 + 1] = c.g * f1;
        colors[v * 3 + 2] = c.b * f1;
        v++;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.trails = new THREE.LineSegments(geo, mat);
    this.trails.frustumCulled = false;
    this.trailPos = positions;
    this.inertial.add(this.trails);
  }

  /**
   * Advance the simulation clock and slide every head/trail along its cached
   * orbit path. No propagation happens here — mean motion from the TLE *is* the
   * secular phase of the path we sampled, so a wrap-around index walk stays
   * glued to the orbit (only short-period wiggles of a few km are smoothed out).
   */
  update() {
    const real = performance.now();
    this.simTime += (real - this._lastReal) * SPEED;
    this._lastReal = real;

    const gmst = satellite.gstime(new Date(this.simTime));
    this.inertial.rotation.y = -gmst;

    const step = (TRAIL_ARC * ORBIT_SAMPLES) / TRAIL_SEGMENTS;
    const head = this._head || (this._head = new THREE.Vector3());
    const prev = this._prev || (this._prev = new THREE.Vector3());
    const hp = this.headPos;
    const tp = this.trailPos;

    for (let i = 0; i < this.sats.length; i++) {
      const sat = this.sats[i];
      const phase = ((this.simTime - sat.t0) / sat.periodMs) * ORBIT_SAMPLES;

      sampleCached(sat.samples, phase, head);
      hp[i * 3] = head.x;
      hp[i * 3 + 1] = head.y;
      hp[i * 3 + 2] = head.z;

      let o = i * TRAIL_SEGMENTS * 6;
      let px = head.x;
      let py = head.y;
      let pz = head.z;
      for (let k = 1; k <= TRAIL_SEGMENTS; k++) {
        sampleCached(sat.samples, phase - k * step, prev);
        tp[o++] = px;
        tp[o++] = py;
        tp[o++] = pz;
        tp[o++] = prev.x;
        tp[o++] = prev.y;
        tp[o++] = prev.z;
        px = prev.x;
        py = prev.y;
        pz = prev.z;
      }
    }

    this.heads.geometry.attributes.position.needsUpdate = true;
    this.trails.geometry.attributes.position.needsUpdate = true;
  }

  dispose() {
    this.heads.geometry.dispose();
    this.heads.material.map?.dispose();
    this.heads.material.dispose();
    this.trails.geometry.dispose();
    this.trails.material.dispose();
    this.group.parent?.remove(this.group);
  }
}
