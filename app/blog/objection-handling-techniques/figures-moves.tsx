'use client'

import { useState } from 'react'
import { CountUp, Figure, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// hero: one objection, five moves
// ------------------------------------------------------------------------------
const MOVES = [
  { n: 1, name: 'Pause', line: '(Two beats of silence.)' },
  { n: 2, name: 'Acknowledge', line: '“More than you budgeted.”' },
  { n: 3, name: 'Ask', line: '“The total, or this quarter?”' },
  { n: 4, name: 'Isolate', line: '“Anything else in the way?”' },
  { n: 5, name: 'Respond', line: '“Then let’s split it across two quarters.”' },
]
const STEP_MS = 650

export function ObjectionMovesHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-3 pb-5 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-7"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ One objection, five moves ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Drill 3 · price</p>
      </div>
      <div className="mb-5 border-2 border-ink bg-peach px-4 py-3">
        <p className="tl-mono mb-1 text-[10.5px] font-semibold text-ink-2">Buyer</p>
        <p className="text-[17px] font-semibold leading-snug text-ink sm:text-[19px]">
          “Honestly, this is more than we budgeted.”
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-[17px] top-0 h-full w-0.5 bg-ink/15 sm:left-0 sm:top-[17px] sm:h-0.5 sm:w-full" aria-hidden />
        <div
          className="absolute left-[17px] top-0 w-0.5 bg-ink transition-[height] ease-linear motion-reduce:transition-none sm:hidden"
          style={{ height: inView ? '100%' : '0%', transitionDuration: `${STEP_MS * MOVES.length}ms` }}
          aria-hidden
        />
        <div
          className="absolute left-0 top-[17px] hidden h-0.5 bg-ink transition-[width] ease-linear motion-reduce:transition-none sm:block"
          style={{ width: inView ? '100%' : '0%', transitionDuration: `${STEP_MS * MOVES.length}ms` }}
          aria-hidden
        />
        <ol className="relative grid gap-3 sm:grid-cols-5 sm:gap-2">
          {MOVES.map((m, i) => (
            <li key={m.n} className="grid grid-cols-[38px_1fr] items-start gap-3 sm:block">
              <span
                className={`grid h-9 w-9 place-items-center border-2 border-ink font-mono text-sm font-bold text-ink transition-colors duration-300 motion-reduce:transition-none ${
                  inView ? 'bg-butter' : 'bg-sheet'
                }`}
                style={{ transitionDelay: inView ? `${i * STEP_MS}ms` : '0ms' }}
              >
                {m.n}
              </span>
              <div
                className={`sm:mt-3 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * STEP_MS + 150}ms` }}
              >
                <p className="tl-mono text-[11px] font-semibold text-ink">{m.name}</p>
                <p className="text-[14px] leading-snug text-ink-2 sm:text-[13px]">{m.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-4">
        <p className="tl-mono text-[10.5px] text-ink-2">Rep spoke 4 short lines · asked 2 questions</p>
        <span
          className="tl-stamp text-stamp-green"
          style={inView ? { animation: STAMP_IN, animationDelay: `${MOVES.length * STEP_MS + 300}ms` } : undefined}
        >
          Next step booked ✓
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// rushed vs paused: words printed onto a six-second ruler
// ------------------------------------------------------------------------------
const WINDOW_S = 6
const PAUSE_S = 1.2
const ROWS = [
  { title: 'Flustered rep', wpm: 188, pause: 0, note: 'Starts talking at once', fill: 'bg-peach' },
  { title: 'Calm rep', wpm: 173, pause: PAUSE_S, note: 'Pauses, then answers', fill: 'bg-mint' },
]

function wordTimes(wpm: number, pause: number): number[] {
  const gap = 60 / wpm
  const n = Math.floor((WINDOW_S - pause) / gap)
  return Array.from({ length: n }, (_, i) => pause + i * gap)
}

export function PauseRuler() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [run, setRun] = useState(0)
  const playing = inView

  return (
    <Figure
      title="Six seconds after the objection: rushed vs paused"
      caption="Each block is one word, placed at real speaking speed. The 173 and 188 words per minute come from Gong’s study of 67,149 sales meetings: 173 is a typical sales conversation, 188 is a flustered rep after an objection. The 1.2-second pause is an example; Gong reports that successful reps pause longer after objections but gives no exact length."
      source="Gong Labs, Mastering objection handling (April 2018, updated March 2026)."
    >
      <div ref={ref}>
        <div className="mb-4 flex justify-end">
          <button type="button" onClick={() => setRun((r) => r + 1)} className="tl-btn tl-btn-sm">
            Replay ↺
          </button>
        </div>
        <div key={run} className="space-y-5">
          {ROWS.map((row) => {
            const times = wordTimes(row.wpm, row.pause)
            return (
              <div key={row.title}>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{row.title}</p>
                    <p className="text-xs text-ink-2">{row.note}</p>
                  </div>
                  <p className="font-mono text-sm text-ink-2">
                    <CountUp value={row.wpm} start={playing} className="text-xl font-bold text-ink" /> wpm
                  </p>
                </div>
                <div className="relative h-9 border-2 border-ink bg-paper">
                  {row.pause > 0 && (
                    <span
                      className="tl-mono absolute inset-y-0 left-0 grid place-items-center border-r-2 border-dashed border-ink/40 text-[9.5px] text-ink-2"
                      style={{ width: `${(row.pause / WINDOW_S) * 100}%` }}
                    >
                      pause
                    </span>
                  )}
                  {times.map((t) => (
                    <span
                      key={t}
                      className={`absolute bottom-1 top-1 border-[1.5px] border-ink ${row.fill} ${playing ? 'blog-fade-up' : 'opacity-0'}`}
                      style={{
                        left: `${(t / WINDOW_S) * 100}%`,
                        width: `${((60 / row.wpm) * 0.7 * 100) / WINDOW_S}%`,
                        animationDelay: `${t * 1000}ms`,
                      }}
                    />
                  ))}
                </div>
                <p className="tl-mono mt-1 text-right text-[10px] text-ink-2">{times.length} words in {WINDOW_S} s</p>
              </div>
            )
          })}
          <div className="tl-mono flex justify-between text-[10px] text-ink-2" aria-hidden>
            {Array.from({ length: WINDOW_S + 1 }, (_, i) => (
              <span key={i}>{i}s</span>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  )
}
