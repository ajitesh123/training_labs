'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, SliderField, useInView } from '@/components/blog/figures'
import { benchmark, loopSteps } from './content'

// ------------------------------------------------------------------------------
// the time budget: does weekly coaching fit a manager's week?
// ------------------------------------------------------------------------------
type Inputs = { reps: number; watch: number; talk: number; check: number; deals: number }

const minutesOf = (key: string) => loopSteps.find((s) => s.key === key)?.minutes ?? 0
const DEFAULTS: Inputs = { reps: 8, watch: minutesOf('watch'), talk: minutesOf('name'), check: minutesOf('check'), deals: 10 }
const WEEK_MIN = benchmark.weekHours * 60

export function TimeBudget() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [i, setI] = useState<Inputs>(DEFAULTS)
  const set = (key: keyof Inputs) => (v: number) => setI((prev) => ({ ...prev, [key]: v }))
  const parts = [
    { label: 'Watch', value: i.reps * i.watch, fill: 'bg-sky' },
    { label: 'Name (1:1)', value: i.reps * i.talk, fill: 'bg-butter' },
    { label: 'Check', value: i.reps * i.check, fill: 'bg-mint' },
    { label: 'Deal reviews', value: i.reps * i.deals, fill: 'bg-peach' },
  ]
  const total = parts.reduce((s, p) => s + p.value, 0)
  const share = (total / WEEK_MIN) * 100
  const over = share > benchmark.bestPracticeShare

  return (
    <Figure
      title="Weekly coaching time for one manager, against a 40-hour week"
      caption={`Defaults are example inputs: 8 reps, the 30-minute loop from this article and 10 minutes of deal review per rep. The markers are Alexander Group’s benchmark: first-line sales managers spend ${benchmark.coachingShare}% of their time coaching on average, against a best practice of ${benchmark.bestPracticeShare}%, with ${benchmark.avgReports} direct reports on average.`}
      source="Alexander Group, What is the right span of control for first-line sales managers? (page read November 2026)."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <SliderField label="Reps per manager" value={i.reps} min={2} max={20} step={1} onChange={set('reps')} format={(n) => `${n}`} />
          <SliderField label="Watch: clip review per rep" value={i.watch} min={0} max={30} step={5} onChange={set('watch')} format={(n) => `${n} min`} />
          <SliderField label="Name: 1:1 per rep" value={i.talk} min={0} max={45} step={5} onChange={set('talk')} format={(n) => `${n} min`} />
          <SliderField label="Check: live call per rep" value={i.check} min={0} max={15} step={1} onChange={set('check')} format={(n) => `${n} min`} />
          <SliderField label="Deal review per rep" value={i.deals} min={0} max={30} step={5} onChange={set('deals')} format={(n) => `${n} min`} />
        </div>
        <div className="min-w-0 border-2 border-ink bg-paper p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Per week</p>
              <CountUp value={total / 60} start={inView} format={(n) => `${n.toFixed(1)} h`} className="block font-mono text-4xl font-bold text-ink" />
            </div>
            <p className="text-right text-sm text-ink-2">
              <CountUp value={share} start={inView} format={(n) => `${Math.round(n)}%`} className="font-mono text-xl font-bold text-ink" />
              <span className="block text-xs">of a 40-hour week</span>
            </p>
          </div>

          <div className="relative mb-7 mt-8">
            <Marker pct={benchmark.coachingShare} label={`${benchmark.coachingShare}% average`} side="top" />
            <Marker pct={benchmark.bestPracticeShare} label={`${benchmark.bestPracticeShare}% best practice`} side="bottom" />
            <div className="flex h-8 w-full overflow-hidden border-2 border-ink bg-sheet">
              {parts.map((p) => (
                <div
                  key={p.label}
                  className={`h-full border-ink transition-[width] duration-700 ease-out motion-reduce:transition-none ${p.fill} ${p.value > 0 ? 'border-r-2' : ''}`}
                  style={{ width: inView ? `${Math.min((p.value / WEEK_MIN) * 100, 100)}%` : '0%' }}
                />
              ))}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs sm:grid-cols-2">
            {parts.map((p) => (
              <li key={p.label} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-ink-2">
                  <span className={`h-3 w-3 shrink-0 border-[1.5px] border-ink ${p.fill}`} />
                  {p.label}
                </span>
                <span className="whitespace-nowrap font-mono font-semibold text-ink">{(p.value / 60).toFixed(1)} h</span>
              </li>
            ))}
          </ul>
          <p className={`mt-4 border-2 border-dashed border-ink p-3 text-sm ${over ? 'bg-peach' : 'bg-sheet'} text-ink-2`}>
            {over
              ? 'Past the best-practice share. Cut minutes per step before you cut reps: coverage matters more than length.'
              : 'Fits inside the time managers already spend coaching, with room left for hiring, forecasting and their own deals.'}
          </p>
        </div>
      </div>
    </Figure>
  )
}

