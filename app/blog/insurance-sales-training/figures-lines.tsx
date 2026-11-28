'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'
import { stampStyle } from './fx'

// ------------------------------------------------------------------------------
// one training plan does not fit every line of business
// ------------------------------------------------------------------------------
type Line = 'personal' | 'commercial' | 'life' | 'annuity' | 'medicare'

type LineCard = {
  call: string
  moment: string
  rule: string
  ruleSource: string
  drill: string
}

const LINES: Record<Line, LineCard> = {
  personal: {
    call: 'Auto and home. Often an inbound shopper comparing price, and often decided on one call.',
    moment: '“That’s more than I pay now.”',
    rule: 'Compare at the same limits and deductibles, and describe coverage accurately. Outbound calls follow Do Not Call rules.',
    ruleSource: 'TotalCSR, insurance sales training guide',
    drill: 'Re-quote a price shopper at their current limits, then explain one coverage difference in a single sentence.',
  },
  commercial: {
    call: 'A needs review with an owner about operations, contracts, assets and past losses.',
    moment: '“My agent has handled this for twelve years.”',
    rule: 'Never promise coverage the policy form will not deliver. Document what was offered and declined.',
    ruleSource: 'TotalCSR, insurance sales training guide',
    drill: 'Ask three questions that find a contract requiring additional insured status, before any price comes up.',
  },
  life: {
    call: 'A fact finder at a kitchen table or on video. The decision is often put off.',
    moment: '“I need to talk to my spouse first.”',
    rule: 'Recommend from the needs you found, and document the recommendation and what the client declined.',
    ruleSource: 'TotalCSR, insurance sales training guide',
    drill: 'Run the fact finder in ten minutes, then explain term and permanent coverage in two sentences each.',
  },
  annuity: {
    call: 'A retirement income conversation, often about replacing a product the client already owns.',
    moment: '“My advisor says annuities are a bad deal.”',
    rule: 'Best interest: disclose your role, how you are paid and any conflicts, and document the basis for the recommendation.',
    ruleSource: 'NAIC Model #275, 2020 revision',
    drill: 'Say your role and how you are compensated out loud in under 30 seconds, without sounding defensive.',
  },
  medicare: {
    call: 'A recorded plan comparison, inbound or outbound, usually by phone.',
    moment: 'The caller asks about dental benefits in the first 20 seconds.',
    rule: 'Agree and record the Scope of Appointment first, and say the TPMO disclaimer before discussing any benefits.',
    ruleSource: '42 CFR 422.2267 and 422.2274, as of November 2026',
    drill: 'Open ten practice calls where the caller jumps straight to benefits, and hold the order every time.',
  },
}

const OPTIONS: { value: Line; label: string }[] = [
  { value: 'personal', label: 'Personal lines' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'life', label: 'Life' },
  { value: 'annuity', label: 'Annuities' },
  { value: 'medicare', label: 'Medicare' },
]

