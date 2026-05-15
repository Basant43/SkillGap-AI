const careerForm = document.querySelector("#careerForm");
const careerTitle = document.querySelector("#careerTitle");
const demandBadge = document.querySelector("#demandBadge");
const salaryRange = document.querySelector("#salaryRange");
const salaryNote = document.querySelector("#salaryNote");
const mustSkills = document.querySelector("#mustSkills");
const gapSkills = document.querySelector("#gapSkills");
const roadmapTitle = document.querySelector("#roadmapTitle");
const roadmap = document.querySelector("#roadmap");
const projects = document.querySelector("#projects");
const radarScore = document.querySelector("#radarScore");
const detailTitle = document.querySelector("#detailTitle");
const detailIntro = document.querySelector("#detailIntro");
const detailDemand = document.querySelector("#detailDemand");
const detailSalary = document.querySelector("#detailSalary");
const detailRoadmapTitle = document.querySelector("#detailRoadmapTitle");
const mainGap = document.querySelector("#mainGap");
const solutions = document.querySelector("#solutions");

const careerData = {
  graphicDesigner: {
    title: "Graphic Designer",
    demand: "High demand",
    score: "84%",
    salary: "INR 2.4L - 7.5L",
    note: "Higher range depends on brand systems, packaging work, digital production, and portfolio quality.",
    must: ["Brand identity systems", "Packaging design", "Typography and layout", "Adobe Illustrator and Photoshop", "Print-ready production"],
    gaps: ["AI-assisted concept exploration", "Motion basics", "Case-study presentation", "Marketing performance design"],
    roadmap: [
      ["Month 1", "Build a strong brand identity case study with logo, colors, typography, and mockups."],
      ["Month 2", "Create a packaging redesign project with dieline thinking and print-ready files."],
      ["Month 3", "Turn both projects into a polished portfolio page with before-after results."]
    ],
    projects: [
      ["Premium packaging system", "Redesign a real product pack with shelf impact, variants, and print notes."],
      ["Brand launch kit", "Create logo, social posts, poster, business card, and launch banner."],
      ["AI concept board", "Show 20 concepts, your selection process, and final design direction."]
    ],
    solutions: [
      ["Packaging proof", "Create one product with three variants, explain material choice, dieline thinking, and shelf visibility."],
      ["AI plus designer workflow", "Show how you use AI for rough ideas, then improve the final design with your own judgement."],
      ["Client-ready case study", "Write the business problem, design direction, constraints, and final outcome like a real agency deck."]
    ]
  },
  uiuxDesigner: {
    title: "UI/UX Designer",
    demand: "Very high demand",
    score: "88%",
    salary: "INR 3.5L - 12L",
    note: "Higher range depends on research thinking, product flows, Figma quality, and measurable UX decisions.",
    must: ["User research basics", "Wireframes and flows", "Figma components", "Mobile app design", "Usability testing"],
    gaps: ["Product strategy", "Design systems", "UX writing", "AI product workflows"],
    roadmap: [
      ["Month 1", "Redesign one broken app flow and explain the user problem clearly."],
      ["Month 2", "Create a design system with reusable components and responsive screens."],
      ["Month 3", "Run a small usability test and publish the results in a case study."]
    ],
    projects: [
      ["Job search app redesign", "Improve onboarding, filters, job details, and application flow."],
      ["Finance dashboard", "Design a clear dashboard with cards, charts, alerts, and mobile states."],
      ["AI assistant flow", "Create a useful AI feature inside a real product experience."]
    ],
    solutions: [
      ["UX audit teardown", "Pick a popular app, identify 10 friction points, and redesign the flow with clear reasons."],
      ["Prototype with testing", "Create a clickable Figma prototype and test it with three people before showing final screens."],
      ["Design system starter", "Build buttons, inputs, cards, tables, empty states, and mobile rules as a reusable system."]
    ]
  },
  digitalMarketer: {
    title: "Digital Marketer",
    demand: "High demand",
    score: "82%",
    salary: "INR 2.5L - 10L",
    note: "Higher range depends on campaign results, analytics, paid ads, content strategy, and conversion skills.",
    must: ["SEO basics", "Meta and Google Ads", "Content strategy", "Analytics reporting", "Landing page optimization"],
    gaps: ["AI content workflows", "Conversion copywriting", "Experiment tracking", "Performance dashboards"],
    roadmap: [
      ["Month 1", "Build one campaign plan with audience, offer, creatives, and budget split."],
      ["Month 2", "Create SEO content and landing page copy for a real business niche."],
      ["Month 3", "Make a dashboard showing traffic, leads, cost, and conversion insights."]
    ],
    projects: [
      ["Local business growth plan", "Create a 30-day campaign for a salon, cafe, clinic, or designer."],
      ["SEO content cluster", "Plan 12 posts around one service and map them to search intent."],
      ["Ad creative test", "Design 6 ad creatives and explain what each test is measuring."]
    ],
    solutions: [
      ["Proof campaign", "Run a small organic campaign for a real local business and track reach, leads, and conversion."],
      ["Content engine", "Create a 30-day content calendar with hooks, captions, keywords, and landing page links."],
      ["Analytics story", "Build a simple report that explains what changed, why it changed, and what to test next."]
    ]
  },
  dataAnalyst: {
    title: "Data Analyst",
    demand: "Very high demand",
    score: "90%",
    salary: "INR 4L - 14L",
    note: "Higher range depends on SQL, dashboards, business interpretation, and project storytelling.",
    must: ["Excel and Sheets", "SQL", "Power BI or Tableau", "Data cleaning", "Business insights"],
    gaps: ["Python basics", "Dashboard storytelling", "Stakeholder reporting", "AI-assisted analysis"],
    roadmap: [
      ["Month 1", "Clean a messy dataset and explain the business problem."],
      ["Month 2", "Write SQL queries and create a dashboard for key metrics."],
      ["Month 3", "Publish a case study with recommendations, risks, and next actions."]
    ],
    projects: [
      ["Sales performance dashboard", "Track revenue, category growth, region performance, and profit."],
      ["Customer churn analysis", "Find patterns behind lost customers and suggest retention actions."],
      ["Hiring salary report", "Analyze job postings and show skill demand by role."]
    ],
    solutions: [
      ["Business question first", "Start each project with a decision question, not just charts. Example: where should we reduce loss?"],
      ["Dashboard narrative", "Create one executive summary, three charts, and three recommended actions."],
      ["Job-market dataset", "Collect public job post data manually and show which tools appear most often."]
    ]
  },
  frontendDeveloper: {
    title: "Frontend Developer",
    demand: "High demand",
    score: "86%",
    salary: "INR 3L - 15L",
    note: "Higher range depends on JavaScript depth, React, responsive UI, accessibility, and production projects.",
    must: ["HTML and CSS", "JavaScript", "React basics", "Responsive design", "API integration"],
    gaps: ["Testing basics", "Performance optimization", "Accessibility", "AI-assisted coding workflow"],
    roadmap: [
      ["Month 1", "Build three responsive pages with clean layout and mobile polish."],
      ["Month 2", "Create a React app that saves user input and calls an API."],
      ["Month 3", "Add performance checks, accessibility fixes, and deploy the project."]
    ],
    projects: [
      ["Career roadmap app", "Build a tool like SkillGap AI with filters and dynamic recommendations."],
      ["Portfolio CMS mockup", "Create a designer portfolio with editable project data."],
      ["Analytics dashboard", "Make a responsive dashboard with charts, filters, and empty states."]
    ],
    solutions: [
      ["Deploy real projects", "Every project should have a live link, responsive layout, and a clean README explaining decisions."],
      ["API proof", "Build one app that fetches live data and handles loading, error, empty, and success states."],
      ["UI polish sprint", "Improve spacing, accessibility, mobile behavior, and performance so it feels production-ready."]
    ]
  }
};

