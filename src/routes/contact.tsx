import { createFileRoute } from "@tanstack/react-router";
import { profile } from "../data/resume";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Collins Murakayo Mulechi, Data Analyst" },
      {
        name: "description",
        content:
          "Get in touch with Collins Murakayo Mulechi, data analyst based in Nairobi, Kenya. Email, phone, LinkedIn and GitHub.",
      },
      { property: "og:title", content: "Contact — Collins Murakayo Mulechi" },
      { property: "og:description", content: "Data analyst based in Nairobi, Kenya." },
    ],
  }),
  component: Contact,
});

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "collins-murakayo", href: profile.linkedin },
  { label: "GitHub", value: "github.com/8836", href: profile.github },
];

function Contact() {
  return (
    <div className="space-y-10">
      <header>
        <p className="label-mono">Contact</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Let's talk data</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Based in {profile.location} and open to data analyst, reporting, and business systems
          roles — on-site, hybrid, or remote.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="panel block p-6 transition-colors hover:border-primary"
          >
            <p className="label-mono">{l.label}</p>
            <p className="mt-2 font-display text-lg font-semibold">{l.value}</p>
          </a>
        ))}
      </div>
      <a href="/Collins-Murakayo-Mulechi-Data-Analyst-Resume.pdf" download className="link-cta">
        Download ATS resume
      </a>
    </div>
  );
}
