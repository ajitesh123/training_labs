'use client'

import type { CSSProperties } from 'react'
import { CountUp, Figure, useInView } from '@/components/blog/figures'
import { BRIDGE } from './content'
import { CHECKLIST_COUNT } from './figures-checklist'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

// ------------------------------------------------------------------------------
// hero: the first 90 days as a track with four gates
// ------------------------------------------------------------------------------
const GATES = [
  { day: 'Day 0', title: 'Ready before day one', detail: 'Logins tested, comp plan in writing, two weeks booked', stamp: 'Set up', at: 0.2 },
  { day: 'Day 30', title: 'Pitch and discovery certified', detail: 'Scored practice calls passed before live calls', stamp: 'Certified', at: 1.43 },
  { day: 'Day 60', title: 'Live scores hold', detail: 'Real calls score at the level reached in practice', stamp: 'Holding', at: 2.87 },
  { day: 'Day 90', title: 'Owns a book', detail: 'Pipeline and forecast stages hold under review', stamp: 'On track', at: 4.3 },
] as const

const PHASES = [
  { label: 'Learn', fill: 'bg-mint' },
  { label: 'Apply', fill: 'bg-butter' },
  { label: 'Own', fill: 'bg-sky' },
] as const

const TRACK_SECONDS = 4.3

export function NinetyDayTrackHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const move: CSSProperties = {
    transitionProperty: 'left, width',
    transitionDuration: `${TRACK_SECONDS}s`,
    transitionTimingFunction: 'linear',
  }

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ A new rep’s first 90 days ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example plan</p>
      </div>
      <div className="relative mx-3 mb-2 h-12 sm:mx-6">
        <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 border-2 border-ink bg-paper" />
        <div
          className="absolute left-0 top-1/2 h-2 -translate-y-1/2 border-2 border-ink bg-ink motion-reduce:transition-none"
          style={{ ...move, width: inView ? '100%' : '0%' }}
        />
        {GATES.map((g, i) => (
          <div
            key={g.day}
            className={`absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 border-2 border-ink transition-colors duration-300 ${
              inView ? 'bg-butter' : 'bg-sheet'
            }`}
            style={{ left: `${(i / 3) * 100}%`, transitionDelay: inView ? `${g.at}s` : '0s' }}
          />
        ))}
        <div
          className="absolute top-0 border-2 border-ink bg-sheet px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink shadow-[3px_3px_0_var(--color-ink)] motion-reduce:transition-none"
          style={{ ...move, left: inView ? '100%' : '0%', transform: 'translateX(-50%)' }}
        >
          REP
        </div>
      </div>
      <div className="mx-3 mb-5 grid grid-cols-3 border-2 border-ink sm:mx-6">
        {PHASES.map((p) => (
          <p key={p.label} className={`tl-mono border-r-2 border-ink py-1 text-center text-[10.5px] font-semibold text-ink last:border-r-0 ${p.fill}`}>
            {p.label}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {GATES.map((g) => (
          <div
            key={g.day}
            className={`flex flex-col gap-1.5 border-2 border-ink bg-paper p-3 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: `${g.at * 1000}ms` }}
          >
            <p className="tl-mono text-[10px] font-bold text-ink-2">{g.day}</p>
            <p className="text-[13.5px] font-semibold leading-snug text-ink">{g.title}</p>
            <p className="text-[12px] leading-snug text-ink-2">{g.detail}</p>
            <span className="tl-stamp mt-auto self-start px-1.5 py-1 text-[10px] text-stamp-green" style={stamp(inView, g.at + 0.4, '-4deg')}>
              {g.stamp}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2">
        <p className="text-[13px] text-ink">
          Checklist items done:{' '}
          <CountUp value={CHECKLIST_COUNT} start={inView} durationMs={TRACK_SECONDS * 1000} className="font-mono font-bold" /> of{' '}
          {CHECKLIST_COUNT}
        </p>
        <p className="tl-mono text-[10.5px] text-ink-2">Full AE ramp still averages {BRIDGE.rampMonths} months</p>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// ramp time over time: AE average by report year, SDR as a reference line
// ------------------------------------------------------------------------------
const RAMP = [
  { year: '2020', months: 4.3 },
  { year: '2022', months: 5.3 },
  { year: '2024', months: 5.7 },
  { year: '2026', months: 6.2 },
]
const SDR_RAMP = 3.0
const MAX_MONTHS = 7

export function RampTrendFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Figure
      title="Average months for a new account executive to reach full productivity"
      caption={`Averages from The Bridge Group’s biennial AE research; the 2026 edition surveyed 158 B2B companies and the 2024 edition 172 SaaS companies. The dashed line is the ${SDR_RAMP.toFixed(1)}-month SDR average from its 2025 sales development report (351 companies).`}
      source="The Bridge Group, AE Models, Motions & Metrics (June 2026); SaaS AE Metrics (2024); Sales Development Report (February 2025)."
    >
      <div ref={ref} className="relative">
        <div className="relative flex h-52 items-end gap-3 border-b-2 border-l-2 border-ink pl-3 sm:gap-6">
          <div
            className="pointer-events-none absolute inset-x-0 z-10 border-t-2 border-dashed border-ink"
            style={{ bottom: `${(SDR_RAMP / MAX_MONTHS) * 100}%` }}
          >
            <span className="tl-mono absolute -top-5 right-0 bg-sheet px-1 text-[10px] font-semibold text-ink">SDR, 3.0 mo</span>
          </div>
          {RAMP.map((r, i) => {
            const last = i === RAMP.length - 1
            return (
              <div key={r.year} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className={`relative border-2 border-b-0 border-ink transition-all duration-1000 ease-out motion-reduce:transition-none ${last ? 'bg-butter shadow-[5px_0_0_var(--color-ink)]' : 'bg-sky'}`}
                  style={{ height: inView ? `${(r.months / MAX_MONTHS) * 100}%` : '0%', transitionDelay: `${i * 180}ms` }}
                >
                  <CountUp
                    value={r.months}
                    start={inView}
                    format={(n) => n.toFixed(1)}
                    className="absolute inset-x-0 bottom-full mb-1 text-center font-mono text-[13px] font-bold text-ink sm:text-[15px]"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-2 flex gap-3 pl-3 sm:gap-6">
          {RAMP.map((r) => (
            <p key={r.year} className="tl-mono flex-1 text-center text-[10.5px] text-ink-2">
              {r.year}
            </p>
          ))}
        </div>
      </div>
    </Figure>
  )
}
