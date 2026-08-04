import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skills, education, strengths, atAGlance, howIWork } from "../data/resume";
import { resumeTracks } from "../data/resumes";

const title = "Collins Murakayo Mulechi — Data Analyst in Nairobi";
const description =
  "Data analyst in Nairobi with 4+ years turning operational records into trusted reporting: Excel and Power BI dashboards, data cleaning and validation, SQL fundamentals, and documented business systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://collinsmulechi.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://collinsmulechi.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: profile.name,
            jobTitle: "Data Analyst",
            email: `mailto:${profile.email}`,
            telephone: profile.phone,
            url: "https://collinsmulechi.lovable.app/",
            address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
            sameAs: [profile.linkedin, profile.github],
            alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
            knowsAbout: [
              "Data analysis",
              "Microsoft Excel",
              "Power BI",
              "SQL",
              "Business systems",
              "Process documentation",
            ],
          },
        }),
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div className="space-y-20">
      <section className="hero-glow rise">
        <p className="label-mono">Nairobi, Kenya · Open to data analyst roles</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-6xl">
          <span className="text-gradient">
            I turn messy operational records into reporting people actually trust.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/Collins-Murakayo-Mulechi-Data-Analyst-Resume.pdf" download className="link-cta">
            Download ATS resume
          </a>
          <Link to="/experience" className="link-cta-ghost">
            View experience
          </Link>
          <Link to="/contact" className="link-cta-ghost">
            Hire me
          </Link>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {atAGlance.map((s) => (
            <div key={s.label} className="panel panel-hover p-5">
              <dt className="stat-value">{s.value}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="label-mono rule-heading">Hire me for</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {resumeTracks.map((t) => (
            <Link
              key={t.slug}
              to={`/${t.slug}` as "/data-analyst"}
              className="panel panel-hover block p-6"
            >
              <h3 className="font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-primary">{t.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
              <span className="mt-4 inline-block font-mono text-xs text-accent">
                View this track →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Not sure which track fits your role?{" "}
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            Email me and I'll tell you straight →
          </a>
        </p>
      </section>

      <section>
        <h2 className="label-mono rule-heading">How I work</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-2">
          {howIWork.map((s) => (
            <li key={s.step} className="panel panel-hover p-6">
              <span className="font-mono text-xs text-accent">{s.step}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-muted-foreground">
          Want this applied to your reporting?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Start a conversation →
          </Link>
        </p>
      </section>


      <section>
        <h2 className="label-mono rule-heading">Core skills</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.group} className="panel panel-hover p-5">
              <h3 className="font-display text-sm font-semibold text-primary">{group.group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Looking for a specific tool or skill?{" "}
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            Ask before you shortlist →
          </a>
        </p>
      </section>


      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel panel-hover p-6">
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
        <div className="panel panel-hover p-6">
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

      <section className="panel flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <p className="font-display text-lg font-semibold">Open to work in Nairobi or remote</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.email} · {profile.phone} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="link-cta">
            Email me
          </a>
          <Link to="/resumes" className="link-cta-ghost">
            All resumes
          </Link>
        </div>
      </section>
    </div>
  );
}
