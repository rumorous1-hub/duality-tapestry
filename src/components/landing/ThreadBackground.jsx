import React, { useMemo } from "react";

// A fixed full-page layer of wavy vertical magenta "threads" + faint grid weave.
export default function ThreadBackground() {
  const threads = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        left: `${(i / 40) * 100 + (Math.random() * 1.5 - 0.75)}%`,
        delay: `${(Math.random() * 7).toFixed(2)}s`,
        dur: `${(5 + Math.random() * 5).toFixed(2)}s`,
        alt: i % 2 === 0,
        opacity: (0.15 + Math.random() * 0.35).toFixed(2),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* deep radial void */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, #1a0b22 0%, #0A0112 55%, #050008 100%)",
        }}
      />
      <div className="absolute inset-0 grid-weave opacity-40" />
      {/* wavy threads */}
      {threads.map((t, i) => (
        <span
          key={i}
          className="thread-line"
          style={{
            left: t.left,
            animationDelay: t.delay,
            animationDuration: t.dur,
            animationName: t.alt ? "threadWaveAlt" : "threadWave",
            opacity: t.opacity,
          }}
        />
      ))}
      {/* drifting torn fabric shards */}
      <div
        className="absolute top-1/4 left-[-6%] h-40 w-24 rotate-12 float-y rounded-sm opacity-20 blur-[1px]"
        style={{ background: "linear-gradient(160deg, #2d153a, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-[-5%] h-56 w-28 -rotate-6 float-y rounded-sm opacity-20 blur-[1px]"
        style={{ background: "linear-gradient(200deg, #4A0404, transparent)", animationDelay: "2s" }}
      />
    </div>
  );
}