import React from "react";
import { Swords, Map as MapIcon, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Swords,
    title: "Turn-Based Combat",
    body: "A highly stylized persistent party UI stays on screen through every encounter — HP threads, ability weaves, and a dialogue-box command layout that never breaks immersion.",
    tag: "PERSISTENT PARTY UI",
  },
  {
    icon: MapIcon,
    title: "2D Overworld Exploration",
    body: "Top-down traversal across the torn loom of the two merged realms. Discover ruins, seams between worlds, and the places where the weaves bleed.",
    tag: "TOP-DOWN TRAVERSAL",
  },
  {
    icon: Sparkles,
    title: "Real-Time Hazards & Grid Puzzles",
    body: "Dodge unraveling threads in real time and solve grid-based weaving puzzles to mend — or tear — the fabric of reality itself.",
    tag: "HAZARD DODGE · GRID PUZZLES",
  },
];

export default function Gameplay() {
  return (
    <section id="gameplay" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#c864ff] mb-4">— Systems —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">
            Gameplay &amp; Mechanics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="stitch-frame relative bg-[#0d0418]/60 backdrop-blur-md border border-[#c864ff]/15 p-8"
              >
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}