function Marker({ pct, label, side }: { pct: number; label: string; side: 'top' | 'bottom' }) {
  return (
    <div className="pointer-events-none absolute inset-y-[-8px] z-10" style={{ left: `${pct}%` }}>
      <div className="h-full w-0 border-l-2 border-dashed border-ink" />
      <span
        className={`tl-mono absolute whitespace-nowrap text-[9.5px] font-semibold text-ink ${
          side === 'top' ? 'bottom-full mb-0.5' : 'top-full mt-0.5'
        } ${pct > 50 ? 'right-0' : 'left-0 -translate-x-1'}`}
      >
        {label}
      </span>
    </div>
  )
}

// ------------------------------------------------------------------------------
// behavior tracker: live-call checks over six weeks
// ------------------------------------------------------------------------------
type Rep = 'moving' | 'stalled'
type Week = { calls: boolean[]; focus: 'a' | 'b' }

const TRACKS: Record<Rep, { weeks: Week[]; verdict: string; tone: 'green' | 'red' }> = {
  moving: {
    weeks: [
      { calls: [false, false, true, false], focus: 'a' },
      { calls: [true, false, true, false], focus: 'a' },
      { calls: [true, true, false, true], focus: 'a' },
      { calls: [true, true, true, false], focus: 'a' },
      { calls: [false, true, false, false], focus: 'b' },
      { calls: [true, false, true, false], focus: 'b' },
    ],
    verdict: 'Wk 5: next behavior',
    tone: 'green',
  },
  stalled: {
    weeks: [
      { calls: [false, false, false, false], focus: 'a' },
      { calls: [false, true, false, false], focus: 'a' },
      { calls: [false, false, true, false], focus: 'a' },
      { calls: [true, false, false, false], focus: 'a' },
      { calls: [true, false, true, false], focus: 'a' },
      { calls: [true, true, false, true], focus: 'a' },
    ],
    verdict: 'Wk 5: harder practice',
    tone: 'red',
  },
}

const FOCUS = {
  a: { label: 'Question before any price', fill: 'bg-sky' },
  b: { label: 'Dated next step', fill: 'bg-butter' },
} as const
const STAMP_IN = 'tl-stamp 0.28s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

export function BehaviorTracker() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [rep, setRep] = useState<Rep>('moving')
  const t = TRACKS[rep]
  return (
    <Figure
      title="Six weeks of Friday checks: is the coached behavior showing up on live calls?"
      caption="Example data for two reps, four recorded calls checked per week. Rule used here: move on after three of four calls pass for two weeks running. Rep B’s practice round got harder from week 5. A rep who passes practice rounds but not live calls needs a harder or more realistic practice round, not more talk."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Rep>
            label="Rep"
            value={rep}
            onChange={setRep}
            options={[
              { value: 'moving', label: 'Rep A' },
              { value: 'stalled', label: 'Rep B' },
            ]}
          />
          <div className="flex flex-wrap gap-3 text-xs text-ink-2">
            {Object.values(FOCUS).map((f) => (
              <span key={f.label} className="flex items-center gap-1.5">
                <span className={`h-3 w-3 border-[1.5px] border-ink ${f.fill}`} />
                {f.label}
              </span>
            ))}
          </div>
        </div>
        <div key={rep} className="space-y-1.5">
          {t.weeks.map((w, wi) => {
            const passed = w.calls.filter(Boolean).length
            return (
              <div key={wi} className="grid grid-cols-[44px_1fr_44px] items-center gap-2 sm:grid-cols-[64px_1fr_64px]">
                <span className={`tl-mono border-2 border-ink px-1 py-1 text-center text-[10px] font-semibold text-ink ${FOCUS[w.focus].fill}`}>
                  Wk {wi + 1}
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {w.calls.map((ok, ci) => (
                    <span
                      key={ci}
                      className={`grid h-8 place-items-center border-2 border-ink transition-colors duration-300 motion-reduce:transition-none ${
                        inView ? (ok ? 'bg-mint' : 'bg-peach') : 'bg-paper'
                      }`}
                      style={{ transitionDelay: `${0.2 + wi * 0.25 + ci * 0.06}s` }}
                    >
                      <span
                        className={`font-mono text-[18px] font-bold leading-none opacity-0 motion-reduce:opacity-100 ${ok ? 'text-stamp-green' : 'text-stamp-red'}`}
                        style={{ '--rot': ok ? '-6deg' : '5deg', ...(inView ? { animation: `${STAMP_IN} ${0.2 + wi * 0.25 + ci * 0.06}s` } : {}) } as CSSProperties}
                      >
                        {ok ? '✓' : '✗'}
                      </span>
                    </span>
                  ))}
                </div>
                <span className="text-right font-mono text-sm font-semibold text-ink">{passed}/4</span>
              </div>
            )
          })}
        </div>
        <div className="mt-4 flex justify-end">
          <span
            className={`tl-stamp ${t.tone === 'green' ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={{ '--rot': '-4deg', ...(inView ? { animation: `tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards ${0.4 + t.weeks.length * 0.25}s` } : {}) } as CSSProperties}
          >
            {t.verdict}
          </span>
        </div>
      </div>
    </Figure>
  )
}
