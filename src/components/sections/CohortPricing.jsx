export default function CohortPricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 border-t border-white/[0.08] bg-[#07080c]"
    >
      <div className="section-container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full jasper-pill-badge px-4 py-1 text-xs font-semibold uppercase tracking-wider">
            ✨ Alpha Cohort Access
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Choose Your Epistemic Tier
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            Proxim is currently onboarding Cohort 1 members. Individual alpha
            spots are 100% free; institutional clusters include dedicated
            private graph infrastructure.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 max-w-5xl mx-auto md:grid-cols-2">
          {/* Card 1: Individual Researcher */}
          <div className="rounded-3xl border border-white/[0.1] bg-[#0e1017] p-8 sm:p-10 flex flex-col justify-between transition-all hover:border-white/[0.2]">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-300">
                  Individual Researcher
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase">
                  Free in Alpha
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Researcher & Scholar
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                For independent researchers, investigative journalists, authors,
                and curious thinkers.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-gray-400 font-medium">
                  / month during Private Alpha
                </span>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-gray-300">
                {[
                  "Full access to Proxim Document Canvas",
                  "Up to 100 automated claim decomposition queries/mo",
                  "arXiv, PubMed, and OpenAlex citation querying",
                  "Public evidence graph indexing and cross-referencing",
                  "Export verified trees to PDF, Markdown, and DOI links",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06]">
              <a
                href="#waitlist"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/[0.15] bg-white/[0.05] py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.1] hover:border-white/[0.3]"
              >
                Join Individual Waitlist
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Enterprise & Institutional */}
          <div className="relative rounded-3xl border border-[#ff52a8]/50 bg-gradient-to-b from-[#161222] to-[#0c0d15] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_60px_rgba(255,82,168,0.2)]">
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 right-8">
              <span className="rounded-full bg-gradient-to-r from-[#b318ff] to-[#ff52a8] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
                Institutional Cohort
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ff52a8]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff8ad4]">
                  University & Enterprise
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Institute & Enterprise Hub
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                For newsroom desks, university libraries, corporate R&D, and
                policy think tanks.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  Custom
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  / dedicated infrastructure cluster
                </span>
              </div>

              <ul className="mt-8 space-y-3.5 text-sm text-gray-200">
                {[
                  "Everything in Researcher, plus unlimited claim audits",
                  "Dedicated private graph partitioning (SOC2 compliant)",
                  "Custom proprietary database & internal repository connector",
                  "Multi-seat collaboration with real-time editorial reviews",
                  "Direct REST & GraphQL API access with SLA uptime",
                  "Dedicated epistemic solutions engineer & training",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#ff52a8] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08]">
              <a
                href="#waitlist"
                className="jasper-btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg active:scale-98"
              >
                Request Enterprise Cohort Access
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
