// Flattens data.js into one chronological list of "chapters" (each role and
// each degree) with numeric start/end years for placing them on the timeline.
import { experience, education } from "./data";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const now = new Date();
export const NOW = now.getFullYear() + now.getMonth() / 12;

// "Mar 2026" → 2026.17, "Present" → NOW
function toYear(s) {
  if (/present/i.test(s)) return NOW;
  const [, mon, year] = /([a-z]{3})?\s*(\d{4})/i.exec(s);
  return Number(year) + (mon ? MONTHS.indexOf(mon.toLowerCase()) / 12 : 0);
}

function parsePeriod(period) {
  const [a, b] = period.split("—").map((s) => s.trim());
  return { start: toYear(a), end: toYear(b), current: /present/i.test(b) };
}

const work = experience.flatMap((c) =>
  c.roles.map((r) => ({
    key: `${c.id}-${r.title}`,
    kind: "work",
    groupId: c.id,
    org: c.company,
    short: c.short,
    url: c.url,
    title: r.title,
    period: r.period,
    description: r.description,
    blurb: c.blurb,
    location: c.location,
    skills: c.skills,
    media: c.media,
    ...parsePeriod(r.period),
  })),
);

const school = education.map((e) => {
  const p = parsePeriod(e.period);
  return {
    key: e.id,
    kind: "edu",
    groupId: e.id,
    org: e.school,
    short: e.short,
    title: e.degree,
    // Only years are shown for degrees; months just place them on the axis.
    period: `${Math.floor(p.start)} — ${Math.floor(p.end)}`,
    description: e.focus ? `Focus: ${e.focus}.` : "",
    location: e.location,
    ...p,
  };
});

export const chapters = [...school, ...work].sort((a, b) => a.start - b.start);

// Company bands drawn above the role segments (one per employer).
export const companies = experience
  .map((c) => {
    const roles = work.filter((w) => w.groupId === c.id);
    return {
      id: c.id,
      name: c.short,
      start: Math.min(...roles.map((r) => r.start)),
      end: Math.max(...roles.map((r) => r.end)),
    };
  })
  .sort((a, b) => a.start - b.start);

export const current = work.find((w) => w.current) || work[0];
export const FIRST_YEAR = Math.floor(chapters[0].start);
