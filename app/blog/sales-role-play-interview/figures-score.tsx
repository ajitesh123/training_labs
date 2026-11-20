'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, StackedBar, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const pct = (n: number) => `${Math.round(n)}%`

// ------------------------------------------------------------------------------
// talk time: Gong 2025, 326,000 calls
// ------------------------------------------------------------------------------
type View = 'won' | 'all' | 'lost' | 'lowLost'

const VIEWS: Record<View, { label: string; talk: number; note: string }> = {
  won: { label: 'Won deals', talk: 57, note: 'Reps who closed the deal talked a little less than average.' },
  all: { label: 'All calls', talk: 60, note: 'The average across every call in the sample.' },
  lost: { label: 'Lost deals', talk: 62, note: 'Reps who lost talked a little more than average.' },
  lowLost: { label: 'Low performers, lost', talk: 64, note: 'Low performers swing from 54% in deals they win to 64% in deals they lose.' },
}

export function TalkTimeMeter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('won')
  const v = VIEWS[view]

  return (
    <Figure
      title="How much of a sales call the rep spends talking"
      caption="Real sales calls, not interviews. The dashed lines mark Gong’s original 2016 benchmark (43% talking) and the 65% point above which it found lower win rates. Treat these as rules of thumb from one vendor’s data."
      source="Gong Labs, “Mastering the talk-to-listen ratio in sales calls” (326,000 calls of at least 10 minutes; published August 2025, updated March 2026)."
    >
      <div ref={ref}>
        <Segmented<View>
          label="Choose a group of calls"
          value={view}
          onChange={setView}
          options={(Object.keys(VIEWS) as View[]).map((k) => ({ value: k, label: VIEWS[k].label }))}
        />
        <div className="relative mt-6">
          {[
            { at: 43, label: '43%' },
            { at: 65, label: '65%' },
          ].map((m) => (
            <span
              key={m.at}
              aria-hidden
              className="pointer-events-none absolute -top-4 z-10 h-[calc(1.5rem+1rem)] border-l-2 border-dashed border-ink"
              style={{ left: `${m.at}%` }}
            >
              <span className="tl-mono absolute -top-1 left-1 text-[9.5px] text-ink-2">{m.label}</span>
            </span>
          ))}
          <StackedBar
            start={inView}
            scaleMax={100}
            format={pct}
            segments={[
              { label: 'Rep talking', value: v.talk, colorClass: 'bg-butter' },
              { label: 'Buyer talking or silence', value: 100 - v.talk, colorClass: 'bg-sky' },
            ]}
          />
        </div>
        <p className="mt-3 text-[13px] text-ink-2">{v.note}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { label: 'Questions per call, sellers who won', value: 15.5, shown: '15 to 16', win: true },
            { label: 'Questions per call, sellers who lost', value: 20, shown: 'about 20', win: false },
          ].map((q) => (
            <div key={q.label} className={`border-2 border-ink p-3 ${q.win ? 'bg-mint' : 'bg-paper'}`}>
              <p className="tl-mono text-[10px] font-semibold text-ink-2">{q.label}</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-ink">
                <CountUp value={q.value} start={inView} format={(n) => (n >= q.value - 0.01 ? q.shown : String(Math.round(n)))} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// two candidates, one buyer, one scorecard
// ------------------------------------------------------------------------------
type Who = 'a' | 'b'

const ROWS = ['Opening', 'Discovery', 'Listening and play back', 'Objection handling', 'Value tied to the buyer', 'Next step'] as const

const CANDIDATES: Record<Who, { label: string; scores: number[]; quotes: string[]; verdict: string; pass: boolean }> = {
  a: {
    label: 'Candidate A: pitches first',
    scores: [3, 1, 2, 2, 1, 2],
    quotes: [
      '“Thanks for the time, let me tell you about us.”',
      'No questions before the first feature.',
      'Talked over the buyer at minute three.',
      '“I can see what I can do on price.”',
      '“It has great reporting.”',
      '“I’ll send some info over.”',
    ],
    verdict: 'Hold',
    pass: false,
  },
  b: {
    label: 'Candidate B: asks first',
    scores: [4, 4, 5, 4, 4, 5],
    quotes: [
      '“Can I ask a few questions before I show anything?”',
      '“What happens in a new rep’s first six months?”',
      '“So month seven is when they’re productive. Right?”',
      '“Expensive compared with what you pay today?”',
      '“That’s the ramp problem you named.”',
      '“Thursday at 2, with your ops lead?”',
    ],
    verdict: 'Advance',
    pass: true,
  },
}

export function ScorecardCompare() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [who, setWho] = useState<Who>('a')
  const c = CANDIDATES[who]
  const total = c.scores.reduce((s, n) => s + n, 0)

  return (
    <Figure
      title="Same buyer, same brief: how two candidates score"
      caption="Example scores on a six-row, 1 to 5 scorecard built from the criteria four published hiring guides share. Each score carries one line of evidence, as Kulissa recommends. The candidates are invented."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Who>
            label="Choose a candidate"
            value={who}
            onChange={setWho}
            options={[
              { value: 'a', label: 'A: pitches first' },
              { value: 'b', label: 'B: asks first' },
            ]}
          />
          <div className="flex items-center gap-3">
            <p className="font-mono text-2xl font-semibold text-ink">
              <CountUp value={total} start={inView} />
              <span className="text-sm text-ink-2">/30</span>
            </p>
            <span
              key={who}
              className={`tl-stamp ${c.pass ? 'tl-stamp-2 text-stamp-green' : 'tl-stamp-1 text-stamp-red'}`}
              style={inView ? { animation: `${STAMP_IN} 1.1s` } : undefined}
            >
              {c.verdict}
            </span>
          </div>
        </div>
        <ul className="divide-y divide-ink/15 border-2 border-ink bg-paper">
          {ROWS.map((row, i) => (
            <li key={row} className="grid gap-1.5 px-3 py-2.5 sm:grid-cols-[180px_auto_1fr] sm:items-center sm:gap-4">
              <span className="text-[13.5px] font-semibold text-ink">{row}</span>
              <span className="flex gap-1" aria-label={`${c.scores[i]} out of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`h-4 w-5 border-2 border-ink transition-colors duration-300 motion-reduce:transition-none ${
                      inView && n <= c.scores[i] ? (c.pass ? 'bg-mint' : 'bg-peach') : 'bg-sheet'
                    }`}
                    style={{ transitionDelay: `${i * 90 + n * 50}ms` }}
                  />
                ))}
              </span>
              <span key={`${who}-${i}`} className="blog-fade-up text-[12.5px] italic text-ink-2" style={{ animationDelay: `${i * 90}ms` }}>
                {c.quotes[i]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  )
}
