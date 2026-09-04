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
  {
    name: "Leafcutter Ant Colony Simulation",
    tagline: "An agent-based colony + foraging simulation, rendered as a live 3D colored graph.",
    description:
      "A Mesa agent-based model of an Atta-style leafcutter colony - caste division of labor, fungus-garden agriculture, and ant-colony-optimization-style pheromone trail recruitment - revisiting the ant foraging behavior research I did in undergrad, now as a full simulation. Ships with twelve biologically-grounded variants (garden disease, phorid fly parasitism, seasonal drought, a rival colony contesting shared trees, and more), an A/B comparison mode to test whether a variant actually helps or hurts, and a parameter-sweep tool that heatmaps outcomes across a grid - a small experiment platform, not just a visualization.",
    image: "/screenshots/antcolony-preview.png",
    tech: ["Python", "Mesa", "FastAPI", "React", "react-three-fiber", "Agent-Based Modeling"],
    githubUrl: "https://github.com/LNakai-OSU/leafcutter-ant-colony-sim",
  },
  {
    name: "Shelf Match",
    tagline: "A book recommender constrained to what a small store actually has in stock.",
    description:
      "Trained on real Goodreads data (goodbooks-10k: 10,000 books, ~6M ratings) but ranked only against one store's actual inventory - the real problem is best available, not best hypothetical. Two sides to the app: as a customer, describe what you're in the mood for in plain language (no LLM - genre-keyword matching in the same vector space the content model uses), search and rate favorites, or import a real Goodreads export; as a store, upload the books you carry and get a code customers can shop against instead of the built-in ~1,900-title simulated inventory. Compares a content-based model (TF-IDF over genre tags), a from-scratch collaborative-filtering model (latent-factor matrix factorization trained with vectorized gradient descent, users folded in via ridge regression against trained item factors), and a tunable hybrid, side by side. Several real bugs found via targeted sanity checks - a count-independent bias-shrinkage flaw, a 15x gradient-accumulation slowdown from np.add.at, and a mismatched hyphen-normalization bug in the genre parser - are documented in the README.",
    image: "/screenshots/shelfmatch-preview.png",
    tech: ["Python", "scikit-learn", "NumPy/SciPy", "FastAPI", "React", "Recommender Systems"],
    githubUrl: "https://github.com/LNakai-OSU/shelf-match",
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