export function LinesFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [line, setLine] = useState<Line>('life')
  const c = LINES[line]
  const rows = [
    { label: 'The call', body: c.call, fill: 'bg-paper' },
    { label: 'The hard moment', body: c.moment, fill: 'bg-peach' },
    { label: 'The rule to get right', body: c.rule, note: c.ruleSource, fill: 'bg-sky-soft' },
  ]

  return (
    <Figure
      title="Same agency, five different calls: what to train for each line"
      caption="The hard moments and drills are examples of what agents commonly face, chosen for this post. The rules summarize the cited source; check your state and carrier for the full requirement."
      source="TotalCSR (read November 2026); NAIC Model #275 (Spring 2020 edition); eCFR, 42 CFR 422.2267 and 422.2274 (current as of November 2026)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Line> label="Line of business" value={line} onChange={setLine} options={OPTIONS} />
        </div>
        <div key={line} className="grid gap-3 md:grid-cols-[1fr_0.9fr]">
          <div className="space-y-2.5">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`border-2 border-ink p-3 ${r.fill} ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <p className="tl-mono mb-1 text-[10px] font-semibold text-ink-2">{r.label}</p>
                <p className="text-[14px] leading-snug text-ink">{r.body}</p>
                {r.note && <p className="tl-mono mt-1.5 text-[9.5px] text-ink-2">Source: {r.note}</p>}
              </div>
            ))}
          </div>
          <div
            className={`relative flex flex-col justify-between border-2 border-ink bg-butter p-4 shadow-[5px_5px_0_var(--color-ink)] ${
              inView ? 'blog-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            <div>
              <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink">Drill this week</p>
              <p className="text-[15px] font-medium leading-snug text-ink">{c.drill}</p>
            </div>
            <span className="tl-stamp mt-4 self-start text-stamp-green" style={stampStyle(inView, 0.75, '-4deg')}>
              Practice out loud
            </span>
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// Medicare: when the TPMO disclaimer has to land, before and after Oct 1, 2026
// ------------------------------------------------------------------------------
type Rule = 'old' | 'new'

const CALL_SECONDS = 240
// Example calls. Each event: second it happens and what it is.
const CALLS = [
  {
    name: 'Call A',
    note: 'Caller asks about dental first',
    benefitsAt: 25,
    disclaimerAt: 50,
    events: [
      { at: 0, label: 'Hello' },
      { at: 25, label: 'Dental benefits' },
      { at: 50, label: 'Disclaimer' },
    ],
  },
  {
    name: 'Call B',
    note: 'Agent records the Scope of Appointment first',
    benefitsAt: 175,
    disclaimerAt: 160,
    events: [
      { at: 0, label: 'Hello' },
      { at: 30, label: 'Scope of Appointment' },
      { at: 160, label: 'Disclaimer' },
      { at: 175, label: 'Benefits' },
    ],
  },
]

const passes = (rule: Rule, c: (typeof CALLS)[number]) =>
  rule === 'old' ? c.disclaimerAt <= 60 : c.disclaimerAt < c.benefitsAt

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export function DisclaimerTimingFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [rule, setRule] = useState<Rule>('new')
  const pos = (s: number) => `${(s / CALL_SECONDS) * 100}%`

  return (
    <Figure
      title="Two Medicare sales calls, judged by the TPMO disclaimer rule before and after October 1, 2026"
      caption="Example calls showing only when the disclaimer is said. A compliant call also needs a recorded Scope of Appointment, a recording kept six years, and everything else in the rules."
      source="eCFR, 42 CFR 422.2267(e)(41) (current as of November 2026); CMS, changes to the Medicare marketing guidelines (September 2026)."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Rule>
            label="Rule in force"
            value={rule}
            onChange={setRule}
            options={[
              { value: 'old', label: 'Until Sep 30, 2026' },
              { value: 'new', label: 'From Oct 1, 2026' },
            ]}
          />
          <p className="tl-mono text-[10.5px] text-ink-2">
            {rule === 'old' ? 'Rule: within the first minute' : 'Rule: before any benefits'}
          </p>
        </div>
        <div className="space-y-6">
          {CALLS.map((c) => {
            const ok = passes(rule, c)
            return (
              <div key={c.name}>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">
                    {c.name} <span className="font-normal text-ink-2">· {c.note}</span>
                  </p>
                  <span
                    key={`${c.name}-${rule}`}
                    className={`tl-stamp px-1.5 py-1 text-[10px] ${ok ? 'text-stamp-green' : 'text-stamp-red'}`}
                    style={stampStyle(inView, 0.6, ok ? '-4deg' : '4deg')}
                  >
                    {ok ? 'Disclaimer on time' : 'Too late'}
                  </span>
                </div>
                <div className="relative h-10 border-2 border-ink bg-paper">
                  <div
                    className="absolute inset-y-0 left-0 bg-sky-soft transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                    style={{ width: inView ? '100%' : '0%' }}
                  />
                  {rule === 'old' && (
                    <div className="absolute inset-y-0 z-10 border-l-2 border-dashed border-ink" style={{ left: pos(60) }} />
                  )}
                  {rule === 'new' && (
                    <div
                      className="absolute inset-y-0 z-10 border-l-2 border-dashed border-ink"
                      style={{ left: pos(c.benefitsAt) }}
                    />
                  )}
                  {c.events.map((e, i) => (
                    <div
                      key={e.label}
                      className={`absolute top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 border-2 border-ink ${
                        e.label === 'Disclaimer' ? 'bg-butter' : e.label.includes('enefits') ? 'bg-peach' : 'bg-sheet'
                      } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                      style={{ left: pos(e.at), animationDelay: `${200 + i * 150}ms` }}
                      title={`${fmt(e.at)} ${e.label}`}
                    />
                  ))}
                </div>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-ink-2">
                  {c.events.map((e) => (
                    <li key={e.label}>
                      <span className="font-mono font-semibold text-ink">{fmt(e.at)}</span> {e.label}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="tl-mono mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 border-[1.5px] border-ink bg-butter" /> Disclaimer
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 border-[1.5px] border-ink bg-peach" /> First benefit discussed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-0 border-l-2 border-dashed border-ink" /> Deadline under the rule shown
          </span>
        </div>
      </div>
    </Figure>
  )
}
