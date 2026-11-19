'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { type MatrixPoint, matrixPoints } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// objection matrix: how often you hear it vs how often the call ends there
// ------------------------------------------------------------------------------
const X_MAX = 10
const X_SPLIT = 4
const Y_SPLIT = 50

function verdict(p: MatrixPoint): { label: string; tone: string } {
  const often = p.heard >= X_SPLIT
  const fatal = p.lost >= Y_SPLIT
  if (often && fatal) return { label: 'Drill first', tone: 'text-stamp-red' }
  if (fatal) return { label: 'Drill second', tone: 'text-stamp-red' }
  if (often) return { label: 'Prepare one line', tone: 'text-stamp-green' }
  return { label: 'Can wait', tone: 'text-ink-2' }
}

export function ObjectionMatrix() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(0)
  const p = matrixPoints[active]
  const v = verdict(p)

  return (
    <Figure
      title="Objection matrix: drill what is frequent and fatal first"
      caption="Example data for one team’s last 40 calls, not a benchmark. Across: how many times per ten calls the objection came up. Up: the share of those calls that ended at that objection. Tap a square or a name."
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="flex gap-2">
          <p className="tl-mono flex w-4 rotate-180 items-center justify-center text-[10px] text-ink-2 [writing-mode:vertical-rl]">
            Call ends there →
          </p>
          <div className="flex-1">
            <div className="relative aspect-square w-full border-2 border-ink bg-paper">
              <div
                className={`absolute right-0 top-0 border-b-2 border-l-2 border-dashed border-ink/50 bg-butter transition-opacity duration-700 motion-reduce:transition-none ${
                  inView ? 'opacity-60' : 'opacity-0'
                }`}
                style={{ width: `${100 - (X_SPLIT / X_MAX) * 100}%`, height: `${100 - Y_SPLIT}%`, transitionDelay: '200ms' }}
              />
              <span className="absolute inset-y-0 border-l border-dashed border-ink/30" style={{ left: `${(X_SPLIT / X_MAX) * 100}%` }} />
              <span className="absolute inset-x-0 border-t border-dashed border-ink/30" style={{ bottom: `${Y_SPLIT}%` }} />
              <p className="tl-mono absolute right-2 top-2 text-[9.5px] font-semibold text-ink">Drill first</p>
              <p className="tl-mono absolute bottom-2 left-2 text-[9.5px] text-ink-2">Can wait</p>
              {matrixPoints.map((m, i) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-label={`${m.label}: heard ${m.heard} times per 10 calls, ${m.lost}% of those calls ended there`}
                  className={`absolute grid h-7 w-7 -translate-x-1/2 translate-y-1/2 cursor-pointer place-items-center border-2 border-ink font-mono text-[11px] font-bold text-ink transition-[background-color,box-shadow] sm:h-8 sm:w-8 ${
                    active === i ? 'bg-ink text-sheet shadow-[3px_3px_0_var(--color-flame)]' : 'bg-sheet hover:bg-sky-soft'
                  } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                  style={{ left: `${(m.heard / X_MAX) * 100}%`, bottom: `${m.lost}%`, animationDelay: `${300 + i * 110}ms` }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <p className="tl-mono mt-1.5 text-center text-[10px] text-ink-2">Heard per 10 calls →</p>
          </div>
        </div>
        <div className="space-y-3">
          <div key={active} className="blog-fade-up border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)]">
            <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Objection {active + 1}</p>
            <p className="mb-2 text-lg font-semibold leading-snug text-ink">“{p.label}”</p>
            <p className="font-mono text-sm text-ink-2">
              {p.heard} per 10 calls · {p.lost}% ended there
            </p>
            <p className="mt-2 text-sm text-ink-2">
              <span className="tl-mono font-semibold text-ink">Start with: </span>
              {p.technique}
            </p>
            <span className={`tl-stamp mt-3 ${v.tone}`} style={inView ? { animation: STAMP_IN, animationDelay: '0.9s' } : undefined}>
              {v.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {matrixPoints.map((m, i) => (
              <button
                key={m.label}
                type="button"
                onClick={() => setActive(i)}
                className={`cursor-pointer border-2 border-ink px-2 py-1 text-[12px] ${active === i ? 'bg-butter font-semibold text-ink' : 'bg-sheet text-ink-2 hover:bg-sky-soft'}`}
              >
                {i + 1}. {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// four-week drill plan: minutes a day into repetitions
// ------------------------------------------------------------------------------
type Minutes = '5' | '10' | '15'
type Days = '3' | '5'

const REP_MINUTES = 2
const TOP_OBJECTIONS = 5
const WEEKS = [
  { n: 1, focus: 'One objection, one technique', h: 'h-[34%]' },
  { n: 2, focus: 'The buyer pushes back twice', h: 'h-[52%]' },
  { n: 3, focus: 'Two objections stacked', h: 'h-[70%]' },
  { n: 4, focus: 'Full call, objection hidden', h: 'h-[88%]' },
]

export function DrillPlan() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [minutes, setMinutes] = useState<Minutes>('10')
  const [days, setDays] = useState<Days>('5')
  const perWeek = Math.floor((Number(minutes) * Number(days)) / REP_MINUTES)
  const perMonth = perWeek * WEEKS.length

  return (
    <Figure
      title="Four weeks of drills: what ten minutes a day adds up to"
      caption={`Example plan. One repetition is about ${REP_MINUTES} minutes: the objection, your reply, a quick self-score. “Per objection” spreads the month across your top ${TOP_OBJECTIONS} objections. Each week keeps the same objections and raises the difficulty.`}
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div>
            <p className="tl-mono mb-1.5 text-[10.5px] text-ink-2">Minutes a day</p>
            <Segmented<Minutes>
              label="Minutes a day"
              value={minutes}
              onChange={setMinutes}
              options={[
                { value: '5', label: '5 min' },
                { value: '10', label: '10 min' },
                { value: '15', label: '15 min' },
              ]}
            />
          </div>
          <div>
            <p className="tl-mono mb-1.5 text-[10.5px] text-ink-2">Days a week</p>
            <Segmented<Days>
              label="Days a week"
              value={days}
              onChange={setDays}
              options={[
                { value: '3', label: '3 days' },
                { value: '5', label: '5 days' },
              ]}
            />
          </div>
        </div>
        <div className="flex h-52 items-end gap-2 border-b-2 border-ink sm:gap-3">
          {WEEKS.map((w, i) => (
            <div key={w.n} className="flex h-full flex-1 flex-col justify-end">
              <div
                className={`relative flex flex-col justify-start border-2 border-b-0 border-ink bg-sky p-1.5 transition-all duration-700 ease-out motion-reduce:transition-none sm:p-2 ${
                  inView ? `${w.h} opacity-100` : 'h-0 opacity-0'
                }`}
                style={{ transitionDelay: inView ? `${i * 160}ms` : '0ms' }}
              >
                <p className="font-mono text-base font-bold leading-none text-ink sm:text-xl">
                  <CountUp value={perWeek} start={inView} />
                </p>
                <p className="tl-mono text-[9px] text-ink-2">reps</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2 sm:gap-3">
          {WEEKS.map((w) => (
            <div key={w.n} className="flex-1">
              <p className="tl-mono text-[10px] font-semibold text-ink">Week {w.n}</p>
              <p className="text-[11px] leading-snug text-ink-2 sm:text-[12px]">{w.focus}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="border-2 border-ink bg-butter p-3">
            <p className="tl-mono text-[10px] text-ink-2">Reps this month</p>
            <CountUp value={perMonth} start={inView} className="font-mono text-3xl font-bold text-ink" />
          </div>
          <div className="border-2 border-ink bg-sheet p-3">
            <p className="tl-mono text-[10px] text-ink-2">Per objection</p>
            <CountUp value={perMonth / TOP_OBJECTIONS} start={inView} className="font-mono text-3xl font-bold text-ink" />
          </div>
        </div>
      </div>
    </Figure>
  )
}
