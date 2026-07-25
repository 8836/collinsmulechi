import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skills, education, strengths } from "../data/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Collins Murakayo Mulechi — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Data analyst in Nairobi specialising in Excel and Power BI reporting, data cleaning, SQL fundamentals, and operational business systems.",
      },
      { property: "og:title", content: "Collins Murakayo Mulechi — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Excel and Power BI reporting, data validation, SQL fundamentals, and business operations analytics.",
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div className="space-y-16">
      <section>
        <p className="label-mono">Nairobi, Kenya · Open to data analyst roles</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          I turn messy operational records into reporting people actually trust.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/Collins-Murakayo-Mulechi-Data-Analyst-Resume.pdf" download className="link-cta">
            Download ATS resume
          </a>
          <Link to="/experience" className="link-cta-ghost">
            View experience
          </Link>
        </div>
      </section>

      <section>
        <h2 className="label-mono">Core skills</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="panel p-5">
              <h3 className="font-display text-sm font-semibold text-primary">{group.group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel p-6">
          <h2 className="label-mono">Education</h2>
          <h3 className="mt-3 font-display text-lg font-semibold">{education.degree}</h3>
          <p className="text-sm text-muted-foreground">
            {education.school} · {education.location}
          </p>
          <p className="mt-1 font-mono text-xs text-accent">{education.period}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <li
                key={c}
                className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-6">
          <h2 className="label-mono">Strengths</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {strengths.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-primary">—</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
