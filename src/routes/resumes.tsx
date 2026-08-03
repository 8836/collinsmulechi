import { createFileRoute, Link } from "@tanstack/react-router";
import { resumeTracks, creativeWork, socials } from "../data/resumes";


export const Route = createFileRoute("/resumes")({
  head: () => ({
    meta: [
      { title: "Resumes — Collins Murakayo Mulechi" },
      {
        name: "description",
        content:
          "Download ATS-friendly resumes for data analysis, virtual assistance, graphic design and videography, and scriptwriting roles.",
      },
      { property: "og:title", content: "Resumes — Collins Murakayo Mulechi" },
      {
        property: "og:description",
        content:
          "Four ATS-friendly resumes: data analyst, virtual assistant, graphic designer/videographer, and scriptwriter.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://collinsmulechi.lovable.app/resumes" },
    ],
    links: [{ rel: "canonical", href: "https://collinsmulechi.lovable.app/resumes" }],
  }),
  component: Resumes,
});

function Resumes() {
  return (
    <div className="space-y-14">
      <header>
        <p className="label-mono">Resumes</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Four tracks, one career</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Each version is ATS-friendly: single column, standard section headings, plain text, no
          tables or graphics — and all built from the same verified history.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {resumeTracks.map((r) => (
          <article key={r.slug} className="panel panel-hover flex flex-col p-6">
            <h2 className="font-display text-lg font-semibold">{r.title}</h2>
            <p className="mt-1 text-sm text-primary">{r.subtitle}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{r.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {r.highlights.map((h) => (
                <li key={h} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs">
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={r.file} download className="link-cta">
                Download PDF
              </a>
              <Link
                to={`/${r.slug}` as "/data-analyst"}
                className="link-cta-ghost"
              >
                View page
              </Link>
            </div>

          </article>
        ))}
      </div>

      <section>
        <h2 className="label-mono rule-heading">Selected creative work</h2>
        <ul className="mt-5 space-y-3">
          {creativeWork.map((w) => (
            <li key={w.name} className="panel p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold">{w.name}</h3>
                <span className="font-mono text-xs text-accent">{w.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              {w.link ? (
                <a
                  href={w.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-primary hover:underline"
                >
                  Watch
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-cta-ghost">
            {s.label}
          </a>
        ))}
      </section>
    </div>
  );
}
