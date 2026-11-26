'use client'

import { useState } from 'react'
import { AnimatedBars, type BarItem, Figure, Segmented, StackedBar, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// what training covers versus what physicians want reps to bring
// ------------------------------------------------------------------------------
const pct = (n: number) => `${Math.round(n)}%`

const ROWS = [
  {
    title: 'What rep training covers',
    note: 'ZS: 90% of sales rep training is on the product',
    segments: [
      { label: 'Product knowledge', value: 90, colorClass: 'bg-sky' },
      { label: 'Everything else', value: 10, colorClass: 'bg-paper' },
    ],
  },
  {
    title: 'What physicians want reps to bring',
    note: 'ZS: practice knowledge preferred two to one over product knowledge',
    segments: [
      { label: 'Practice knowledge', value: 66.7, colorClass: 'bg-butter' },
      { label: 'Product knowledge', value: 33.3, colorClass: 'bg-sky' },
    ],
  },
]

const PRACTICE_TOPICS = ['Prior authorization steps', 'Drug storage and handling', 'Administration in the office', 'Coverage on local plans']

export function PracticeVsProductFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Figure
      title="Where training time goes, and what physicians say they want from a rep"
      caption="ZS reports that its clients say physicians prefer reps to bring practice knowledge twice as much as product knowledge, yet 90 percent of rep training is on the product. Turning “two to one” into a 67 and 33 percent split is our arithmetic. The topic chips are examples ZS gives of practice problems that block a prescription."
      source="ZS, The future of the pharma sales rep (March 2025)."
    >
      <div ref={ref} className="space-y-6">
        {ROWS.map((r) => (
          <div key={r.title}>
            <p className="text-sm font-semibold text-ink">{r.title}</p>
            <p className="mb-2 text-xs text-ink-2">{r.note}</p>
            <StackedBar segments={r.segments} start={inView} format={pct} />
          </div>
        ))}
        <div className="border-2 border-dashed border-ink bg-paper p-3">
          <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink">Practice knowledge looks like</p>
          <div className="flex flex-wrap gap-2">
            {PRACTICE_TOPICS.map((t, i) => (
              <span
                key={t}
                className={`border-2 border-ink bg-butter px-2 py-1 text-xs text-ink ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${900 + i * 150}ms` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// what physicians said about rep access in 2026
// ------------------------------------------------------------------------------
type View = 'entry' | 'earns' | 'ends'

const VIEWS: Record<View, { lead: string; items: BarItem[] }> = {
  entry: {
    lead: 'How reps get time on the calendar',
    items: [
      { label: 'Appointment required', value: 68, highlight: true },
      { label: 'Meal programs', value: 54 },
      { label: 'Conferences and speaker programs', value: 53 },
      { label: 'Walk-in or open access', value: 6 },
    ],
  },
  earns: {
    lead: 'What earns a productive visit',
    items: [
      { label: 'New or relevant clinical information', value: 94, highlight: true },
      { label: 'Rep preparedness and knowledge', value: 72 },
      { label: 'Efficient, respectful use of time', value: 57 },
      { label: 'Patient access and support', value: 28 },
      { label: 'Credibility or relationship', value: 20 },
      { label: 'Brevity', value: 13 },
    ],
  },
  ends: {
    lead: 'What destroys trust in a visit',
    items: [
      { label: 'Not knowledgeable or unprepared', value: 26, highlight: true },
      { label: 'Pushy or too salesy', value: 22 },
      { label: 'Disrespectful of time', value: 21 },
      { label: 'Inaccurate or misleading claims', value: 15 },
    ],
  },
}

export function PhysicianAccessFigure() {
  const [view, setView] = useState<View>('entry')
  const v = VIEWS[view]
  return (
    <Figure
      title="105 US physicians on how a rep gets in, what earns the visit, and what ends it"
      caption="Share of physicians naming each item. Physicians could name more than one, so a view does not add up to 100 percent. Every bar on the scale runs from 0 to 100 percent."
      source="ZoomRx, What Earns HCP Time (survey of 105 US physicians, published August 2026)."
    >
      <div className="mb-5">
        <Segmented<View>
          label="Survey question"
          value={view}
          onChange={setView}
          options={[
            { value: 'entry', label: 'Getting in' },
            { value: 'earns', label: 'Earning time' },
            { value: 'ends', label: 'Losing trust' },
          ]}
        />
      </div>
      <p className="tl-mono mb-3 text-[11px] font-semibold text-ink-2">{v.lead}</p>
      <AnimatedBars key={view} items={v.items} format="pct" max={100} />
    </Figure>
  )
}
