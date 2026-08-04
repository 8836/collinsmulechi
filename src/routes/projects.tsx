import { createFileRoute } from "@tanstack/react-router";
import { projects, profile } from "../data/resume";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Collins Murakayo Mulechi" },
      {
        name: "description",
        content:
          "Flutter and Dart application projects, admin systems, and programming work hosted on GitHub.",
      },
      { property: "og:title", content: "Projects — Collins Murakayo Mulechi" },
      {
        property: "og:description",
        content: "Flutter/Dart apps, e-commerce admin systems, and structured programming projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://collinsmulechi.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://collinsmulechi.lovable.app/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="space-y-10">
      <header>
        <p className="label-mono">Projects</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Built and documented on GitHub</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Software projects developed alongside my Software Engineering degree, using version
          control and iterative documentation throughout.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="panel panel-hover block p-6"
          >
            <h2 className="font-display text-lg font-semibold">{p.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a href={profile.github} target="_blank" rel="noreferrer" className="link-cta-ghost">
          Visit GitHub profile
        </a>
        <a href={`mailto:${profile.email}`} className="link-cta">
          Discuss a project
        </a>
      </div>
    </div>
  );
}
