import React from "react";

const LOCATIONS = [
  { name: "Hellville", note: "The first torn settlement" },
  { name: "Vessem's Cave", note: "A demon's crimson refuge" },
  { name: "Asterion Clan Hideout", note: "Where the threads converge" },
];

export default function DevStatus() {
  return (
    <section id="dev" className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#c864ff] mb-4">— Dev Log —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">
            Current Progress
          </h2>
        </div>

        <div className="stitch-frame bg-[#0d0418]/60 backdrop-blur-md border border-[#c864ff]/15 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-2 w-2 rounded-full bg-[#FF00FF] animate-pulse" />
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-[#FF00FF]">
              ACT I — In Active Development
            </span>
          </div>

          <p className="font-body text-base leading-relaxed text-[#F3E8FF]/80 mb-8">
            Act I is currently being woven in <span className="text-[#c864ff] font-mono-ui">GameMaker</span>.
            The opening arc spans three locations, each a torn fragment of the merged realms where the
            Prince's journey begins.
          </p>

          <div className="space-y-3">
            {LOCATIONS.map((l, i) => (
              <div
                key={l.name}
                className="flex items-center justify-between border border-[#c864ff]/15 bg-[#14041f]/50 px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono-ui text-[#c864ff]/50 text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif-display text-xl italic">{l.name}</span>
                </div>
                <span className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-[#F3E8FF]/50 hidden sm:block">
                  {l.note}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 h-1.5 w-full bg-[#14041f] overflow-hidden">
            <div className="h-full w-[18%] bg-gradient-to-r from-[#8b5cf6] to-[#FF00FF] glow-pulse" />
          </div>
          <p className="mt-3 font-mono-ui text-[10px] tracking-[0.3em] text-[#F3E8FF]/40">
            ACT I PROGRESS · EARLY BUILD
          </p>
        </div>
      </div>
    </section>
  );
}