import { createFileRoute } from "@tanstack/react-router";
import { experience } from "../data/resume";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Collins Murakayo Mulechi, Data Analyst" },
      {
        name: "description",
        content:
          "Professional experience in data reporting, inventory and transaction monitoring, workflow coordination, and research documentation.",
      },
      { property: "og:title", content: "Experience — Collins Murakayo Mulechi" },
      {
        property: "og:description",
        content: "Data reporting, operations coordination, and research documentation roles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://collinsmulechi.lovable.app/experience" },
    ],
    links: [{ rel: "canonical", href: "https://collinsmulechi.lovable.app/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <div className="space-y-10">
      <header>
        <p className="label-mono">Professional experience</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Where the work happened</h1>
      </header>
      <ol className="space-y-4">
        {experience.map((job) => (
          <li key={job.company} className="panel panel-hover p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-lg font-semibold">{job.role}</h2>
              <span className="font-mono text-xs text-accent">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-primary">
              {job.company} · <span className="text-muted-foreground">{job.location}</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-primary">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
