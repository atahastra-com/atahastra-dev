import { useState } from "react";

const sampleClaims = [
  {
    id: "claim-1",
    category: "Energy & Materials",
    statement:
      "Solid-state lithium-metal cells achieve 520 Wh/kg energy density with >1,000 cycle retention in industrial pilot lines.",
    consensusScore: 92,
    evidenceCount: 18,
    counterCount: 4,
    timestamp: "Analyzed 12m ago",
    status: "Verified Consensus",
    statusColor: "emerald",
    assertions: [
      {
        text: "Anode-free cell structure verified via X-ray tomography",
        status: "pass",
      },
      { text: "Cathode loading exceeds 4.2 mAh/cm² threshold", status: "pass" },
      {
        text: "Continuous roll-to-roll manufacturing yield > 85%",
        status: "conditional",
      },
    ],
    supportingEvidence: [
      {
        source: "Nature Energy (DOI: 10.1038/s41560-025)",
        type: "Peer-Reviewed Journal",
        rigor: "98%",
        summary:
          "Independent laboratory replication confirmed 522 Wh/kg at C/3 discharge rate across 1,120 cycles at 25°C.",
      },
      {
        source: "Argonne National Laboratory Assessment",
        type: "Empirical Benchmark",
        rigor: "96%",
        summary:
          "Calorimetric tests showed zero thermal runaway propagation under nail penetration protocol.",
      },
    ],
    counterEvidence: [
      {
        source: "MIT Energy Initiative Critical Review",
        type: "Boundary Constraint",
        rigor: "91%",
        summary:
          "Low-temperature performance (-10°C) exhibits 24% capacity fade unless external pre-heating circuitry is deployed.",
      },
    ],
  },
  {
    id: "claim-2",
    category: "Artificial Intelligence",
    statement:
      "Zero-knowledge proof verification lowers cryptographic verification compute costs by 84% on distributed edge nodes.",
    consensusScore: 89,
    evidenceCount: 24,
    counterCount: 6,
    timestamp: "Analyzed 45m ago",
    status: "Strong Evidence",
    statusColor: "emerald",
    assertions: [
      {
        text: "Recursive STARK proofs compress transaction verification trees",
        status: "pass",
      },
      {
        text: "Memory footprint maintained under 128MB on ARM64 silicon",
        status: "pass",
      },
      {
        text: "Prover generation time scales sub-linearly with circuit size",
        status: "pass",
      },
    ],
    supportingEvidence: [
      {
        source: "IEEE Symposium on Security & Privacy 2025",
        type: "Peer-Reviewed Conference",
        rigor: "97%",
        summary:
          "Benchmarked across 5,000 edge nodes; average verification latency reduced from 410ms to 65ms.",
      },
      {
        source: "Ethereum Foundation Research Report",
        type: "Open Benchmark Suite",
        rigor: "94%",
        summary:
          "Hardware-accelerated folding schemes validated across heterogeneous client architectures.",
      },
    ],
    counterEvidence: [
      {
        source: "Stanford Cryptography Group Note",
        type: "Prerequisite Condition",
        rigor: "88%",
        summary:
          "Requires trusted setup phase or larger proof size trade-off for legacy 32-bit embedded processors.",
      },
    ],
  },
  {
    id: "claim-3",
    category: "Epistemology & Society",
    statement:
      "Shared evidence graphs eliminate up to 90% of redundant fact-checking across digital newsroom workflows.",
    consensusScore: 95,
    evidenceCount: 31,
    counterCount: 2,
    timestamp: "Analyzed 3h ago",
    status: "Empirical Consensus",
    statusColor: "emerald",
    assertions: [
      {
        text: "Primary sources mapped once and cryptographically fingerprinted",
        status: "pass",
      },
      {
        text: "Automated claim clustering prevents parallel duplicated debunking",
        status: "pass",
      },
      {
        text: "Multi-perspective consensus scoring removes editorial bias",
        status: "pass",
      },
    ],
    supportingEvidence: [
      {
        source: "Reuters Institute Digital Journalism Review",
        type: "Field Study (40 Newsrooms)",
        rigor: "95%",
        summary:
          "Editorial verification speed accelerated by 3.8x when operating on decentralized citation graphs.",
      },
      {
        source: "Oxford Internet Institute Epistemic Audit",
        type: "Comparative Evaluation",
        rigor: "93%",
        summary:
          "Misinformation propagation halving observed in networks utilizing persistent claim lineage.",
      },
    ],
    counterEvidence: [
      {
        source: "Berkman Klein Center Policy Paper",
        type: "Adoption Constraint",
        rigor: "89%",
        summary:
          "Initial onboarding friction remains high for organizations relying on legacy siloed CMS workflows.",
      },
    ],
  },
];

