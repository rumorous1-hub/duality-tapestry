import React from "react";

const TERMS = [
  {
    n: "01",
    title: "No Upfront Payment",
    body: "Due to previous scams, we will not pay first. Work begins on good faith, and we evaluate delivery as it comes.",
  },
  {
    n: "02",
    title: "Consistency Unlocks a Downpayment",
    body: "If we like your work and you deliver with consistency, we will offer a downpayment if required — earned through demonstrated reliability, not requested up front.",
  },
  {
    n: "03",
    title: "Full Payment at the End",
    body: "The full commission balance is settled upon final asset delivery. The end of the commission is the end of the invoice.",
  },
  {
    n: "04",
    title: "Progressive Delivery Required",
    body: "We need the sprites progressively — not all at once. This lets the programmer keep working in the meanwhile. We don't have a set timeframe, but we aren't going to wait 1–2 years.",
  },
  {
    n: "05",
    title: "Budget Cap: $500",
    body: "If your offer is more than $500, you can fuck off. Hard ceiling. No exceptions.",
  },
];

export default function Terms() {
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
              <span className="font-mono-ui text-[10px] tracking-[0.3em] text-[#F3E8FF]/40">v1.0 · SEALED</span>
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
                By beginning work, you accept these terms.
              </p>
              <a
                href="mailto:contact@dualitytapestry.example"
                className="btn-glow font-mono-ui text-[11px] tracking-[0.3em] uppercase px-6 py-3"
              >
                Apply to Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}