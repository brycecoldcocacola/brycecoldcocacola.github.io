// All site content lives here so the components stay purely presentational.

export const profile = {
  name: "Bryce Anglin",
  firstName: "Bryce",
  lastName: "Anglin",
  role: "Software Developer",
  location: "San Francisco, California",
  // A punchy statement for the hero. The last line is emphasized.
  headline: [
    "Building software for",
    "satellites, simulations,",
    "and machine learning.",
  ],
  summary:
    "I work across web, graphics, and machine-learning systems — from real-time satellite constellations at The Aerospace Corporation, to computer-vision tooling at Tempo, to simulation for autonomous vehicles at Parallel Domain.",
  current: "Building at Parallel Domain",
};

export const experience = [
  {
    company: "Parallel Domain",
    blurb: "Simulation & synthetic data for autonomous vehicles",
    roles: [
      {
        title: "Principal Software Developer",
        period: "Mar 2026 — Present",
        meta: "San Francisco, CA · Hybrid",
      },
      {
        title: "Senior Software Developer",
        period: "Sep 2024 — Mar 2026",
      },
    ],
  },
  {
    company: "Tempo",
    blurb: "Autonomous long-haul trucking & delivery",
    highlight: true,
    roles: [
      {
        title: "Tech Lead Manager",
        period: "Mar 2024 — Sep 2024",
        meta: "San Francisco Bay Area · Hybrid",
        description:
          "Led technical direction of computer vision and machine learning at Tempo.",
      },
      {
        title: "Senior Full Stack Developer",
        period: "Apr 2023 — Mar 2024",
        meta: "San Francisco Bay Area · Hybrid",
        description:
          "Owned all machine-learning tooling, infrastructure, data labeling, and analysis. Individual contributor on the ML team with an emphasis on automating CV configuration per exercise and driving improvements to in-house models.",
      },
      {
        title: "Full Stack Developer",
        period: "Apr 2021 — Apr 2023",
        meta: "San Francisco, CA",
        description:
          "Built end-to-end tooling for the ML team: data collection, exploration, labeling, truth-data management, development workflows, cloud compute for training, model management and deployment, production monitoring, and analysis.",
      },
    ],
    skills: ["Python", "AWS", "S3", "Machine Learning", "Computer Vision"],
  },
  {
    company: "The Aerospace Corporation",
    blurb: "Satellite & space-systems engineering",
    orbit: true,
    roles: [
      {
        title: "Sr. Web & Graphics Software Developer",
        period: "Jun 2019 — Apr 2021",
        meta: "Los Angeles, CA",
        description:
          "Built web-based visualization and propagation tools for real-time satellite constellations, plus the APIs and databases that enabled authoritative sources of truth for satellite information. Led technical projects on web-based tooling.",
      },
      {
        title: "Space Systems Engineer",
        period: "Jul 2015 — Jun 2019",
        meta: "Los Angeles, CA",
        description:
          "Leveraged Python to extend state-of-the-art satellite communications analysis tools. Built internal tooling and automation supporting analysis frameworks, and led corporate L&D for Python.",
      },
    ],
    skills: ["TypeScript", "JavaScript", "Python", "MATLAB"],
  },
];

export const education = [
  {
    school: "University of California, Los Angeles",
    degree: "M.S. Aerospace Engineering",
    focus: "System Controls",
    period: "2016 — 2018",
  },
  {
    school: "University of California, Davis",
    degree: "B.S. Mechanical Engineering",
    focus: "Technology Management",
    period: "2011 — 2015",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "MATLAB", "SQL"],
  },
  {
    label: "Web & Frameworks",
    items: ["React", "Vue", "Three.js", "Flask", "Django", "Node.js"],
  },
  {
    label: "Data & Machine Learning",
    items: ["PostgreSQL", "Neo4j", "MongoDB", "SQLAlchemy", "Computer Vision", "ML Tooling"],
  },
  {
    label: "Cloud & Tooling",
    items: ["AWS", "S3", "Docker", "Git", "CI/CD", "Agile"],
  },
];

// Fill these in to show social links in the footer, e.g.
// { label: "GitHub", href: "https://github.com/…" }
export const socials = [];
