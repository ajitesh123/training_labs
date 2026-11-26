'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { certs } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const pop = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-pop 0.35s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// hero: a new rep's readiness sheet, exams versus the spoken detail
// ------------------------------------------------------------------------------
const EXAMS = [
  { label: 'Disease state', score: 94 },
  { label: 'Product label', score: 97 },
  { label: 'Compliance and PhRMA Code', score: 100 },
  { label: 'Market access basics', score: 88 },
]
const DETAIL = [
  { label: 'Opens on the physician’s patients', pass: true },
  { label: 'Core message with safety information', pass: true },
  { label: 'Routes an off-label question', pass: false },
  { label: 'Asks for a specific next step', pass: false },
]
const DETAIL_AT = 2.2

export function ReadinessSheetHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ New rep readiness sheet · week 6 ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example scores</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border-2 border-ink bg-sheet p-3">
          <p className="tl-mono mb-3 border-b-2 border-ink pb-2 text-[10.5px] font-semibold text-ink">1. Knowledge exams</p>
          <ul className="space-y-3">
            {EXAMS.map((e, i) => (
              <li key={e.label}>
                <div className="mb-1 flex items-baseline justify-between gap-2 text-[12.5px]">
                  <span className="text-ink-2">{e.label}</span>
                  <CountUp value={e.score} start={inView} format={(n) => `${Math.round(n)}%`} className="font-mono font-semibold text-ink" />
                </div>
                <div className="h-3 border-2 border-ink bg-paper">
                  <div
                    className="h-full border-r-2 border-ink bg-mint transition-[width] duration-1000 ease-out motion-reduce:transition-none"
                    style={{ width: inView ? `${e.score}%` : '0%', transitionDelay: `${i * 220}ms` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-ink bg-sheet p-3">
          <p className="tl-mono mb-3 border-b-2 border-ink pb-2 text-[10.5px] font-semibold text-ink">2. Spoken detail, observed</p>
          <ul className="space-y-2.5">
            {DETAIL.map((d, i) => (
              <li key={d.label} className="flex items-center justify-between gap-3">
                <span className="tl-line text-[12.5px] text-ink" style={print(inView, DETAIL_AT + i * 0.55)}>
                  {d.label}
                </span>
                <span
                  className={`tl-stamp shrink-0 px-1.5 py-1 text-[10px] ${d.pass ? 'text-stamp-green' : 'text-stamp-red'}`}
                  style={stamp(inView, DETAIL_AT + 0.5 + i * 0.55, d.pass ? '-5deg' : '4deg')}
                >
                  {d.pass ? 'Pass' : 'Not yet'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 border-2 border-ink bg-paper text-center">
        {[
          { k: 'Exams passed', v: '4 of 4', good: true },
          { k: 'Detail checks passed', v: '2 of 4', good: false },
        ].map((r, i) => (
          <div key={r.k} className="border-r-2 border-ink px-2 py-2 opacity-0 last:border-r-0 motion-reduce:opacity-100" style={pop(inView, 5 + i * 0.3)}>
            <p className="tl-mono text-[9.5px] text-ink-2 sm:text-[10.5px]">{r.k}</p>
            <p className={`font-mono text-xl font-bold sm:text-2xl ${r.good ? 'text-stamp-green' : 'text-stamp-red'}`}>{r.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-end">
        <span className="tl-stamp whitespace-normal text-stamp-red" style={stamp(inView, 5.9, '-3deg')}>
          Exam ready, not yet field ready
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// certifications compared on published price and study hours
// ------------------------------------------------------------------------------
type View = 'price' | 'hours'
const MAX: Record<View, number> = { price: 2833, hours: 110 }
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

export function CertificationFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('price')
  return (
    <Figure
      title="Five pharma sales credentials, on published price and stated study hours"
      caption="List prices for one person, read on each provider’s page in November 2026. Hours are what the page states; NAPSRx and Biopharma Institute do not publish study hours. All five end in a written exam or certificate, not an observed sales call."
      source="NAPSRx, CMR Institute, Biopharma Institute, ACMA and SDSU Global Campus program pages, November 2026."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<View>
            label="Compare by"
            value={view}
            onChange={setView}
            options={[
              { value: 'price', label: 'Price' },
              { value: 'hours', label: 'Study hours' },
            ]}
          />
        </div>
        <ul className="space-y-4">
          {certs.map((c, i) => {
            const v = view === 'price' ? c.price : c.hours
            return (
              <li key={c.name}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="min-w-0">
                    <span className="font-semibold text-ink">{c.name}</span>
                    <span className="tl-mono ml-2 text-[10.5px] text-ink-2">{c.issuer}</span>
                  </span>
                  {v === null ? (
                    <span className="tl-mono shrink-0 text-[10.5px] text-ink-2">Not published</span>
                  ) : (
                    <CountUp
                      value={v}
                      start={inView}
                      format={view === 'price' ? usd : (n) => `${Math.round(n)} h`}
                      className="shrink-0 font-mono font-semibold text-ink"
                    />
                  )}
                </div>
                <div className={`h-4 border-2 border-ink ${v === null ? 'border-dashed bg-sheet' : 'bg-paper'}`}>
                  <div
                    className={`h-full border-ink transition-[width] duration-1000 ease-out motion-reduce:transition-none ${
                      view === 'price' ? 'bg-sky' : 'bg-butter'
                    } ${v ? 'border-r-2' : ''}`}
                    style={{
                      width: inView && v ? `${Math.max((v / MAX[view]) * 100, 2)}%` : '0%',
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
                <p className="mt-1 text-xs text-ink-2">{c.note}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Figure>
  )
}
