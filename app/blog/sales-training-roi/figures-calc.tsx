'use client'

import { useState } from 'react'
import { CountUp, Figure, type Segment, SliderField, StackedBar, useInView } from '@/components/blog/figures'
import { rates } from './content'

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const usd2 = (n: number) => `$${n.toFixed(2)}`
const usdK = (n: number) => `$${Math.round(n / 1000).toLocaleString('en-US')}K`

// ------------------------------------------------------------------------------
// ramp curve: the area between two ramps is quota capacity
// ------------------------------------------------------------------------------
const X0 = 34
const X1 = 312
const Y_TOP = 22
const Y_BASE = 142
const MONTHS = 12
const mx = (m: number) => X0 + (m / MONTHS) * (X1 - X0)

export function RampCurve() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [saved, setSaved] = useState(1)
  const [quota, setQuota] = useState(rates.medianQuota)
  const ramp = rates.rampMonths
  const faster = ramp - saved
  const monthly = quota / 12
  const recovered = (saved * monthly) / 2
  const draw = (delay: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: inView ? 0 : 1,
    transition: `stroke-dashoffset 1.4s ease-out ${delay}s`,
  })

  return (
    <Figure
      title="Ramp time as money: the shaded area is quota capacity a faster ramp gives back"
      caption="Ramp drawn as a straight line from zero to full quota over the Bridge Group’s 6.2-month average, a simplification: many teams use stepped ramp quotas. The shaded area is quota capacity per new hire, not profit; the calculator further down converts it at your margin and the share you can credit to training."
      source="The Bridge Group, AE Models, Motions & Metrics 2026 (June 2026): 6.2-month average ramp, $960K median AE quota."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <svg viewBox="0 0 320 172" className="w-full border-2 border-ink bg-paper" role="img" aria-label="Two ramp curves, current and faster">
          {[0, 3, 6, 9, 12].map((m) => (
            <g key={m}>
              <line x1={mx(m)} x2={mx(m)} y1={Y_TOP} y2={Y_BASE} stroke="var(--color-ink)" strokeOpacity="0.12" />
              <text x={mx(m)} y={Y_BASE + 14} textAnchor="middle" className="fill-ink-2 font-mono text-[10px]">
                {m}
              </text>
            </g>
          ))}
          <text x={X1} y={Y_BASE + 25} textAnchor="end" className="fill-ink-2 font-mono text-[9px] uppercase">
            months after start
          </text>
          <text x={X0 - 4} y={Y_TOP + 3} textAnchor="end" className="fill-ink-2 font-mono text-[9px]">
            100%
          </text>
          <text x={X0 - 4} y={Y_BASE} textAnchor="end" className="fill-ink-2 font-mono text-[9px]">
            0
          </text>
          <polygon
            points={`${mx(0)},${Y_BASE} ${mx(faster)},${Y_TOP} ${mx(ramp)},${Y_TOP}`}
            fill="var(--color-butter)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: inView ? '1.2s' : '0s' }}
          />
          <polyline
            points={`${mx(0)},${Y_BASE} ${mx(ramp)},${Y_TOP} ${mx(MONTHS)},${Y_TOP}`}
            pathLength={1}
            fill="none"
            stroke="var(--color-ink-2)"
            strokeWidth="2"
            style={draw(0)}
          />
          <polyline
            points={`${mx(0)},${Y_BASE} ${mx(faster)},${Y_TOP} ${mx(MONTHS)},${Y_TOP}`}
            pathLength={1}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="3"
            style={draw(0.5)}
          />
          <text x={mx(ramp) + 5} y={Y_TOP + 18} className="fill-ink-2 font-mono text-[10px]">
            today {ramp} mo
          </text>
          {saved > 0 && (
            <text x={mx(faster) - 5} y={Y_TOP - 5} textAnchor="end" className="fill-ink font-mono text-[10px] font-bold">
              faster {faster.toFixed(1)} mo
            </text>
          )}
        </svg>
        <div className="space-y-4">
          <SliderField label="Months of ramp saved" value={saved} min={0} max={3} step={0.5} onChange={setSaved} format={(n) => `${n} mo`} />
          <SliderField label="Annual quota per rep" value={quota} min={300000} max={1500000} step={20000} onChange={setQuota} format={usdK} />
          <div className="border-2 border-ink bg-sheet p-3 shadow-[4px_4px_0_var(--color-ink)]">
            <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Quota capacity back, per new hire</p>
            <CountUp value={recovered} start={inView} format={usd} className="block font-mono text-3xl font-bold text-ink" />
            <p className="mt-1 text-xs text-ink-2">
              Full quota is {usd(monthly)} a month, so each month saved returns half of that while the rep is still ramping.
            </p>
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// year-one ROI calculator
// ------------------------------------------------------------------------------
type Inputs = {
  reps: number
  fee: number
  hours: number
  tool: number
  practiceMin: number
  coachHours: number
  repWage: number
  managerWage: number
  winLift: number
  opps: number
  deal: number
  margin: number
  hires: number
  saved: number
  quota: number
  credit: number
}

const DEFAULTS: Inputs = {
  reps: 10,
  fee: 1500,
  hours: 16,
  tool: rates.toolMonthly,
  practiceMin: 60,
  coachHours: 1,
  repWage: rates.repHourly,
  managerWage: rates.managerHourly,
  winLift: 2,
  opps: 40,
  deal: 20000,
  margin: 70,
  hires: 3,
  saved: 0.5,
  quota: rates.medianQuota,
  credit: 50,
}

function costs(i: Inputs): Segment[] {
  return [
    { label: 'Program fees', value: i.reps * i.fee, colorClass: 'bg-sky' },
    { label: 'Practice tool', value: i.tool * 12, colorClass: 'bg-mint' },
    { label: 'Rep time in training', value: i.reps * i.hours * i.repWage, colorClass: 'bg-peach' },
    { label: 'Rep practice time', value: ((i.reps * i.practiceMin * 12) / 60) * i.repWage, colorClass: 'bg-butter' },
    { label: 'Manager coaching time', value: i.reps * i.coachHours * 12 * i.managerWage, colorClass: 'bg-[var(--color-flame)]' },
  ]
}

function benefits(i: Inputs): Segment[] {
  const keep = (i.margin / 100) * (i.credit / 100)
  return [
    { label: 'Win-rate lever', value: (i.winLift / 100) * i.opps * i.reps * i.deal * keep, colorClass: 'bg-mint' },
    { label: 'Ramp lever', value: i.hires * ((i.saved * i.quota) / 12 / 2) * keep, colorClass: 'bg-butter' },
  ]
}

const sum = (s: Segment[]) => s.reduce((t, x) => t + x.value, 0)

export function RoiCalculator() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [i, setI] = useState<Inputs>(DEFAULTS)
  const set = (key: keyof Inputs) => (v: number) => setI((prev) => ({ ...prev, [key]: v }))
  const c = costs(i)
  const b = benefits(i)
  const cost = sum(c)
  const benefit = sum(b)
  const roi = cost > 0 ? ((benefit - cost) / cost) * 100 : 0
  const payback = benefit > 0 ? cost / (benefit / 12) : 0
  const scale = Math.max(cost, benefit)

  return (
    <Figure
      title="Year-one sales training ROI, with the people time counted"
      caption="Defaults are example inputs, not a benchmark: a $1,500 seat, 16 training hours, the Tough Tongue AI Business plan at $299 a month, BLS median wages before benefits, the Bridge Group’s $960K median quota, and half of the improvement credited to training. If new hires are among the reps counted in the win-rate lever, the two levers overlap: lower the credit share."
      source="BLS OEWS May 2025; The Bridge Group 2026; toughtongueai.com/pricing, November 2026."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-4">
          <p className="tl-mono border-b-2 border-ink pb-1 text-[11px] font-semibold text-ink">Costs</p>
          <SliderField label="Reps trained" value={i.reps} min={1} max={50} step={1} onChange={set('reps')} format={(n) => `${n}`} />
          <SliderField label="Program fee per rep" value={i.fee} min={0} max={5000} step={50} onChange={set('fee')} format={usd} />
          <SliderField label="Training hours per rep" value={i.hours} min={0} max={40} step={1} onChange={set('hours')} format={(n) => `${n} h`} />
          <SliderField label="Practice tool, per month" value={i.tool} min={0} max={1000} step={1} onChange={set('tool')} format={usd} />
          <details className="border-2 border-ink bg-sheet p-3">
            <summary className="cursor-pointer text-sm font-medium text-ink">Practice, coaching and wages</summary>
            <div className="mt-3 space-y-4">
              <SliderField label="Practice minutes per rep, monthly" value={i.practiceMin} min={0} max={240} step={10} onChange={set('practiceMin')} format={(n) => `${n} min`} />
              <SliderField label="Coaching hours per rep, monthly" value={i.coachHours} min={0} max={4} step={0.25} onChange={set('coachHours')} format={(n) => `${n} h`} />
              <SliderField label="Rep hourly wage" value={i.repWage} min={10} max={100} step={0.05} onChange={set('repWage')} format={usd2} hint="Default: BLS median, sales representatives of services" />
              <SliderField label="Manager hourly wage" value={i.managerWage} min={20} max={150} step={0.04} onChange={set('managerWage')} format={usd2} hint="Default: BLS median, sales managers" />
            </div>
          </details>
          <p className="tl-mono border-b-2 border-ink pb-1 pt-2 text-[11px] font-semibold text-ink">Benefits, year one</p>
          <SliderField label="Win-rate lift" value={i.winLift} min={0} max={10} step={0.5} onChange={set('winLift')} format={(n) => `${n} pts`} />
          <SliderField label="Decided deals per rep, yearly" value={i.opps} min={0} max={200} step={5} onChange={set('opps')} format={(n) => `${n}`} />
          <SliderField label="Average deal size" value={i.deal} min={1000} max={100000} step={1000} onChange={set('deal')} format={usd} />
          <SliderField label="New hires this year" value={i.hires} min={0} max={20} step={1} onChange={set('hires')} format={(n) => `${n}`} />
          <SliderField label="Ramp months saved" value={i.saved} min={0} max={3} step={0.5} onChange={set('saved')} format={(n) => `${n} mo`} />
          <SliderField label="Annual quota per rep" value={i.quota} min={100000} max={2000000} step={20000} onChange={set('quota')} format={usdK} />
          <SliderField label="Gross margin" value={i.margin} min={5} max={95} step={5} onChange={set('margin')} format={(n) => `${n}%`} />
          <SliderField label="Share credited to training" value={i.credit} min={0} max={100} step={5} onChange={set('credit')} format={(n) => `${n}%`} hint="From your comparison group, or a conservative estimate" />
        </div>
        <div className="order-first h-fit border-2 border-ink bg-paper p-5 shadow-[5px_5px_0_var(--color-ink)] lg:order-none lg:sticky lg:top-28">
          <p className="tl-mono text-[11px] font-semibold text-ink-2">Year-one ROI</p>
          <CountUp
            value={roi}
            start={inView}
            format={(n) => `${Math.round(n).toLocaleString('en-US')}%`}
            className={`block font-mono text-5xl font-bold ${roi >= 0 ? 'text-stamp-green' : 'text-stamp-red'}`}
          />
          <div className="mb-5 mt-2 grid grid-cols-2 gap-2 text-sm">
            <p className="border-2 border-ink bg-sheet p-2">
              <span className="tl-mono block text-[10px] text-ink-2">Benefit ÷ cost</span>
              <CountUp value={cost > 0 ? benefit / cost : 0} start={inView} format={(n) => n.toFixed(2)} className="font-mono text-lg font-bold text-ink" />
            </p>
            <p className="border-2 border-ink bg-sheet p-2">
              <span className="tl-mono block text-[10px] text-ink-2">Payback</span>
              <CountUp value={payback} start={inView} format={(n) => (benefit > 0 ? `${n.toFixed(1)} mo` : 'never')} className="font-mono text-lg font-bold text-ink" />
            </p>
          </div>
          <p className="mb-2 flex justify-between text-sm font-semibold text-ink">
            Fully loaded cost <CountUp value={cost} start={inView} format={usd} className="font-mono" />
          </p>
          <StackedBar segments={c} start={inView} format={usd} scaleMax={scale} legendCols={1} />
          <p className="mb-2 mt-5 flex justify-between text-sm font-semibold text-ink">
            Credited benefit, at margin <CountUp value={benefit} start={inView} format={usd} className="font-mono" />
          </p>
          <StackedBar segments={b} start={inView} format={usd} scaleMax={scale} legendCols={1} />
        </div>
      </div>
    </Figure>
  )
}
