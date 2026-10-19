import { useState } from "react";

const workspaceClaims = [
  {
    id: "claim-1",
    text: "Solid-state lithium cells exceed 520 Wh/kg at C/3 discharge rates across 1,000 cycles.",
    score: 96,
    status: "Verified Truth",
    statusColor: "emerald",
    source: "Nature Energy (DOI: 10.1038/s41560-025)",
    institution: "Lawrence Berkeley National Laboratory",
    date: "February 2026",
    citations: 18,
    counterPoints: 2,
    excerpt:
      "Electrochemical impedance spectroscopy confirmed unbroken solid electrolyte interphase (SEI) stability through 1,024 cycles at room temperature.",
    counterNote:
      "Requires 15 psi mechanical stack pressure; ambient pressure tests showed minor lithium dendrite growth at cycle 640.",
  },
  {
    id: "claim-2",
    text: "Continuous roll-to-roll manufacturing achieves >85% operational yield at 50 m/min line speed.",
    score: 84,
    status: "Conditional Consensus",
    statusColor: "amber",
    source: "Advanced Materials Pilot Report",
    institution: "Fraunhofer Institute for Material and Beam Technology",
    date: "January 2026",
    citations: 12,
    counterPoints: 5,
    excerpt:
      "Dry-electrode coating demonstrated 86.4% usable yield on 300mm wide copper web substrates in pilot qualification run.",
    counterNote:
      "Moisture levels must remain below 0.5 ppm in the dry room, increasing capital expense for regional gigafactories.",
  },
  {
    id: "claim-3",
    text: "Zero thermal runaway propagation observed under continuous nail penetration tests.",
    score: 99,
    status: "Empirical Law",
    statusColor: "emerald",
    source: "UL Solutions Safety Benchmark (UL 2580)",
    institution: "Global Battery Safety Consortium",
    date: "March 2026",
    citations: 27,
    counterPoints: 0,
    excerpt:
      "Surface temperature peaked at 68°C with zero fire or toxic gas venting across 50 consecutive destructive test units.",
    counterNote:
      "Zero counter-evidence detected across 14 independent testing laboratories.",
  },
];

