'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { RATES } from './content'
import { stampStyle, usd } from './fx'

// ------------------------------------------------------------------------------
// four objections, a weak reply and a stronger one
// ------------------------------------------------------------------------------
type Objection = 'spouse' | 'work' | 'price' | 'online'

type Drill = { client: string; weak: string; weakTag: string; strong: string; why: string }

const DRILLS: Record<Objection, Drill> = {
  spouse: {
    client: '“I need to talk to my spouse first.”',
    weak: '“Sure, no problem. I’ll call you next week.”',
    weakTag: 'No next step',
    strong:
      '“That makes sense, it’s a decision for both of you. Could we find 20 minutes when you’re both free, so I can answer their questions directly? What do you think they’ll ask first?”',
    why: 'Agrees with the client, books a time with both decision makers, and surfaces the real concern.',
  },
  work: {
    client: '“I already have coverage through work.”',
    weak: '“Work coverage is never enough.”',
    weakTag: 'A claim, not a check',
    strong:
      '“Good, let’s count it. Do you know the amount, and whether it stays with you if you change jobs? Let’s put it in the fact finder and see whether there is a gap at all.”',
    why: 'Treats the existing coverage as a fact to measure, so the client sees the gap instead of being told about it.',
  },
  price: {
    client: '“That’s more than I wanted to spend.”',
    weak: '“Let me see if I can find you a cheaper carrier.”',
    weakTag: 'Discounts the need',
    strong:
      '“More than you expected, or more than you can set aside each month? If it’s the monthly amount, we can look at a shorter term or a lower amount and check what still covers the mortgage.”',
    why: 'Separates sticker shock from a real budget limit, then trades coverage against cost in the client’s own terms.',
  },
  online: {
    client: '“I’ll just buy it online.”',
    weak: '“Online quotes are a trap.”',
    weakTag: 'Attacks the choice',
    strong:
      '“You can, and for some people that works well. What I can add is the needs review, so the amount matches your mortgage and the kids’ years at home. Want to run those numbers together, then decide where to buy?”',
    why: 'Respects the option, names the one thing the agent adds, and keeps the conversation going.',
  },
}

const OPTIONS: { value: Objection; label: string }[] = [
  { value: 'spouse', label: 'Talk to my spouse' },
  { value: 'work', label: 'Covered at work' },
  { value: 'price', label: 'Too expensive' },
  { value: 'online', label: 'Buy online' },
]

