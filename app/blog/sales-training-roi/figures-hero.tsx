'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { roiCase } from './content'

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const usd2 = (n: number) => `$${n.toFixed(2)}`
const pct = (n: number) => `${Math.round(n).toLocaleString('en-US')}%`
const roiOf = (benefit: number) => ((benefit - roiCase.totalCost) / roiCase.totalCost) * 100

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (inView: boolean, at: number): CSSProperties | undefined =>
  inView ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (inView: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(inView ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const pop = (inView: boolean, at: number): CSSProperties | undefined =>
  inView ? { animation: `tl-pop 0.35s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// hero: the ROI worksheet from a real case prints in
// ------------------------------------------------------------------------------
const perPerson = roiCase.trainedLate - roiCase.controlLate
const CHAIN = [
  { label: 'Trained group, weeks 13 to 15', value: `${usd(roiCase.trainedLate)}/wk` },
  { label: 'Control group, same weeks', value: `− ${usd(roiCase.controlLate)}/wk` },
  { label: 'Difference per person', value: `${usd(perPerson)}/wk`, mark: true },
  { label: 'At 2% profit contribution', value: usd2(32.5) },
  { label: '× 46 people × 48 weeks', value: usd(roiCase.benefits) },
]
const CHAIN_AT = 0.4
const COST_AT = 3.1
const RESULT_AT = 5.4

export function RoiWorksheetHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ ROI worksheet · a published case ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Retail selling skills · 48 associates · year one</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border-2 border-ink bg-sheet p-3">
          <p className="tl-mono mb-2 border-b-2 border-ink pb-2 text-[10.5px] font-semibold text-ink">1. Attributable benefit</p>
          <ul className="space-y-1.5">
            {CHAIN.map((c, i) => (
              <li key={c.label} className="tl-line flex items-baseline justify-between gap-3 text-[12.5px]" style={print(inView, CHAIN_AT + i * 0.5)}>
                <span className="text-ink-2">{c.label}</span>
                <span
                  className={`shrink-0 font-mono font-semibold text-ink ${c.mark ? 'tl-mark' : ''}`}
                  style={c.mark && inView ? { animation: `tl-hl 0.6s ${CHAIN_AT + i * 0.5 + 0.8}s ease-out forwards` } : undefined}
                >
                  {c.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-ink bg-sheet p-3">
          <p className="tl-mono mb-2 border-b-2 border-ink pb-2 text-[10.5px] font-semibold text-ink">2. Fully loaded cost</p>
          <ul className="space-y-1.5">
            {roiCase.costs.map((c, i) => (
              <li key={c.label} className="tl-line flex items-baseline justify-between gap-3 text-[12.5px]" style={print(inView, COST_AT + i * 0.3)}>
                <span className="text-ink-2">{c.label}</span>
                <span className="shrink-0 font-mono font-semibold text-ink">{usd(c.value)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 flex justify-between border-t-2 border-ink pt-1.5 text-[12.5px] font-semibold text-ink">
            <span>Total</span>
            <CountUp value={roiCase.totalCost} start={inView} format={usd} className="font-mono" durationMs={2600} />
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 border-2 border-ink bg-paper text-center">
        {[
          { k: 'Benefit ÷ cost', v: (roiCase.benefits / roiCase.totalCost).toFixed(2) },
          { k: 'ROI', v: pct(roiOf(roiCase.benefits)) },
          { k: 'Target set first', v: '25%' },
        ].map((r, i) => (
          <div key={r.k} className="border-r-2 border-ink px-2 py-2 opacity-0 last:border-r-0 motion-reduce:opacity-100" style={pop(inView, RESULT_AT + i * 0.25)}>
            <p className="tl-mono text-[9.5px] text-ink-2 sm:text-[10.5px]">{r.k}</p>
            <p className={`font-mono text-xl font-bold sm:text-2xl ${r.k === 'ROI' ? 'text-stamp-green' : 'text-ink'}`}>{r.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-end">
        <span className="tl-stamp text-stamp-green" style={stamp(inView, RESULT_AT + 1, '-4deg')}>
          Isolated with a control group
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// three ways to read the same data: two inflate the ROI
// ------------------------------------------------------------------------------
type Read = 'naive' | 'bookings' | 'credible'

const naiveWeekly = roiCase.trainedLate - roiCase.trained[0]
const annual = (weekly: number, margin: number) => weekly * margin * roiCase.people * roiCase.weeksPerYear

const READS: Record<Read, { benefit: number; math: string; verdict: string; good: boolean }> = {
  naive: {
    benefit: annual(naiveWeekly, roiCase.margin),
    math: `Trained group only, week 1 to weeks 13 to 15: ${usd(naiveWeekly)}/wk × 2% × 46 × 48`,
    verdict: 'Inflated: the untrained stores grew too',
    good: false,
  },
  bookings: {
    benefit: annual(perPerson, 1),
    math: `Versus control, but counted as sales: ${usd(perPerson)}/wk × 46 × 48`,
    verdict: 'Inflated: counts revenue, not profit',
    good: false,
  },
  credible: {
    benefit: roiCase.benefits,
    math: `Versus control, at 2% profit: ${usd(perPerson)}/wk × 2% × 46 × 48`,
    verdict: 'Credible: the ROI Institute’s method',
    good: true,
  },
}
const CHART_MAX = 14000

export function ThreeReadsFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [read, setRead] = useState<Read>('naive')
  const r = READS[read]
  return (
    <Figure
      title="Same sales data, three ROI numbers: only one survives a CFO"
      caption="Weekly sales per associate after a three-day selling skills program, trained stores against similar untrained stores. The first two readings are our illustration of common mistakes using the case’s own numbers; the third is the published calculation. Cost in every reading: $32,984."
      source="ROI Institute, Measuring the Success of Sales Training (Patti P. Phillips, March 2024)."
    >
      <div ref={ref}>
        <div className="mb-3 flex items-end gap-1 border-b-2 border-ink sm:gap-2" style={{ height: 176 }}>
          {roiCase.weeks.map((w, i) => (
            <div key={w} className={`flex h-full flex-1 items-end justify-center gap-0.5 sm:gap-1 ${i === 3 ? 'ml-3 sm:ml-6' : ''}`}>
              {[
                { v: roiCase.trained[i], fill: 'bg-butter' },
                { v: roiCase.control[i], fill: 'bg-sky' },
              ].map((b, j) => (
                <div
                  key={j}
                  className={`w-1/2 max-w-7 border-2 border-b-0 border-ink transition-[height] duration-1000 ease-out motion-reduce:transition-none ${b.fill}`}
                  style={{ height: inView ? `${(b.v / CHART_MAX) * 100}%` : '0%', transitionDelay: `${i * 120 + j * 60}ms` }}
                  title={usd(b.v)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mb-4 flex gap-1 sm:gap-2">
          {roiCase.weeks.map((w, i) => (
            <p key={w} className={`tl-mono flex-1 text-center text-[9.5px] text-ink-2 ${i === 3 ? 'ml-3 sm:ml-6' : ''}`}>
              Wk {w}
            </p>
          ))}
        </div>
        <div className="tl-mono mb-5 flex flex-wrap gap-4 text-[10.5px] text-ink-2">
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 border-[1.5px] border-ink bg-butter" />Trained</span>
          <span className="flex items-center gap-1.5"><span className="h-3 w-3 border-[1.5px] border-ink bg-sky" />Control, not trained</span>
          <span>Weeks 4 to 12 not published</span>
        </div>
        <Segmented<Read>
          label="Way of reading the data"
          value={read}
          onChange={setRead}
          options={[
            { value: 'naive', label: 'Before vs after' },
            { value: 'bookings', label: 'Count sales' },
            { value: 'credible', label: 'Control, at margin' },
          ]}
        />
        <div className={`mt-4 border-2 border-ink p-4 ${r.good ? 'bg-mint shadow-[5px_5px_0_var(--color-ink)]' : 'bg-paper'}`}>
          <p className="text-[13px] text-ink-2">{r.math}</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <p className="text-sm text-ink">
              Benefit <CountUp value={r.benefit} start={inView} format={usd} className="font-mono font-bold" />
              <span className="mx-2 text-ink-2">·</span>
              ROI <CountUp value={roiOf(r.benefit)} start={inView} format={pct} className="font-mono text-2xl font-bold" />
            </p>
            <span
              key={read}
              className={`tl-stamp whitespace-normal ${r.good ? 'text-stamp-green' : 'text-stamp-red'}`}
              style={stamp(inView, 0.15, r.good ? '-4deg' : '4deg')}
            >
              {r.verdict}
            </span>
          </div>
        </div>
      </div>
    </Figure>
  )
}
