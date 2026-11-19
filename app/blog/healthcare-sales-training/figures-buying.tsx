'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// compliance check: six things a pharma rep might do
// ------------------------------------------------------------------------------
type Verdict = 'ok' | 'no' | 'public'

const CASES: { act: string; verdict: Verdict; why: string }[] = [
  {
    act: 'Bring a modest lunch to a clinic for an in-office product presentation',
    verdict: 'ok',
    why: 'Allowed when it is incidental to an informational presentation in an office or hospital, and attendees will interact with the rep.',
  },
  {
    act: 'Host physicians at a restaurant for a product talk you give yourself',
    verdict: 'no',
    why: 'Rep-provided meals with informational presentations are limited to in-office or in-hospital settings.',
  },
  {
    act: 'Pay for wine at a company speaker program',
    verdict: 'no',
    why: 'Since January 2022, companies may not pay for or provide alcohol at speaker programs.',
  },
  {
    act: 'Hold the speaker program at a luxury resort',
    verdict: 'no',
    why: 'The venue should not be extravagant or the main attraction of the event.',
  },
  {
    act: 'Choose speakers by how much business they bring in',
    verdict: 'no',
    why: 'Speaker selection should not take into account the volume or value of past or expected business.',
  },
  {
    act: 'A lunch you paid for can later appear in a public federal database',
    verdict: 'public',
    why: 'Drug and device makers report payments to physicians to CMS Open Payments, which publishes them in a public database.',
  },
]

const STAMP: Record<Verdict, { label: string; tone: string }> = {
  ok: { label: 'OK under the code', tone: 'text-stamp-green' },
  no: { label: 'Not under the code', tone: 'text-stamp-red' },
  public: { label: 'Reported publicly', tone: 'text-signal' },
}

