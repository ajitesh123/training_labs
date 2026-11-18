'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { team } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// hero: one month of practice on a ten-seat team
// ------------------------------------------------------------------------------
// The chart tops out at 240 minutes so the 180-minute allowance sits at 75%.
const SCALE = 240

export function TeamUsageHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const paid = team.minutes.length * team.seatMinutes
  const used = team.minutes.reduce((s, m) => s + m, 0)
  const bill = team.minutes.length * team.seatPrice
  const linePct = (team.seatMinutes / SCALE) * 100

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-5 pt-6 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ One month, ten seats, uneven practice ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Minutes practiced per rep</p>
      </div>
      <div className="relative h-48 border-b-2 border-ink sm:h-56">
        <div
          className={`absolute inset-x-0 z-10 border-t-2 border-dashed border-ink transition-opacity delay-700 duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
          style={{ bottom: `${linePct}%` }}
        >
          <span className="tl-mono absolute -top-6 left-0 bg-sheet px-1 text-[9.5px] font-semibold text-ink sm:text-[10.5px]">
            {team.seatMinutes} min paid per seat
          </span>
        </div>
        <div className="flex h-full items-end gap-1 sm:gap-2.5">
          {team.minutes.map((m, i) => (
            <div key={i} className="flex h-full flex-1 flex-col justify-end">
              <span
                className={`mb-1 text-center font-mono text-[9.5px] font-semibold text-ink transition-opacity duration-500 sm:text-[11px] ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${600 + i * 90}ms` }}
              >
                {m}
              </span>
              <div
                className={`border-2 border-b-0 border-ink transition-[height] duration-1000 ease-out motion-reduce:transition-none ${m === 0 ? 'bg-peach' : 'bg-sky'}`}
                style={{ height: inView ? `${Math.max((m / SCALE) * 100, 1.5)}%` : '0%', transitionDelay: `${i * 90}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-1.5 flex gap-1 sm:gap-2.5">
        {team.minutes.map((_, i) => (
          <p key={i} className="tl-mono flex-1 text-center text-[8.5px] text-ink-2 sm:text-[10px]">
            R{i + 1}
          </p>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-[1fr_1fr_1.3fr] sm:gap-3">
        <div className="border-2 border-ink bg-sky-soft p-2.5">
          <p className="tl-mono text-[9.5px] font-semibold text-ink-2 sm:text-[10.5px]">Minutes paid for</p>
          <CountUp value={paid} start={inView} className="font-mono text-xl font-bold text-ink sm:text-2xl" />
        </div>
        <div className="border-2 border-ink bg-butter p-2.5">
          <p className="tl-mono text-[9.5px] font-semibold text-ink-2 sm:text-[10.5px]">Minutes practiced</p>
          <CountUp value={used} start={inView} className="font-mono text-xl font-bold text-ink sm:text-2xl" />
        </div>
        <div className="relative col-span-2 flex items-center justify-between gap-2 border-2 border-ink bg-sheet p-2.5 sm:col-span-1">
          <div>
            <p className="tl-mono text-[9.5px] font-semibold text-ink-2 sm:text-[10.5px]">Per practiced minute</p>
            <CountUp
              value={bill / used}
              start={inView}
              format={(n) => `$${n.toFixed(2)}`}
              className="font-mono text-xl font-bold text-ink sm:text-2xl"
            />
            <p className="text-[11px] text-ink-2">List: ${(team.seatPrice / team.seatMinutes).toFixed(2)}</p>
          </div>
          <span
            className="tl-stamp text-stamp-red"
            style={inView ? { animation: STAMP_IN, animationDelay: '1.9s' } : undefined}
          >
            3x list
          </span>
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// four pricing units, and which one fits a practice pattern
// ------------------------------------------------------------------------------
type Pattern = 'steady' | 'uneven' | 'bursty'
type LaneKey = 'seat' | 'pool' | 'block' | 'session'
type Lane = {
  key: LaneKey
  name: string
  unit: string
  examples: { name: string; price: string }[]
  watch: string
}

const LANES: Lane[] = [
  {
    key: 'seat',
    name: 'Per seat',
    unit: 'A flat fee per rep. Practice is not metered.',
    examples: [
      { name: 'SellMeThisPen Core', price: '$99 to $179 a seat' },
      { name: 'PitchMonster', price: 'Quoted per seat' },
      { name: 'Hyperbound', price: 'Quoted per user' },
    ],
    watch: 'Seats nobody uses',
  },
  {
    key: 'pool',
    name: 'Seat + minute pool',
    unit: 'Each seat adds minutes to one team pool.',
    examples: [
      { name: 'Quotain Starter', price: '$50 a seat, 180 min' },
      { name: 'Kendo Pro', price: '$55 a seat, 180 min' },
    ],
    watch: 'Pools that reset monthly',
  },
  {
    key: 'block',
    name: 'Minute block',
    unit: 'A monthly block of minutes, with a seat cap.',
    examples: [
      { name: 'Tough Tongue AI Business', price: '$299 for 2,990 min' },
      { name: 'Tough Tongue AI Enterprise', price: '$0.07 a minute' },
    ],
    watch: 'A meter reps can see',
  },
  {
    key: 'session',
    name: 'Sessions or credits',
    unit: 'A count of roleplays or a credit balance.',
    examples: [
      { name: 'Yoodli Pro', price: '$8, 10 roleplays a week' },
      { name: 'Outdoo Free', price: '60 minutes of credits' },
    ],
    watch: 'Caps that punish retries',
  },
]

const FIT: Record<Pattern, { note: string; fits: LaneKey[] }> = {
  steady: {
    note: 'Every rep practices a similar amount each week. Any model works, and a flat seat is the simplest to budget.',
    fits: ['seat', 'pool', 'block'],
  },
  uneven: {
    note: 'A few reps practice a lot and several barely start. Pooled minutes absorb the gap; flat seats charge for the quiet reps.',
    fits: ['pool', 'block'],
  },
  bursty: {
    note: 'Practice spikes in onboarding or certification weeks, then drops. Minutes that roll over carry the quiet months.',
    fits: ['block'],
  },
}

export function PricingLanes() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [pattern, setPattern] = useState<Pattern>('uneven')
  const fit = FIT[pattern]

  return (
    <Figure
      title="Four pricing units, and which one fits how your team practices"
      caption="Pick a practice pattern; stamps show where each unit fits. The fit calls are our judgment, not vendor claims. A minute block fits bursty practice only if unused minutes roll over, which varies by plan."
      source="Vendor pricing pages read 19 November 2026: SellMeThisPen, PitchMonster, Hyperbound, Quotain, Kendo, Tough Tongue AI, Yoodli, Outdoo."
    >
      <div ref={ref}>
        <div className="mb-3">
          <Segmented<Pattern>
            label="Practice pattern"
            value={pattern}
            onChange={setPattern}
            options={[
              { value: 'steady', label: 'Steady' },
              { value: 'uneven', label: 'Uneven' },
              { value: 'bursty', label: 'Bursty' },
            ]}
          />
        </div>
        <p className="mb-5 min-h-[3rem] text-sm text-ink-2">{fit.note}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {LANES.map((lane, i) => {
            const ok = fit.fits.includes(lane.key)
            return (
              <div
                key={lane.key}
                className={`relative flex flex-col border-2 border-ink p-3.5 transition-colors duration-300 ${ok ? 'bg-sheet' : 'bg-paper'} ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span
                  key={`${pattern}-${lane.key}`}
                  className={`tl-stamp absolute right-3 top-3 ${ok ? 'text-stamp-green' : 'text-stamp-red'}`}
                  style={inView ? { animation: STAMP_IN, animationDelay: `${300 + i * 140}ms` } : undefined}
                >
                  {ok ? 'Fits' : 'Watch'}
                </span>
                <p className="tl-mono pr-20 text-[12px] font-semibold text-ink">{lane.name}</p>
                <p className="mb-3 mt-1 pr-16 text-[13px] leading-snug text-ink-2">{lane.unit}</p>
                <ul className="mb-3 space-y-1.5">
                  {lane.examples.map((e) => (
                    <li key={e.name} className="flex flex-wrap items-baseline justify-between gap-x-2 border-[1.5px] border-ink bg-paper px-2 py-1 text-[12.5px]">
                      <span className="font-medium text-ink">{e.name}</span>
                      <span className="font-mono text-[11.5px] text-ink-2">{e.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="tl-mono mt-auto text-[10.5px] text-ink-2">
                  Watch for: <span className="text-ink">{lane.watch}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Figure>
  )
}
