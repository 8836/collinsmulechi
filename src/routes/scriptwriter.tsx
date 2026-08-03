import { createFileRoute } from "@tanstack/react-router";
import { TrackPage } from "../components/TrackPage";
import { trackBySlug } from "../data/tracks";

const track = trackBySlug("scriptwriter");

export const Route = createFileRoute("/scriptwriter")({
  head: () => ({
    meta: [
      { title: track.seo.title },
      { name: "description", content: track.seo.description },
      { property: "og:title", content: track.seo.title },
      { property: "og:description", content: track.seo.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://collinsmulechi.lovable.app/scriptwriter" },
    ],
    links: [{ rel: "canonical", href: "https://collinsmulechi.lovable.app/scriptwriter" }],
  }),
  component: () => <TrackPage track={track} />,
});
