'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, StackedBar, useInView } from '@/components/blog/figures'
import { techniques } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const pct1 = (n: number) => `${n.toFixed(1)}%`

// ------------------------------------------------------------------------------
// what buyers object to on cold calls (Gong, 300M+ calls)
// ------------------------------------------------------------------------------
type Kind = 'dismissive' | 'situational' | 'existing'

const KINDS: Record<Kind, { label: string; share: number; color: string; examples: string[]; job: string }> = {
  dismissive: {
    label: 'Dismissive',
    share: 49.5,
    color: 'bg-peach',
    examples: ['Not interested', 'Call me in 6 months', 'Send me some information', 'Not my responsibility', 'I’m in a meeting', 'Is this a cold call?'],
    job: 'A reflex, not a verdict. Earn one more question.',
  },
  situational: {
    label: 'Situational',
    share: 42.6,
    color: 'bg-sky',
    examples: ['Too expensive', 'No budget', 'No bandwidth', 'We need to hire someone first', 'Not made for us'],
    job: 'A real constraint. Find out how hard it is before you answer.',
  },
  existing: {
    label: 'Existing solution',
    share: 7.9,
    color: 'bg-butter',
    examples: ['We do it in-house', 'We use a competitor', 'Stuck in a contract'],
    job: 'A comparison. Ask what they would change before you compare.',
  },
}
const ORDER: Kind[] = ['dismissive', 'situational', 'existing']

export function ObjectionMix() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [kind, setKind] = useState<Kind>('dismissive')
  const active = KINDS[kind]
  const segments = ORDER.map((k) => ({ label: KINDS[k].label, value: KINDS[k].share, colorClass: KINDS[k].color }))

  return (
    <Figure
      title="Every cold call objection, sorted into three kinds"
      caption="Share of all objections Gong found across more than 300 million cold calls. The top five individual objections account for 74 percent of everything reps hear. Tap a kind to see what it sounds like."
      source="Gong Labs, We found the top objections across 300M cold calls (July 2024, updated November 2026)."
    >
      <div ref={ref}>
        <StackedBar segments={segments} start={inView} format={pct1} />
        <div className="mt-5 mb-4">
          <Segmented<Kind>
            label="Objection kind"
            value={kind}
            onChange={setKind}
            options={ORDER.map((k) => ({ value: k, label: KINDS[k].label }))}
          />
        </div>
        <div key={kind} className="border-2 border-ink bg-paper p-4">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold text-ink">{active.label}</p>
            <p className="font-mono text-2xl font-bold text-ink">
              <CountUp value={active.share} start={inView} format={pct1} />
            </p>
          </div>
          <div className="mb-3 flex flex-wrap gap-2">
            {active.examples.map((e, i) => (
              <span
                key={e}
                className={`blog-fade-up border-2 border-ink px-2 py-1 text-[13px] text-ink ${active.color}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                “{e}”
              </span>
            ))}
          </div>
          <p className="text-sm text-ink-2">
            <span className="tl-mono mr-1.5 font-semibold text-ink">Your job:</span>
            {active.job}
          </p>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// technique picker: the same objection, a weak reply and a strong one
// ------------------------------------------------------------------------------
export function TechniquePicker() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [id, setId] = useState(techniques[0].id)
  const t = techniques.find((x) => x.id === id) ?? techniques[0]
  const n = techniques.indexOf(t) + 1

  return (
    <Figure
      title="Seven techniques: the weak reply, the strong reply, and the drill"
      caption="Example objections and replies written for this guide, not quotes from real calls. Pick a technique to see the objection it suits, a common weak reply, a stronger one, and how to practice it."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<string>
            label="Technique"
            value={id}
            onChange={setId}
            options={techniques.map((x, i) => ({ value: x.id, label: `${i + 1}. ${x.name}` }))}
          />
        </div>
        <div key={t.id} className={inView ? 'blog-fade-up' : 'opacity-0'}>
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <p className="tl-mono text-[11px] font-semibold text-ink-2">
              Technique {n} of {techniques.length} · best for: {t.bestFor}
            </p>
          </div>
          <div className="border-2 border-ink bg-peach px-4 py-3">
            <p className="tl-mono mb-1 text-[10.5px] font-semibold text-ink-2">Buyer</p>
            <p className="font-semibold text-ink">“{t.objection}”</p>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="border-2 border-ink bg-sheet p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Weak reply</p>
                <span
                  className="tl-stamp tl-stamp-2 text-stamp-red"
                  style={inView ? { animation: STAMP_IN, animationDelay: '0.35s' } : undefined}
                >
                  {t.weakFlaw}
                </span>
              </div>
              <p className="text-[15px] text-ink-2 line-through decoration-stamp-red/50">“{t.weak}”</p>
            </div>
            <div className="border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)]">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Strong reply</p>
                <span
                  className="tl-stamp tl-stamp-1 text-stamp-green"
                  style={inView ? { animation: STAMP_IN, animationDelay: '0.75s' } : undefined}
                >
                  Try this ✓
                </span>
              </div>
              <p className="text-[15px] text-ink">
                <mark className={`bg-transparent text-ink ${inView ? 'tl-hl' : ''}`}>“{t.strong}”</mark>
              </p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 border-2 border-dashed border-ink bg-paper p-4 sm:grid-cols-2">
            <p className="text-sm text-ink-2">
              <span className="tl-mono mb-1 block text-[10.5px] font-semibold text-ink">Drill</span>
              {t.drill}
            </p>
            <p className="text-sm text-ink-2">
              <span className="tl-mono mb-1 block text-[10.5px] font-semibold text-ink">Score it on</span>
              {t.score}
            </p>
          </div>
        </div>
      </div>
    </Figure>
  )
}
