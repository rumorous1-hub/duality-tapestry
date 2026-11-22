import React, { useState } from "react";

const TERMS = [
  {
    n: "01",
    title: "We Pay First",
    body: "Payment for a piece is sent before you start working on it. No waiting until the end.",
  },
  {
    n: "02",
    title: "2 Days to Deliver",
    body: "Once a piece is paid, you have 2 days to deliver it.",
  },
  {
    n: "03",
    title: "One Piece at a Time",
    body: "We pay for each single product on its own. Until that piece is delivered and you move on to the next one, we won't pay for any others.",
  },
  {
    n: "04",
    title: "Budget Cap: $500",
    body: "If your offer is more than $500, you can fuck off. Hard ceiling. No exceptions.",
  },
];

const DISCORD = "quickerlight";

export default function Terms() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(DISCORD).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };
  return (
    <section id="terms" className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono-ui text-[10px] tracking-[0.5em] uppercase text-[#ff5a5a] mb-4">— The Covenant —</p>
          <h2 className="font-serif-display text-5xl md:text-6xl font-light italic text-glow-soft">
            Terms of Service
          </h2>
          <p className="mt-4 font-mono-ui text-xs tracking-[0.2em] text-[#F3E8FF]/50 uppercase">
            For Sprite Artists &amp; Collaborators
          </p>
        </div>

        <div className="relative border-2 border-[#4A0404] bg-[#0d0418]/80 backdrop-blur-md p-2">
          {/* corner stitches */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} h-4 w-4 border-[#FF00FF]`}
              style={{ borderTop: "1px solid", borderLeft: "1px solid" }}
            />
          ))}

          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#4A0404]/60">
              <span className="font-mono-ui text-[10px] tracking-[0.3em] text-[#ff5a5a]">CONTRACT.DAT</span>
              <span className="font-mono-ui text-[10px] tracking-[0.3em] text-[#F3E8FF]/40">v2.0 · SEALED</span>
            </div>

            <div className="space-y-6">
              {TERMS.map((t) => (
                <div key={t.n} className="stitch-frame group border border-[#c864ff]/10 p-5 hover:border-[#FF00FF]/40 transition-colors">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-ui text-2xl text-[#FF00FF]/40 group-hover:text-[#FF00FF] transition-colors">
                      {t.n}
                    </span>
                    <div>
                      <h3 className="font-mono-ui text-sm tracking-[0.2em] uppercase text-[#F3E8FF] mb-2">
                        {t.title}
                      </h3>
                      <p className="font-mono-ui text-sm leading-relaxed text-[#F3E8FF]/70">{t.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#4A0404]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-mono-ui text-[11px] tracking-[0.2em] text-[#F3E8FF]/50">
                To apply, add <span className="text-[#FF00FF]">@{DISCORD}</span> on Discord.
                <br />
                By beginning work, you accept these terms.
              </p>
              <button
                onClick={copy}
                className="btn-glow font-mono-ui text-[11px] tracking-[0.3em] uppercase px-6 py-3"
              >
                {copied ? "Copied — add on Discord" : "Apply to Collaborate"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}