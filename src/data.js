export const LINKS = {
  email: "lannin808@gmail.com",
  github: "https://github.com/LNakai-OSU",
  linkedin: "https://www.linkedin.com/in/lannin-nakai/",
  resume: "/assets/Lannin-Nakai-Resume.pdf",
};

export const SKILLS = [
  {
    group: "Languages & data tools",
    items: ["Python", "SQL", "MySQL", "C", "C#", "R", "JavaScript", "Jupyter Notebooks"],
  },
  {
    group: "Data & analytics",
    items: [
      "Data Science",
      "Data Analysis",
      "Data Visualization",
      "Statistical Modeling",
      "A/B Testing",
      "BigQuery",
      "Google Analytics",
      "Tableau",
    ],
  },
  {
    group: "Collection & automation",
    items: ["Selenium", "BeautifulSoup", "Requests"],
  },
  {
    group: "Working tools",
    items: ["Jira", "Confluence", "Advanced Excel", "Technical Documentation"],
  },
];

export const PROJECTS = [
  {
    name: "UFC Fighter Stats",
    tagline: "A full-stack fighter & fight-statistics dashboard, from schema to chat assistant.",
    description:
      "Built on real UFC fight data: a normalized Postgres schema, a FastAPI backend serving read-only stats endpoints, and a React dashboard with 20+ interactive charts and widgets - a choropleth of fighter birthplaces, division leaderboards, live UFC.com rankings, and more. The centerpiece is a natural-language-to-SQL chat assistant backed by Claude, where a dedicated read-only Postgres role is the real enforcement layer, not just a prompt.",
    image: "/screenshots/ufc-stats-preview.png",
    tech: ["PostgreSQL", "FastAPI", "React", "Python", "Claude API", "Data Pipelines"],
    githubUrl: "https://github.com/LNakai-OSU/ufc-data-insights-web-app",
  },
];

export const EXPERIENCE = [
  {
    org: "NNI",
    role: "Project Manager",
    location: "Honolulu, HI",
    period: "Sep 2021 - Present",
    points: [
      "Coordinated orders from $10K to $1M with manufacturers and suppliers.",
      "Planned and scheduled work for up to 6 sub-contractors as prime contractor across 20+ contracts.",
      "Independently bid, managed, and closed out 10+ contracts ranging from $100K to $1.5M.",
      "Led the company's Office 365 rollout and cloud migration; introduced Jira for task tracking, improving cross-team communication.",
    ],
  },
  {
    org: "University of Oregon Entomology Lab",
    role: "Research Assistant",
    location: "Eugene, OR",
    period: "Sep 2020 - Mar 2021",
    points: [
      "Ran experiment setups and data collection across multiple ongoing studies.",
      "Balanced an individual research project modeling ant foraging behavior and chemical olfaction alongside routine lab work.",
    ],
  },
  {
    org: "University of Oregon Cyber Security Lab",
    role: "Research Assistant",
    location: "Eugene, OR",
    period: "Sep 2020 - Mar 2021",
    points: [
      "Built a distributed social network as part of a group project inspired by a lead researcher's paper.",
      "Learned security fundamentals from both a defensive and offensive perspective.",
      "Built the GUI that made the application usable, and presented findings with the team.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Oregon State University",
    detail: "Continuing studies in Computer Science",
    period: "Present",
  },
  {
    school: "University of Oregon",
    detail: "B.S., Computer Information Sciences & Physics (double major) - GPA 3.7",
    period: "Sep 2017 - May 2021",
  },
  {
    school: "Google Career Certificate - Data Analytics",
    detail: "Completed in 2 months (program allows up to 6)",
    period: "Nov 2022 - Dec 2022",
  },
];
