import React from "react";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#c864ff]/15 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif-display text-2xl italic text-glow-soft">
            Duality <span className="text-[#8b5cf6]">/</span> Tapestry
          </p>
          <p className="font-mono-ui text-[10px] tracking-[0.3em] text-[#F3E8FF]/40 mt-2 uppercase">
            The balance is shattered. Nothingness materializes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[#F3E8FF]/50">
          <button onClick={() => scrollTo('worlds')} className="hover:text-[#c864ff] transition-colors">Lore</button>
          <button onClick={() => scrollTo('cast')} className="hover:text-[#c864ff] transition-colors">Cast</button>
          <button onClick={() => scrollTo('gameplay')} className="hover:text-[#c864ff] transition-colors">Mechanics</button>
          <button onClick={() => scrollTo('dev')} className="hover:text-[#c864ff] transition-colors">Dev Log</button>
          <button onClick={() => scrollTo('terms')} className="hover:text-[#c864ff] transition-colors">Terms</button>
        </div>
        <p className="font-mono-ui text-[10px] tracking-[0.2em] text-[#F3E8FF]/30 uppercase">
            {new Date().getFullYear()}   Built in GameMaker
        </p>
      </div>
    </footer>
  );
}