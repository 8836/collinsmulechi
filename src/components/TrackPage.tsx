import { Link } from "@tanstack/react-router";
import type { Track } from "../data/tracks";
import { profile, education } from "../data/resume";

export function TrackPage({ track }: { track: Track }) {
  return (
    <div className="space-y-16">
      <section className="hero-glow rise">
        <p className="label-mono rule-heading">{track.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
          <span className="text-gradient">{track.headline}</span>
        </h1>
        <p className="mt-3 font-mono text-sm text-primary">
          {profile.name} — {track.jobTitle}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {track.intro}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={track.file} download className="link-cta">
            Download {track.jobTitle} resume
          </a>
          <Link to="/contact" className="link-cta-ghost">
            Get in touch
          </Link>
        </div>
      </section>

      <section>
        <h2 className="label-mono rule-heading">What I do</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {track.capabilities.map((group) => (
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
      </section>

      <section>
        <h2 className="label-mono rule-heading">Selected work</h2>
        <ul className="mt-5 space-y-3">
          {track.proof.map((w) => (
            <li key={w.name} className="panel panel-hover p-5">
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

      <section>
        <h2 className="label-mono rule-heading">Relevant experience</h2>
        <ol className="mt-5 space-y-4">
          {track.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="panel panel-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold">{job.role}</h3>
                <span className="font-mono text-xs text-accent">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
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
      </section>

      <section className="panel panel-hover p-6">
        <h2 className="label-mono rule-heading">Education</h2>
        <h3 className="mt-3 font-display text-lg font-semibold">{education.degree}</h3>
        <p className="text-sm text-muted-foreground">
          {education.school} · {education.location}
        </p>
        <p className="mt-1 font-mono text-xs text-accent">{education.period}</p>
      </section>

      <section className="panel flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <p className="font-display text-lg font-semibold">Available for {track.jobTitle} work</p>
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