export default function ClaimAnalyzer() {
  const [activeClaimId, setActiveClaimId] = useState(sampleClaims[0].id);
  const [activeTab, setActiveTab] = useState("supporting");
  const [isVerifying, setIsVerifying] = useState(false);

  const activeClaim =
    sampleClaims.find((c) => c.id === activeClaimId) || sampleClaims[0];

  const handleSimulateVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
    }, 900);
  };

  return (
    <section id="analyzer" className="relative py-24 md:py-32 overflow-hidden">
      {/* Ambient background styling */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#d4a359]/[0.05] blur-[140px]"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a359]/30 bg-[#d4a359]/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#d4a359] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-ping" />
            Live Epistemic Demonstration
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Inside the Evidence Engine
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Experience how Proxim breaks apart raw statements, queries
            decentralized primary sources, and synthesizes balanced consensus
            without algorithmic rage or bias.
          </p>
        </div>

        {/* Claim Selector Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {sampleClaims.map((claim) => {
            const isSelected = claim.id === activeClaimId;
            return (
              <button
                key={claim.id}
                type="button"
                onClick={() => setActiveClaimId(claim.id)}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                  isSelected
                    ? "border border-[#d4a359] bg-[#d4a359]/15 text-white shadow-[0_0_25px_rgba(212,163,89,0.25)]"
                    : "border border-white/[0.08] bg-white/[0.03] text-gray-400 hover:border-white/[0.2] hover:text-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-colors ${
                    isSelected
                      ? "bg-[#f59e0b]"
                      : "bg-gray-600 group-hover:bg-gray-400"
                  }`}
                />
                <span>{claim.category}</span>
                <span className="font-mono text-[10px] text-gray-500">
                  [{claim.consensusScore}% Score]
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Analyzer Terminal Card */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0a0f]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          {/* Terminal Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-white/[0.02] px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-gray-400">
                proxim://epistemic-graph/{activeClaim.id}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {activeClaim.status}
              </span>
              <button
                type="button"
                onClick={handleSimulateVerification}
                disabled={isVerifying}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-gray-300 transition-all hover:bg-white/[0.1] hover:text-white active:scale-95"
              >
                <svg
                  className={`h-3.5 w-3.5 ${isVerifying ? "animate-spin text-[#d4a359]" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>
                  {isVerifying ? "Auditing graph..." : "Re-verify Node"}
                </span>
              </button>
            </div>
          </div>

          {/* Main Card Content */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* The Raw Claim Statement */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4a359]">
                  Analyzed Proposition
                </span>
                <span className="font-mono text-xs text-gray-500">
                  {activeClaim.timestamp}
                </span>
              </div>
              <p className="mt-3 text-lg font-medium text-white sm:text-xl md:text-2xl leading-relaxed">
                "{activeClaim.statement}"
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Consensus Index
                </p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl font-mono text-[#d4a359]">
                  {activeClaim.consensusScore}%
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#d4a359] transition-all duration-700"
                    style={{ width: `${activeClaim.consensusScore}%` }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Verified Proofs
                </p>
                <p className="mt-2 text-2xl font-bold text-emerald-400 sm:text-3xl font-mono">
                  {activeClaim.evidenceCount}
                </p>
                <p className="mt-1 text-[11px] text-gray-500">
                  Peer & empirical citations
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Counter Constraints
                </p>
                <p className="mt-2 text-2xl font-bold text-rose-400 sm:text-3xl font-mono">
                  {activeClaim.counterCount}
                </p>
                <p className="mt-1 text-[11px] text-gray-500">
                  Boundary conditions found
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Provenance Hash
                </p>
                <p className="mt-2 font-mono text-sm text-gray-300 font-semibold truncate">
                  0x8f2b...c41e
                </p>
                <p className="mt-1 text-[11px] text-gray-500">
                  Immutable ledger entry
                </p>
              </div>
            </div>

            {/* Atomic Assertions Breakdown */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Atomic Claim Decomposition
              </h3>
              <div className="mt-3 space-y-2">
                {activeClaim.assertions.map((assertion, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.04] bg-white/[0.015] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#d4a359]">
                        0{idx + 1}
                      </span>
                      <span className="text-sm text-gray-200">
                        {assertion.text}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        assertion.status === "pass"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {assertion.status === "pass"
                        ? "✓ Verified"
                        : "⚠ Boundary Condition"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence Tabs: Supporting vs Counter-Evidence */}
            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("supporting")}
                    className={`pb-3 -mb-3 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                      activeTab === "supporting"
                        ? "text-white border-b-2 border-[#d4a359]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Supporting Citations (
                    {activeClaim.supportingEvidence.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("counter")}
                    className={`pb-3 -mb-3 text-xs font-semibold uppercase tracking-wider transition-colors relative ${
                      activeTab === "counter"
                        ? "text-white border-b-2 border-[#d4a359]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Counter-Evidence & Limitations (
                    {activeClaim.counterEvidence.length})
                  </button>
                </div>
                <span className="text-xs text-gray-500 font-mono hidden sm:inline">
                  Synthesized by Proxim Epistemic Engine
                </span>
              </div>

              {/* Tab Content */}
              <div className="mt-4 space-y-3">
                {(activeTab === "supporting"
                  ? activeClaim.supportingEvidence
                  : activeClaim.counterEvidence
                ).map((ev, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.12]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d4a359]" />
                        <h4 className="text-sm font-semibold text-white">
                          {ev.source}
                        </h4>
                        <span className="rounded bg-white/[0.05] px-2 py-0.5 text-[10px] text-gray-400">
                          {ev.type}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-emerald-400">
                        {ev.rigor} Confidence
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                      {ev.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
