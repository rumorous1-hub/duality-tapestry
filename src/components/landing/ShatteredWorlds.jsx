import React from "react";

function WorldPanel({ side, title, body, accent, motif }) {
  const isLeft = side === "inferno";
  return (
    <div
      className={`relative flex-1 p-8 md:p-14 overflow-hidden ${isLeft ? "-rotate-[0.6deg]" : "rotate-[0.6deg]"}`}
      style={{
        background: isLeft
          ? "radial-gradient(circle at 30% 40%, #4A0404 0%, #1a0408 70%)"
          : "radial-gradient(circle at 70% 40%, #2D1B4E 0%, #0d0820 70%)",
      }}
    >
      {/* jagged / floating thread motif */}
      {isLeft ? (
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={`${i * 7}%`} y1="0" x2={`${i * 7 + 6}%`} y2="100%"
              stroke="#ff2a2a" strokeWidth="0.5" strokeDasharray="2 6" />
          ))}
        </svg>
      ) : (
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="thread-line" style={{
              left: `${5 + i * 9}%`, animationDelay: `${i * 0.4}s`, opacity: 0.25,
            }} />
          ))}
        </div>
      )}

      <div className="relative z-10">
        <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: accent }}>
          {motif}
        </p>
        <h3 className="font-serif-display text-4xl md:text-5xl font-light italic mb-6">{title}</h3>
        <p className="font-body text-base md:text-lg leading-relaxed text-[#F3E8FF]/75 max-w-md">{body}</p>
      </div>
    </div>
  );
}

export default function ShatteredWorlds() {
  return (
    <section id="worlds" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#c864ff] mb-4">— Lore —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">
            The Shattered Worlds
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-px border border-[#c864ff]/20">
          <WorldPanel
            side="inferno"
            motif="The Restless Inferno"
            title="Inferno Tapestry"
            accent="#ff5a5a"
            body="A restless realm that knew only motion and flame. Then peace forced its way inward — an alien calm that burned hotter than any fire, unraveling the Inferno from within. What was once chaos now festers in forced stillness."
          />
          <WorldPanel
            side="celestial"
            motif="The Fallen Celestial"
            title="Celestial Tapestry"
            accent="#a98cff"
            body="The Celestial realm collapsed into silent ruins. Its threads, once woven in perfect order, hang torn and drifting. The duality that held the universe together is gone — and where the two weaves bleed into each other, nothingness materializes."
          />
        </div>

        <p className="mt-12 text-center font-serif-display italic text-xl text-[#F3E8FF]/60 max-w-2xl mx-auto">
          Two weaves that were never meant to touch now share a single torn loom — and the universe is paying the price.
        </p>
      </div>
    </section>
  );
}