const levelBoost = {
  beginner: "Foundation-first plan",
  intermediate: "Portfolio upgrade plan",
  advanced: "Market positioning plan"
};

const levelRoadmaps = {
  graphicDesigner: {
    beginner: [
      ["Weeks 1-2", "Learn typography, color, layout grids, file formats, and basic brand identity rules."],
      ["Weeks 3-4", "Recreate 5 strong posters, 3 social posts, and 2 package labels to train visual judgement."],
      ["Weeks 5-8", "Build one complete brand identity project with logo, colors, typography, and applications."],
      ["Weeks 9-12", "Create a clean portfolio page with process, final mockups, and a short design explanation."]
    ],
    intermediate: [
      ["Weeks 1-2", "Audit your portfolio and remove weak work that does not show business or brand thinking."],
      ["Weeks 3-5", "Create a packaging design case study with dieline awareness, variants, and production notes."],
      ["Weeks 6-9", "Build a campaign system: key visual, social posts, ad banners, poster, and launch assets."],
      ["Weeks 10-12", "Turn projects into client-ready case studies with problem, constraints, decisions, and result."]
    ],
    advanced: [
      ["Weeks 1-2", "Choose a niche such as FMCG packaging, beauty brands, food labels, or launch campaigns."],
      ["Weeks 3-5", "Create a premium brand system with strategy, naming direction, visual language, and packaging range."],
      ["Weeks 6-9", "Add motion-ready assets, AI concept exploration, print specifications, and rollout guidelines."],
      ["Weeks 10-12", "Package your work into a high-value service offer with pricing, proposal deck, and outreach list."]
    ]
  },
  uiuxDesigner: {
    beginner: [
      ["Weeks 1-2", "Learn UX basics: user goals, flows, wireframes, spacing, hierarchy, and mobile patterns."],
      ["Weeks 3-4", "Redesign one simple app screen set in Figma and explain every design decision."],
      ["Weeks 5-8", "Create a clickable prototype for onboarding, search, details, and completion flow."],
      ["Weeks 9-12", "Write a beginner case study showing problem, research, wireframes, final screens, and learnings."]
    ],
    intermediate: [
      ["Weeks 1-2", "Audit a real app flow and identify friction, missing states, confusing copy, and conversion blockers."],
      ["Weeks 3-5", "Design a full product flow with responsive screens, components, and clear interaction states."],
      ["Weeks 6-9", "Run a small usability test with 3 users and improve the prototype based on feedback."],
      ["Weeks 10-12", "Publish a polished case study with research evidence, design system, and outcome-focused storytelling."]
    ],
    advanced: [
      ["Weeks 1-2", "Pick a product domain and define metrics: activation, conversion, retention, or task completion."],
      ["Weeks 3-5", "Create a strategic redesign with journey map, information architecture, and feature prioritization."],
      ["Weeks 6-9", "Build a scalable design system with tokens, components, variants, accessibility, and documentation."],
      ["Weeks 10-12", "Create a senior-level case study that connects design choices to business and user outcomes."]
    ]
  },
  digitalMarketer: {
    beginner: [
      ["Weeks 1-2", "Learn SEO, funnels, audience research, content formats, and basic ad platform language."],
      ["Weeks 3-4", "Create a 30-day content calendar for one local business niche with hooks and keywords."],
      ["Weeks 5-8", "Build a landing page concept with offer, copy, lead form, and social post set."],
      ["Weeks 9-12", "Create a beginner marketing portfolio showing campaign plan, creatives, and expected metrics."]
    ],
    intermediate: [
      ["Weeks 1-2", "Choose one business niche and research audience pain points, competitors, and content gaps."],
      ["Weeks 3-5", "Create a campaign with SEO content, paid ad creatives, landing page copy, and email follow-up."],
      ["Weeks 6-9", "Build a reporting dashboard for reach, clicks, leads, cost, conversion, and next experiments."],
      ["Weeks 10-12", "Publish the campaign as a case study with strategy, creative decisions, numbers, and learnings."]
    ],
    advanced: [
      ["Weeks 1-2", "Pick a high-value niche and design a full funnel from awareness to conversion and retention."],
      ["Weeks 3-5", "Create an experiment plan with offers, audiences, creatives, landing pages, and testing hypotheses."],
      ["Weeks 6-9", "Build a growth dashboard and explain how budget decisions change based on performance data."],
      ["Weeks 10-12", "Turn your process into a client acquisition offer with audit, roadmap, implementation, and reporting."]
    ]
  },
  dataAnalyst: {
    beginner: [
      ["Weeks 1-2", "Learn spreadsheet formulas, charts, cleaning basics, and how to ask business questions."],
      ["Weeks 3-4", "Practice SQL basics: select, filter, group, join, and simple business queries."],
      ["Weeks 5-8", "Create one dashboard from a clean dataset with revenue, category, trend, and comparison charts."],
      ["Weeks 9-12", "Write a beginner analysis case study with question, data cleaning, insights, and recommendations."]
    ],
    intermediate: [
      ["Weeks 1-2", "Work with messy data and document missing values, duplicates, outliers, and cleaning decisions."],
      ["Weeks 3-5", "Use SQL to answer business questions and create reusable views for dashboard metrics."],
      ["Weeks 6-9", "Build a Power BI or Tableau dashboard with filters, KPI cards, drilldowns, and insight notes."],
      ["Weeks 10-12", "Publish a case study that explains what action a manager should take from your analysis."]
    ],
    advanced: [
      ["Weeks 1-2", "Choose a business domain: sales, marketing, finance, operations, hiring, or customer success."],
      ["Weeks 3-5", "Create an end-to-end analytics project with raw data, SQL model, dashboard, and executive summary."],
      ["Weeks 6-9", "Add forecasting, segmentation, anomaly detection, or cohort analysis depending on the domain."],
      ["Weeks 10-12", "Build an analytics portfolio with decision memos, stakeholder-ready slides, and measurable recommendations."]
    ]
  },
  frontendDeveloper: {
    beginner: [
      ["Weeks 1-2", "Learn semantic HTML, CSS layout, responsive design, forms, and basic JavaScript."],
      ["Weeks 3-4", "Build 3 responsive landing pages and polish spacing, typography, buttons, and mobile views."],
      ["Weeks 5-8", "Create an interactive JavaScript tool that takes input and generates useful output."],
      ["Weeks 9-12", "Deploy your projects, write README files, and create a simple developer portfolio."]
    ],
    intermediate: [
      ["Weeks 1-2", "Strengthen JavaScript: arrays, objects, DOM, async fetch, errors, modules, and state."],
      ["Weeks 3-5", "Build a React app with components, forms, filters, saved data, and API integration."],
      ["Weeks 6-9", "Add loading states, empty states, error states, accessibility, and mobile polish."],
      ["Weeks 10-12", "Deploy the app and write a case study explaining architecture, tradeoffs, and improvements."]
    ],
    advanced: [
      ["Weeks 1-2", "Choose a product niche and define performance, accessibility, SEO, and UX quality goals."],
      ["Weeks 3-5", "Build a production-style app with routing, state management, API layer, validation, and reusable UI."],
      ["Weeks 6-9", "Add tests, performance optimization, accessibility audit, analytics events, and documentation."],
      ["Weeks 10-12", "Create a senior portfolio case study with technical decisions, metrics, and a roadmap for scale."]
    ]
  }
};

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function fillCards(target, items, cardClass) {
  target.innerHTML = "";
  items.forEach(([label, text]) => {
    const card = document.createElement("article");
    const tag = document.createElement("span");
    const title = document.createElement("h3");
    const copy = document.createElement("p");

    card.className = cardClass;
    tag.textContent = label;
    title.textContent = label;
    copy.textContent = text;

    card.append(tag, title, copy);
    target.appendChild(card);
  });
}

