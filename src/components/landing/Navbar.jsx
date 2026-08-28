import React, { useEffect, useState } from "react";

const LINKS = [
  { label: "Worlds", id: "worlds" },
  { label: "Cast", id: "cast" },
  { label: "Mechanics", id: "gameplay" },
  { label: "Dev Log", id: "dev" },
  { label: "Terms", id: "terms" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0112]/80 backdrop-blur-md border-b border-[#c864ff]/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo('top')} className="font-serif-display text-xl italic text-glow-soft">
          Duality <span className="text-[#8b5cf6]">/</span> Tapestry
        </button>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-[#F3E8FF]/60 hover:text-[#FF00FF] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}