'use client'

import { useEffect, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// a two-minute hallway conversation with a physician, played two ways
// ------------------------------------------------------------------------------
type Take = 'tour' | 'patient'
type Line = { who: 'Rep' | 'Physician'; text: string }

const BUDGET_S = 120
const LINE_MS = 1100

const TAKES: Record<Take, { lines: Line[]; usedS: number; stamp: string; good: boolean }> = {
  tour: {
    lines: [
      { who: 'Rep', text: 'Thanks for the time. Our new home blood pressure cuff syncs over Bluetooth, stores 90 readings and has a three-year warranty, and the app…' },
      { who: 'Physician', text: 'Sure. What does it cost my patients?' },
      { who: 'Rep', text: 'Great question. So there are three plans, and the first one includes…' },
      { who: 'Physician', text: 'I have a patient waiting. Leave something at the front desk.' },
    ],
    usedS: 70,
    stamp: 'No next step',
    good: false,
  },
  patient: {
    lines: [
      { who: 'Rep', text: 'I know you have two minutes, so one question: which of your hypertension patients are hardest to get readings from between visits?' },
      { who: 'Physician', text: 'The older ones. They forget, or they write the numbers down wrong.' },
      { who: 'Rep', text: 'That’s who it’s built for: readings reach your team without anyone writing them down. Could I show your nurse the setup for five minutes on Thursday?' },
      { who: 'Physician', text: 'Talk to the front desk. Thursday works.' },
    ],
    usedS: 55,
    stamp: 'Nurse demo booked ✓',
    good: true,
  },
}

type TakeData = (typeof TAKES)[Take]

// Mounted fresh per take, so the time bar grows again on every switch.
function TakeView({ t, inView }: { t: TakeData; inView: boolean }) {
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setArmed(true))
    return () => cancelAnimationFrame(id)
  }, [])
  const play = inView && armed
  const total = t.lines.length * LINE_MS

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Time used of {BUDGET_S} s</p>
        <p className="font-mono text-sm text-ink-2">
          <CountUp value={t.usedS} start={play} durationMs={total} className="text-xl font-bold text-ink" /> s
        </p>
      </div>
      <div className="mb-4 h-4 border-2 border-ink bg-paper">
        <div
          className={`h-full border-r-2 border-ink transition-[width] ease-linear motion-reduce:transition-none ${t.good ? 'bg-mint' : 'bg-peach'}`}
          style={{ width: play ? `${(t.usedS / BUDGET_S) * 100}%` : '0%', transitionDuration: `${total}ms` }}
        />
      </div>
      <ol className="divide-y divide-dashed divide-ink/20 border-2 border-ink bg-sheet">
        {t.lines.map((l, i) => (
          <li
            key={i}
            className={`grid grid-cols-[76px_1fr] gap-2 px-3 py-2.5 text-[14.5px] leading-snug sm:grid-cols-[90px_1fr] ${play ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * LINE_MS}ms` }}
          >
            <span className={`tl-mono pt-0.5 text-[10.5px] font-semibold ${l.who === 'Rep' ? 'text-signal' : 'text-ink-2'}`}>{l.who}</span>
            <span className={l.who === 'Rep' ? 'text-ink' : 'italic text-ink-2'}>{l.text}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-2">
          {t.good ? 'One question, one link to the patient, one small ask.' : 'Specs first, price second, no question about the practice.'}
        </p>
        <span
          className={`tl-stamp ${t.good ? 'text-stamp-green' : 'text-stamp-red'}`}
          style={play ? { animation: STAMP_IN, animationDelay: `${total + 200}ms` } : undefined}
        >
          {t.stamp}
        </span>
      </div>
    </div>
  )
}

export function ClinicianConversation() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [take, setTake] = useState<Take>('tour')

  return (
    <Figure
      title="The same two minutes with a physician, played two ways"
      caption="An example product and example lines written for this guide. The two-minute budget is an example input, and the time bar shows how much of it each version used before the physician moved on."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<Take>
            label="Version"
            value={take}
            onChange={setTake}
            options={[
              { value: 'tour', label: 'Feature tour' },
              { value: 'patient', label: 'Patient first' },
            ]}
          />
        </div>
        <TakeView key={take} t={TAKES[take]} inView={inView} />
      </div>
    </Figure>
  )
}
