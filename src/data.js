// All site content lives here so the components stay purely presentational.

export const profile = {
  name: "Bryce Anglin",
  firstName: "Bryce",
  lastName: "Anglin",
  role: "Software Developer",
  location: "San Francisco, California",
  greeting: "Hi, I'm",
  summary:
    "Whether it's visualizing and simulating satellite systems, helping people get in shape, or simulating autonomous physical systems, I always enjoy applying my skills to make the world a better place.",
};

export const experience = [
  {
    company: "Parallel Domain",
    url: "https://paralleldomain.com/",
    theme: "pd",
    blurb: "Photorealistic synthetic data & simulation for AVs, robotics, and AI",
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
    url: "https://tempo.fit/",
    theme: "tempo",
    highlight: true,
    blurb: "AI-powered home gym & virtual personal training",
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
    url: "https://www.aero.org/",
    theme: "aerospace",
    orbit: true,
    blurb: "Satellite & space-systems engineering",
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

// Fill these in to show social links in the footer, e.g.
// { label: "GitHub", href: "https://github.com/…" }
export const socials = [];
