import React from "react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* glowing purple silhouette glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative h-[60vh] w-[60vw] max-w-[520px] rounded-full glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,.35), transparent 65%)" }}
        />
      </div>
      <div className="relative z-20 text-center">
        <p className="font-mono-ui text-[11px] tracking-[0.5em] uppercase text-[#c864ff] mb-8">
          An Indie Story-Focused RPG
        </p>
        <h1 className="font-serif-display text-6xl sm:text-7xl md:text-8xl font-light leading-none text-glow-soft">
          Duality <span className="italic text-[#8b5cf6] text-glow-magenta">/</span> Tapestry
        </h1>
        <div className="mx-auto mt-10 h-px w-48 seam" />
        <p className="mt-8 font-serif-display italic text-xl sm:text-2xl text-[#F3E8FF]/80 max-w-xl mx-auto">
          The balance is shattered. Nothingness materializes.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo('cast')} className="btn-glow font-mono-ui text-xs tracking-[0.3em] uppercase px-8 py-3.5">
            Enter the Weave
          </button>
          <button
            onClick={() => scrollTo('terms')}
            className="font-mono-ui text-xs tracking-[0.3em] uppercase px-8 py-3.5 text-[#F3E8FF]/60 hover:text-[#c864ff] transition-colors"
          >
            Collaboration Terms
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono-ui text-[10px] tracking-[0.4em] text-[#F3E8FF]/40 animate-bounce">
        SCROLL
      </div>
    </section>
  );
}