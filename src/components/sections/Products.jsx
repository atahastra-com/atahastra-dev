import { useState } from 'react'
import Reveal from '../ui/Reveal'
import { products } from '../../data/products'

export default function Products() {
  const proxim = products[0]
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0)

  return (
    <section id="proxim" className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle background glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#d4a359]/[0.04] blur-[150px]" 
        aria-hidden="true" 
      />

      <div className="section-container relative z-10">
        <Reveal>
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a359]/30 bg-[#d4a359]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a359]">
              {proxim.badge}
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {proxim.name}
            </h2>
            <p className="mt-4 text-xl font-medium text-gray-200 sm:text-2xl">
              {proxim.tagline}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
              {proxim.description}
            </p>
          </div>
        </Reveal>

        {/* Metrics Grid */}
        <Reveal delay={100}>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {proxim.metrics.map((metric, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c12]/70 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-[#d4a359]/40 hover:bg-[#12121c]/80"
              >
                <p className="font-mono text-3xl font-extrabold text-white sm:text-4xl gold-gradient-text">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Core Pillars Interactive Grid */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Four Epistemic Foundations
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Architectural breakthroughs engineered to counter algorithmic polarization and hallucinated assertions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {proxim.highlights.map((highlight, index) => {
              const isActive = activeHighlightIndex === index
              return (
                <div
                  key={index}
                  onClick={() => setActiveHighlightIndex(index)}
                  className={`group cursor-pointer rounded-2xl border p-8 transition-all duration-300 ${
                    isActive
                      ? 'border-[#d4a359]/60 bg-gradient-to-b from-[#161622] to-[#0d0d14] shadow-[0_10px_35px_rgba(212,163,89,0.15)]'
                      : 'border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.18] hover:bg-[#101017]/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#d4a359]">
                      0{index + 1}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        isActive ? 'bg-[#f59e0b]' : 'bg-white/20 group-hover:bg-white/40'
                      }`}
                    />
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-white group-hover:text-[#fff2db] transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Architecture Pipeline Callout */}
        <Reveal delay={200}>
          <div id="architecture" className="mt-28 rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0e0e16]/90 to-[#07070b]/95 p-8 sm:p-12 md:p-16 backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#d4a359]">
                  System Architecture
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  The Epistemic Ingestion Pipeline
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 md:text-base">
                  When a claim is published to Proxim, it passes through four discrete validation
                  layers before consensus anchoring. No single entity or editorial desk dictates truth;
                  evidence validity is proven through decentralized cross-citation.
                </p>

                <div className="mt-8">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4a359] hover:text-white transition-colors"
                  >
                    Request Technical Whitepaper
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-3 font-mono">
                  {[
                    {
                      layer: 'Layer 1: Claim Atomization',
                      desc: 'Complex discourse decomposed into atomic, falsifiable propositions.',
                      tag: 'AST Parser',
                    },
                    {
                      layer: 'Layer 2: Multi-Repository Query',
                      desc: 'Simultaneous scanning of arXiv, PubMed, SEC filings, and open databases.',
                      tag: 'Vector Mesh',
                    },
                    {
                      layer: 'Layer 3: Adversarial Synthesis',
                      desc: 'Autonomous discovery of counter-evidence, boundary conditions, and conflicting data.',
                      tag: 'Counter-Audit',
                    },
                    {
                      layer: 'Layer 4: Consensus Ledger',
                      desc: 'Cryptographic fingerprinting anchoring the shared evidence tree for permanent reference.',
                      tag: 'Immutable Ledger',
                    },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/[0.08] bg-black/40 p-4 transition-colors hover:border-[#d4a359]/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">{step.layer}</span>
                        <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[10px] text-[#d4a359]">
                          {step.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-gray-400 font-sans">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
