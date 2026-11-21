'use client'

import { type CSSProperties, useState } from 'react'
import { AnimatedBars, CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { loopSteps } from './content'

// ------------------------------------------------------------------------------
// hero: one rep's coaching card fills in over a week
// ------------------------------------------------------------------------------
// Seconds after the card scrolls into view when each step prints.
const AT = { watch: 0.4, name: 1.8, rehearse: 3.2, check: 5.2 } as const
const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const MARK_AT = 32 // 07:42 of a 24-minute call, as a percent of the bar
const REPS = [
  { pass: false, at: 3.6, rot: '-6deg' },
  { pass: true, at: 4.1, rot: '4deg' },
  { pass: true, at: 4.6, rot: '-3deg' },
] as const

const print = (inView: boolean, at: number): CSSProperties | undefined =>
  inView ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (inView: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(inView ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

function StepLabel({ n, label, day }: { n: number; label: string; day: string }) {
  return (
    <div className="pt-0.5">
      <p className="tl-mono text-[10.5px] font-semibold text-ink">
        {n}. {label}
      </p>
      <p className="tl-mono text-[9.5px] text-ink-2">{day}</p>
    </div>
  )
}

export function CoachingCardHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const managerMinutes = loopSteps.reduce((sum, s) => sum + s.minutes, 0)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Weekly coaching card · example ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Rep: account executive · focus week 2</p>
      </div>

      <div className="mb-5 grid grid-cols-4 border-2 border-ink bg-paper">
        {loopSteps.map((s) => (
          <div key={s.key} className="relative border-r-2 border-ink px-1.5 py-2 text-center last:border-r-0">
            <div
              className="absolute inset-0 origin-left bg-butter transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: `${AT[s.key]}s` }}
            />
            <p className="tl-mono relative text-[10px] font-semibold text-ink sm:text-[11px]">{s.label}</p>
            <p className="tl-mono relative text-[9px] text-ink-2 sm:text-[10px]">{s.day}</p>
          </div>
        ))}
      </div>

      <div className="divide-y-2 divide-dashed divide-ink/25 border-2 border-ink bg-sheet">
        <div className="grid grid-cols-[76px_1fr] gap-3 p-3 sm:grid-cols-[96px_1fr]">
          <StepLabel n={1} label="Watch" day="Mon · 10 min" />
          <div className="min-w-0">
            <div className="relative mb-2 h-4 border-2 border-ink bg-paper">
              <div
                className="absolute inset-y-0 left-0 bg-sky transition-[width] ease-linear motion-reduce:transition-none"
                style={{ width: inView ? '100%' : '0%', transitionDuration: '1s', transitionDelay: `${AT.watch}s` }}
              />
              <span
                className="absolute -top-[9px] h-[26px] w-[3px] -translate-x-1/2 bg-ink opacity-0 motion-reduce:opacity-100"
                style={{ left: `${MARK_AT}%`, ...(inView ? { animation: `tl-pop 0.3s ${AT.watch + 1.1}s ease-out forwards` } : {}) }}
              />
            </div>
            <p className="tl-line text-[13px] leading-snug text-ink" style={print(inView, AT.watch + 1.2)}>
              <span className="tl-mono text-[10.5px] font-semibold">07:42 · </span>Buyer: “Budget is frozen until Q2.”
              Rep offers a discount.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[76px_1fr] gap-3 p-3 sm:grid-cols-[96px_1fr]">
          <StepLabel n={2} label="Name" day="Tue · 15 min" />
          <div className="min-w-0 space-y-1">
            <p className="tl-line text-[13px] leading-snug text-ink" style={print(inView, AT.name)}>
              When budget comes up,{' '}
              <span className="tl-mark" style={inView ? { animation: `tl-hl 0.6s ${AT.name + 0.9}s ease-out forwards` } : undefined}>
                ask one question about it
              </span>{' '}
              before any
              number.
            </p>
            <p className="tl-line text-[12px] leading-snug text-ink-2" style={print(inView, AT.name + 0.6)}>
              <span className="tl-mono text-[10px] font-semibold text-ink">Pass line: </span>one question, no price, then
              listen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[76px_1fr] gap-3 p-3 sm:grid-cols-[96px_1fr]">
          <StepLabel n={3} label="Rehearse" day="Rep · 3 rounds" />
          <div className="flex min-w-0 flex-wrap gap-2">
            {REPS.map((r, i) => (
              <div key={i} className="flex items-center gap-2 border-2 border-ink bg-paper px-2 py-1.5">
                <span className="tl-mono text-[9.5px] text-ink-2">Round {i + 1}</span>
                <span
                  className={`font-mono text-[15px] font-bold leading-none opacity-0 motion-reduce:opacity-100 ${
                    r.pass ? 'text-stamp-green' : 'text-stamp-red'
                  }`}
                  style={stamp(inView, r.at, r.rot)}
                >
                  {r.pass ? '✓' : '✗'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[76px_1fr] gap-3 p-3 sm:grid-cols-[96px_1fr]">
          <StepLabel n={4} label="Check" day="Fri · 5 min" />
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
            <p className="tl-line text-[13px] leading-snug text-ink" style={print(inView, AT.check)}>
              Thursday’s live call, 11:05: “What changed with the budget?”
            </p>
            <span className="tl-stamp text-stamp-green" style={stamp(inView, AT.check + 0.9, '-5deg')}>
              Held on a live call
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-right text-[12.5px] text-ink-2">
        Manager time this week:{' '}
        <CountUp value={managerMinutes} start={inView} className="font-mono text-base font-bold text-ink" /> min
      </p>
    </div>
  )
}

// ------------------------------------------------------------------------------
// what goes with high quota attainment: Ambition 2026 survey
// ------------------------------------------------------------------------------
type View = 'coverage' | 'framework' | 'quality'

const VIEWS: Record<View, { note: string; items: { label: string; value: number; highlight?: boolean }[] }> = {
  coverage: {
    note: 'By share of reps who get at least one structured coaching session a week',
    items: [
      { label: '76 to 100% of reps', value: 54.1, highlight: true },
      { label: '51 to 75% of reps', value: 32.5 },
      { label: '26 to 50% of reps', value: 22.5 },
      { label: '0 to 25% of reps', value: 25 },
    ],
  },
  framework: {
    note: 'By whether a coaching framework exists and every manager uses it',
    items: [
      { label: 'Framework, used by every manager', value: 37, highlight: true },
      { label: 'Framework, adoption varies', value: 28 },
      { label: 'No framework', value: 22 },
    ],
  },
  quality: {
    note: 'By how consistent coaching quality is across managers',
    items: [
      { label: 'Very consistent', value: 40, highlight: true },
      { label: 'Somewhat consistent', value: 28 },
      { label: 'Highly variable', value: 26 },
    ],
  },
}

export function CoverageFigure() {
  const [view, setView] = useState<View>('coverage')
  return (
    <Figure
      title="Share of sales orgs reporting 71%+ quota attainment, by coaching practice"
      caption="Self-reported by 312 sales managers, directors, VPs and CROs at companies with 100 to 10,000+ employees. The relationships are correlations: teams that coach well may also be better run in other ways."
      source="Ambition, The State of Sales Coaching in 2026 (survey June 2026, published August 2026)."
    >
      <div className="mb-5 space-y-2">
        <Segmented<View>
          label="Coaching practice"
          value={view}
          onChange={setView}
          options={[
            { value: 'coverage', label: 'Coverage' },
            { value: 'framework', label: 'Framework use' },
            { value: 'quality', label: 'Consistency' },
          ]}
        />
        <p className="text-xs text-ink-2">{VIEWS[view].note}</p>
      </div>
      <AnimatedBars key={view} format="pct" max={60} items={VIEWS[view].items} />
    </Figure>
  )
}
