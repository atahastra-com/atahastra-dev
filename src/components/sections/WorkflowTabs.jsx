import { useState } from "react";

const workflows = [
  {
    id: "atomization",
    tab: "1. Claim Atomization",
    title: "Break Any Prose Into Atomic, Verifiable Facts",
    badge: "Step 01 • Discourse Parsing",
    description:
      "Human arguments are cluttered with rhetoric, unproven assumptions, and emotional qualifiers. Proxim automatically extracts the underlying factual propositions, creating clean testable nodes in seconds.",
    bullets: [
      "Eliminates rhetorical noise and isolates checkable claims",
      "Assigns unique cryptographic node IDs to every proposition",
      "Detects implicit logical fallacies and unstated assumptions",
    ],
    preview: {
      title: "Parsed Claim Tree",
      items: [
        {
          label: "Proposition A",
          text: "520 Wh/kg specific energy density achieved",
          verified: true,
        },
        {
          label: "Proposition B",
          text: "1,000 charge cycles completed under C/3 load",
          verified: true,
        },
        {
          label: "Proposition C",
          text: "Dry room humidity strictly maintained <0.5 ppm",
          verified: "conditional",
        },
      ],
      metric: "0.4s Parse Time",
    },
  },
  {
    id: "agents",
    tab: "2. Autonomous Verification",
    title: "Deploy Epistemic Agents Across 10M+ Peer Sources",
    badge: "Step 02 • Agentic Inquiry",
    description:
      "Instead of a single human spending 6 hours cross-checking sources, Proxim coordinates parallel AI agents across arXiv, PubMed, SEC filings, and national laboratories to corroborate evidence.",
    bullets: [
      "Simultaneous multi-repository semantic querying",
      "Direct DOI and dataset provenance extraction",
      "Confidence scoring based on peer review status and methodology",
    ],
    preview: {
      title: "Active Verification Agents",
      items: [
        {
          label: "Agent ArXiv",
          text: "Scanned 14,200 condensed matter preprints",
          verified: true,
        },
        {
          label: "Agent PubMed",
          text: "Corroborated 8 clinical toxicology trials",
          verified: true,
        },
        {
          label: "Agent Patent",
          text: "Cross-referenced 42 manufacturing patent claims",
          verified: true,
        },
      ],
      metric: "99.4% Corroboration",
    },
  },
  {
    id: "counter",
    tab: "3. Adversarial Balancing",
    title: "Never Get Blindsided by Missing Counter-Evidence",
    badge: "Step 03 • Adversarial Audit",
    description:
      "Confirmation bias is the biggest flaw of the modern web. Proxim deliberately surfaces the strongest counter-arguments, boundary conditions, and conflicting studies side by side with the claim.",
    bullets: [
      "Automated discovery of opposing empirical studies",
      "Highlights experimental boundary conditions and edge cases",
      "Balances consensus without ideological or algorithmic censorship",
    ],
    preview: {
      title: "Adversarial Checks",
      items: [
        {
          label: "Temperature Limit",
          text: "Performance drops 24% at sub-zero temperatures",
          verified: "caution",
        },
        {
          label: "Pressure Constraint",
          text: "Requires 15 psi external clamping fixture",
          verified: "caution",
        },
        {
          label: "Yield Variance",
          text: "Scale-up yield unverified above 50 m/min speed",
          verified: "caution",
        },
      ],
      metric: "3 Boundary Caveats Found",
    },
  },
  {
    id: "graph",
    tab: "4. Shared Evidence Graph",
    title: "Verify Once. Share Permanent Proof With Millions.",
    badge: "Step 04 • Permanent Consensus",
    description:
      "Why should 50,000 people separately fact-check the same viral claim? Once analyzed on Proxim, the evidence graph is permanently anchored. Anyone can reference the verified tree with zero duplicate effort.",
    bullets: [
      "Eliminates 94% of redundant digital research",
      "Embeddable interactive evidence badges for external sites",
      "Decentralized consensus ledger ensures censorship resistance",
    ],
    preview: {
      title: "Permanent Evidence Node #82910",
      items: [
        {
          label: "Global Readers",
          text: "184,000+ people viewed this verified claim",
          verified: true,
        },
        {
          label: "Time Saved",
          text: "Estimated 9,200 research hours spared",
          verified: true,
        },
        {
          label: "Status",
          text: "Cryptographically anchored & immutable",
          verified: true,
        },
      ],
      metric: "Zero Redundancy",
    },
  },
];

export default function WorkflowTabs() {
  const [activeWorkflowId, setActiveWorkflowId] = useState("atomization");

  const active =
    workflows.find((w) => w.id === activeWorkflowId) || workflows[0];

  return (
    <section className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#07080c]">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full jasper-pill-badge px-4 py-1 text-xs font-semibold uppercase tracking-wider">
            ✨ Workflow Orchestration
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            How Proxim Operates at Enterprise Scale
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            A seamless four-stage pipeline designed for research desks, policy
            teams, intelligence analysts, and truth-seeking platforms.
          </p>
        </div>

        {/* Tab Buttons (Segmented Controls) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-[#0f121a] border border-white/[0.08] max-w-4xl mx-auto">
          {workflows.map((wf) => {
            const isSelected = wf.id === activeWorkflowId;
            return (
              <button
                key={wf.id}
                type="button"
                onClick={() => setActiveWorkflowId(wf.id)}
                className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${
                  isSelected
                    ? "bg-gradient-to-r from-[#b318ff] via-[#ff52a8] to-[#ffbe1a] text-white shadow-lg scale-[1.02]"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {wf.tab}
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0e1119] p-8 sm:p-12 md:p-14 shadow-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy & Bullets */}
            <div className="lg:col-span-6">
              <span className="rounded-full bg-[#ff52a8]/15 border border-[#ff52a8]/30 px-3 py-1 text-[11px] font-bold text-[#ff8ad4] uppercase tracking-wider">
                {active.badge}
              </span>
              <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {active.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                {active.description}
              </p>

              <div className="mt-6 space-y-3">
                {active.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-gray-300 font-medium">
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff52a8] hover:text-white transition-colors"
                >
                  Test This Workflow in Alpha
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right: Rich Interactive Visual Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.1] bg-[#141724] p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff52a8]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {active.preview.title}
                    </span>
                  </div>
                  <span className="rounded bg-white/[0.08] px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 font-semibold">
                    {active.preview.metric}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {active.preview.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.04] bg-[#0c0e17] p-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#ffbe1a]">
                          0{idx + 1}
                        </span>
                        <div>
                          <p className="text-[11px] font-bold text-gray-400">
                            {item.label}
                          </p>
                          <p className="text-xs font-medium text-white">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          item.verified === true
                            ? "bg-emerald-500/20 text-emerald-400"
                            : item.verified === "caution"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {item.verified === true
                          ? "VERIFIED"
                          : item.verified === "caution"
                            ? "CAVEAT"
                            : "CONDITIONAL"}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-500">
                  <span>Cryptographic Fingerprint: 0x48f...92e</span>
                  <span className="text-[#00f0ff] font-medium">
                    Real-Time Ingestion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
