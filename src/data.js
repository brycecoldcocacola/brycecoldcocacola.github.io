// All site content lives here so the components stay purely presentational.
// Periods are "Mon YYYY — Mon YYYY" (or "Present"); src/chapters.js turns
// them into positions on the timeline.

export const profile = {
  name: "Bryce Anglin",
  location: "San Francisco, California",
  summary:
    "Whether it's visualizing and simulating satellite systems, helping people get in shape, or simulating autonomous physical systems, I always enjoy applying my skills to make the world a better place.",
};

export const experience = [
  {
    company: "Parallel Domain",
    short: "Parallel Domain",
    url: "https://paralleldomain.com/",
    id: "pd",
    location: "San Francisco, CA",
    blurb: "Photorealistic synthetic data & simulation for autonomous robotics",
    // Replica-generation clip from the paralleldomain.com homepage.
    media: {
      video: "/pd-replica.mp4",
      poster: "/pd-replica-poster.jpg",
    },
    roles: [
      {
        title: "Principal Software Developer",
        period: "Mar 2026 — Present",
        description:
          "Leading development of our customer-facing dynamic world reconstruction product.",
      },
      {
        title: "Senior Software Developer",
        period: "Sep 2024 — Mar 2026",
        description: "Led development of the customer-facing Python SDK and Python governance.",
      },
    ],
  },
  {
    company: "Tempo",
    short: "Tempo",
    url: "https://tempo.fit/",
    id: "tempo",
    location: "San Francisco, CA",
    blurb: "AI-powered home gym & virtual personal training",
    // Home-gym equipment still served by tempo.fit's CMS.
    media: {
      image: "https://www.datocms-assets.com/135987/1723905519-09e_studio_plus_d.jpeg",
    },
    roles: [
      {
        title: "Tech Lead Manager",
        period: "Mar 2024 — Sep 2024",
        description:
          "Led technical direction and execution of computer vision and machine learning.",
      },
      {
        title: "Senior Full Stack Developer",
        period: "Apr 2023 — Mar 2024",
        description:
          "Owned all machine learning tooling, infrastructure, data labeling, and analysis. Individual contributor on the ML team with an emphasis on improving in-house models.",
      },
      {
        title: "Full Stack Developer",
        period: "Apr 2021 — Apr 2023",
        description:
          "Built end-to-end tooling for the ML team: data collection, data exploration, data labeling, model development, training infrastructure, model deployment, and production monitoring.",
      },
    ],
    skills: ["Python", "AWS", "SQL", "Machine Learning", "Computer Vision"],
  },
  {
    company: "The Aerospace Corporation",
    short: "Aerospace Corp.",
    url: "https://www.aero.org/",
    id: "aerospace",
    location: "Los Angeles, CA",
    blurb: "Satellite & space-systems engineering",
    // Recording of the Three.js satellite globe this site used to embed
    // (real orbits propagated from CelesTrak TLEs).
    media: {
      video: "/aerospace-globe.mp4",
      poster: "/aerospace-globe-poster.jpg",
    },
    roles: [
      {
        title: "Sr. Web & Graphics Software Developer",
        period: "Jun 2019 — Apr 2021",
        description:
          "Built web-based visualization and propagation tools for real-time satellite constellations, plus the APIs and databases that enabled authoritative sources of truth for satellite information.",
      },
      {
        title: "Space Systems Engineer",
        period: "Jul 2015 — Jun 2019",
        description:
          "Leveraged Python to extend state-of-the-art satellite communications analysis tools. Built internal tooling and automation supporting analysis frameworks, and led corporate L&D for Python.",
      },
    ],
    skills: ["Python", "TypeScript", "MongoDB", "Three.js"],
  },
  {
    company: "UC Davis Bookstore",
    short: "UC Davis Bookstore",
    id: "bookstore",
    location: "Davis, CA",
    blurb: "Campus bookstore, part-time through college",
    roles: [
      {
        title: "Student Staff Lead",
        period: "Sep 2012 — Mar 2015",
        description: "Led the bookstore's student staff for the rest of my time at UC Davis.",
      },
      {
        title: "Art Department",
        period: "Oct 2011 — Sep 2012",
        description: "Started a month into freshman year, working in the art department.",
      },
    ],
  },
];

export const education = [
  {
    school: "University of California, Los Angeles",
    short: "UCLA",
    id: "ucla",
    degree: "M.S. Aerospace Engineering",
    focus: "System Controls",
    location: "Los Angeles, CA",
    period: "Sep 2016 — Jun 2018",
  },
  {
    school: "University of California, Davis",
    short: "UC Davis",
    id: "ucdavis",
    degree: "B.S. Mechanical Engineering",
    focus: "Technology Management",
    location: "Davis, CA",
    period: "Sep 2011 — Jun 2015",
  },
];

// Fill these in to show links in the footer, e.g.
// { label: "GitHub", href: "https://github.com/…" }
export const socials = [];