function updateCareer() {
  if (!careerForm) {
    return;
  }

  const data = new FormData(careerForm);
  const selectedCareer = data.get("career") || "graphicDesigner";
  const level = data.get("level") || "intermediate";
  const goal = data.get("goal") || "betterSalary";
  const profile = careerData[selectedCareer];
  const selectedRoadmap = levelRoadmaps[selectedCareer]?.[level] || profile.roadmap;

  careerTitle.textContent = profile.title;
  demandBadge.textContent = profile.demand;
  salaryRange.textContent = profile.salary;
  salaryNote.textContent = profile.note;
  radarScore.textContent = profile.score;
  if (roadmapTitle) {
    roadmapTitle.textContent = `${levelBoost[level]} for ${profile.title}`;
  }

  const goalGap = {
    firstJob: "Interview-ready project explanation",
    betterSalary: "Business impact proof",
    freelance: "Client proposal and pricing confidence"
  };

  fillList(mustSkills, profile.must);
  fillList(gapSkills, [...profile.gaps, goalGap[goal]]);
  fillCards(roadmap, selectedRoadmap, "roadmap-card");
  fillCards(projects, profile.projects, "project-card");
}

if (careerForm) {
  careerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(careerForm);
    const params = new URLSearchParams({
      career: data.get("career") || "graphicDesigner",
      level: data.get("level") || "intermediate",
      goal: data.get("goal") || "betterSalary"
    });
    window.location.href = `career.html?${params.toString()}`;
  });

  careerForm.addEventListener("change", updateCareer);
  updateCareer();
}

function updateDetailPage() {
  if (!detailTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedCareer = params.get("career") || "graphicDesigner";
  const level = params.get("level") || "intermediate";
  const goal = params.get("goal") || "betterSalary";
  const profile = careerData[selectedCareer] || careerData.graphicDesigner;
  const selectedRoadmap = levelRoadmaps[selectedCareer]?.[level] || profile.roadmap;
  const goalLabel = {
    firstJob: "first job",
    betterSalary: "better salary",
    freelance: "freelance clients"
  };

  detailTitle.textContent = `${profile.title} roadmap`;
  detailIntro.textContent = `${levelBoost[level]} built for ${goalLabel[goal] || "career growth"}.`;
  detailDemand.textContent = profile.demand;
  detailSalary.textContent = `${profile.salary}. ${profile.note}`;
  detailRoadmapTitle.textContent = `${profile.title}: next 90 days`;
  mainGap.textContent = profile.gaps[0];

  fillCards(roadmap, selectedRoadmap, "roadmap-card");
  fillCards(projects, profile.projects, "project-card");
  fillCards(solutions, profile.solutions, "solution-card");
}

updateDetailPage();
