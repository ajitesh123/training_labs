'use client'

import { CountUp, Figure, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// hero: a ten-minute role play on the interviewer's clock
// ------------------------------------------------------------------------------
// Positions are percent of a 10-minute call. The track fills in RUN seconds.
const RUN = 6
const PHASES = [
  { label: 'Open', range: '0:00 to 0:45', start: 0, end: 7.5, fill: 'bg-butter' },
  { label: 'Discover', range: '0:45 to 4:30', start: 7.5, end: 45, fill: 'bg-sky' },
  { label: 'Play back', range: '4:30 to 5:15', start: 45, end: 52.5, fill: 'bg-mint' },
  { label: 'Position', range: '5:15 to 7:00', start: 52.5, end: 70, fill: 'bg-sky-soft' },
  { label: 'Objection', range: '7:00 to 8:45', start: 70, end: 87.5, fill: 'bg-peach' },
  { label: 'Next step', range: '8:45 to 10:00', start: 87.5, end: 100, fill: 'bg-butter' },
] as const

const CHECKS = [
  { at: 7.5, label: 'Gave a reason for the call' },
  { at: 45, label: 'Asked before pitching' },
  { at: 52.5, label: 'Played back the buyer’s words' },
  { at: 87.5, label: 'Met the objection with a question' },
  { at: 100, label: 'Asked for a dated next step' },
] as const

const MINUTES = [0, 2, 4, 6, 8, 10]
const sec = (pct: number) => (pct / 100) * RUN
const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

export function InterviewClockHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Sales role play interview · AE round ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Scenario: discovery call · 10 min</p>
      </div>

      <div className="relative pt-5">
        <span
          aria-hidden
          className="absolute top-0 -ml-[7px] h-0 w-0 border-x-[7px] border-t-[10px] border-x-transparent border-t-ink transition-[left] ease-linear motion-reduce:transition-none"
          style={{ left: inView ? '100%' : '0%', transitionDuration: `${RUN}s` }}
        />
        <div className="relative flex h-12 border-2 border-ink bg-paper sm:h-14">
          {PHASES.map((p) => (
            <div key={p.label} className="relative h-full" style={{ width: `${p.end - p.start}%` }}>
              <div
                className={`h-full border-r-2 border-ink ease-linear motion-reduce:transition-none ${p.fill}`}
                style={{
                  width: inView ? '100%' : '0%',
                  transitionProperty: 'width',
                  transitionDuration: `${sec(p.end - p.start)}s`,
                  transitionDelay: `${sec(p.start)}s`,
                }}
              />
              <span className="tl-mono absolute inset-0 hidden items-center justify-center px-1 text-center text-[10px] font-semibold leading-tight text-ink sm:flex">
                {p.end - p.start > 10 ? p.label : ''}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-1 h-4">
          {MINUTES.map((m) => (
            <span
              key={m}
              className="tl-mono absolute -translate-x-1/2 text-[9.5px] text-ink-2 first:translate-x-0 last:-translate-x-full"
              style={{ left: `${m * 10}%` }}
            >
              {m}m
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
        {PHASES.map((p) => (
          <li key={p.label} className="flex items-start gap-2 text-[12px] text-ink-2">
            <span className={`mt-0.5 h-3 w-3 shrink-0 border-[1.5px] border-ink ${p.fill}`} />
            <span className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-2">
              <span className="whitespace-nowrap font-semibold text-ink">{p.label}</span>
              <span className="tl-mono whitespace-nowrap text-[9.5px]">{p.range}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 grid gap-4 border-2 border-ink bg-sheet p-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="tl-mono mb-2.5 text-[10.5px] font-semibold text-ink-2">Interviewer’s notepad</p>
          <ul className="space-y-1.5">
            {CHECKS.map((c) => (
              <li key={c.label} className="flex items-center gap-2.5 text-[14px]">
                <span className="grid h-5 w-5 shrink-0 place-items-center border-2 border-ink bg-paper">
                  <span
                    className="font-mono text-[13px] font-bold leading-none text-stamp-green opacity-0 motion-reduce:opacity-100"
                    style={inView ? { animation: `${STAMP_IN} ${sec(c.at) + 0.1}s` } : undefined}
                  >
                    ✓
                  </span>
                </span>
                <span
                  className={`transition-colors duration-300 motion-reduce:transition-none ${inView ? 'text-ink' : 'text-ink-2'}`}
                  style={{ transitionDelay: inView ? `${sec(c.at)}s` : '0s' }}
                >
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <span
          className="tl-stamp justify-self-start text-stamp-green sm:justify-self-end"
          style={inView ? { animation: `${STAMP_IN} ${RUN + 0.5}s` } : undefined}
        >
          Advance to final round
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// why hiring managers test this live: Bridge Group 2026
// ------------------------------------------------------------------------------
type Stat = {
  label: string
  value: number
  unit: string
  decimals: 0 | 1
  history: { year: string; value: number }[]
  max: number
  lead?: boolean
}

const STATS: Stat[] = [
  {
    label: 'Average AE ramp to full productivity',
    value: 6.2,
    unit: 'months',
    decimals: 1,
    history: [
      { year: '2022', value: 5.3 },
      { year: '2024', value: 5.7 },
      { year: '2026', value: 6.2 },
    ],
    max: 7,
    lead: true,
  },
  {
    label: 'Share of AEs at quota',
    value: 48,
    unit: '%',
    decimals: 0,
    history: [
      { year: '2024', value: 51 },
      { year: '2026', value: 48 },
    ],
    max: 60,
  },
  {
    label: 'Experience required at hire',
    value: 3.7,
    unit: 'years',
    decimals: 1,
    history: [
      { year: '2022', value: 2.7 },
      { year: '2026', value: 3.7 },
    ],
    max: 4.5,
  },
  {
    label: 'Median AE win rate',
    value: 23,
    unit: '%',
    decimals: 0,
    history: [
      { year: '2024', value: 19 },
      { year: '2026', value: 23 },
    ],
    max: 30,
  },
]

export function HiringStakes() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Figure
      title="What a sales hire costs to get wrong: four numbers from 2026"
      caption="Account executives at B2B companies. Ramp is the time to full productivity. Each mini chart shows the same measure in earlier editions of the survey."
      source="The Bridge Group, AE Models, Motions & Metrics 2026 (158 B2B companies, surveyed Q1 to Q2 2026, published June 22, 2026)."
    >
      <div ref={ref} className="grid gap-3 sm:grid-cols-2">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`border-2 border-ink p-4 ${s.lead ? 'bg-butter shadow-[5px_5px_0_var(--color-ink)]' : 'bg-paper'} ${
              inView ? 'blog-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <p className="tl-mono text-[10.5px] font-semibold text-ink-2">{s.label}</p>
            <p className="mt-1 font-mono text-[30px] font-semibold leading-none text-ink">
              <CountUp value={s.value} start={inView} format={(n) => n.toFixed(s.decimals)} />
              <span className="ml-1.5 text-sm text-ink-2">{s.unit}</span>
            </p>
            <div className="mt-3 flex gap-2">
              {s.history.map((h, j) => (
                <div key={h.year} className="flex-1">
                  <div className="flex h-12 items-end">
                    <div
                      className={`w-full border-2 border-b-0 border-ink transition-[height] duration-700 ease-out motion-reduce:transition-none ${
                        j === s.history.length - 1 ? 'bg-ink' : 'bg-sheet'
                      }`}
                      style={{
                        height: inView ? `${(h.value / s.max) * 100}%` : '0%',
                        transitionDelay: `${300 + i * 120 + j * 150}ms`,
                      }}
                    />
                  </div>
                  <p className="tl-mono border-t-2 border-ink pt-0.5 text-center text-[9.5px] text-ink-2">
                    {h.year} · {h.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Figure>
  )
}
