'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// one practice session, three meters
// ------------------------------------------------------------------------------
type Meter = 'minutes' | 'sessions' | 'seat'
type Block = { label: string; start: number; end: number; talk: boolean }

// Minutes on a 14-minute timeline. Talk blocks are time on the call.
const SESSION: Block[] = [
  { label: 'False start', start: 0, end: 0.33, talk: true },
  { label: 'Fix mic', start: 0.33, end: 1, talk: false },
  { label: 'Full roleplay', start: 1, end: 9, talk: true },
  { label: 'Read feedback', start: 9, end: 11, talk: false },
  { label: 'Retry opening', start: 11, end: 13, talk: true },
]
const LENGTH = 14
const fmtLen = (min: number) => (min < 1 ? `${Math.round(min * 60)} sec` : `${min} min`)

const METERS: Record<Meter, { counts: (b: Block) => boolean; total: string; unit: string; retry: string }> = {
  minutes: {
    counts: (b) => b.talk,
    total: '10.3',
    unit: 'minutes on the meter',
    retry: 'The two-minute retry costs two minutes. Short drills stay cheap.',
  },
  sessions: {
    counts: (b) => b.talk && b.end - b.start > 0.5,
    total: '2',
    unit: 'roleplays counted',
    retry: 'The two-minute retry costs a whole roleplay, one of ten this week on a capped plan.',
  },
  seat: {
    counts: () => false,
    total: '0',
    unit: 'extra cost',
    retry: 'Retries are free. The seat is paid whether the rep practices or not.',
  },
}

export function MeterTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [meter, setMeter] = useState<Meter>('sessions')
  const m = METERS[meter]

  return (
    <Figure
      title="One practice session, three ways to meter it"
      caption="Example session: a 20-second false start, an eight-minute roleplay, two minutes reading feedback, then a two-minute retry of the opening. Counting rules come from vendor pages: Yoodli counts any session over 30 seconds as a roleplay; minute plans count call time (Quotain counts completed practice calls only); SellMeThisPen Core does not meter roleplay."
      source="Yoodli, Quotain and SellMeThisPen pricing pages, read 19 November 2026."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Meter>
            label="Meter"
            value={meter}
            onChange={setMeter}
            options={[
              { value: 'minutes', label: 'Per minute' },
              { value: 'sessions', label: 'Per session' },
              { value: 'seat', label: 'Per seat' },
            ]}
          />
        </div>
        <div className="relative h-14 border-2 border-ink bg-paper">
          {SESSION.map((b, i) => {
            const counted = m.counts(b)
            return (
              <div
                key={b.label}
                className={`absolute inset-y-0 border-r-2 border-ink transition-[background-color,opacity] duration-300 ${
                  b.talk ? (counted ? 'bg-butter' : 'bg-sky-soft') : 'bg-paper'
                } ${inView ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  left: `${(b.start / LENGTH) * 100}%`,
                  width: `${((b.end - b.start) / LENGTH) * 100}%`,
                  transitionDelay: inView ? `${i * 150}ms` : '0ms',
                }}
              >
                {b.end - b.start >= 0.6 && <span className="absolute left-1 top-0.5 font-mono text-[10px] font-semibold text-ink">{i + 1}</span>}
                {counted && b.end - b.start >= 1 && (
                  <span
                    key={meter}
                    className="tl-stamp absolute left-1/2 top-1/2 -ml-3 -mt-3 p-0.5! text-[10px] text-stamp-green"
                    style={inView ? { animation: STAMP_IN, animationDelay: `${200 + i * 120}ms` } : undefined}
                  >
                    ✓
                  </span>
                )}
              </div>
            )
          })}
        </div>
        <ol className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1 text-[12.5px] text-ink-2 sm:grid-cols-3">
          {SESSION.map((b, i) => (
            <li key={b.label} className="flex items-baseline gap-2">
              <span className="tl-mono text-[10.5px] font-semibold text-ink">{i + 1}</span>
              {b.label}
              <span className="font-mono text-[11px]">{fmtLen(b.end - b.start)}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="border-2 border-ink bg-sheet px-4 py-3 shadow-[5px_5px_0_var(--color-ink)]">
            <p key={meter} className="blog-fade-up font-mono text-3xl font-bold text-ink">
              {m.total}
            </p>
            <p className="tl-mono text-[10px] font-semibold text-ink-2">{m.unit}</p>
          </div>
          <p key={`${meter}-note`} className="blog-fade-up text-sm text-ink">
            {m.retry}
          </p>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// score a quote before you compare it
// ------------------------------------------------------------------------------
const QUESTIONS = [
  'Unit: seat, minute, session or credit?',
  'Minimums: seats, monthly block, contract length',
  'What counts: call time, sessions over N seconds, scoring?',
  'Overage rate, and whether overage is automatic',
  'Unused minutes: roll over or reset?',
  'Pooling: one team pool or a cap per rep?',
  'Seat swaps when a rep leaves',
  'Fees for building scenarios, scorecards and setup',
]

export function QuoteChecklist() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [checked, setChecked] = useState<boolean[]>(() => QUESTIONS.map((_, i) => i < 3))
  const done = checked.filter(Boolean).length
  const complete = done === QUESTIONS.length
  const toggle = (i: number) => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)))

  return (
    <Figure
      title="Score your quote: does it answer all eight?"
      caption="Tick each question the vendor’s written quote answers. The three pre-ticked items are an example of a typical first quote, which names a unit and a price but little else."
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-2">
          {QUESTIONS.map((q, i) => (
            <li key={q} className={inView ? 'blog-fade-up' : 'opacity-0'} style={{ animationDelay: `${i * 70}ms` }}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked[i]}
                className={`flex w-full cursor-pointer items-start gap-3 border-2 border-ink px-3 py-2 text-left text-[13.5px] transition-colors ${
                  checked[i] ? 'bg-mint text-ink' : 'bg-sheet text-ink-2 hover:bg-butter'
                }`}
              >
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center border-2 border-ink bg-sheet font-mono text-[10px] font-bold leading-none text-ink">
                  {checked[i] ? '✓' : ''}
                </span>
                {q}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 self-start border-2 border-ink bg-paper p-4">
          <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Quote completeness</p>
          <p className="font-mono text-4xl font-bold text-ink">
            <CountUp value={done} start={inView} />
            <span className="text-xl text-ink-2">/{QUESTIONS.length}</span>
          </p>
          <div className="h-5 border-2 border-ink bg-sheet">
            <div
              className="h-full border-r-2 border-ink bg-butter transition-[width] duration-500"
              style={{ width: inView ? `${(done / QUESTIONS.length) * 100}%` : '0%' }}
            />
          </div>
          <span
            key={complete ? 'ready' : 'gaps'}
            className={`tl-stamp self-start ${complete ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={inView ? { animation: STAMP_IN, animationDelay: '0.5s' } : undefined}
          >
            {complete ? 'Ready to compare' : `${QUESTIONS.length - done} gaps to close`}
          </span>
        </div>
      </div>
    </Figure>
  )
}
