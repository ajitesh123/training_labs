'use client'

import { useState } from 'react'
import { AnimatedBars, Figure, Segmented, useInView } from '@/components/blog/figures'
import { programs } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// hero: the four layers healthcare sales training has to cover
// ------------------------------------------------------------------------------
const LAYERS = [
  { name: 'Clinical and product knowledge', eg: 'Anatomy, the product, the evidence behind it', fill: 'bg-sky' },
  { name: 'Compliance and disclosure', eg: 'PhRMA and AdvaMed codes, Open Payments', fill: 'bg-mint' },
  { name: 'The hospital buying process', eg: 'Value analysis, supply chain, finance', fill: 'bg-butter' },
  { name: 'Conversations with clinicians', eg: 'A physician with two minutes to spare', fill: 'bg-peach' },
]
const DROP_MS = 380

export function SkillStackHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const stampAt = LAYERS.length * DROP_MS + 300
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-3 pb-5 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-7"
    >
      <p className="tl-mono mb-5 text-[11.5px] font-semibold text-ink-2">[ What healthcare sales training has to cover ]</p>
      <div className="grid gap-5 sm:grid-cols-[1fr_236px] sm:gap-4">
        <ol className="flex flex-col-reverse gap-2">
          {LAYERS.map((l, i) => (
            <li
              key={l.name}
              className={`border-2 border-ink px-3.5 py-2.5 transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none ${l.fill} ${
                i === LAYERS.length - 1 ? 'shadow-[5px_5px_0_var(--color-ink)]' : ''
              }`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(-28px)',
                transitionDelay: inView ? `${i * DROP_MS}ms` : '0ms',
              }}
            >
              <p className="tl-mono text-[10px] text-ink-2">Layer {i + 1}</p>
              <p className="font-semibold leading-snug text-ink">{l.name}</p>
              <p className="text-[13px] text-ink-2">{l.eg}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-5 px-1.5 pb-1 sm:justify-between sm:px-0 sm:py-6">
          <span
            className="tl-stamp tl-stamp-1 self-start text-stamp-green"
            style={inView ? { animation: STAMP_IN, animationDelay: `${stampAt}ms` } : undefined}
          >
            Layers 3 + 4 win deals
          </span>
          <span
            className="tl-stamp tl-stamp-2 self-start text-stamp-red"
            style={inView ? { animation: STAMP_IN, animationDelay: `${stampAt + 500}ms` } : undefined}
          >
            1 + 2 come from courses
          </span>
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// entry program prices: tuition vs price per instruction hour
// ------------------------------------------------------------------------------
type View = 'price' | 'hour'

export function ProgramCosts() {
  const [view, setView] = useState<View>('price')
  const items =
    view === 'price'
      ? programs.map((p) => ({ label: p.name, value: p.price, note: p.note }))
      : programs
          .filter((p) => p.hours !== null)
          .map((p) => ({ label: p.name, value: p.price / (p.hours ?? 1), note: `${p.hours} hours` }))

  return (
    <Figure
      title="What it costs to train for a medical sales job, November 2026"
      caption="Published tuition for programs aimed at people entering medical or pharmaceutical sales. Price per hour divides tuition by instruction hours; for Medical Sales College the hours come from its stated weeks and hours per week, so they are approximate. The CNPR price is one college’s listing; other colleges and NAPSR may charge differently."
      source="coursecareers.com, medicalsalescollege.com and faytechcc.edu program pages, read November 2026."
    >
      <div className="mb-5">
        <Segmented<View>
          label="Compare by"
          value={view}
          onChange={setView}
          options={[
            { value: 'price', label: 'Tuition' },
            { value: 'hour', label: 'Per instruction hour' },
          ]}
        />
      </div>
      <AnimatedBars items={items} format={view === 'price' ? 'usd' : 'usd2'} />
    </Figure>
  )
}
