import { experience } from "./resume";

export type Track = {
  slug: string;
  jobTitle: string;
  eyebrow: string;
  headline: string;
  intro: string;
  file: string;
  capabilities: { group: string; items: string[] }[];
  experience: typeof experience;
  proof: { name: string; period: string; description: string; link?: string }[];
  seo: { title: string; description: string };
  niche?: string;
  achievements?: string[];
};

const byCompany = (...companies: string[]) =>
  experience.filter((e) => companies.includes(e.company));

export const tracks: Track[] = [
  {
    slug: "data-analyst",
    jobTitle: "Data Analyst",
    eyebrow: "Nairobi, Kenya · Open to data analyst roles",
    headline: "I turn messy operational records into reporting people actually trust.",
    intro:
      "Four-plus years turning retail, print production, and research records into clean, reportable data. I build Excel and Power BI reporting workflows, validate and clean data, monitor inventory and transaction records, and document processes so teams can act on accurate numbers.",
    file: "/Collins-Murakayo-Mulechi-Data-Analyst-Resume.pdf",
    capabilities: [
      {
        group: "Analysis & reporting",
        items: [
          "Microsoft Excel — advanced formulas, PivotTables, data cleaning",
          "Power BI dashboards and data visualisation",
          "SQL / MySQL fundamentals",
          "Python for basic data handling",
        ],
      },
      {
        group: "Data quality",
        items: [
          "Data validation and quality checks",
          "KPI tracking and operational reporting",
          "Record management and entry accuracy",
          "Cross-functional reporting",
        ],
      },
      {
        group: "Business systems",
        items: [
          "Process documentation and SOPs",
          "Inventory and transaction monitoring",
          "Workflow coordination and project tracking",
          "Google Workspace (Sheets, Docs, Drive)",
        ],
      },
    ],
    experience: byCompany(
      "China Village Hypermarket",
      "Bevoch Family Graphics",
      "Pari Graphics Ltd",
      "Writing Specialists",
    ),
    proof: [
      {
        name: "Cash book and stock reconciliation system",
        period: "Dec 2024 – Mar 2025",
        description:
          "Daily cash books, sales tracking logs, and transaction documentation kept reconciled, with inventory movement monitored to reduce untracked stock discrepancies.",
      },
      {
        name: "Campaign and production tracking records",
        period: "May 2025 – Aug 2025",
        description:
          "A single tracked record of branding, print, and production activity so stakeholders could read execution status at a glance.",
      },
    ],
    seo: {
      title: "Data Analyst in Nairobi — Collins Murakayo Mulechi",
      description:
        "Data analyst in Nairobi specialising in Excel and Power BI reporting, data cleaning and validation, SQL fundamentals, and operational business systems.",
    },
  },
  {
    slug: "virtual-assistant",
    jobTitle: "Virtual Assistant",
    eyebrow: "Remote-ready · Administrative & digital operations support",
    headline: "Calendars, inboxes and records handled so the work stays moving.",
    intro:
      "Administrative and digital operations support built on four-plus years of record keeping, client communication, and remote project coordination. I manage calendars and inboxes, keep confidential records accurate, and document workflows so nothing depends on memory.",
    file: "/Collins-Murakayo-Mulechi-Virtual-Assistant-Resume.pdf",
    capabilities: [
      {
        group: "Administrative support",
        items: [
          "Calendar and inbox management",
          "Scheduling and meeting coordination",
          "Confidential record handling",
          "Data entry accuracy and filing",
        ],
      },
      {
        group: "Tools",
        items: [
          "Google Workspace (Sheets, Docs, Drive)",
          "Microsoft Office (Excel, Word, PowerPoint)",
          "Remote collaboration and messaging tools",
          "Document and report preparation",
        ],
      },
      {
        group: "Coordination",
        items: [
          "Remote project coordination",
          "Client and stakeholder communication",
          "Process documentation and SOPs",
          "Deadline and deliverable tracking",
        ],
      },
    ],
    experience: byCompany(
      "China Village Hypermarket",
      "Bevoch Family Graphics",
      "Pari Graphics Ltd",
      "Writing Specialists",
    ),
    proof: [
      {
        name: "Remote research and documentation desk",
        period: "Oct 2021 – Jun 2024",
        description:
          "Concurrent remote assignments delivered to consistent documentation and accuracy standards, with large source volumes synthesised into organised reports.",
      },
      {
        name: "Cross-department workflow coordination",
        period: "2024 – 2025",
        description:
          "Project timelines, client deliverables, and production documentation coordinated across sales, production, and design teams.",
      },
    ],
    seo: {
      title: "Virtual Assistant — Collins Murakayo Mulechi",
      description:
        "Remote virtual assistant offering calendar and inbox management, client communication, confidential record handling, and project coordination.",
    },
  },
  {
    slug: "graphic-designer",
    jobTitle: "Graphic Designer & Videographer",
    eyebrow: "Brand identity · Print production · Video",
    headline: "Brand systems that survive contact with a billboard.",
    intro:
      "Design and video work across retail and print production: brand systems, large-format and CNC production, social creatives, and promotional video. Two billboards designed and deployed in Nairobi and Machakos, plus supermarket-wide interior branding.",
    file: "/Collins-Murakayo-Mulechi-Graphic-Designer-Resume.pdf",
    capabilities: [
      {
        group: "Design",
        items: [
          "Adobe Illustrator & Photoshop",
          "Affinity Suite, Canva",
          "Brand identity and visual systems",
          "Social and marketing creatives",
        ],
      },
      {
        group: "Production",
        items: [
          "Large-format and billboard production",
          "CNC and print production files",
          "Interior and retail branding",
          "Print collateral and signage",
        ],
      },
      {
        group: "Video",
        items: [
          "DaVinci Resolve, CapCut",
          "Promotional and music video content",
          "Shot planning and visual storytelling",
          "YouTube and Instagram delivery",
        ],
      },
    ],
    experience: byCompany(
      "China Village Hypermarket",
      "Bevoch Family Graphics",
      "Pari Graphics Ltd",
    ),
    proof: [
      {
        name: "China Village Hypermarket billboards",
        period: "2025",
        description:
          "Two large-scale billboards designed and deployed across Nairobi and Machakos, plus supermarket-wide interior branding and marketing collateral.",
      },
      {
        name: "CKol — Liquid Gold (feat. Kiwado)",
        period: "2021 – Present",
        description:
          "Promotional video content scripted and produced for music releases, combining narrative hooks with visual storytelling.",
        link: "https://youtu.be/f232ZLvTh1o",
      },
    ],
    seo: {
      title: "Graphic Designer & Videographer — Collins Murakayo Mulechi",
      description:
        "Graphic designer and videographer in Nairobi: brand identity, large-format and print production, retail branding, and promotional video.",
    },
  },
  {
    slug: "scriptwriter",
    jobTitle: "Scriptwriter",
    eyebrow: "Creative content developer & digital storyteller",
    headline: "Scripts written production-ready, not pitch-ready.",
    intro:
      "Comedy skits, branded ad scripts, and digital campaign storytelling — written with scene direction, beats, and taglines so a crew can shoot from the page. Work spans healthcare awareness comedy, street engagement formats, and music promo content.",
    file: "/Collins-Murakayo-Mulechi-Scriptwriter-Resume.pdf",
    capabilities: [
      {
        group: "Writing",
        items: [
          "Comedy skits and sketch formats",
          "Branded ad scripts and campaign copy",
          "Scene direction and taglines",
          "Narrative hooks for short-form video",
        ],
      },
      {
        group: "Development",
        items: [
          "Storyboarding and shot planning",
          "Concept and format development",
          "Brand positioning for content series",
          "Question-bank and interactive formats",
        ],
      },
      {
        group: "Production",
        items: [
          "DaVinci Resolve, CapCut",
          "Video production coordination",
          "YouTube and Instagram delivery",
          "Collaboration with design and talent",
        ],
      },
    ],
    experience: byCompany("China Village Hypermarket", "Writing Specialists"),
    proof: [
      {
        name: "Street Chancellor — Nairobi Archives Project",
        period: "Dec 2025",
        description:
          "Interactive question-bank scenarios for live street comedy engagements, built on absurd hypotheticals and culturally resonant prompts, with documented brand positioning and operational flow.",
      },
      {
        name: "Ad Skit Series — Healthcare Comedy Campaign",
        period: "Oct – Nov 2025",
        description:
          "Comedic ad scripts pairing humour with healthcare awareness — “The Overreacting Patient”, “The Healing That Ran Away”, “The Hospital Bicycle Chase” — each with scene directions and taglines.",
      },
      {
        name: "CKol — Liquid Gold (feat. Kiwado)",
        period: "2021 – Present",
        description:
          "Scripted promotional video content for music releases, written for YouTube and Instagram audiences.",
        link: "https://youtu.be/f232ZLvTh1o",
      },
    ],
    seo: {
      title: "Scriptwriter — Collins Murakayo Mulechi",
      description:
        "Scriptwriter for comedy skits, branded ad campaigns, and digital storytelling — production-ready scripts with scene direction and taglines.",
    },
  },
];

