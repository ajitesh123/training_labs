'use client'

import { useState } from 'react'
import { Figure, useInView } from '@/components/blog/figures'
import { type Scenario, scenarios } from './content'

// ------------------------------------------------------------------------------
// hero: a practice conference printed onto a mentor's sheet
// ------------------------------------------------------------------------------
type Line = { who: 'Parent' | 'You'; text: string; stamp?: { label: string; order: 1 | 2 } }

// Exactly four lines: lab.css times the print, highlight and stamps by position.
const LINES: Line[] = [
  { who: 'Parent', text: 'He’s smart. He only acts out because he’s bored.' },
  { who: 'You', text: 'I see it too. He’s first to answer in every discussion.', stamp: { label: 'Strength first ✓', order: 1 } },
  { who: 'Parent', text: 'Then why does he keep getting sent out of class?' },
  { who: 'You', text: 'Let’s try harder work on Tuesdays, and talk again in two weeks.', stamp: { label: 'Next step + date ✓', order: 2 } },
]

// When each cell of the parent's mood meter fills, in seconds, synced to the lines.
const MOOD_FILL = [0, 2.0, 4.6, 5.6, 6.3]

export function ConferenceSheetHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  return (
    <div className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-3 pb-5 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-7">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Practice conference · run 3 ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Scenario 4 of 10</p>
      </div>
      <div ref={ref} className={`tl-sheets relative ${inView ? 'play' : ''}`}>
        <div className="relative border-2 border-ink bg-sheet">
          <div className="tl-mono flex flex-wrap gap-2 border-b-2 border-ink px-3.5 py-2.5 text-[10.5px] font-semibold">
            <span className="border-[1.5px] border-ink bg-peach px-1.5 py-0.5">Parent · Ms. Reyes</span>
            <span className="border-[1.5px] border-ink bg-sky px-1.5 py-0.5">Teacher · You</span>
            <span className="border-[1.5px] border-ink bg-sheet px-1.5 py-0.5">“He’s bored”</span>
          </div>
          <ol className="tl-lines relative m-0 grid list-none gap-0.5 px-3.5 pb-1.5 pt-2 sm:pr-[168px]">
            {LINES.map((line, i) => (
              <li
                key={i}
                className="tl-line grid grid-cols-[52px_1fr] gap-x-2.5 border-b border-dashed border-ink/15 py-2 text-[14px] leading-[1.45] last:border-b-0 sm:grid-cols-[60px_1fr] sm:text-[14.5px]"
              >
                <span className={`font-mono text-[11px] font-semibold uppercase leading-[1.9] tracking-wider ${line.who === 'You' ? 'text-signal' : 'text-ink-2'}`}>
                  {line.who}
                </span>
                <span>{line.who === 'You' ? <mark className="tl-mark text-ink">{line.text}</mark> : line.text}</span>
                {line.stamp && <span className={`tl-stamp tl-stamp-${line.stamp.order} text-stamp-green`}>{line.stamp.label}</span>}
              </li>
            ))}
          </ol>
          <div className="grid gap-3 border-t-2 border-ink bg-paper px-3.5 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="tl-mono mb-1.5 text-[10.5px] font-semibold text-ink-2">
                Parent mood:{' '}
                <span className="inline-grid align-bottom">
                  <span
                    className={`col-start-1 row-start-1 text-stamp-red transition-opacity duration-300 motion-reduce:transition-none ${inView ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDelay: inView ? '6.3s' : '0s' }}
                  >
                    defensive
                  </span>
                  <span
                    className={`col-start-1 row-start-1 text-stamp-green transition-opacity duration-300 motion-reduce:transition-none ${inView ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: inView ? '6.3s' : '0s' }}
                  >
                    working with you
                  </span>
                </span>
              </p>
              <div className="flex gap-1">
                {MOOD_FILL.map((t, i) => (
                  <span
                    key={i}
                    className={`h-3.5 flex-1 border-2 border-ink transition-colors duration-500 motion-reduce:transition-none ${
                      i === 0 || inView ? 'bg-mint' : 'bg-sheet'
                    }`}
                    style={{ transitionDelay: `${t}s` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className="tl-stamp tl-stamp-3 text-stamp-red">Rerun: name her worry ↗</span>
              <span className="tl-score font-mono text-[30px] font-semibold leading-none tracking-tight">
                17<small className="ml-0.5 text-sm text-ink-2">/20</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// the ten scenarios, mapped by heat and complexity
// ------------------------------------------------------------------------------
const STEPS = [1, 2, 3, 4, 5]
// Map 1..5 to the centre of each fifth of the plot.
const pos = (v: number) => `${(v - 0.5) * 20}%`

function ScenarioCard({ s }: { s: Scenario }) {
  return (
    <div className="blog-fade-up border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)]">
      <p className="tl-mono text-[10.5px] font-semibold text-ink-2">
        Scenario {s.n} · heat {s.heat}/5 · complexity {s.complexity}/5
      </p>
      <p className="mb-2 mt-1 font-semibold leading-snug text-ink">{s.title}</p>
      <p className="mb-3 border-l-4 border-butter pl-3 text-sm italic text-ink">{s.opening}</p>
      <p className="text-[13px] text-ink-2">
        <span className="tl-mono font-semibold text-stamp-green">Pass if </span>
        {s.pass}
      </p>
    </div>
  )
}

export function ScenarioMap() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(1)
  const current = scenarios.find((s) => s.n === active) ?? scenarios[0]

  return (
    <Figure
      title="Ten scenarios by heat and complexity: start bottom left, work up"
      caption="Heat is how upset the parent arrives. Complexity is how many people, rules or languages are in the room. Positions are our judgment for sequencing practice, not measured data. Tap a square to see its opening line."
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="flex gap-2">
          <p className="tl-mono flex w-4 items-center justify-center text-[10px] text-ink-2 [writing-mode:vertical-rl] rotate-180">
            Complexity →
          </p>
          <div className="flex-1">
            <div className="relative aspect-square w-full border-2 border-ink bg-paper">
              {STEPS.slice(1).map((v) => (
                <span key={`v${v}`} className="absolute inset-y-0 border-l border-dashed border-ink/15" style={{ left: `${(v - 1) * 20}%` }} />
              ))}
              {STEPS.slice(1).map((v) => (
                <span key={`h${v}`} className="absolute inset-x-0 border-t border-dashed border-ink/15" style={{ bottom: `${(v - 1) * 20}%` }} />
              ))}
              <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full">
                <path
                  d="M 8 92 L 90 10"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeOpacity={0.35}
                  strokeWidth={1.2}
                  strokeDasharray="120"
                  strokeDashoffset="120"
                  style={inView ? { animation: 'tl-draw 1.4s ease-out forwards' } : undefined}
                />
              </svg>
              {scenarios.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActive(s.n)}
                  aria-pressed={active === s.n}
                  aria-label={`Scenario ${s.n}: ${s.title}`}
                  className={`absolute grid h-8 w-8 -translate-x-1/2 translate-y-1/2 cursor-pointer place-items-center border-2 border-ink font-mono text-[12px] font-bold text-ink transition-[background-color,box-shadow] sm:h-9 sm:w-9 ${
                    active === s.n ? 'bg-butter shadow-[3px_3px_0_var(--color-ink)]' : 'bg-sheet hover:bg-sky-soft'
                  } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                  style={{ left: pos(s.heat), bottom: pos(s.complexity), animationDelay: `${300 + i * 90}ms` }}
                >
                  {s.n}
                </button>
              ))}
            </div>
            <p className="tl-mono mt-1.5 text-center text-[10px] text-ink-2">Heat →</p>
          </div>
        </div>
        <ScenarioCard key={current.n} s={current} />
      </div>
    </Figure>
  )
}
