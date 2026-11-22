import React from "react";
import { Scissors, Moon } from "lucide-react";

const SHOWCASE = [
  {
    icon: Scissors,
    title: "Tapestry Manipulation",
    tag: "CUT · STRETCH · ROTATE",
    body: "The world is a woven map split into zones. Pick a zone, hold to stretch your selection across the grid, then rotate it to rewrite the paths through a level. Switch between views of the same map and see how each one changes the way through.",
    video: "/media/tapestry.mp4",
    poster: "/media/tapestry.png",
  },
];

const SYSTEMS = [
  {
    icon: Moon,
    title: "Dreams Between Acts",
    tag: "CINEMATIC INTERLUDES",
    body: "Each act opens with a dream: a short, hand-crafted sequence drawn entirely in code. We keep them off this page on purpose.",
  },
];

function Clip({ src, poster }) {
  return (
    <div className="border border-[#c864ff]/20 bg-black overflow-hidden">
      <video
        className="block w-full h-auto"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}

function Heading({ f }) {
  const Icon = f.icon;
  return (
    <div className="flex items-start gap-5">
      <div className="shrink-0 grid place-items-center h-12 w-12 border border-[#c864ff]/40 text-[#c864ff]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-mono-ui text-[10px] tracking-[0.3em] text-[#c864ff]/80 mb-2">{f.tag}</p>
        <h3 className="font-serif-display text-2xl font-light italic mb-3">{f.title}</h3>
        <p className="font-body text-sm leading-relaxed text-[#F3E8FF]/70">{f.body}</p>
      </div>
    </div>
  );
}

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#c864ff] mb-4">— Systems —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">
            Gameplay &amp; Mechanics
          </h2>
          <p className="mt-4 font-mono-ui text-xs tracking-[0.2em] text-[#F3E8FF]/50 uppercase">
            Captured from the current build
          </p>
        </div>

        <div className="space-y-6">
          {SHOWCASE.map((f, i) => (
            <div
              key={f.title}
              className="stitch-frame relative bg-[#0d0418]/60 backdrop-blur-md border border-[#c864ff]/15 p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={i % 2 ? "md:order-2" : ""}>
                <Clip src={f.video} poster={f.poster} />
              </div>
              <Heading f={f} />
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-6">
          {SYSTEMS.map((f) => (
            <div
              key={f.title}
              className="stitch-frame relative bg-[#0d0418]/60 backdrop-blur-md border border-[#c864ff]/15 p-8"
            >
              <Heading f={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