// Niche ecosystem (2–3 complementary services) + verified achievements per track.
const extras: Record<string, { niche: string; achievements: string[] }> = {
  "data-analyst": {
    niche: "Reporting & dashboards · Data cleaning and validation · Operational business systems",
    achievements: [
      "4+ years keeping operational records reportable across retail, print production and research settings.",
      "Maintained daily cash books, sales logs and transaction documentation in reconciled condition.",
      "Monitored inventory movement and supported stock reconciliation, reducing untracked discrepancies.",
      "Built reporting workflows in Excel and Power BI that turn raw records into decision-ready views.",
    ],
  },
  "virtual-assistant": {
    niche: "Executive & admin support · Records and data management · Remote project coordination",
    achievements: [
      "Delivered concurrent remote assignments to consistent documentation and accuracy standards for 2.5+ years.",
      "Coordinated project timelines and client deliverables across sales, production and design teams.",
      "Introduced workflow tracking methods that improved accountability on client projects.",
      "Handled confidential financial and operational records without gaps in reconciliation.",
    ],
  },
  "graphic-designer": {
    niche: "Brand identity systems · Large-format & print production · Promotional video",
    achievements: [
      "Two large-scale billboards designed and deployed across Nairobi and Machakos.",
      "Supermarket-wide interior branding and marketing collateral delivered end to end.",
      "Production-ready CNC and large-format files prepared for external print partners.",
      "Promotional music and campaign video produced and published on YouTube and Instagram.",
    ],
  },
  scriptwriter: {
    niche: "Comedy & skit writing · Branded ad scripts · Content format development",
    achievements: [
      "Healthcare awareness comedy ad series written with full scene direction and taglines.",
      "Interactive street-engagement question bank built with documented brand positioning and flow.",
      "Promotional music video content scripted and published for online audiences.",
      "Scripts delivered production-ready so crews can shoot directly from the page.",
    ],
  },
};

for (const track of tracks) {
  const extra = extras[track.slug];
  if (extra) {
    track.niche = extra.niche;
    track.achievements = extra.achievements;
  }
}

export const trackBySlug = (slug: string) => tracks.find((t) => t.slug === slug)!;
