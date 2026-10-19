import { useState } from "react";

export default function ProximPreview() {
  const [activeTab, setActiveTab] = useState("both"); // 'both', 'supporting', 'counter'

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080808] p-6 sm:p-10 shadow-2xl">
      {/* Post Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-xs font-semibold text-white">
            P
          </div>
          <div>
            <p className="text-xs font-medium text-white">Atahastra Research</p>
            <p className="text-[11px] text-gray-500">
              Shared Evidence Graph • Proxim Post
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-[11px] text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Evidence Analysis Attached
          </span>
        </div>
      </div>

      {/* Post Body & Claim */}
      <div className="mt-8">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
          The Problem of Duplicate Fact-Checking in Networked Information
        </h3>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400">
          In traditional digital discourse, a single controversial statement
          triggers thousands of isolated, parallel investigations. Readers
          evaluate fragmented screenshots and debate ad infinitum without a
          persistent, shared citation tree.
        </p>

        {/* Highlighted Checkable Claim */}
        <div className="mt-6 rounded-xl border border-white/[0.12] bg-[#0f0f0f] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>Checkable Claim</span>
            <span className="text-emerald-400 font-mono text-[11px]">
              3 Sources Corroborated
            </span>
          </div>
          <p className="mt-2.5 text-base sm:text-lg font-medium text-white leading-relaxed">
            "A shared evidence graph eliminates redundant analysis, allowing
            readers to evaluate consensus and counter-arguments in one unified
            view."
          </p>
        </div>
      </div>

      {/* Evidence Breakdown Controls */}
      <div className="mt-8 border-t border-white/[0.07] pt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Evidence Analysis
          </p>

          <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.06]">
            {[
              { id: "both", label: "All Evidence" },
              { id: "supporting", label: "Supporting (2)" },
              { id: "counter", label: "Counter & Limits (1)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Evidence Grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Supporting Evidence Cards */}
          {(activeTab === "both" || activeTab === "supporting") && (
            <div className="space-y-3">
              <div className="rounded-xl border border-white/[0.07] bg-[#0c0c0c] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400">
                    Supporting Evidence
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Peer-Reviewed
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-medium text-white">
                  Oxford Internet Institute Analysis
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                  Documented that over 78% of digital debunking effort in viral
                  cycles duplicates already-published primary source
                  investigations.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-[#0c0c0c] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-400">
                    Supporting Evidence
                  </span>
                  <span className="text-[11px] text-gray-500">Field Study</span>
                </div>
                <h4 className="mt-2 text-sm font-medium text-white">
                  Digital Journalism Consortium Audit
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                  Collaborative claim tracking reduced newsroom verification
                  latency by 3.4x across participating editorial desks.
                </p>
              </div>
            </div>
          )}

          {/* Counter-Evidence Cards */}
          {(activeTab === "both" || activeTab === "counter") && (
            <div className="space-y-3">
              <div className="rounded-xl border border-white/[0.07] bg-[#0c0c0c] p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-amber-400">
                    Boundary Condition
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Critical Note
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-medium text-white">
                  Stanford Epistemic Forum Review
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                  Notes that shared graphs require robust dispute mechanisms to
                  prevent coordinated brigading on contentious or fast-breaking
                  real-time events.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Proxim Bottom Note */}
      <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500">
        <span>
          Anyone can request an analysis once • Shared for all readers
        </span>
        <span className="text-white font-medium">Proxim Platform Preview</span>
      </div>
    </div>
  );
}
