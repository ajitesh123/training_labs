'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP = 'inline-block border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider'
const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stampIn = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

// ------------------------------------------------------------------------------
// free cold call practice options, November 2026
// ------------------------------------------------------------------------------
type Signup = 'none' | 'email' | 'unknown'
type Option = { name: string; free: string; how: string; signup: Signup; coldCall: boolean }

const OPTIONS: Option[] = [
  { name: 'Cold Call Gym', free: 'First 3 calls free', how: 'You dial a phone number; an AI prospect answers and scores your opening, discovery, objections and close.', signup: 'none', coldCall: true },
  { name: 'TrackPoint', free: 'Free roleplay, no account', how: 'Talk to an AI buyer out loud in the browser.', signup: 'none', coldCall: true },
  { name: 'SalesLab', free: '10 text calls and one 10-minute voice call a month', how: 'A buyer built from your product page; Google or email sign-in, no card.', signup: 'email', coldCall: true },
  { name: 'Chambr', free: 'Free browser simulator', how: 'Name and work email, no card; a scorecard when you hang up.', signup: 'email', coldCall: true },
  { name: 'Tough Tongue AI', free: '25 one-time free minutes', how: 'Public and featured scenarios on the free tier; team plans add custom buyers.', signup: 'email', coldCall: true },
  { name: 'Kulissa', free: 'Free sell-the-pen challenge', how: 'A scored voice demo that, by its own description, is not a cold call simulator.', signup: 'unknown', coldCall: false },
]

type Filter = 'all' | 'nosignup' | 'coldcall'

export function FreeOptionsFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [filter, setFilter] = useState<Filter>('all')
  const dim = (o: Option) => (filter === 'nosignup' && o.signup !== 'none') || (filter === 'coldcall' && !o.coldCall)
  const shown = OPTIONS.filter((o) => !dim(o)).length

  return (
    <Figure
      title="Free ways to practice cold calls against an AI buyer, as each vendor describes them"
      caption="What each free tier includes, read from the vendors’ own pages in November 2026. Free tiers change often; check before you plan a team around one. Training Labs is published by the team behind Tough Tongue AI."
      source="Cold Call Gym, TrackPoint, SalesLab, Chambr, Tough Tongue AI and Kulissa pages, November 2026."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Filter>
            label="Filter options"
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all', label: 'All' },
              { value: 'nosignup', label: 'No sign-up' },
              { value: 'coldcall', label: 'Cold call practice' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={shown} start={inView} className="font-mono text-lg font-bold text-ink" /> of {OPTIONS.length} shown
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map((o, i) => (
            <div key={o.name} className={inView ? 'blog-fade-up' : 'opacity-0'} style={{ animationDelay: `${i * 80}ms` }}>
              <div className={`flex h-full flex-col gap-2 border-2 border-ink bg-paper p-3 transition-all duration-500 ${dim(o) ? 'scale-95 opacity-30' : ''}`}>
                <p className="text-sm font-semibold text-ink">{o.name}</p>
                <p className="font-mono text-xs font-semibold text-ink">{o.free}</p>
                <p className="text-xs text-ink-2">{o.how}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {o.signup === 'none' && <span className={`${STAMP} -rotate-2 text-stamp-green`}>No sign-up</span>}
                  {o.signup === 'email' && <span className={`${STAMP} text-ink-2`}>Sign-up</span>}
                  {o.signup === 'unknown' && <span className={`${STAMP} text-ink-2`}>Sign-up not stated</span>}
                  {!o.coldCall && <span className={`${STAMP} rotate-2 text-stamp-red`}>Not a cold call</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// a five-line rubric, scored on two attempts at the same call
// ------------------------------------------------------------------------------
type Attempt = 'mon' | 'fri'

const RUBRIC = [
  'Reason for the call in the first 15 seconds',
  'The problem in one plain sentence',
  'Brush-off: agree, then one question',
  'Stays calm through two objections',
  'Asks for a day and a time',
]

const ATTEMPTS: Record<Attempt, { scores: number[]; notes: string[] }> = {
  mon: {
    scores: [1, 0, 0, 1, 0],
    notes: ['Reason at 0:24', 'Listed three features', 'Argued with “not interested”', 'Rushed the budget answer', '“I’ll follow up next week”'],
  },
  fri: {
    scores: [2, 2, 2, 1, 2],
    notes: ['Reason at 0:09', '“Invoices stall your month-end”', '“Fair. Quick check before I go…”', 'Paused, then answered budget', '“Tuesday at 10 or Thursday at 2?”'],
  },
}
const FILL = ['bg-peach', 'bg-butter', 'bg-mint']

export function RubricFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [attempt, setAttempt] = useState<Attempt>('mon')
  const a = ATTEMPTS[attempt]
  const total = a.scores.reduce((x, y) => x + y, 0)
  return (
    <Figure
      title="One rubric, the same practice call on Monday and on Friday"
      caption="Example scores for one rep after a week of 15-minute sessions. Each line scores 0, 1 or 2. Keep the lines fixed for a month so the scores mean something from week to week."
      source="Training Labs example rubric."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<Attempt>
            label="Practice attempt"
            value={attempt}
            onChange={setAttempt}
            options={[
              { value: 'mon', label: 'Monday, try 1' },
              { value: 'fri', label: 'Friday, try 12' },
            ]}
          />
        </div>
        <ul className="space-y-2.5">
          {RUBRIC.map((r, i) => (
            <li key={r} className="grid items-center gap-x-3 gap-y-1 border-2 border-ink bg-paper p-2.5 sm:grid-cols-[1fr_10rem_2.5rem]">
              <span className="text-[13.5px] text-ink">{r}</span>
              <span className="text-xs text-ink-2 sm:text-right">{a.notes[i]}</span>
              <div className="flex items-center gap-2 sm:justify-end">
                <div className="flex h-3 w-16 border-2 border-ink bg-sheet sm:hidden">
                  <div className={`h-full transition-[width] duration-700 ${FILL[a.scores[i]]}`} style={{ width: inView ? `${(a.scores[i] / 2) * 100}%` : '0%' }} />
                </div>
                <span
                  className={`border-2 border-ink px-1.5 font-mono text-xs font-bold text-ink transition-colors duration-500 ${FILL[a.scores[i]]}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {a.scores[i]}/2
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-3">
          <p className="text-sm text-ink-2">
            Total <CountUp value={total} start={inView} format={(n) => `${Math.round(n)} / 10`} className="font-mono text-2xl font-bold text-ink" />
          </p>
          <span
            key={attempt}
            className={`tl-stamp whitespace-normal ${total >= 8 ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={stampIn(inView, 0.4, total >= 8 ? '-4deg' : '4deg')}
          >
            {total >= 8 ? 'Ready to dial' : 'Drill line 3 tomorrow'}
          </span>
        </div>
      </div>
    </Figure>
  )
}
