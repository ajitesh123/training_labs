'use client'

import { useState } from 'react'
import {
  CountUp,
  Figure,
  Segmented,
  type Segment,
  SliderField,
  StackedBar,
  useInView,
} from '@/components/blog/figures'
import { rates } from './content'

const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const usd2 = (n: number) => `$${n.toFixed(2)}`

const MANAGER_COLOR = 'bg-[var(--blog-accent-amber)]'
const REP_COLOR = 'bg-[var(--blog-accent-blue)]'
const AI_COLOR = 'bg-[var(--blog-accent-cyan)]'

// ------------------------------------------------------------------------------
// cost of one practice repetition
// ------------------------------------------------------------------------------
type Length = '10' | '20' | '30'

function repetitionCosts(minutes: number) {
  const rep = (minutes / 60) * rates.repHourly
  const manager: Segment[] = [
    { label: 'Manager time', value: (minutes / 60) * rates.managerHourly, colorClass: MANAGER_COLOR },
    { label: 'Rep time', value: rep, colorClass: REP_COLOR },
  ]
  const ai: Segment[] = [
    { label: 'AI buyer minutes', value: minutes * rates.aiPerMinute, colorClass: AI_COLOR },
    { label: 'Rep time', value: rep, colorClass: REP_COLOR },
  ]
  return { manager, ai }
}

const total = (s: Segment[]) => s.reduce((sum, x) => sum + x.value, 0)
// Shared scale: the longest manager roleplay fills the bar.
const SCALE_MAX = total(repetitionCosts(30).manager)

