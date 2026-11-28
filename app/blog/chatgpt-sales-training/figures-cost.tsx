'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, type Segment, SliderField, StackedBar, useInView } from '@/components/blog/figures'
import { RATES, TT_PLANS } from './content'
import { stampStyle, usd } from './fx'

// ------------------------------------------------------------------------------
// monthly cost of three paths for the same team
// ------------------------------------------------------------------------------
type Inputs = { reps: number; minutes: number; devHours: number }

const DEFAULTS: Inputs = { reps: 10, minutes: 60, devHours: 20 }

function ttPlan(reps: number, totalMinutes: number) {
  const plan = TT_PLANS.find((p) => p.seats >= reps) ?? TT_PLANS[TT_PLANS.length - 1]
  const extra = Math.max(0, totalMinutes - plan.minutes) * plan.extra
  return { plan, extra }
}

function paths(i: Inputs) {
  const totalMinutes = i.reps * i.minutes
  const tt = ttPlan(i.reps, totalMinutes)
  return [
    {
      title: 'Stay in ChatGPT',
      note: 'Business Standard seats, monthly billing. Live voice included up to 3 hours a day per seat.',
      gives: 'Conversation and voice; you supply scenarios and scoring',
      segments: [{ label: 'Seats', value: i.reps * RATES.businessSeatMonthly, colorClass: 'bg-mint' }],
    },
    {
      title: 'Build on the API',
      note: 'GPT-Live voice minutes plus an engineer’s upkeep, after the first build.',
      gives: 'Whatever you build and keep maintaining',
      segments: [
        { label: 'Voice minutes', value: totalMinutes * RATES.liveApiPerMinute, colorClass: 'bg-sky' },
        { label: 'Engineering time', value: i.devHours * RATES.devHourly, colorClass: 'bg-peach' },
      ],
    },
    {
      title: 'Buy a platform',
      note: `Example: Tough Tongue AI ${tt.plan.name} plan, ${tt.plan.seats} seats, ${tt.plan.minutes.toLocaleString('en-US')} minutes included.`,
      gives: 'Shared scenarios, rubric scores and history per rep',
      segments: [
        { label: 'Plan', value: tt.plan.price, colorClass: 'bg-butter' },
        { label: 'Extra minutes', value: tt.extra, colorClass: 'bg-sky-soft' },
      ],
    },
  ]
}

const sum = (s: Segment[]) => s.reduce((a, b) => a + b.value, 0)

export function PathCostFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const set = (k: keyof Inputs) => (v: number) => setInputs((p) => ({ ...p, [k]: v }))
  const rows = paths(inputs)
  const scale = Math.max(...rows.map((r) => sum(r.segments)), 1)

  return (
    <Figure
      title="Monthly cost of three ways to give a sales team role play practice"
      caption="Defaults are example inputs. Build costs exclude the first build and any hosting, sign-in or storage bills; engineering is priced at the BLS May 2025 median wage for software developers before benefits. Per-seat platforms that quote on request are not modeled. ChatGPT Business costs $20 a seat on annual billing."
      source="OpenAI help center and API pricing (November 2026); BLS Occupational Outlook Handbook (August 2026); toughtongueai.com/pricing (November 2026)."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <SliderField label="Reps" value={inputs.reps} min={1} max={50} step={1} onChange={set('reps')} format={(n) => `${n}`} />
          <SliderField
            label="Practice minutes per rep, per month"
            value={inputs.minutes}
            min={0}
            max={300}
            step={10}
            onChange={set('minutes')}
            format={(n) => `${n} min`}
          />
          <SliderField
            label="Engineer hours per month (build only)"
            value={inputs.devHours}
            min={0}
            max={80}
            step={1}
            onChange={set('devHours')}
            format={(n) => `${n} h`}
            hint="Fixes, model updates, new scenarios"
          />
        </div>
        <div className="space-y-5">
          {rows.map((r) => (
            <div key={r.title}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">{r.title}</p>
                  <p className="text-[11.5px] leading-snug text-ink-2">{r.note}</p>
                </div>
                <CountUp value={sum(r.segments)} start={inView} format={usd} className="shrink-0 font-mono text-2xl font-bold text-ink" />
              </div>
              <StackedBar segments={r.segments} start={inView} format={usd} scaleMax={scale} />
              <p className="tl-mono mt-1.5 text-[10px] text-ink-2">Gives you: {r.gives}</p>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// four questions: stay in ChatGPT, buy, or build
// ------------------------------------------------------------------------------
type YesNo = 'yes' | 'no'
type Answers = { team: YesNo; same: YesNo; engineer: YesNo; data: YesNo }

const QUESTIONS: { key: keyof Answers; q: string }[] = [
  { key: 'team', q: 'Will more than five people practice?' },
  { key: 'same', q: 'Do they need the same scenario and a score you can compare?' },
  { key: 'engineer', q: 'Can an engineer own the tool for a year or more?' },
  { key: 'data', q: 'Must recordings and scores stay inside your own systems?' },
]

function verdict(a: Answers) {
  if (a.team === 'no' && a.same === 'no')
    return { title: 'Stay in ChatGPT', body: 'Use a Project with a fixed buyer brief and a scoring prompt. Revisit when the team grows.', fill: 'bg-mint' }
  if (a.engineer === 'yes' && a.data === 'yes')
    return { title: 'Build around a bought engine', body: 'Buy the voice and scoring, then build the connections to your own storage, CRM and LMS. Build the engine only if that fails.', fill: 'bg-sky' }
  if (a.engineer === 'yes')
    return { title: 'Buy, then integrate', body: 'Buy a platform and spend engineering time on the CRM and LMS connections, not on voice.', fill: 'bg-butter' }
  return { title: 'Buy a platform', body: 'Buy shared scenarios and scoring, and keep ChatGPT for call prep and drafting new scenarios.', fill: 'bg-butter' }
}

export function BuildBuyFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [a, setA] = useState<Answers>({ team: 'yes', same: 'yes', engineer: 'no', data: 'no' })
  const v = verdict(a)

  return (
    <Figure
      title="Four questions that decide it: stay in ChatGPT, buy, or build"
      caption="Our judgment, not a formula. The thresholds are rules of thumb for a sales team, and a regulated team may need to keep data in-house whatever its size."
    >
      <div ref={ref} className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
        <ul className="space-y-3">
          {QUESTIONS.map((x) => (
            <li key={x.key} className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 pb-3 last:border-b-0">
              <span className="text-[14px] text-ink">{x.q}</span>
              <Segmented<YesNo>
                label={x.q}
                value={a[x.key]}
                onChange={(val) => setA((p) => ({ ...p, [x.key]: val }))}
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
              />
            </li>
          ))}
        </ul>
        <div
          key={v.title}
          className={`flex flex-col justify-between border-2 border-ink p-5 shadow-[6px_6px_0_var(--color-ink)] ${v.fill} ${inView ? 'blog-fade-up' : 'opacity-0'}`}
        >
          <div>
            <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">Our call</p>
            <p className="mb-2 font-mono text-xl font-bold uppercase leading-tight text-ink">{v.title}</p>
            <p className="text-[14px] leading-snug text-ink">{v.body}</p>
          </div>
          <span className="tl-stamp mt-4 self-start text-stamp-green" style={stampStyle(inView, 0.4, '-4deg')}>
            Decided
          </span>
        </div>
      </div>
    </Figure>
  )
}
