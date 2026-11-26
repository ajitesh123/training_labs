'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const mark = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-hl 0.55s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// hero: a 31-minute call, five candidate moments, one chosen
// ------------------------------------------------------------------------------
type Pin = { t: string; at: number; note: string; verdict: 'skip' | 'praise' | 'coach' | 'later' }

const CALL_MIN = 31
const PINS: Pin[] = [
  { t: '02:10', at: 2.2, note: 'Small talk ran four minutes', verdict: 'skip' },
  { t: '06:45', at: 6.8, note: 'Strong question about their current process', verdict: 'praise' },
  { t: '14:32', at: 14.5, note: 'Buyer asks the price; rep offers 20% off', verdict: 'coach' },
  { t: '22:05', at: 22.1, note: 'Buyer mentions a finance lead; rep moves on', verdict: 'later' },
  { t: '29:40', at: 29.7, note: 'Call ends on “send me something”', verdict: 'later' },
]
const VERDICT: Record<Pin['verdict'], { label: string; cls: string }> = {
  skip: { label: 'Skip', cls: 'text-ink-2' },
  praise: { label: 'Praise it', cls: 'text-stamp-green' },
  coach: { label: 'Coach this', cls: 'text-stamp-red' },
  later: { label: 'Next week', cls: 'text-ink-2' },
}
const CLIP = [
  { who: 'Buyer', text: 'Before we go further, what does this cost? We’re talking to two other vendors.' },
  { who: 'Rep', text: 'It’s $48 a seat, but if you sign this month I can do 20 percent off.', hl: true },
  { who: 'Buyer', text: 'Okay. Send me something.' },
]

export function CallMomentHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const pinAt = (i: number) => 0.9 + i * 0.45
  const clipAt = 4.2

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Call review · one call, one moment ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example discovery call</p>
      </div>
      <div className="relative mb-2 mt-6 h-5 border-2 border-ink bg-paper">
        <div className="h-full bg-sky-soft transition-[width] duration-700 ease-out motion-reduce:transition-none" style={{ width: inView ? '100%' : '0%' }} />
        {PINS.map((p, i) => (
          <span
            key={p.t}
            className={`absolute -top-5 -translate-x-1/2 border-2 border-ink px-1 font-mono text-[9.5px] font-bold leading-tight text-ink ${
              p.verdict === 'coach' ? 'bg-butter shadow-[3px_3px_0_var(--color-ink)]' : 'bg-sheet'
            } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ left: `${(p.at / CALL_MIN) * 100}%`, animationDelay: `${pinAt(i)}s` }}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="tl-mono mb-4 flex justify-between text-[10px] text-ink-2">
        <span>0:00</span>
        <span>31:00</span>
      </div>
      <ol className="space-y-1.5">
        {PINS.map((p, i) => (
          <li
            key={p.t}
            className={`grid grid-cols-[1.6rem_3.2rem_1fr] items-center gap-2 border-2 border-ink px-2 py-1.5 text-[13px] ${
              p.verdict === 'coach' ? 'bg-butter shadow-[4px_4px_0_var(--color-ink)]' : 'bg-sheet'
            } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: `${pinAt(i)}s` }}
          >
            <span className="font-mono text-[11px] font-bold text-ink">{i + 1}</span>
            <span className="font-mono text-[11px] text-ink-2">{p.t}</span>
            <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-ink">{p.note}</span>
              <span className={`tl-stamp px-1.5 py-0.5 text-[9.5px] ${VERDICT[p.verdict].cls}`} style={stamp(inView, 3 + i * 0.2, i % 2 ? '3deg' : '-3deg')}>
                {VERDICT[p.verdict].label}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-4 border-2 border-ink bg-paper p-3">
        <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink">Moment 3 · 14:32</p>
        <div className="space-y-1.5">
          {CLIP.map((c, i) => (
            <div key={i} className="tl-line grid grid-cols-[3.4rem_1fr] gap-2 text-[13.5px] leading-snug" style={print(inView, clipAt + i * 0.8)}>
              <span className="tl-mono pt-0.5 text-[10px] font-semibold text-ink">{c.who}</span>
              <span className={c.who === 'Rep' ? 'text-ink' : 'italic text-ink-2'}>
                {c.hl ? <span className="tl-mark" style={mark(inView, clipAt + 2.8)}>{c.text}</span> : c.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// what feedback does: Kluger and DeNisi, plus task vs self wording
// ------------------------------------------------------------------------------
type Aim = 'task' | 'self'
const DECREASED = 34 // "over one-third", drawn as a floor
const COMMENTS: Record<Aim, { line: string; note: string }> = {
  task: {
    line: '“At 14:32 she asked the price and you named a discount before asking what she was comparing it to.”',
    note: 'Points at a moment the rep can replay and change.',
  },
  self: {
    line: '“You get nervous on price. You need to be more confident.”',
    note: 'Points at the person. Nothing to replay, plenty to defend.',
  },
}

export function FeedbackEvidenceFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [aim, setAim] = useState<Aim>('task')
  const c = COMMENTS[aim]

  return (
    <Figure
      title="Feedback helps on average, and backfires more often than managers expect"
      caption="Each square is one in a hundred feedback interventions. The abstract reports that over a third decreased performance; 34 squares are drawn as a floor. The two comments are our examples of task-focused and self-focused feedback."
      source="Kluger and DeNisi, The effects of feedback interventions on performance, Psychological Bulletin (1996): 607 effect sizes, 23,663 observations, average effect d = 0.41."
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <div className="mx-auto w-full max-w-[300px]">
          <div className="grid grid-cols-10 gap-1" aria-hidden>
            {Array.from({ length: 100 }, (_, i) => (
              <span
                key={i}
                className={`aspect-square border-[1.5px] border-ink transition-colors duration-300 motion-reduce:transition-none ${
                  !inView ? 'bg-paper' : i >= 100 - DECREASED ? 'bg-peach' : 'bg-mint'
                }`}
                style={{ transitionDelay: `${i * 12}ms` }}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-2">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 border-[1.5px] border-ink bg-mint" /> Raised or did not lower performance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 border-[1.5px] border-ink bg-peach" />
              <CountUp value={DECREASED} start={inView} format={(n) => `${Math.round(n)}+`} className="font-mono font-semibold text-ink" /> lowered it
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Segmented<Aim>
            label="Where the comment points"
            value={aim}
            onChange={setAim}
            options={[
              { value: 'task', label: 'About the task' },
              { value: 'self', label: 'About the person' },
            ]}
          />
          <div key={aim} className={`blog-fade-up border-2 border-ink p-3 ${aim === 'task' ? 'bg-sheet shadow-[4px_4px_0_var(--color-ink)]' : 'border-dashed bg-paper'}`}>
            <p className="mb-2 text-sm text-ink">{c.line}</p>
            <p className="text-xs text-ink-2">{c.note}</p>
          </div>
          <p className="text-xs text-ink-2">
            In the meta-analysis, feedback worked less well the more it moved attention from the task toward the self.
          </p>
        </div>
      </div>
    </Figure>
  )
}
