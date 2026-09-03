// Build-time satellite data refresh.
//
// Pulls curated Two-Line Element (TLE) sets from CelesTrak, tags each object
// with a category (used to colour it on the globe), and writes a compact JSON
// bundle to src/data/satellites.json. The globe component propagates these TLEs
// live in the browser with satellite.js, so the orbits are always physically
// correct without any runtime API dependency (works fine on static GitHub
// Pages). Re-run this script (or the GitHub Action) periodically to refresh the
// element sets.
//
//   node scripts/fetch-satellites.mjs
//
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../src/data/satellites.json");
const BASE = "https://celestrak.org/NORAD/elements/gp.php";

// Which CelesTrak groups to include and how many of each. Counts are capped so
// the field stays visually legible (~400 sats) and cheap to render; large
// constellations (Starlink) are sampled evenly rather than dumped whole.
// `cat` drives the on-globe colour; see the legend in SatelliteOrbit.jsx.
const GROUPS = [
  { group: "stations", label: "station", take: 22 },
  { group: "gps-ops", label: "nav", take: 32 },
  { group: "galileo", label: "nav", take: 32 },
  { group: "glo-ops", label: "nav", take: 29 },
  { group: "science", label: "science", take: 46 },
  { group: "weather", label: "weather", take: 55 },
  { group: "radar", label: "radar", take: 10 },
  { group: "military", label: "military", take: 24 },
  { group: "resource", label: "resource", take: 40 },
  { group: "intelsat", label: "comms", take: 28 },
  { group: "planet", label: "comms", take: 24 },
  { group: "starlink", label: "starlink", take: 64 },
];

/**
 * Parse CelesTrak TLE text (NAME / line1 / line2 triplets) into records.
 * Tolerates records with no name line and any CRLF / trailing blank lines.
 * @param {string} text
 * @returns {{name: string, line1: string, line2: string}[]}
 */
function parseTle(text) {
  const lines = text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trimEnd())
    .filter((l) => l.length > 0);

  const out = [];
  for (let i = 0; i < lines.length; i++) {
    // A line-1 always begins with "1 " and a catalog id follows the "U"/"C".
    if (/^1\s/.test(lines[i]) && /^2\s/.test(lines[i + 1] || "")) {
      const prev = i > 0 ? lines[i - 1] : "";
      const hasName = prev && !/^[12]\s/.test(prev);
      const name = hasName ? prev : "";
      // Skip backwards: the name (if any) is the line before line1. We already
      // captured it. Record and advance past line2.
      const line1 = lines[i];
      const line2 = lines[i + 1];
      if (line1.length >= 64 && line2.length >= 64) {
        out.push({ name: name || `NORAD ${noradId(line1)}`, line1, line2 });
      }
      i += 1; // skip line2 on next iteration
    }
  }
  return out;
}

/** @param {string} line1 */
function noradId(line1) {
  return line1.slice(2, 7).trim();
}

/** Evenly sample `count` items from an array (deterministic, keeps first). */
function sample(arr, count) {
  if (arr.length <= count) return arr;
  const step = arr.length / count;
  const out = [];
  for (let i = 0; i < count; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Fetch one CelesTrak group, politely. A realistic User-Agent avoids the
 * default-node-UA block, and bounded retries with backoff ride out the
 * transient 403/429/5xx throttling CelesTrak applies to bursts. Callers wait
 * between groups so a full refresh is a gentle trickle, not a hammer.
 */
async function fetchGroup(group, { attempts = 4 } = {}) {
  const url = `${BASE}?GROUP=${encodeURIComponent(group)}&FORMAT=tle`;
  let lastErr;
  for (let a = 0; a < attempts; a++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; bryce-portfolio-globe/1.0; +https://github.com/brycecoldcocacola/brycecoldcocacola.github.io)",
          Accept: "text/plain",
        },
      });
      if (res.ok) return parseTle(await res.text());
      lastErr = new Error(`HTTP ${res.status}`);
      // Only retry throttling/status errors; give 4xx a longer cooldown.
      if (res.status === 404) break;
    } catch (e) {
      lastErr = e;
    }
    const backoff = 2000 * Math.pow(2, a); // 2s, 4s, 8s
    await sleep(backoff);
  }
  throw new Error(`${group}: ${lastErr?.message || "failed"}`);
}

async function main() {
  /** @type {Map<string, object>} dedupe by NORAD catalog id */
  const merged = new Map();
  const errors = [];

  for (const { group, label, take } of GROUPS) {
    try {
      const recs = await fetchGroup(group);
      const picked = sample(recs, take);
      for (const r of picked) {
        const id = noradId(r.line1);
        if (!id || merged.has(id)) continue;
        merged.set(id, { name: r.name, cat: label, line1: r.line1, line2: r.line2 });
      }
      console.log(`  ${group.padEnd(14)} ${String(recs.length).padStart(6)} fetched, +${picked.length} kept`);
    } catch (e) {
      errors.push(e.message);
      console.error(`  ${group.padEnd(14)} FAILED: ${e.message}`);
    }
    // Be a good citizen: small gap between groups.
    await sleep(1200);
  }

  if (merged.size === 0) {
    console.error("No satellites fetched — aborting, keeping existing bundle.");
    process.exit(1);
  }

  const sorted = [...merged.values()].sort((a, b) =>
    noradId(a.line1).localeCompare(noradId(b.line1)),
  );

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    JSON.stringify({
      source: "CelesTrak gp.php",
      fetched: new Date().toISOString(),
      count: sorted.length,
      sats: sorted,
    }),
  );

  const kb = (Buffer.byteLength(JSON.stringify(sorted)) / 1024).toFixed(1);
  console.log(`\nWrote ${sorted.length} satellites (~${kb} kB of TLE) -> ${OUT}`);
  if (errors.length) console.log(`(${errors.length} group(s) failed, bundle still valid)`);
}

main();