export default function ProductCanvas() {
  const [selectedClaimId, setSelectedClaimId] = useState("claim-1");
  const [activeTab, setActiveTab] = useState("canvas");
  const [isAuditing, setIsAuditing] = useState(false);

  const activeClaim =
    workspaceClaims.find((c) => c.id === selectedClaimId) || workspaceClaims[0];

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 700);
  };

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#0c0e15] shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
      {/* Top Application Header / macOS Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#090b10] px-4 py-3 sm:px-6">
        {/* Left: Window Dots & Document Name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/[0.1]" />

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white">
              Autonomous Solid-State Energy Scaling.proxim
            </span>
            <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] font-mono text-gray-400">
              Live Canvas
            </span>
          </div>
        </div>

        {/* Center/Right: Collaborators, Provenance Score & Action */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>98.6% Provenance Score</span>
          </div>

          {/* Collaborator Avatars */}
          <div className="hidden sm:flex -space-x-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-[9px] font-bold text-white ring-2 ring-[#0c0e15]">
              EV
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 text-[9px] font-bold text-white ring-2 ring-[#0c0e15]">
              MK
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-500 text-[9px] font-bold text-white ring-2 ring-[#0c0e15]">
              🤖
            </div>
          </div>

          <button
            type="button"
            onClick={handleRunAudit}
            disabled={isAuditing}
            className="jasper-btn-primary flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white shadow-md active:scale-95"
          >
            <span>
              {isAuditing ? "Auditing 10M+ Papers..." : "⚡ Audit Claims"}
            </span>
          </button>
        </div>
      </div>

      {/* Sub-Header Navigation Tabs (Jasper Style) */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0d1018] px-4 sm:px-6">
        <div className="flex gap-2 sm:gap-6 overflow-x-auto">
          {[
            { id: "canvas", label: "Claim Canvas", count: "3 Claims" },
            { id: "agents", label: "Autonomous Agents", count: "2 Active" },
            { id: "mesh", label: "Citation Mesh", count: "57 Sources" },
            { id: "consensus", label: "Consensus Map", count: "96% Agreement" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-3 text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-[#ff52a8] text-white font-semibold"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span>{tab.label}</span>
              <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-gray-400">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
        <span className="hidden lg:inline text-[11px] font-mono text-gray-500">
          Proxim Epistemic Engine v2.4
        </span>
      </div>

      {/* Main Multi-Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Navigator Sidebar (3 Cols) */}
        <div className="lg:col-span-3 border-r border-white/[0.06] bg-[#0a0c13] p-4 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Extracted Assertions
            </p>
            <div className="mt-3 space-y-2">
              {workspaceClaims.map((claim, idx) => {
                const isSelected = claim.id === selectedClaimId;
                return (
                  <button
                    key={claim.id}
                    type="button"
                    onClick={() => setSelectedClaimId(claim.id)}
                    className={`w-full text-left rounded-xl p-3 text-xs transition-all ${
                      isSelected
                        ? "bg-[#151824] border border-[#ff52a8]/40 shadow-sm"
                        : "bg-white/[0.02] border border-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#ff52a8]">
                        Claim 0{idx + 1}
                      </span>
                      <span
                        className={`text-[10px] font-semibold ${
                          claim.score >= 90
                            ? "text-emerald-400"
                            : "text-amber-400"
                        }`}
                      >
                        {claim.score}%
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 font-medium text-white text-[11px]">
                      {claim.text}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Active Repositories
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["arXiv.org", "PubMed Central", "USPTO", "Nature Portfolio"].map(
                (repo) => (
                  <span
                    key={repo}
                    className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] text-gray-400"
                  >
                    ✓ {repo}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Center Editor Canvas (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0c0e15] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <div className="max-w-xl">
            <span className="rounded-full bg-[#ff52a8]/10 border border-[#ff52a8]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#ff52a8] uppercase tracking-wider">
              Research Synthesis Draft
            </span>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white">
              Industrial Roadmap for High-Energy Density Solid-State Cells
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-300">
              <p>
                Recent breakthroughs in sulfide-based composite electrolytes and
                ultra-thin lithium anodes indicate that the automotive threshold
                of 500 Wh/kg is no longer a theoretical ceiling.
              </p>

              {/* Clickable Inline Claim Pill 1 */}
              <div
                onClick={() => setSelectedClaimId("claim-1")}
                className={`cursor-pointer rounded-lg p-3 transition-all border ${
                  selectedClaimId === "claim-1"
                    ? "bg-[#ff52a8]/15 border-[#ff52a8] text-white shadow-[0_0_20px_rgba(255,82,168,0.2)]"
                    : "bg-white/[0.03] border-white/[0.1] hover:border-white/[0.25]"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#ff52a8] font-semibold mb-1">
                  <span>● Highlighted Assertion 01</span>
                  <span>96% Verified</span>
                </div>
                <span className="font-medium text-white">
                  "Solid-state lithium cells exceed 520 Wh/kg at C/3 discharge
                  rates across 1,000 cycles."
                </span>
              </div>

              <p>
                Crucially, scalability has advanced through roll-to-roll dry
                electrode processing.
              </p>

              {/* Clickable Inline Claim Pill 2 */}
              <div
                onClick={() => setSelectedClaimId("claim-2")}
                className={`cursor-pointer rounded-lg p-3 transition-all border ${
                  selectedClaimId === "claim-2"
                    ? "bg-[#ffbe1a]/15 border-[#ffbe1a] text-white shadow-[0_0_20px_rgba(255,190,26,0.2)]"
                    : "bg-white/[0.03] border-white/[0.1] hover:border-white/[0.25]"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-[#ffbe1a] font-semibold mb-1">
                  <span>● Highlighted Assertion 02</span>
                  <span>84% Conditional</span>
                </div>
                <span className="font-medium text-white">
                  "Continuous roll-to-roll manufacturing achieves &gt;85%
                  operational yield at 50 m/min line speed."
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Live Agent Panel (4 Cols) */}
        <div className="lg:col-span-4 p-6 bg-[#090b11] flex flex-col justify-between">
          <div>
            {/* Agent Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#b318ff] via-[#ff52a8] to-[#ffbe1a] text-white font-bold text-xs shadow-md">
                  AI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Epistemic Agent Alpha
                  </h4>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Audit Complete • Verified
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-mono font-bold text-white">
                {activeClaim.score}% Match
              </span>
            </div>

            {/* Selected Claim Audit Card */}
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-white/[0.08] bg-[#121520] p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff52a8]">
                  Primary Source Citation
                </span>
                <h5 className="mt-1 text-sm font-semibold text-white">
                  {activeClaim.source}
                </h5>
                <p className="mt-0.5 text-xs text-gray-400">
                  {activeClaim.institution}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-gray-300 bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.04]">
                  "{activeClaim.excerpt}"
                </p>
              </div>

              {/* Counter-Evidence Callout */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Boundary Constraint Detected
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    2 Constraints
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  {activeClaim.counterNote}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-gray-500">
              {activeClaim.citations} Cross-Checked Citations
            </span>
            <button
              type="button"
              className="text-xs font-semibold text-[#ff52a8] hover:text-white transition-colors"
            >
              View Full Evidence Graph →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
