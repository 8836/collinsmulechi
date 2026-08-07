import { Link } from "@tanstack/react-router";
import type { Track } from "../data/tracks";
import { profile } from "../data/resume";

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
        <h2 className="label-mono rule-heading">Services</h2>
        {track.niche ? (
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Niche ecosystem: <span className="text-foreground">{track.niche}</span>
          </p>
        ) : null}
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
        <p className="mt-5 text-sm text-muted-foreground">
          Need this on your team?{" "}
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            Email me to start a conversation →
          </a>
        </p>
      </section>

      {track.gallery ? (
        <section>
          <h2 className="label-mono rule-heading">Portfolio gallery</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Brand identity, print production and video — the pieces behind the work samples below.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {track.gallery.map((item) => {
              const inner = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.context}</p>
                  {item.link ? (
                    <span className="mt-3 inline-block text-sm text-primary">Watch →</span>
                  ) : null}
                </>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="panel panel-hover group block p-4"
                >
                  {inner}
                </a>
              ) : (
                <article key={item.title} className="panel panel-hover group p-4">
                  {inner}
                </article>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Want full-resolution files or the production artwork?{" "}
            <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
              Ask for the folder →
            </a>
          </p>
        </section>
      ) : null}


      <section>
        <h2 className="label-mono rule-heading">Work samples</h2>
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
        <p className="mt-5 text-sm text-muted-foreground">
          Want the detail behind any of these?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Ask me directly →
          </Link>
        </p>
      </section>

      {track.achievements ? (
        <section>
          <h2 className="label-mono rule-heading">Achievements</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {track.achievements.map((a) => (
              <li key={a} className="panel panel-hover p-5 text-sm leading-relaxed text-muted-foreground">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            References available on request.{" "}
            <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
              Request them →
            </a>
          </p>
        </section>
      ) : null}


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
        <p className="mt-5 text-sm text-muted-foreground">
          Full history on the one-page resume —{" "}
          <a href={track.file} download className="text-primary hover:underline">
            download the {track.jobTitle} version →
          </a>
        </p>
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
