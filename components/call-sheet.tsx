'use client'

import { useEffect, useState } from 'react'

type Line = { who: string; text: string; rep: boolean; stamp?: Stamp }
type Stamp = { label: string; tone: 'green' | 'red'; order: 1 | 2 | 3 }

const LINES: Line[] = [
  { who: 'Dana', text: 'Honestly, this is more than we budgeted for this quarter.', rep: false },
  {
    who: 'You',
    text: 'That’s fair. What are you comparing it against?',
    rep: true,
    stamp: { label: 'Asked why ✓', tone: 'green', order: 1 },
  },
  { who: 'Dana', text: 'Two cheaper tools. Neither lets reps practice out loud.', rep: false },
  {
    who: 'You',
    text: 'Then let’s price what one practice hour costs you today.',
    rep: true,
    stamp: { label: 'Tie to value ↗', tone: 'red', order: 2 },
  },
]

const FINAL_STAMP: Stamp = { label: 'Objection heard ✓', tone: 'green', order: 3 }

// Long enough for the whole sequence (~7.5 s) plus a pause to read the result.
const REPLAY_MS = 11000

function StampMark({ stamp }: { stamp: Stamp }) {
  const color = stamp.tone === 'green' ? 'text-stamp-green' : 'text-stamp-red'
  return <span className={`tl-stamp tl-stamp-${stamp.order} ${color}`}>{stamp.label}</span>
}

/**
 * Hero proof: an example practice call printed onto a coach's sheet. Lines print
 * in, the rep's best answers get highlighted, stamps land, then the score shows.
 * Replays on a timer; reduced-motion users see the finished sheet.
 */
export function CallSheet() {
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setRun((n) => n + 1), REPLAY_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div key={run} className="tl-sheets play relative pb-4 pr-3.5 pt-2.5">
      <div className="absolute inset-[26px_-4px_0_20px] rotate-3 border-2 border-ink bg-sky-soft" />
      <div
        className="relative border-2 border-ink bg-sheet shadow-[7px_7px_0_var(--color-ink)]"
        aria-label="Example practice call sheet"
      >
        <div className="tl-mono flex justify-between gap-3 border-b-2 border-ink px-3.5 py-2.5 text-[11px] font-semibold">
          <span>Example practice call sheet</span>
          <span>#014</span>
        </div>
        <div className="tl-mono flex flex-wrap gap-2 px-3.5 pb-1 pt-3 text-[10.5px] font-semibold">
          <span className="border-[1.5px] border-ink bg-peach px-1.5 py-0.5">Buyer · Dana, VP Ops</span>
          <span className="border-[1.5px] border-ink bg-sky px-1.5 py-0.5">Rep · You</span>
          <span className="border-[1.5px] border-ink bg-sheet px-1.5 py-0.5">Pricing objection</span>
        </div>
        <ol className="tl-lines relative m-0 grid list-none gap-0.5 px-3.5 pb-1.5 pt-2 sm:pr-[168px]">
          {LINES.map((line, i) => (
            <li
              key={i}
              className="tl-line grid grid-cols-[44px_1fr] gap-x-2.5 border-b border-dashed border-ink/15 py-2 text-[14px] leading-[1.45] last:border-b-0 sm:grid-cols-[56px_1fr] sm:text-[14.5px]"
            >
              <span className={`font-mono text-[11px] font-semibold uppercase leading-[1.9] tracking-wider ${line.rep ? 'text-signal' : 'text-ink-2'}`}>
                {line.who}
              </span>
              <span>{line.rep ? <mark className="tl-mark text-ink">{line.text}</mark> : line.text}</span>
              {line.stamp && <StampMark stamp={line.stamp} />}
            </li>
          ))}
        </ol>
        <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-paper px-3.5 py-3">
          <span className="tl-mono text-[11px] font-semibold text-ink-2">Coach score</span>
          <StampMark stamp={FINAL_STAMP} />
          <span className="tl-score font-mono text-[34px] font-semibold leading-none tracking-tight">
            82<small className="ml-0.5 text-sm text-ink-2">/100</small>
          </span>
        </div>
      </div>
    </div>
  )
}
