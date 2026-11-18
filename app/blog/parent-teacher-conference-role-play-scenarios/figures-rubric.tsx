'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// a five-row rubric that scores in
// ------------------------------------------------------------------------------
const ROWS = [
  { skill: 'Opens with a specific strength', anchor: '4 = names something the child did, with an example' },
  { skill: 'Describes the concern with evidence', anchor: '4 = dates, work samples or counts, no labels' },
  { skill: 'Asks before advising', anchor: '4 = two or more open questions, then paraphrases' },
  { skill: 'Stays steady under pushback', anchor: '4 = no defending, no blaming, tone holds' },
  { skill: 'Ends with a next step, owner and date', anchor: '4 = one action each side, a date to check in' },
]
const LEVELS = [1, 2, 3, 4]
const MAX = ROWS.length * 4
const PASS = 16

type Attempt = 'first' | 'third' | 'mine'
const EXAMPLES: Record<Exclude<Attempt, 'mine'>, number[]> = {
  first: [3, 2, 1, 2, 1],
  third: [4, 3, 3, 3, 4],
}

export function RubricScorer() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [attempt, setAttempt] = useState<Attempt>('first')
  const [mine, setMine] = useState<number[]>([2, 2, 2, 2, 2])
  const scores = attempt === 'mine' ? mine : EXAMPLES[attempt]
  const total = scores.reduce((s, v) => s + v, 0)
  const ready = total >= PASS
  const score = (row: number, level: number) => {
    setAttempt('mine')
    setMine((prev) => (attempt === 'mine' ? prev : scores).map((v, i) => (i === row ? level : v)))
  }

  return (
    <Figure
      title="Score the conference: five rows, four levels"
      caption="Example scores for a teacher’s first and third run of scenario 4. Tap any cell to score your own run. We set 16 of 20 as the bar for moving to a harder scenario; adjust it to your program."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Attempt>
            label="Attempt"
            value={attempt}
            onChange={setAttempt}
            options={[
              { value: 'first', label: 'Run 1' },
              { value: 'third', label: 'Run 3' },
              { value: 'mine', label: 'Your run' },
            ]}
          />
          <div className="flex items-center gap-3">
            <p className="font-mono text-3xl font-bold text-ink">
              <CountUp value={total} start={inView} />
              <span className="text-lg text-ink-2">/{MAX}</span>
            </p>
            <span
              key={`${attempt}-${ready}`}
              className={`tl-stamp ${ready ? 'text-stamp-green' : 'text-stamp-red'}`}
              style={inView ? { animation: STAMP_IN, animationDelay: '0.8s' } : undefined}
            >
              {ready ? 'Next scenario' : 'Run it again'}
            </span>
          </div>
        </div>
        <div className="divide-y-2 divide-ink border-2 border-ink">
          {ROWS.map((row, r) => (
            <div key={row.skill} className="grid gap-2 bg-sheet p-3 sm:grid-cols-[1.3fr_1fr] sm:items-center">
              <div>
                <p className="text-sm font-semibold text-ink">{row.skill}</p>
                <p className="text-[11.5px] text-ink-2">{row.anchor}</p>
              </div>
              <div className="grid grid-cols-4 gap-1.5" role="group" aria-label={`Score for ${row.skill}`}>
                {LEVELS.map((level) => {
                  const on = inView && level <= scores[r]
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => score(r, level)}
                      aria-pressed={scores[r] === level}
                      className={`h-8 cursor-pointer border-2 border-ink font-mono text-[11px] font-semibold text-ink transition-colors duration-300 motion-reduce:transition-none ${
                        on ? (scores[r] >= 3 ? 'bg-mint' : 'bg-peach') : 'bg-paper hover:bg-butter'
                      }`}
                      style={{ transitionDelay: inView ? `${r * 120 + level * 60}ms` : '0ms' }}
                    >
                      {level}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}
