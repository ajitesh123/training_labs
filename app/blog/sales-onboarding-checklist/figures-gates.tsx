'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, type Segment, StackedBar, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// day-30 gate: a discovery certification scored line by line
// ------------------------------------------------------------------------------
type Attempt = 'first' | 'second'

const CRITERIA = [
  'Opens with a reason for the call the buyer cares about',
  'Asks about the problem before showing the product',
  'Puts a number on the impact',
  'Finds out who else decides, and how',
  'Ends with a dated next step the buyer agreed to',
]
// Example scores out of 4. Pass: average of 3 or more and no criterion below 2.
const SCORES: Record<Attempt, number[]> = {
  first: [3, 2, 1, 2, 3],
  second: [3, 3, 3, 3, 4],
}
const passes = (s: number[]) => s.reduce((a, b) => a + b, 0) / s.length >= 3 && Math.min(...s) >= 2

export function GateScorecardFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [attempt, setAttempt] = useState<Attempt>('first')
  const scores = SCORES[attempt]
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length
  const pass = passes(scores)

  return (
    <Figure
      title="The day-30 gate: one scored discovery call, criterion by criterion"
      caption="An example rubric and example scores, not a standard. The pass line used here: an average of 3 out of 4 or better, with no criterion below 2. The rep plays a practice buyer, a manager or AI scores the call, and live discovery calls start only after a pass."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Attempt>
            label="Attempt"
            value={attempt}
            onChange={setAttempt}
            options={[
              { value: 'first', label: 'First attempt, day 24' },
              { value: 'second', label: 'Second attempt, day 28' },
            ]}
          />
          <p className="text-sm text-ink-2">
            Average{' '}
            <CountUp value={avg} start={inView} format={(n) => n.toFixed(1)} className="font-mono text-lg font-bold text-ink" /> / 4
          </p>
        </div>
        <ul className="space-y-3">
          {CRITERIA.map((c, i) => {
            const s = scores[i]
            const low = s < 2
            return (
              <li key={c}>
                <div className="mb-1 flex items-baseline justify-between gap-3 text-[14px]">
                  <span className={low ? 'font-semibold text-stamp-red' : 'text-ink'}>{c}</span>
                  <span className="shrink-0 font-mono font-bold text-ink">{s}/4</span>
                </div>
                <div className="relative grid h-4 grid-cols-4 border-2 border-ink bg-paper">
                  {[0, 1, 2, 3].map((k) => (
                    <div
                      key={k}
                      className={`border-r-2 border-ink transition-colors duration-300 last:border-r-0 ${inView && k < s ? (low ? 'bg-peach' : 'bg-sky') : ''}`}
                      style={{ transitionDelay: inView ? `${i * 160 + k * 70}ms` : '0ms' }}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-y-[-5px] left-[75%] w-0 border-l-2 border-dashed border-ink" />
                </div>
              </li>
            )
          })}
        </ul>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2.5">
          <p className="text-[13.5px] text-ink">
            {pass ? 'Certified for live discovery calls.' : 'One criterion below 2: the rep reruns the drill before Thursday.'}
          </p>
          <span
            key={attempt}
            className={`tl-stamp ${pass ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={{ '--rot': pass ? '-4deg' : '4deg', ...(inView ? { animation: `${STAMP_IN} 1.1s` } : {}) } as CSSProperties}
          >
            {pass ? 'Gate passed' : 'Not yet'}
          </span>
        </div>
        <p className="tl-mono mt-2 text-[10px] text-ink-2">Dashed line: a score of 3</p>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// the first month: same hours, different mix of listening and speaking
// ------------------------------------------------------------------------------
type Month = 'shadow' | 'practice'
type Week = { listen: number; speak: number; live: number }

// Example weeks in hours. Both plans spend the same 69 hours; only the mix changes.
const PLANS: Record<Month, { weeks: Week[]; runs: number; stamp: string; good: boolean }> = {
  shadow: {
    weeks: [
      { listen: 17, speak: 1, live: 0 },
      { listen: 16, speak: 1, live: 0 },
      { listen: 14, speak: 1, live: 2 },
      { listen: 12, speak: 1, live: 4 },
    ],
    runs: 6,
    stamp: 'First live call is the practice',
    good: false,
  },
  practice: {
    weeks: [
      { listen: 15, speak: 3, live: 0 },
      { listen: 13, speak: 4, live: 0 },
      { listen: 10, speak: 3, live: 4 },
      { listen: 8, speak: 2, live: 7 },
    ],
    runs: 21,
    stamp: 'First live call is a rerun',
    good: true,
  },
}

const segments = (w: Week): Segment[] => [
  { label: 'Listening: sessions, shadowing, recordings', value: w.listen, colorClass: 'bg-sky' },
  { label: 'Speaking: scored practice runs', value: w.speak, colorClass: 'bg-butter' },
  { label: 'Live calls', value: w.live, colorClass: 'bg-mint' },
]

export function FirstMonthFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [month, setMonth] = useState<Month>('shadow')
  const plan = PLANS[month]

  return (
    <Figure
      title="The first month, two ways: the same hours with a different mix of listening and speaking"
      caption="Example weeks, not benchmarks. Both plans spend 69 hours on onboarding activities in month one. Practice runs are counted at 20 minutes each, in the first two weeks before any live call."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Month>
            label="First-month plan"
            value={month}
            onChange={setMonth}
            options={[
              { value: 'shadow', label: 'Shadowing month' },
              { value: 'practice', label: 'Practice month' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={plan.runs} start={inView} className="font-mono text-lg font-bold text-ink" /> practice runs before the first live call
          </p>
        </div>
        <div className="space-y-4">
          {plan.weeks.map((w, i) => (
            <div key={i}>
              <p className="tl-mono mb-1.5 text-[10.5px] font-semibold text-ink">Week {i + 1}</p>
              <StackedBar segments={segments(w)} start={inView} format={(n) => `${Math.round(n)} h`} scaleMax={18} legendCols={2} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2.5">
          <p className="text-[13.5px] text-ink">
            {plan.good ? 'Twenty-one scored practice runs before a real buyer hears the pitch.' : 'Two weeks of listening, two hours of speaking, then a live buyer.'}
          </p>
          <span
            key={month}
            className={`tl-stamp ${plan.good ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={{ '--rot': plan.good ? '-4deg' : '4deg', ...(inView ? { animation: `${STAMP_IN} 0.9s` } : {}) } as CSSProperties}
          >
            {plan.stamp}
          </span>
        </div>
      </div>
    </Figure>
  )
}
