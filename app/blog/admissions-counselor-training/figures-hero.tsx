'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, type Segment, StackedBar, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (inView: boolean, at: number): CSSProperties | undefined =>
  inView ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (inView: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(inView ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const mark = (inView: boolean, at: number): CSSProperties | undefined =>
  inView ? { animation: `tl-hl 0.6s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// hero: a parent call prints in and gets scored
// ------------------------------------------------------------------------------
type Line = { t: string; who: 'Parent' | 'Counselor'; before: string; hl?: string; after?: string; at: number }

const LINES: Line[] = [
  { t: '00:40', who: 'Parent', before: '“Honestly, $58,000 a year is out of the question for us.”', at: 0.3 },
  {
    t: '00:55',
    who: 'Counselor',
    before: '“That’s fair to say out loud. Before we get to numbers, ',
    hl: 'what would a good first year look like',
    after: ' for Maya?”',
    at: 1.3,
  },
  {
    t: '06:10',
    who: 'Counselor',
    before: '“The sticker price isn’t the whole picture, and I won’t guess your aid. ',
    hl: 'The net price calculator',
    after: ' takes ten minutes, and I’ll send aid’s direct line.”',
    at: 2.5,
  },
  { t: '10:30', who: 'Counselor', before: '“Can we book Thursday at 6 with financial aid, with Maya on the call too?”', at: 3.7 },
]

const ROWS = [
  { label: 'Purpose stated', pass: true },
  { label: 'Goals before price', pass: true },
  { label: 'No aid promises', pass: true },
  { label: 'Student drawn in early', pass: false },
  { label: 'Dated next step', pass: true },
]
const SCORE_AT = 4.7

export function ParentCallHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const passed = ROWS.filter((r) => r.pass).length
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Parent call · practice round · example ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Inquiry follow-up · 11 min</p>
      </div>
      <ol className="divide-y-2 divide-dashed divide-ink/25 border-2 border-ink bg-sheet">
        {LINES.map((l) => (
          <li key={l.t} className="grid grid-cols-[58px_1fr] gap-3 p-3 sm:grid-cols-[88px_1fr]">
            <div>
              <p className="tl-mono text-[10.5px] font-semibold text-ink">{l.t}</p>
              <p className={`tl-mono text-[9.5px] ${l.who === 'Parent' ? 'text-stamp-red' : 'text-ink-2'}`}>{l.who}</p>
            </div>
            <p className="tl-line min-w-0 text-[13.5px] leading-snug text-ink" style={print(inView, l.at)}>
              {l.before}
              {l.hl && (
                <span className="tl-mark" style={mark(inView, l.at + 0.8)}>
                  {l.hl}
                </span>
              )}
              {l.after}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="flex flex-wrap gap-2">
          {ROWS.map((r, i) => (
            <span key={r.label} className="flex items-center gap-1.5 border-2 border-ink bg-paper px-2 py-1">
              <span
                className={`font-mono text-[14px] font-bold leading-none opacity-0 motion-reduce:opacity-100 ${r.pass ? 'text-stamp-green' : 'text-stamp-red'}`}
                style={stamp(inView, SCORE_AT + i * 0.3, i % 2 ? '5deg' : '-5deg')}
              >
                {r.pass ? '✓' : '✗'}
              </span>
              <span className="tl-mono text-[9.5px] text-ink">{r.label}</span>
            </span>
          ))}
        </div>
        <p className="text-right text-[12.5px] text-ink-2">
          Rubric rows passed{' '}
          <span className="font-mono text-xl font-bold text-ink">
            <CountUp value={inView ? passed : 0} start={inView} durationMs={2400} />
          </span>{' '}
          of {ROWS.length}
        </p>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// where twelve minutes go: a weak and a strong call
// ------------------------------------------------------------------------------
type CallKind = 'weak' | 'strong'

const COLORS = ['bg-peach', 'bg-sky', 'bg-mint', 'bg-butter', 'bg-[var(--color-flame)]']
const LABELS = ['Counselor presenting', 'Counselor asking', 'Family talking', 'Cost and aid', 'Booking a next step']

const CALLS: Record<CallKind, { minutes: number[]; questions: number; verdict: string; note: string }> = {
  weak: {
    minutes: [6.5, 0.5, 2, 3, 0],
    questions: 2,
    verdict: 'Pitch, then price',
    note: 'Opens with the program tour, estimates the family’s aid from memory, ends with “let me know.”',
  },
  strong: {
    minutes: [2.5, 2, 5, 1.5, 1],
    questions: 9,
    verdict: 'Ask, then explain',
    note: 'Asks about goals first, points to the net price calculator and aid office, books a dated call.',
  },
}

export function TalkTimeFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [kind, setKind] = useState<CallKind>('weak')
  const call = CALLS[kind]
  const segments: Segment[] = call.minutes.map((m, i) => ({ label: LABELS[i], value: m, colorClass: COLORS[i] }))
  const familyShare = (call.minutes[2] / 12) * 100
  return (
    <Figure
      title="Same twelve-minute call, two counselors: where the time goes"
      caption="Example calls written for this guide, not measured data. Family talking includes both the student and the parent. Use the split as a review lens: on your own recordings, check who talks, when cost comes up, and whether the call ends with a date."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<CallKind>
            label="Counselor"
            value={kind}
            onChange={setKind}
            options={[
              { value: 'weak', label: 'Weak call' },
              { value: 'strong', label: 'Strong call' },
            ]}
          />
          <span
            key={kind}
            className={`tl-stamp ${kind === 'strong' ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={stamp(inView, 0.1, kind === 'strong' ? '-4deg' : '4deg')}
          >
            {call.verdict}
          </span>
        </div>
        <StackedBar segments={segments} start={inView} format={(n) => `${n.toFixed(1)} min`} scaleMax={12} />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="border-2 border-ink bg-paper p-3">
            <p className="tl-mono text-[10px] text-ink-2">Questions asked</p>
            <CountUp value={call.questions} start={inView} className="font-mono text-2xl font-bold text-ink" />
          </div>
          <div className="border-2 border-ink bg-paper p-3">
            <p className="tl-mono text-[10px] text-ink-2">Family share of talk</p>
            <CountUp value={familyShare} start={inView} format={(n) => `${Math.round(n)}%`} className="font-mono text-2xl font-bold text-ink" />
          </div>
        </div>
        <p className="mt-3 text-[13px] text-ink-2">{call.note}</p>
      </div>
    </Figure>
  )
}
