'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { rates } from './content'

// ------------------------------------------------------------------------------
// hero: the price staircase
// ------------------------------------------------------------------------------
// Butter steps are priced per person, sky steps per team: colour carries the unit.
const RUNGS = [
  { label: 'Free course', price: '$0', height: 'h-[6%]', delay: 'delay-0', fill: 'bg-butter' },
  { label: 'Self-paced', price: '$297', height: 'h-[18%]', delay: 'delay-100', fill: 'bg-butter' },
  { label: 'Cohort seat', price: '$1,500', height: 'h-[32%]', delay: 'delay-200', fill: 'bg-butter' },
  { label: 'Half-day workshop', price: '$8k to $12k', height: 'h-[47%]', delay: 'delay-300', fill: 'bg-sky' },
  { label: 'Team program', price: '$30,000', height: 'h-[63%]', delay: 'delay-500', fill: 'bg-sky' },
  { label: 'Managed program', price: '$120k to $250k/yr', height: 'h-[80%]', delay: 'delay-700', fill: 'bg-sky' },
] as const

export function PriceStaircaseHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-5 pt-6 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <p className="tl-mono mb-6 text-[11.5px] font-semibold text-ink-2">[ What sales training costs, 2026 ]</p>
      <div className="flex h-56 items-end gap-1.5 border-b-2 border-ink sm:h-64 sm:gap-3">
        {RUNGS.map((r) => (
          <div key={r.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={`relative border-2 border-b-0 border-ink transition-all duration-1000 ease-out motion-reduce:transition-none ${r.fill} ${r.delay} ${
                inView ? `${r.height} opacity-100` : 'h-0 opacity-0'
              }`}
            >
              <span className="absolute inset-x-0 bottom-full mb-1.5 text-center font-mono text-[10px] font-semibold leading-tight text-ink sm:text-[13px]">
                {r.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5 sm:gap-3">
        {RUNGS.map((r) => (
          <p key={r.label} className="tl-mono flex-1 text-center text-[8.5px] leading-tight text-ink-2 sm:text-[10.5px]">
            {r.label}
          </p>
        ))}
      </div>
      <div className="tl-mono mt-4 grid grid-cols-2 gap-3 text-center text-[10px] font-semibold sm:text-[11px]">
        <p className="border-2 border-ink bg-butter py-1">Priced per person</p>
        <p className="border-2 border-ink bg-sky py-1">Priced per team</p>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// who publishes a price
// ------------------------------------------------------------------------------
type Vendor = { name: string; price?: string; kind: 'program' | 'ai' }

const VENDORS: Vendor[] = [
  { name: 'Sandler', kind: 'program' },
  { name: 'Challenger', kind: 'program' },
  { name: 'Korn Ferry (Miller Heiman)', kind: 'program' },
  { name: 'RAIN Group', kind: 'program' },
  { name: 'NEPQ / 7th Level', kind: 'program' },
  { name: 'MEDDIC Academy', price: '$297 full course', kind: 'program' },
  { name: 'Winning by Design', price: '$1,500 open course', kind: 'program' },
  { name: 'Dale Carnegie', price: '$1,995 to $2,295 a seat', kind: 'program' },
  { name: 'Hyperbound', kind: 'ai' },
  { name: 'Second Nature', kind: 'ai' },
  { name: 'Yoodli', price: 'From $8 a month', kind: 'ai' },
  { name: 'Tough Tongue AI', price: 'From $20 a month', kind: 'ai' },
]

type GridFilter = 'all' | 'published' | 'quote'

const STAMP = 'inline-block border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider'

export function PriceVisibilityGrid() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [filter, setFilter] = useState<GridFilter>('all')
  const quoteOnly = VENDORS.filter((v) => !v.price).length
  const dim = (v: Vendor) => (filter === 'published' && !v.price) || (filter === 'quote' && !!v.price)

  return (
    <Figure
      title="Who publishes a price? Twelve names buyers compare"
      caption="Methodology programs and AI roleplay tools together. Prices are list prices for one person or one account, not team quotes."
      source="Vendor pages read November 2026; MEDDIC Academy and Dale Carnegie via TrainingCost.com (September 2026); Winning by Design via Durham Lane (September 2026); Second Nature via Quotain (November 2026)."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<GridFilter>
            label="Filter vendors"
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all', label: 'All' },
              { value: 'published', label: 'Publishes a price' },
              { value: 'quote', label: 'Quote only' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={quoteOnly} start={inView} className="font-mono text-lg font-bold text-ink" /> of{' '}
            {VENDORS.length} quote only
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {VENDORS.map((v, i) => (
            <div key={v.name} className={inView ? 'blog-fade-up' : 'opacity-0'} style={{ animationDelay: `${i * 70}ms` }}>
              <div
                className={`flex h-full flex-col gap-2 border-2 border-ink bg-paper p-3 transition-all duration-500 ${
                  dim(v) ? 'scale-95 opacity-30' : ''
                }`}
              >
                <p className="tl-mono text-[10px] text-ink-2">{v.kind === 'ai' ? 'AI roleplay' : 'Program'}</p>
                <p className="text-sm font-semibold leading-snug text-ink">{v.name}</p>
                {v.price ? (
                  <>
                    <span className={`${STAMP} -rotate-2 self-start text-stamp-green`}>List price</span>
                    <p className="font-mono text-xs font-semibold text-ink">{v.price}</p>
                  </>
                ) : (
                  <span className={`${STAMP} rotate-2 self-start text-stamp-red`}>Quote only</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// the iceberg: what the invoice leaves out
// ------------------------------------------------------------------------------
const ICEBERG_REPS = 10
const ICEBERG_SEAT = 1500
const ICEBERG_HOURS = 16
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export function InvoiceIceberg() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const fees = ICEBERG_REPS * ICEBERG_SEAT
  const wages = ICEBERG_REPS * ICEBERG_HOURS * rates.repHourly
  const below = [
    { label: `Rep wages for ${ICEBERG_HOURS} hours in training`, value: wages },
    { label: 'Selling time lost while reps are out', note: 'Depends on your pipeline' },
    { label: 'Manager prep, follow-up and coaching', note: 'Never on the invoice' },
    { label: 'Travel and rooms, if in person', note: 'Varies' },
  ]

  return (
    <Figure
      title="Ten reps, one two-day program: what the invoice shows and what it costs"
      caption={`Example inputs: ${ICEBERG_REPS} reps, a $1,500 seat (Winning by Design’s published open-course price), and ${ICEBERG_HOURS} hours of training. Wages use the BLS median for sales representatives of services, $33.65 an hour, before benefits or commission, so the true figure is higher.`}
      source="BLS Occupational Employment and Wage Statistics, May 2025."
    >
      <div ref={ref} className="relative overflow-hidden border-2 border-ink bg-paper">
        <div className="relative flex h-28 items-end justify-center">
          <svg
            viewBox="0 0 240 96"
            aria-hidden
            className={`absolute bottom-0 left-1/2 h-24 w-60 -translate-x-1/2 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            <polygon points="34,96 82,21 120,1 151,29 206,96" fill="var(--color-sheet)" stroke="var(--color-ink)" strokeWidth="2" />
          </svg>
          <div className="relative mb-3 border-2 border-ink bg-butter px-3 py-1.5 text-center shadow-[3px_3px_0_var(--color-ink)]">
            <p className="tl-mono text-[10px] font-semibold text-ink-2">On the invoice</p>
            <p className="font-mono text-lg font-bold text-ink">
              <CountUp value={fees} start={inView} format={usd} />
            </p>
          </div>
        </div>
        <div className="relative border-t-2 border-ink bg-sky-soft px-4 pb-5 pt-6">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full">
            <polygon
              points="30,0 70,0 97,38 85,100 15,100 3,42"
              fill="var(--color-sky)"
              fillOpacity="0.45"
              stroke="var(--color-ink)"
              strokeWidth="2"
              strokeDasharray="6 5"
              vectorEffect="non-scaling-stroke"
              className={`transition-opacity delay-300 duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
            />
          </svg>
          <p className="tl-mono relative mb-3 text-center text-[10.5px] font-semibold text-ink">Below the waterline</p>
          <div className="relative grid gap-2 sm:grid-cols-2">
            {below.map((b, i) => (
              <div
                key={b.label}
                className={`border-2 border-ink bg-sheet p-3 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${400 + i * 150}ms` }}
              >
                <p className="text-xs text-ink-2">{b.label}</p>
                <p className="text-sm font-semibold text-ink">
                  {b.value !== undefined ? <CountUp value={b.value} start={inView} format={usd} className="font-mono" /> : b.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  )
}
