'use client'

import { useState } from 'react'
import { AnimatedBars, Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// the five levels, climbed one step at a time
// ------------------------------------------------------------------------------
type Level = {
  n: number
  name: string
  short: string
  question: string
  example: string
  when: string
  source: string
  inCase: string
}

const LEVELS: Level[] = [
  {
    n: 0,
    name: 'Inputs',
    short: 'Input',
    question: 'Who was trained, for how long, at what cost?',
    example: '10 reps, 16 hours each, $15,000 in fees',
    when: 'Day 0',
    source: 'Roster and invoices',
    inCase: '48 associates in 3 groups, 3 days each',
  },
  {
    n: 1,
    name: 'Reaction',
    short: 'React',
    question: 'Did reps find it relevant and plan to use it?',
    example: 'Share of reps who name one call this week where they will try the skill',
    when: 'End of each session',
    source: 'Short survey',
    inCase: 'Relevance rated 4.4 of 5, against a 4.0 target',
  },
  {
    n: 2,
    name: 'Learning',
    short: 'Learn',
    question: 'Can the rep do it in practice?',
    example: 'Scored role-play: asks one question about budget before quoting a price',
    when: 'End of training, again at 30 days',
    source: 'Role-play scorecards',
    inCase: 'Every participant demonstrated the skills in role-play',
  },
  {
    n: 3,
    name: 'Application',
    short: 'Apply',
    question: 'Does the rep do it on real calls?',
    example: 'Share of recorded calls where the behavior shows up',
    when: '30 to 90 days',
    source: 'Call recordings, manager review',
    inCase: '78% strongly agreed they use the skills; 52% with every customer',
  },
  {
    n: 4,
    name: 'Impact',
    short: 'Impact',
    question: 'Did a business number move?',
    example: 'Ramp time, time to first sale, win rate, deal size',
    when: '90 to 180 days',
    source: 'CRM, compared with a group not yet trained',
    inCase: 'Weekly sales $12,075 per person against $10,449 untrained',
  },
  {
    n: 5,
    name: 'ROI',
    short: 'ROI',
    question: 'Was it worth the money?',
    example: 'Benefit-cost ratio, ROI percent, payback in months',
    when: '6 to 12 months',
    source: 'Finance, using the full cost ledger',
    inCase: 'Benefit-cost ratio 2.18, ROI 118%',
  },
]

export function LevelLadder() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(2)
  const lvl = LEVELS[active]
  return (
    <Figure
      title="Five levels of evidence, plus inputs: climb them in order, cheapest first"
      caption="Levels from the ROI Institute’s evaluation framework. The sales examples and timings are our suggestions; the last line in the panel quotes the published retail case. Click a step."
      source="ROI Institute, Measuring the Success of Sales Training (Patti P. Phillips, March 2024)."
    >
      <div ref={ref}>
        <div className="flex h-44 items-end gap-1 border-b-2 border-ink sm:gap-2">
          {LEVELS.map((l, i) => (
            <div
              key={l.n}
              className="flex-1 origin-bottom transition-transform duration-700 ease-out motion-reduce:transition-none"
              style={{
                height: `${22 + i * 15}%`,
                transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Level ${l.n}: ${l.name}`}
                className={`flex h-full w-full cursor-pointer items-start justify-center border-2 border-b-0 border-ink pt-1.5 transition-[background-color,box-shadow] duration-150 ${
                  active === i ? 'bg-butter shadow-[4px_-4px_0_var(--color-ink)]' : 'bg-sheet hover:bg-sky-soft'
                }`}
              >
                <span className="font-mono text-base font-bold text-ink sm:text-lg">{l.n}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1 sm:gap-2">
          {LEVELS.map((l, i) => (
            <p key={l.n} className={`tl-mono flex-1 text-center text-[8.5px] leading-tight sm:text-[10.5px] ${active === i ? 'font-bold text-ink' : 'text-ink-2'}`}>
              <span className="sm:hidden">{l.short}</span>
              <span className="hidden sm:inline">{l.name}</span>
            </p>
          ))}
        </div>
        <div key={lvl.n} className="blog-fade-up mt-5 border-2 border-ink bg-paper p-4">
          <p className="tl-mono mb-1 text-[11px] font-semibold text-ink-2">
            Level {lvl.n} · {lvl.name}
          </p>
          <p className="mb-3 text-base font-semibold text-ink">{lvl.question}</p>
          <dl className="grid gap-x-5 gap-y-2 text-[13.5px] sm:grid-cols-[110px_1fr]">
            <dt className="tl-mono text-[10.5px] font-semibold text-ink-2">For sales</dt>
            <dd className="text-ink">{lvl.example}</dd>
            <dt className="tl-mono text-[10.5px] font-semibold text-ink-2">When</dt>
            <dd className="text-ink">{lvl.when}</dd>
            <dt className="tl-mono text-[10.5px] font-semibold text-ink-2">Data from</dt>
            <dd className="text-ink">{lvl.source}</dd>
            <dt className="tl-mono text-[10.5px] font-semibold text-ink-2">In the case</dt>
            <dd className="text-ink">
              <span className="bg-sky-soft px-1">{lvl.inCase}</span>
            </dd>
          </dl>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// what teams actually measure, and how they isolate the effect
// ------------------------------------------------------------------------------
type View = 'measure' | 'isolate'

const VIEWS: Record<View, { note: string; source: string; items: { label: string; value: number; highlight?: boolean }[] }> = {
  measure: {
    note: 'Metrics companies use to judge sales enablement ROI (339 B2B companies, May 2022)',
    source: 'Mediafly and RevOps Squared survey, 2022',
    items: [
      { label: 'Sales cycle time', value: 25 },
      { label: 'Quota achievement', value: 23 },
      { label: 'Win rate', value: 20 },
      { label: 'New hire ramp time', value: 17, highlight: true },
      { label: 'Average contract value', value: 16 },
      { label: 'Do not measure ROI', value: 13 },
    ],
  },
  isolate: {
    note: 'Methods practitioners use to isolate a program’s effect (sample of 246 ROI Methodology users)',
    source: 'ROI Institute, 2024',
    items: [
      { label: 'Participant estimates', value: 57 },
      { label: 'Manager estimates', value: 49 },
      { label: 'Senior manager estimates', value: 42 },
      { label: 'Trendline analysis', value: 40 },
      { label: 'Customer input', value: 38 },
      { label: 'Expert input', value: 37 },
      { label: 'Control groups', value: 34, highlight: true },
      { label: 'Mathematical modeling', value: 28 },
    ],
  },
}

export function MeasurementFigure() {
  const [view, setView] = useState<View>('measure')
  return (
    <Figure
      title="What teams measure, and how they decide training caused it"
      caption="Shares of respondents; each survey allowed more than one answer. The highlighted bars are the measures this post argues for: ramp time and a comparison group. Both surveys predate 2026, so treat them as a picture of habits, not a current benchmark."
      source="Mediafly with RevOps Squared, sales enablement survey (May 2022, via Benchmarkit); ROI Institute, Measuring the Success of Sales Training (March 2024)."
    >
      <div className="mb-5 space-y-2">
        <Segmented<View>
          label="Survey"
          value={view}
          onChange={setView}
          options={[
            { value: 'measure', label: 'What they measure' },
            { value: 'isolate', label: 'How they isolate it' },
          ]}
        />
        <p className="text-xs text-ink-2">{VIEWS[view].note}</p>
      </div>
      <AnimatedBars key={view} format="pct" max={60} items={VIEWS[view].items} />
    </Figure>
  )
}
