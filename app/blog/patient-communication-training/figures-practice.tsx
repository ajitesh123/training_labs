'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, SliderField, useInView } from '@/components/blog/figures'
import { rates } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// practice volume: weekly minutes to role plays per quarter
// ------------------------------------------------------------------------------
type Length = '10' | '15' | '20'
const WEEKS_PER_QUARTER = 13
const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export function PracticeCalculator() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [people, setPeople] = useState(12)
  const [minutes, setMinutes] = useState(20)
  const [length, setLength] = useState<Length>('10')
  const reps = Math.floor((minutes * WEEKS_PER_QUARTER) / Number(length))
  const monthlyMinutes = (people * minutes * 52) / 12
  const tiles = [
    { label: 'Role plays per person, per quarter', value: reps, format: (n: number) => `${Math.round(n)}`, lead: true },
    { label: 'Team practice hours, per month', value: monthlyMinutes / 60, format: (n: number) => n.toFixed(1) },
    { label: 'If every minute is with an AI patient', value: monthlyMinutes * rates.aiPerMinute, format: usd0, suffix: '/mo' },
  ]

  return (
    <Figure
      title="How much practice a weekly habit buys"
      caption="Defaults are example inputs: a team of 12 practicing 20 minutes a week in 10-minute role plays. The AI line prices minutes at $0.10, the per-minute rate of Tough Tongue AI’s Business plan; peer and standardized patient practice cost staff time instead."
      source="toughtongueai.com/pricing, November 2026."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <SliderField label="People practicing" value={people} min={1} max={100} step={1} onChange={setPeople} format={(n) => `${n}`} />
          <SliderField label="Practice minutes per person, per week" value={minutes} min={0} max={60} step={5} onChange={setMinutes} format={(n) => `${n} min`} />
          <div>
            <p className="mb-2 text-sm text-ink-2">Length of one role play</p>
            <Segmented<Length>
              label="Role play length"
              value={length}
              onChange={setLength}
              options={[
                { value: '10', label: '10 min' },
                { value: '15', label: '15 min' },
                { value: '20', label: '20 min' },
              ]}
            />
          </div>
        </div>
        <div className="grid gap-3">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`border-2 border-ink p-4 ${t.lead ? 'bg-butter shadow-[5px_5px_0_var(--color-ink)]' : 'bg-paper'}`}
            >
              <p className="tl-mono text-[10.5px] font-semibold text-ink-2">{t.label}</p>
              <p className="font-mono text-3xl font-semibold text-ink">
                <CountUp value={t.value} start={inView} format={t.format} />
                {t.suffix && <span className="ml-1 text-sm text-ink-2">{t.suffix}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// a five-row rubric that scores in, first recording against a later one
// ------------------------------------------------------------------------------
type Take = 'first' | 'later'

const ROWS = [
  { label: 'Asked for the full agenda early, with “something else”', first: 1, later: 2 },
  { label: 'Asked what the patient already knew before explaining', first: 0, later: 2 },
  { label: 'Checked understanding with teach-back, not yes or no', first: 0, later: 2 },
  { label: 'Named an emotion before adding information', first: 1, later: 1 },
  { label: 'Ended with a plan the patient said back', first: 1, later: 2 },
] as const

const VERDICT: Record<Take, { text: string; tone: string }> = {
  first: { text: 'Practice again', tone: 'text-stamp-red tl-stamp-2' },
  later: { text: 'Ready to observe in clinic', tone: 'text-stamp-green tl-stamp-1' },
}

export function RubricScore() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [take, setTake] = useState<Take>('first')
  const total = ROWS.reduce((sum, r) => sum + r[take], 0)
  return (
    <Figure
      title="One rubric, scored on the same scenario before and after six weeks of practice"
      caption="Example scores for one clinician, not data. Each row is something an observer can hear: 2 = done well, 1 = partly, 0 = missing. Score the same case each time so the change is the clinician’s, not the case’s."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Take>
            label="Recording"
            value={take}
            onChange={setTake}
            options={[
              { value: 'first', label: 'Week 1 recording' },
              { value: 'later', label: 'Week 6 recording' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={total} start={inView} className="font-mono text-2xl font-bold text-ink" /> / {ROWS.length * 2}
          </p>
        </div>
        <ul key={take} className="divide-y-2 divide-ink border-2 border-ink bg-paper">
          {ROWS.map((r, i) => (
            <li key={r.label} className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
              <span className="min-w-0 text-[13.5px] leading-snug text-ink sm:text-sm">{r.label}</span>
              <span className="flex shrink-0 gap-1.5">
                {[0, 1].map((box) => (
                  <span
                    key={box}
                    className={`grid h-7 w-7 place-items-center border-2 border-ink transition-colors duration-300 motion-reduce:transition-none ${
                      inView && box < r[take] ? 'bg-mint' : 'bg-sheet'
                    }`}
                    style={{ transitionDelay: `${0.25 + i * 0.25 + box * 0.12}s` }}
                  >
                    {box < r[take] && (
                      <span
                        className="font-mono text-[17px] font-bold leading-none text-stamp-green opacity-0 motion-reduce:opacity-100"
                        style={inView ? { animation: `${STAMP_IN} ${0.25 + i * 0.25 + box * 0.12}s` } : undefined}
                      >
                        ✓
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <div key={`v-${take}`} className="mt-5 flex justify-end">
          <span
            className={`tl-stamp ${VERDICT[take].tone}`}
            style={inView ? { animation: `${STAMP_IN} ${0.25 + ROWS.length * 0.25 + 0.3}s` } : undefined}
          >
            {VERDICT[take].text}
          </span>
        </div>
      </div>
    </Figure>
  )
}
