// Real-orbit satellite field for the globe.
//
// Loads the build-time TLE bundle (src/data/satellites.json), propagates every
// object with satellite.js (SGP4), and renders:
//   * a glowing point per satellite at its live position, and
//   * a faint full-orbit ring per satellite showing the path it traces.
//
// Coordinate system
// -----------------
// The globe maps a surface point (lat, lon) to a *fixed* local direction —
// i.e. its own frame is Earth-fixed (ECEF). The sun/day-night terminator
// already rides in that frame. Orbits, however, are inertial, so heads and
// rings are computed in an inertial/sidereal frame and the whole assembly is
// counter-rotated by -GMST every frame. That keeps every satellite glued to its
// own orbit line, keeps geostationary satellites locked over their longitude,
// and makes the field turn with the globe when the user drags.
//
import * as THREE from "three";
import * as satellite from "satellite.js";
import bundle from "../data/satellites.json";

const PLANET_R = 1.78; // globe radius in scene units (matches SatelliteOrbit.jsx)
const ALT_REF_KM = 400; // altitude that maps to ~1 planet-radius surface offset
const SPEED = 40; // time acceleration: LEO motion stays lively, GEO stays locked
const RING_SEGMENTS = 96; // samples per orbit ring

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

// Compress real altitude (km) into scene space: logarithmic so LEO hugs the
// globe while MEO/GEO still reach outward without flying off-screen.
function altitudeToWorldR(altKm) {
  const a = Number.isFinite(altKm) && altKm > 0 ? altKm : 0;
  return PLANET_R * (1 + 0.7 * Math.log10(1 + a / ALT_REF_KM));
}

// lat/lon (deg) -> local direction matching the globe's UV/sun mapping
// (lon 0 -> +X, lon +90E -> -Z, lat +90N -> +Y).
const _v = new THREE.Vector3();
function latLonToDir(latDeg, lonDeg, out) {
  const la = (latDeg * Math.PI) / 180;
  const lo = (lonDeg * Math.PI) / 180;
  const cl = Math.cos(la);
  return (out || _v).set(cl * Math.cos(lo), Math.sin(la), -cl * Math.sin(lo));
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

export class SatelliteField {
  /**
   * @param {THREE.Group} mountGroup group that already follows the globe's
   *   drag rotation (e.g. the same parent the meteors use).
   */
  constructor(mountGroup) {
    this.group = new THREE.Group();
    mountGroup.add(this.group);

    this.sats = this._buildSats();

    // GMST-rotating child: everything inside is expressed in an inertial
    // (sidereal-longitude) frame; the group spins by -GMST each frame.
    this.inertial = new THREE.Group();
    this.group.add(this.inertial);

    this._buildHeads();
    this._buildRings();

    this.simTime = Date.now();
    this.update(); // seed initial positions
  }

  _buildSats() {
    const list = [];
    for (const s of bundle.sats) {
      let rec;
      try {
        rec = satellite.twoline2satrec(s.line1, s.line2);
      } catch {
        continue;
      }
      if (!rec || rec.error) continue;
      list.push({
        rec,
        cat: s.cat,
        name: s.name,
        // period in ms from SGP4 mean motion (rad/min); fall back to 100 min.
        periodMs: (() => {
          const no = rec.no;
          const minutes = no && no > 0 ? (2 * Math.PI) / no : 100;
          return Math.min(Math.max(minutes, 5), 1500) * 60000;
        })(),
      });
    }
    return list;
  }

  _buildHeads() {
    const n = this.sats.length;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const c = new THREE.Color();
    for (let i = 0; i < n; i++) {
      pos[i * 3 + 1] = 1e9; // park off-screen until first update places them
      c.set(colorFor(this.sats[i].cat));
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.05,
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

  _buildRings() {
    const c = new THREE.Color();
    const color = colorFor;
    const positions = [];
    const colors = [];
    const start = this.simTime || Date.now();

    // Propagate each orbit over one full period in the inertial/sidereal frame.
    for (const sat of this.sats) {
      const col = new THREE.Color(color(sat.cat));
      let drewAny = false;
      const pts = [];
      for (let j = 0; j <= RING_SEGMENTS; j++) {
        const t = start + (sat.periodMs * j) / RING_SEGMENTS;
        const d = new Date(t);
        const gmst = satellite.gstime(d);
        const pv = satellite.propagate(sat.rec, d);
        if (!pv.position) {
          pts.push(null);
          continue;
        }
        const geo = satellite.eciToGeodetic(pv.position, gmst);
        const lat = satellite.degreesLat(geo.latitude);
        // Sidereal (inertial) longitude = geodetic lon + GMST, so the ring is a
        // rigid inertial curve that the group's -GMST spin maps back to Earth.
        const inertialLon = satellite.degreesLong(geo.longitude) + (gmst * 180) / Math.PI;
        const r = altitudeToWorldR(geo.height);
        pts.push(
          latLonToDir(lat, inertialLon, new THREE.Vector3()).multiplyScalar(r),
        );
      }
      // Connect consecutive valid points as a line segment pair.
      for (let j = 0; j < RING_SEGMENTS; j++) {
        const a = pts[j];
        const b = pts[j + 1];
        if (!a || !b) continue;
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        colors.push(col.r, col.g, col.b, col.r, col.g, col.b);
        drewAny = true;
      }
      if (drewAny) sat.hasRing = true;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3),
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(colors), 3),
    );
    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.11,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.rings = new THREE.LineSegments(geo, mat);
    this.rings.frustumCulled = false;
    this.inertial.add(this.rings);
    void c;
  }

  /** Advance the simulation clock and refresh satellite head positions. */
  update() {
    // Accelerated, monotonic simulation clock so orbits visibly move.
    this.simTime += (performance.now() - (this._lastReal || performance.now())) * SPEED;
    this._lastReal = performance.now();

    const now = new Date(this.simTime);
    const gmst = satellite.gstime(now);
    this.inertial.rotation.y = -gmst;

    const gmstDeg = (gmst * 180) / Math.PI;
    const pos = this.headPos;
    const dir = _v;
    for (let i = 0; i < this.sats.length; i++) {
      const pv = satellite.propagate(this.sats[i].rec, now);
      if (!pv.position) continue; // SGP4 error: leave parked
      const geo = satellite.eciToGeodetic(pv.position, gmst);
      const lat = satellite.degreesLat(geo.latitude);
      const lon = satellite.degreesLong(geo.longitude) + gmstDeg;
      const r = altitudeToWorldR(geo.height);
      latLonToDir(lat, lon, dir).multiplyScalar(r);
      pos[i * 3] = dir.x;
      pos[i * 3 + 1] = dir.y;
      pos[i * 3 + 2] = dir.z;
    }
    this.heads.geometry.attributes.position.needsUpdate = true;
  }

  dispose() {
    this.heads.geometry.dispose();
    this.heads.material.map?.dispose();
    this.heads.material.dispose();
    this.rings.geometry.dispose();
    this.rings.material.dispose();
    this.group.parent?.remove(this.group);
  }
}