export function PracticeRepCost() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [length, setLength] = useState<Length>('20')
  const { manager, ai } = repetitionCosts(Number(length))
  const rows = [
    { title: 'Manager plays the buyer', note: 'Two calendars to line up', segments: manager },
    { title: 'AI buyer, manager reviews later', note: 'Rep practices on their own time', segments: ai },
  ]

  return (
    <Figure
      title="What one practice roleplay costs, in time and money"
      caption="Wages are BLS medians (May 2025): $33.65 an hour for sales representatives of services and $71.28 for sales managers, before benefits. AI minutes are priced at $0.10, the per-minute rate of Tough Tongue AI’s Business plan. Manager review time after an AI session is not counted."
      source="BLS OEWS May 2025; toughtongueai.com/pricing, November 2026."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Length>
            label="Roleplay length"
            value={length}
            onChange={setLength}
            options={[
              { value: '10', label: '10 min' },
              { value: '20', label: '20 min' },
              { value: '30', label: '30 min' },
            ]}
          />
          <p className="text-xs text-[var(--blog-text-muted)]">Pick a roleplay length</p>
        </div>
        <div className="space-y-6">
          {rows.map((r) => (
            <div key={r.title}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-black">{r.title}</p>
                  <p className="text-xs text-[var(--blog-text-muted)]">{r.note}</p>
                </div>
                <CountUp
                  value={total(r.segments)}
                  start={inView}
                  format={usd2}
                  className="text-2xl font-bold text-black"
                />
              </div>
              <StackedBar segments={r.segments} start={inView} format={usd2} scaleMax={SCALE_MAX} />
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// year-one budget calculator
// ------------------------------------------------------------------------------
type Inputs = {
  reps: number
  seat: number
  hours: number
  tool: number
  minutes: number
  coaching: number
  repWage: number
  managerWage: number
}

const DEFAULTS: Inputs = {
  reps: 10,
  seat: 1500,
  hours: 16,
  tool: rates.aiPlanMonthly,
  minutes: 60,
  coaching: 1,
  repWage: rates.repHourly,
  managerWage: rates.managerHourly,
}

function yearOne(i: Inputs): Segment[] {
  return [
    { label: 'Program fees (invoice)', value: i.reps * i.seat, colorClass: REP_COLOR },
    { label: 'Practice tool (invoice)', value: i.tool * 12, colorClass: AI_COLOR },
    { label: 'Rep time in the program', value: i.reps * i.hours * i.repWage, colorClass: MANAGER_COLOR },
    {
      label: 'Rep practice time',
      value: ((i.reps * i.minutes * 12) / 60) * i.repWage,
      colorClass: 'bg-[var(--blog-accent-amber)]/50',
    },
    {
      label: 'Manager coaching time',
      value: i.reps * i.coaching * 12 * i.managerWage,
      colorClass: 'bg-[var(--blog-accent-rose)]',
    },
  ]
}

export function BudgetCalculator() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const set = (key: keyof Inputs) => (v: number) => setInputs((prev) => ({ ...prev, [key]: v }))
  const segments = yearOne(inputs)
  const sum = total(segments)
  const onInvoice = segments[0].value + segments[1].value
  const offShare = sum > 0 ? ((sum - onInvoice) / sum) * 100 : 0

  return (
    <Figure
      title="Year-one cost of a sales training plan, including the hours"
      caption="Defaults are example inputs, not a benchmark: a $1,500 seat (Winning by Design’s published open-course price), a 16-hour program, the Tough Tongue AI Business plan at $299 a month, 60 practice minutes and one coaching hour per rep each month, and BLS median wages. Change them to match your team."
      source="BLS OEWS May 2025; vendor pages, November 2026."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <SliderField label="Reps" value={inputs.reps} min={1} max={50} step={1} onChange={set('reps')} format={(n) => `${n}`} />
          <SliderField label="Program price per rep" value={inputs.seat} min={0} max={5000} step={50} onChange={set('seat')} format={usd0} />
          <SliderField label="Program hours per rep" value={inputs.hours} min={0} max={40} step={1} onChange={set('hours')} format={(n) => `${n} h`} />
          <SliderField label="Practice tool, per month" value={inputs.tool} min={0} max={1000} step={1} onChange={set('tool')} format={usd0} />
          <SliderField label="Practice minutes per rep, per month" value={inputs.minutes} min={0} max={240} step={10} onChange={set('minutes')} format={(n) => `${n} min`} />
          <SliderField label="Coaching hours per rep, per month" value={inputs.coaching} min={0} max={4} step={0.25} onChange={set('coaching')} format={(n) => `${n} h`} />
          <details className="rounded-lg border border-[var(--blog-border-default)] bg-white p-3">
            <summary className="cursor-pointer text-sm font-medium text-black">Wages</summary>
            <div className="mt-3 space-y-4">
              <SliderField label="Rep hourly wage" value={inputs.repWage} min={10} max={100} step={0.05} onChange={set('repWage')} format={usd2} hint="Default: BLS median, sales representatives of services" />
              <SliderField label="Manager hourly wage" value={inputs.managerWage} min={20} max={150} step={0.04} onChange={set('managerWage')} format={usd2} hint="Default: BLS median, sales managers" />
            </div>
          </details>
        </div>
        <div className="rounded-xl bg-white p-5 ring-1 ring-[var(--blog-border-default)]">
          <p className="text-xs uppercase tracking-wider text-[var(--blog-text-muted)]">Year-one total</p>
          <CountUp value={sum} start={inView} format={usd0} className="block text-4xl font-bold text-black" />
          <p className="mb-5 text-sm text-[var(--blog-text-secondary)]">
            <CountUp value={inputs.reps > 0 ? sum / inputs.reps : 0} start={inView} format={usd0} className="font-semibold text-black" /> per rep
          </p>
          <StackedBar segments={segments} start={inView} format={usd0} />
          <div className="mt-5 rounded-lg bg-[var(--blog-background-secondary)] p-3 text-sm text-[var(--blog-text-secondary)]">
            <CountUp value={offShare} start={inView} format={(n) => `${Math.round(n)}%`} className="font-bold text-black" /> of this
            plan’s cost is people’s time, which never shows up on an invoice.
          </div>
        </div>
      </div>
    </Figure>
  )
}
