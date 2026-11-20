'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, SliderField, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// minutes each teacher spends as "the teacher" in one PD block
// ------------------------------------------------------------------------------
// One round: 2 min brief, 4 min run, 4 min feedback, 2 min rerun = 12 minutes,
// of which 6 (the run and the rerun) are spent in the teacher's role.
const ROUND = 12
const TEACHER_MIN = 6

export function PracticeTimeCalc() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [minutes, setMinutes] = useState(60)
  const [staff, setStaff] = useState(18)
  const rounds = Math.floor(minutes / ROUND)
  const formats = [
    { label: 'One volunteer demonstrates for the whole staff', value: (rounds * TEACHER_MIN) / staff, note: `${Math.min(rounds, staff)} of ${staff} teachers get a turn` },
    { label: 'Trios: teacher, student, observer', value: (rounds * TEACHER_MIN) / 3, note: 'Everyone gets a turn' },
    { label: 'Pairs: teacher and student', value: (rounds * TEACHER_MIN) / 2, note: 'No observer to score' },
    { label: 'Solo: script, record, review (or an AI student)', value: rounds * TEACHER_MIN, note: 'Self-scored', lead: true },
  ]
  const top = rounds * TEACHER_MIN || 1

  return (
    <Figure
      title="One PD block, four formats: minutes each teacher spends practicing"
      caption={`Example inputs. Each 12-minute round is a 2-minute brief, a 4-minute run, 4 minutes of feedback and a 2-minute rerun, so 6 minutes are spent in the teacher’s role. ${minutes} minutes allows ${rounds} rounds.`}
    >
      <div ref={ref}>
        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          <SliderField label="Length of the PD block" value={minutes} min={36} max={120} step={12} onChange={setMinutes} format={(n) => `${n} min`} />
          <SliderField label="Teachers in the room" value={staff} min={6} max={36} step={3} onChange={setStaff} format={(n) => `${n}`} />
        </div>
        <div className="space-y-3.5">
          {formats.map((f, i) => (
            <div key={f.label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                <span className={f.lead ? 'font-semibold text-ink' : 'text-ink-2'}>
                  {f.label}
                  <span className="tl-mono ml-2 text-[10px] text-ink-2">{f.note}</span>
                </span>
                <span className="shrink-0 font-mono font-semibold text-ink">
                  <CountUp value={f.value} start={inView} format={(n) => n.toFixed(1)} /> min
                </span>
              </div>
              <div className="h-4 border-2 border-ink bg-paper">
                <div
                  className={`h-full border-r-2 border-ink transition-[width] duration-700 ease-out motion-reduce:transition-none ${f.lead ? 'bg-butter' : 'bg-sky'}`}
                  style={{ width: inView ? `${Math.max((f.value / top) * 100, 1.5)}%` : '0%', transitionDelay: `${i * 100}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// three runs of scenario 3, scored
// ------------------------------------------------------------------------------
const ELEMENTS = [
  'Calm, assertive voice',
  'Least intrusive move first',
  'Names the behavior wanted',
  'Private, not public',
  'Lesson keeps moving',
  'Follows up as promised',
] as const

const RUNS = [
  { marks: [true, false, false, false, true, false], note: 'Called across the room: “Phone, now.” Two tables turned to watch.' },
  { marks: [true, true, true, false, true, false], note: 'Walked over first, but said it loud enough for the table to hear.' },
  { marks: [true, true, true, true, true, true], note: 'Crouched, offered the choice quietly, kept teaching, checked in after class.' },
]

type Run = '0' | '1' | '2'

export function RubricRuns() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [run, setRun] = useState<Run>('0')
  const idx = Number(run)
  const score = RUNS[idx].marks.filter(Boolean).length

  return (
    <Figure
      title="Scenario 3, three runs: what the observer stamps"
      caption="Example runs and notes, written for this guide. The six elements adapt AERO’s “elements for success” approach to one checklist for any scenario."
      source="AERO, Foundational classroom management resources handbook (rehearsal, practice, feedback and reflection cycle)."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Run>
            label="Choose a run"
            value={run}
            onChange={setRun}
            options={[
              { value: '0', label: 'Run 1' },
              { value: '1', label: 'Run 2' },
              { value: '2', label: 'Run 3' },
            ]}
          />
          <p className="font-mono text-2xl font-semibold text-ink">
            <CountUp value={score} start={inView} />
            <span className="text-sm text-ink-2">/6</span>
          </p>
        </div>
        <div className="overflow-hidden border-2 border-ink bg-paper">
          <div className="tl-mono grid grid-cols-[1fr_repeat(3,44px)] border-b-2 border-ink bg-sheet text-[10px] font-semibold text-ink-2 sm:grid-cols-[1fr_repeat(3,64px)]">
            <span className="px-3 py-2">Element</span>
            {RUNS.map((_, r) => (
              <span key={r} className={`border-l-2 border-ink py-2 text-center ${r === idx ? 'bg-butter text-ink' : ''}`}>
                Run {r + 1}
              </span>
            ))}
          </div>
          {ELEMENTS.map((el, e) => (
            <div key={el} className="grid grid-cols-[1fr_repeat(3,44px)] border-b border-ink/15 last:border-b-0 sm:grid-cols-[1fr_repeat(3,64px)]">
              <span className="px-3 py-2 text-[13.5px] text-ink">{el}</span>
              {RUNS.map((rr, r) => {
                const shown = inView && r <= idx
                return (
                  <span key={r} className={`grid place-items-center border-l-2 border-ink ${r === idx ? 'bg-butter/40' : ''}`}>
                    {shown && (
                      <span
                        key={`${run}-${r}`}
                        className={`font-mono text-[19px] font-bold leading-none ${rr.marks[e] ? 'text-stamp-green' : 'text-stamp-red'} ${r === idx ? 'opacity-0' : 'opacity-60'}`}
                        style={r === idx ? { animation: `${STAMP_IN} ${0.1 + e * 0.12}s` } : undefined}
                      >
                        {rr.marks[e] ? '✓' : '✗'}
                      </span>
                    )}
                  </span>
                )
              })}
            </div>
          ))}
        </div>
        <p key={run} className="blog-fade-up mt-3 border-l-4 border-butter pl-3 text-[13.5px] italic text-ink">
          <span className="tl-mono mr-1.5 text-[10.5px] not-italic font-semibold text-ink-2">Observer</span>
          {RUNS[idx].note}
        </p>
      </div>
    </Figure>
  )
}
