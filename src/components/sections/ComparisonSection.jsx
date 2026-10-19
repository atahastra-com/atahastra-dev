import { useState } from "react";

export default function ComparisonSection() {
  const [viewMode, setViewMode] = useState("sideBySide"); // 'sideBySide' or 'legacy' or 'proxim'

  return (
    <section className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#090b10]">
      <div className="section-container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full jasper-pill-badge px-4 py-1 text-xs font-semibold uppercase tracking-wider">
            ✨ The Epistemic Shift
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Teams Are Leaving Circular Debate Behind
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            See the transformative difference between legacy digital discourse
            and Proxim's verifiable knowledge graph.
          </p>
        </div>

        {/* View Toggle on Mobile/Tablet */}
        <div className="mt-10 flex sm:hidden justify-center">
          <div className="flex p-1 rounded-xl bg-[#121520] border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setViewMode("legacy")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                viewMode === "legacy"
                  ? "bg-rose-500/20 text-rose-300"
                  : "text-gray-400"
              }`}
            >
              Without Proxim
            </button>
            <button
              type="button"
              onClick={() => setViewMode("proxim")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                viewMode === "proxim"
                  ? "bg-gradient-to-r from-[#b318ff] to-[#ff52a8] text-white shadow-md"
                  : "text-gray-400"
              }`}
            >
              With Proxim
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: The Legacy Web */}
          <div
            className={`rounded-3xl border border-rose-500/20 bg-[#120e14]/70 p-8 sm:p-10 transition-all ${
              viewMode === "proxim" ? "hidden sm:block" : "block"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-rose-500/20 border border-rose-500/30 px-3 py-1 text-xs font-bold text-rose-300 uppercase tracking-wider">
                Without Proxim
              </span>
              <span className="text-2xl">❌</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              The Fragmented Web
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              How knowledge currently decays in traditional feeds, forums, and
              chat groups.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Duplicate Debunking",
                  desc: "Thousands of users separately re-investigate the same screenshot or claim from scratch.",
                },
                {
                  title: "Engagement Rage-Bait",
                  desc: "Algorithms artificially amplify polarization and extremist takes to juice daily active screen time.",
                },
                {
                  title: "Opaque Citations",
                  desc: "Assertions are backed by biased blogs, out-of-context quotes, or broken links with zero accountability.",
                },
                {
                  title: "Echo Chamber Insulation",
                  desc: "Counter-evidence is buried or mocked, preventing readers from understanding critical nuance.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-rose-400 font-bold mt-0.5">✕</span>
                  <div>
                    <span className="font-semibold text-rose-200">
                      {item.title}:{" "}
                    </span>
                    <span className="text-gray-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: The Proxim Solution */}
          <div
            className={`relative rounded-3xl border border-[#ff52a8]/40 bg-gradient-to-b from-[#181224] to-[#0e0f18] p-8 sm:p-10 shadow-[0_15px_50px_rgba(179,24,255,0.2)] transition-all ${
              viewMode === "legacy" ? "hidden sm:block" : "block"
            }`}
          >
            {/* Ambient Glow */}
            <div
              className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[#ff52a8]/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gradient-to-r from-[#b318ff] via-[#ff52a8] to-[#ffbe1a] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                With Proxim Canvas
              </span>
              <span className="text-2xl">✨</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              The Epistemic Engine
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              How modern research teams and critical thinkers construct verified
              knowledge.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Zero Redundancy",
                  desc: "A claim is verified and mapped once. Millions access the public evidence tree instantly.",
                },
                {
                  title: "Autonomous Multi-Repository Agents",
                  desc: "AI agents query arXiv, PubMed, and patent registries in parallel, saving 90% of manual effort.",
                },
                {
                  title: "Transparent Provenance",
                  desc: "Direct DOI links, dataset repositories, and empirical excerpts with cryptographic fingerprints.",
                },
                {
                  title: "Bipartisan Counter-Evidence",
                  desc: "Boundary limitations and dissenting peer perspectives are automatically balanced side-by-side.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-white">
                      {item.title}:{" "}
                    </span>
                    <span className="text-gray-300">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
