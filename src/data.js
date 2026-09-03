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
    id: "pd",
    location: "San Francisco, CA",
    blurb: "Photorealistic synthetic data & simulation for autonomous robotics",
    backdrop: {
      // Sensor-suite cover art from paralleldomain.com: LiDAR point cloud on
      // the left (naturally dark — perfect behind the text column), RGB camera
      // with bounding-box annotations + depth map on the right.
      image: "/pd-sensor-backdrop.jpg",
      srcset:
        "/pd-sensor-backdrop@1000.jpg 1000w, /pd-sensor-backdrop.jpg 1600w",
      sizes: "100vw",
    },
    roles: [
      {
        title: "Principal Software Developer",
        period: "Mar 2026 — Present",
        description: "Led development of the our customer-facing dynamic world reconstruction product.".
      },
      {
        title: "Senior Software Developer",
        period: "Sep 2024 — Mar 2026",
        description: "Led development of the customer-facing Python SDK and Python governance."
      },
    ],
  },
  {
    company: "Tempo",
    url: "https://tempo.fit/",
    theme: "tempo",
    id: "tempo",
    highlight: true,
    location: "San Francisco, CA",
    blurb: "AI-powered home gym & virtual personal training",
    backdrop: {
      // DatoCMS media served by tempo.fit — home-gym equipment still (no people).
      // A calmer, less busy backdrop than the looping workout clips.
      image:
        "https://www.datocms-assets.com/135987/1723905519-09e_studio_plus_d.jpeg",
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
    url: "https://www.aero.org/",
    theme: "aerospace",
    id: "aerospace",
    orbit: true,
    location: "Los Angeles, CA",
    blurb: "Satellite & space-systems engineering",
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
