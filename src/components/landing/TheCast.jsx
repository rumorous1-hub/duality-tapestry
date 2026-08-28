import React from "react";

const CAST = [
  {
    name: "The Prince",
    role: "Fallen Angel",
    desc: "Clad in midnight-blue velvet and a pearlescent crown, the Prince walks the seam between two ruined worlds — the last thread meant to mend what was torn.",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,.45)",
    tag: "VELVET · PEARL",
  },
  {
    name: "Vessem",
    role: "Devil",
    desc: "Born of the restless Inferno, Vessem carries the weight of crimson and ash. A demon whose loyalty cuts sharper than any blade forged in the old flames.",
    accent: "#ff4d4d",
    glow: "rgba(74,4,4,.6)",
    tag: "CRIMSON · ASH",
  },
  {
    name: "Miss Leyouda",
    role: "Angel",
    desc: "A striking presence wreathed in golden light. Miss Leyouda descended from the ruins of the Celestial — the only angel who chose to fall toward the torn loom.",
    accent: "#ffd24d",
    glow: "rgba(217,178,90,.5)",
    tag: "GOLD · HALO",
  },
];

function CharacterCard({ c }) {
  return (
    <div className="stitch-frame group relative w-full max-w-[40vw] min-w-[280px] flex-1 bg-[#0d0418]/70 backdrop-blur-sm">
      <div
        className="relative h-[460px] overflow-hidden flex items-center justify-center"
        style={{ background: `radial-gradient(circle at 50% 40%, ${c.glow}, #0d0418 75%)` }}
      >
        <span
          className="font-serif-display text-7xl italic opacity-90 text-glow-soft select-none"
          style={{ color: c.accent }}
        >
          {c.name.charAt(0)}
        </span>
        <div className="absolute top-4 left-4 font-mono-ui text-[10px] tracking-[0.3em] text-[#F3E8FF]/70">
          {c.tag}
        </div>
      </div>
      <div className="p-6 border-t border-[#c864ff]/20">
        <p className="font-mono-ui text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: c.accent }}>
          {c.role}
        </p>
        <h3 className="font-serif-display text-3xl font-light italic mb-3 group-hover:text-glow-magenta transition-all">
          {c.name}
        </h3>
        <p className="font-body text-sm leading-relaxed text-[#F3E8FF]/70">{c.desc}</p>
      </div>
    </div>
  );
}

export default function TheCast() {
  return (
    <section id="cast" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#c864ff] mb-4">— Dramatis Personae —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">The Cast</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {CAST.map((c) => (
            <CharacterCard key={c.name} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}