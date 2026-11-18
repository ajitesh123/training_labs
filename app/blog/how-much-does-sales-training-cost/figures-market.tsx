'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { rates } from './content'

// ------------------------------------------------------------------------------
// hero: the price staircase
// ------------------------------------------------------------------------------
const RUNGS = [
  { label: 'Free course', price: '$0', height: 'h-[6%]', delay: 'delay-0' },
  { label: 'Self-paced', price: '$297', height: 'h-[18%]', delay: 'delay-100' },
  { label: 'Cohort seat', price: '$1,500', height: 'h-[32%]', delay: 'delay-200' },
  { label: 'Half-day workshop', price: '$8k to $12k', height: 'h-[47%]', delay: 'delay-300' },
  { label: 'Team program', price: '$30,000', height: 'h-[63%]', delay: 'delay-500' },
  { label: 'Managed program', price: '$120k to $250k/yr', height: 'h-[80%]', delay: 'delay-700' },
] as const

export function PriceStaircaseHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1)
  return (
    <div
      ref={ref}
      className="relative mb-12 overflow-hidden rounded-2xl bg-[var(--blog-ink)] px-4 pb-5 pt-8 sm:px-8"
    >
      <div className="blog-float absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--blog-accent-blue)]/30 blur-3xl" />
      <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-[var(--blog-accent-cyan)]/20 blur-3xl" />
      <p className="relative mb-6 text-xs font-medium uppercase tracking-widest text-white/50">
        What sales training costs, 2026
      </p>
      <div className="relative flex h-56 items-end gap-1.5 sm:h-64 sm:gap-3">
        {RUNGS.map((r) => (
          <div key={r.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={`relative rounded-t-lg bg-gradient-to-t from-[var(--blog-accent-blue)]/40 to-[var(--blog-accent-blue)] transition-all duration-1000 ease-out motion-reduce:transition-none ${r.delay} ${
                inView ? `${r.height} opacity-100` : 'h-0 opacity-0'
              }`}
            >
              <span className="absolute inset-x-0 bottom-full mb-1 text-center text-[10px] font-semibold leading-tight text-white sm:text-sm">
                {r.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-2 flex gap-1.5 sm:gap-3">
        {RUNGS.map((r) => (
          <p key={r.label} className="flex-1 text-center text-[9px] leading-tight text-white/60 sm:text-xs">
            {r.label}
          </p>
        ))}
      </div>
      <div className="relative mt-3 grid grid-cols-2 gap-3 text-center text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
        <p className="border-t border-white/15 pt-2">Priced per person</p>
        <p className="border-t border-white/15 pt-2">Priced per team</p>
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

export function PriceVisibilityGrid() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [filter, setFilter] = useState<GridFilter>('all')
  const quoteOnly = VENDORS.filter((v) => !v.price).length
  const dim = (v: Vendor) =>
    (filter === 'published' && !v.price) || (filter === 'quote' && !!v.price)

  return (
    <Figure
      title="Who publishes a price? Twelve names buyers compare."
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
          <p className="text-sm text-[var(--blog-text-secondary)]">
            <CountUp value={quoteOnly} start={inView} className="text-lg font-bold text-black" /> of{' '}
            {VENDORS.length} quote only
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {VENDORS.map((v, i) => (
            <div
              key={v.name}
              className={inView ? 'blog-fade-up' : 'opacity-0'}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div
                className={`h-full rounded-xl border p-3 transition-all duration-500 ${
                  dim(v) ? 'scale-95 opacity-30' : ''
                } ${
                  v.price
                    ? 'border-[var(--blog-accent-green)]/40 bg-white'
                    : 'border-dashed border-[var(--blog-border-default)] bg-white/60'
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider text-[var(--blog-text-muted)]">
                  {v.kind === 'ai' ? 'AI roleplay' : 'Program'}
                </p>
                <p className="text-sm font-semibold text-black">{v.name}</p>
                <p
                  className={`mt-1 text-xs ${v.price ? 'font-medium text-[var(--blog-accent-green)]' : 'text-[var(--blog-text-muted)]'}`}
                >
                  {v.price ?? 'Quote on request'}
                </p>
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
      <div ref={ref} className="relative overflow-hidden rounded-xl bg-white ring-1 ring-[var(--blog-border-default)]">
        <div className="relative flex h-28 items-end justify-center">
          <div
            className={`absolute bottom-0 h-24 w-60 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-400 transition-opacity duration-700 [clip-path:polygon(14%_100%,34%_22%,50%_0,63%_30%,86%_100%)] ${inView ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="relative mb-3 rounded-lg bg-black px-3 py-1.5 text-center text-white shadow-lg">
            <p className="text-[10px] uppercase tracking-wider text-white/60">On the invoice</p>
            <p className="text-lg font-bold">
              <CountUp value={fees} start={inView} format={usd} />
            </p>
          </div>
        </div>
        <div className="relative bg-gradient-to-b from-sky-200/70 via-sky-100/60 to-blue-50 px-4 pb-5 pt-6">
          <div
            className={`absolute inset-x-0 top-0 h-1 origin-left bg-[var(--blog-accent-cyan)] transition-transform duration-1000 ${inView ? 'scale-x-100' : 'scale-x-0'}`}
          />
          <div
            className={`absolute left-1/2 top-0 h-full w-[92%] -translate-x-1/2 bg-gradient-to-b from-sky-400/50 to-sky-600/30 transition-opacity delay-300 duration-1000 [clip-path:polygon(32%_0,68%_0,96%_38%,84%_100%,16%_100%,4%_42%)] ${inView ? 'opacity-100' : 'opacity-0'}`}
          />
          <p className="relative mb-3 text-center text-[10px] font-semibold uppercase tracking-wider text-sky-900/80">
            Below the waterline
          </p>
          <div className="relative grid gap-2 sm:grid-cols-2">
            {below.map((b, i) => (
              <div
                key={b.label}
                className={`rounded-lg bg-white/80 p-3 ring-1 ring-sky-200 backdrop-blur ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${400 + i * 150}ms` }}
              >
                <p className="text-xs text-[var(--blog-text-secondary)]">{b.label}</p>
                <p className="text-sm font-semibold text-black">
                  {b.value !== undefined ? (
                    <CountUp value={b.value} start={inView} format={usd} />
                  ) : (
                    b.note
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  )
}