export function CodeCheck() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [open, setOpen] = useState<Set<number>>(new Set())
  const reveal = (i: number) => setOpen((prev) => new Set(prev).add(i))
  const all = open.size === CASES.length

  return (
    <Figure
      title="Can a pharma rep do this? Tap each card to check"
      caption="Examples written for this guide and checked against the PhRMA Code as revised effective January 2022, which applies to pharmaceutical companies that adopt it; device makers follow the AdvaMed Code. Your company’s own policy may be stricter. Not legal advice."
      source="Loeb & Loeb summary of the 2022 PhRMA Code revisions (August 2021); CMS Open Payments (November 2026)."
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-2">
          <span className="font-mono font-bold text-ink">{open.size}</span> of {CASES.length} checked
        </p>
        <button
          type="button"
          onClick={() => setOpen(new Set(CASES.map((_, i) => i)))}
          disabled={all}
          className="tl-btn tl-btn-sm disabled:cursor-default disabled:opacity-40"
        >
          Check all
        </button>
      </div>
      <div ref={ref} className="grid gap-3 sm:grid-cols-2">
        {CASES.map((c, i) => {
          const shown = open.has(i)
          const s = STAMP[c.verdict]
          return (
            <button
              key={c.act}
              type="button"
              onClick={() => reveal(i)}
              aria-expanded={shown}
              className={`flex cursor-pointer flex-col items-start gap-2 border-2 border-ink p-3.5 text-left transition-colors ${
                shown ? 'bg-paper' : 'bg-sheet hover:bg-butter'
              } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="text-[14.5px] font-semibold leading-snug text-ink">{c.act}</p>
              {shown ? (
                <>
                  <span className={`tl-stamp ${i % 2 ? 'tl-stamp-2' : 'tl-stamp-1'} ${s.tone}`} style={{ animation: STAMP_IN }}>
                    {s.label}
                  </span>
                  <span className="blog-fade-up text-[13px] text-ink-2" style={{ animationDelay: '200ms' }}>
                    {c.why}
                  </span>
                </>
              ) : (
                <span className="tl-mono text-[10.5px] text-ink-2">Tap to check →</span>
              )}
            </button>
          )
        })}
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// value analysis: three tiers, three clocks
// ------------------------------------------------------------------------------
type Tier = '1' | '2' | '3'
const MAX_DAYS = 120

const TIERS: Record<Tier, { name: string; days: number; examples: string[]; bring: string; who: string }> = {
  '1': {
    name: 'Low complexity',
    days: 30,
    examples: ['Bandages', 'Water pitchers', 'Incise drapes', 'Oxygen and suction tubing'],
    bring: 'Product details, supporting documentation and pricing. Usually a sample, no trial.',
    who: 'Value analysis team with a nurse or physician',
  },
  '2': {
    name: 'Moderate complexity',
    days: 90,
    examples: ['Safety venipuncture supplies', 'Oxygen masks', 'Syringes and dressings', 'Generic pharmaceuticals'],
    bring: 'Product details, documentation and pricing. Expect a check of usage data and literature, and a focused trial in some cases.',
    who: 'Value analysis team, with a product trial if needed',
  },
  '3': {
    name: 'High complexity',
    days: 120,
    examples: ['Implantable devices', 'Surgical robots', 'Ventilators', 'CT and MRI machines'],
    bring: 'Clinical studies, regulatory approvals, cost details and pricing. Expect the hospital to model workflow changes and total cost of ownership.',
    who: 'Clinicians, finance, operations, supply chain and IT, then the committee or executives',
  },
}

export function ValueAnalysisTiers() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [tier, setTier] = useState<Tier>('3')
  const t = TIERS[tier]

  return (
    <Figure
      title="How long a hospital takes to decide, by product complexity"
      caption="Target decision times from the Association of Healthcare Value Analysis Professionals’ standardized review framework. They are recommended maximums for a hospital’s review, not including implementation; real timelines vary by system."
      source="AHVAP, Position Statement on Standardized Product Review Process (2025)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Tier>
            label="Product tier"
            value={tier}
            onChange={setTier}
            options={[
              { value: '1', label: 'Tier 1' },
              { value: '2', label: 'Tier 2' },
              { value: '3', label: 'Tier 3' },
            ]}
          />
        </div>
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <p className="font-semibold text-ink">{t.name}</p>
          <p className="font-mono text-sm text-ink-2">
            up to <CountUp value={t.days} start={inView} className="text-2xl font-bold text-ink" /> days
          </p>
        </div>
        <div className="relative h-7 border-2 border-ink bg-paper">
          <div
            className="h-full border-r-2 border-ink bg-butter transition-[width] duration-700 ease-out motion-reduce:transition-none"
            style={{ width: inView ? `${(t.days / MAX_DAYS) * 100}%` : '0%' }}
          />
          {[30, 90].map((d) => (
            <span key={d} className="absolute inset-y-0 border-l-2 border-dashed border-ink/30" style={{ left: `${(d / MAX_DAYS) * 100}%` }} />
          ))}
        </div>
        <div className="tl-mono relative mt-1 h-4 text-[10px] text-ink-2" aria-hidden>
          {[0, 30, 90, 120].map((d) => (
            <span key={d} className="absolute -translate-x-1/2 first:translate-x-0 last:-translate-x-full" style={{ left: `${(d / MAX_DAYS) * 100}%` }}>
              {d}d
            </span>
          ))}
        </div>
        <div key={tier} className="blog-fade-up mt-4 grid gap-3 sm:grid-cols-2">
          <div className="border-2 border-ink bg-sheet p-3.5">
            <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">Examples</p>
            <div className="flex flex-wrap gap-1.5">
              {t.examples.map((e) => (
                <span key={e} className="border-[1.5px] border-ink bg-sky-soft px-1.5 py-0.5 text-[12.5px] text-ink">
                  {e}
                </span>
              ))}
            </div>
            <p className="tl-mono mb-1 mt-3 text-[10.5px] font-semibold text-ink-2">Who reviews</p>
            <p className="text-[13.5px] text-ink">{t.who}</p>
          </div>
          <div className="border-2 border-ink bg-sheet p-3.5 shadow-[5px_5px_0_var(--color-ink)]">
            <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">What the rep must bring</p>
            <p className="text-[14px] text-ink">{t.bring}</p>
          </div>
        </div>
      </div>
    </Figure>
  )
}