export function ObjectionDrillFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [o, setO] = useState<Objection>('spouse')
  const d = DRILLS[o]

  return (
    <Figure
      title="Four life insurance objections: the reply that ends the call and the one that keeps it going"
      caption="Example replies written for this post to show the pattern, not scripts to read word for word. Run each with a practice client who pushes back a second time."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Objection> label="Objection" value={o} onChange={setO} options={OPTIONS} />
        </div>
        <div key={o} className="space-y-3">
          <div className={`border-2 border-ink bg-peach px-4 py-3 ${inView ? 'blog-fade-up' : 'opacity-0'}`}>
            <p className="tl-mono mb-1 text-[10px] font-semibold text-ink-2">Client</p>
            <p className="text-[15px] font-semibold text-ink">{d.client}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div
              className={`flex flex-col gap-3 border-2 border-ink bg-paper p-4 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '150ms' }}
            >
              <p className="tl-mono text-[10px] font-semibold text-ink-2">Weak reply</p>
              <p className="text-[14px] leading-snug text-ink-2 line-through decoration-stamp-red/60">{d.weak}</p>
              <span className="tl-stamp mt-auto self-start px-1.5 py-1 text-[10px] text-stamp-red" style={stampStyle(inView, 0.5, '4deg')}>
                {d.weakTag}
              </span>
            </div>
            <div
              className={`flex flex-col gap-3 border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)] ${
                inView ? 'blog-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '300ms' }}
            >
              <p className="tl-mono text-[10px] font-semibold text-ink-2">Stronger reply</p>
              <p className="text-[14px] leading-snug text-ink">{d.strong}</p>
              <span className="tl-stamp mt-auto self-start px-1.5 py-1 text-[10px] text-stamp-green" style={stampStyle(inView, 0.8, '-4deg')}>
                Keeps it going
              </span>
            </div>
          </div>
          <p className="border-2 border-dashed border-ink bg-paper px-4 py-2.5 text-[13px] text-ink-2">
            <span className="tl-mono mr-2 text-[10px] font-semibold text-ink">Why it works</span>
            {d.why}
          </p>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// a quarter of practice: one workshop vs short sessions every week
// ------------------------------------------------------------------------------
type Sessions = '1' | '2' | '3'
type Minutes = '10' | '15' | '20'
const WEEKS = 13

export function PracticeQuarterFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [sessions, setSessions] = useState<Sessions>('3')
  const [minutes, setMinutes] = useState<Minutes>('15')
  const perWeek = Number(sessions)
  const reps = perWeek * WEEKS
  const totalMin = reps * Number(minutes)
  const aiCost = totalMin * RATES.aiPerMinute
  const agentCost = (totalMin / 60) * RATES.agentHourly

  return (
    <Figure
      title="One agent’s quarter: a workshop and nothing after, against short practice every week"
      caption={`Example plan. Agent time uses the BLS May 2025 median for insurance sales agents, $${RATES.agentHourly} an hour, before commission. AI minutes are priced at $${RATES.aiPerMinute.toFixed(2)}, the per-minute rate of Tough Tongue AI’s Business plan; manager review time is not counted.`}
      source="BLS Occupational Outlook Handbook, insurance sales agents (August 2026); toughtongueai.com/pricing, November 2026."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <span className="tl-mono text-[10.5px] text-ink-2">Sessions a week</span>
            <Segmented<Sessions>
              label="Sessions a week"
              value={sessions}
              onChange={setSessions}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
              ]}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="tl-mono text-[10.5px] text-ink-2">Minutes</span>
            <Segmented<Minutes>
              label="Minutes per session"
              value={minutes}
              onChange={setMinutes}
              options={[
                { value: '10', label: '10' },
                { value: '15', label: '15' },
                { value: '20', label: '20' },
              ]}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="mb-1.5 text-sm font-semibold text-ink">Workshop, then live calls</p>
            <div className="grid grid-cols-13 gap-1">
              {Array.from({ length: WEEKS }, (_, w) => (
                <div key={w} className={`h-14 border-2 border-ink ${w === 0 && inView ? 'bg-peach' : 'bg-paper'} transition-colors duration-500`} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-sm font-semibold text-ink">Short practice every week</p>
            <div className="grid grid-cols-13 gap-1">
              {Array.from({ length: WEEKS }, (_, w) => (
                <div key={w} className="flex h-14 flex-col-reverse gap-0.5 border-2 border-ink bg-paper p-0.5">
                  {Array.from({ length: perWeek }, (_, s) => (
                    <div
                      key={`${w}-${s}-${perWeek}`}
                      className={`flex-1 border-[1.5px] border-ink bg-mint ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${(w * perWeek + s) * 40}ms` }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="tl-mono mt-1 flex justify-between text-[9.5px] text-ink-2">
              <span>Week 1</span>
              <span>Week 13</span>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {[
            { label: 'Practice reps', value: reps, fmt: (n: number) => Math.round(n).toString() },
            { label: 'Practice hours', value: totalMin / 60, fmt: (n: number) => n.toFixed(1) },
            { label: 'AI minutes cost', value: aiCost, fmt: usd },
            { label: 'Agent time', value: agentCost, fmt: usd },
          ].map((s) => (
            <div key={s.label} className="border-2 border-ink bg-paper p-3">
              <p className="tl-mono text-[10px] text-ink-2">{s.label}</p>
              <CountUp value={s.value} start={inView} format={s.fmt} className="font-mono text-xl font-bold text-ink" />
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}
