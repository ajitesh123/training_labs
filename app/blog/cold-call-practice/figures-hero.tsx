'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, SliderField, StackedBar, useInView } from '@/components/blog/figures'
import { gong } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const pop = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-pop 0.35s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// hero: the first 30 seconds of a cold call, printed line by line
// ------------------------------------------------------------------------------
type Line = { t: string; who: 'Rep' | 'Buyer'; text: string; tag?: string }

const LINES: Line[] = [
  { t: '0:00', who: 'Rep', text: 'Hi Priya, it’s Sam at Ledgerline. I’ll be honest, this is a cold call. Can I take 30 seconds on why I called, and you tell me if it’s worth more?' },
  { t: '0:08', who: 'Buyer', text: 'You’ve got 30 seconds.' },
  { t: '0:10', who: 'Rep', text: 'Finance leads at firms your size tell us month-end close slips because invoices sit in email. True for you, or am I off?', tag: 'Reason by 0:10' },
  { t: '0:19', who: 'Buyer', text: 'Not really. Just send me an email.' },
  { t: '0:21', who: 'Rep', text: 'Happy to. So I send the right thing: who chases late invoices today, you or AP?', tag: 'Brush-off, then a question' },
  { t: '0:28', who: 'Buyer', text: 'AP. And honestly, they hate it.' },
]
const STEP = 0.75

export function FirstThirtySecondsHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Cold call · the first 30 seconds ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example practice call</p>
      </div>
      <div className="mb-4 flex items-center gap-3">
        <span className="tl-mono text-[10px] text-ink-2">0s</span>
        <div className="h-3 flex-1 border-2 border-ink bg-paper">
          <div
            className="h-full border-r-2 border-ink bg-butter ease-linear motion-reduce:transition-none"
            style={{ width: inView ? '100%' : '0%', transition: `width ${LINES.length * STEP + 0.4}s linear` }}
          />
        </div>
        <span className="tl-mono text-[10px] text-ink-2">30s</span>
      </div>
      <ol className="space-y-2.5 border-2 border-ink bg-sheet p-3 sm:p-4">
        {LINES.map((l, i) => (
          <li key={l.t}>
            <div className="tl-line grid grid-cols-[2.6rem_1fr] gap-2 text-[13.5px] leading-snug" style={print(inView, i * STEP)}>
              <span className="font-mono text-[11px] text-ink-2">{l.t}</span>
              <span className={l.who === 'Rep' ? 'text-ink' : 'italic text-ink-2'}>
                <span className="tl-mono mr-1.5 text-[10px] font-semibold not-italic text-ink">{l.who}</span>
                {l.text}
              </span>
            </div>
            {l.tag && (
              <div className="mt-1.5 pl-[3.1rem]">
                <span className="tl-stamp px-1.5 py-1 text-[10px] text-stamp-green" style={stamp(inView, i * STEP + 0.6, '-4deg')}>
                  {l.tag}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <div
        className="mt-4 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2 opacity-0 motion-reduce:opacity-100"
        style={pop(inView, LINES.length * STEP + 0.3)}
      >
        <p className="text-[13px] text-ink">
          Calls that end inside one minute booked <strong className="font-mono">0%</strong> of meetings in Gong’s data.
        </p>
        <span className="tl-stamp text-stamp-green" style={stamp(inView, LINES.length * STEP + 0.9, '-3deg')}>
          Earned minute two
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// live dials versus practice: what 50 tries at an opener cost
// ------------------------------------------------------------------------------
type Inputs = { tries: number; connect: number; dialsPerHour: number; practiceMin: number }

const DEFAULTS: Inputs = {
  tries: 50,
  connect: gong.connectRate,
  dialsPerHour: (gong.dialsPerHourLow + gong.dialsPerHourHigh) / 2,
  practiceMin: 1.5,
}
const int = (n: number) => Math.round(n).toLocaleString('en-US')
const hrs = (n: number) => `${n.toFixed(1)} h`

export function LiveVsPracticeFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [i, setI] = useState<Inputs>(DEFAULTS)
  const set = (key: keyof Inputs) => (v: number) => setI((prev) => ({ ...prev, [key]: v }))
  const dials = i.tries / (i.connect / 100)
  const liveHours = dials / i.dialsPerHour
  const practiceHours = (i.tries * i.practiceMin) / 60
  const scale = Math.max(liveHours, practiceHours)

  return (
    <Figure
      title="Fifty tries at your opener: on live dials versus in practice"
      caption="Each connected call gives you one real try at the opener. Defaults: Gong’s 5.4 percent average connect rate and 35 dials an hour (Gong assumes 30 to 40 for a rep dialing well). The 1.5 practice minutes per try is an example input for a short opener drill. Change any of them."
      source="Gong, How to Master Cold Calls, 300M+ calls (July 2024)."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <SliderField label="Tries at the opener you want" value={i.tries} min={10} max={200} step={10} onChange={set('tries')} format={int} />
          <SliderField label="Connect rate" value={i.connect} min={2} max={15} step={0.1} onChange={set('connect')} format={(n) => `${n.toFixed(1)}%`} hint="Gong: 5.4% average rep, 13.3% top quartile" />
          <SliderField label="Dials per hour" value={i.dialsPerHour} min={20} max={60} step={1} onChange={set('dialsPerHour')} format={int} />
          <SliderField label="Practice minutes per try" value={i.practiceMin} min={0.5} max={5} step={0.5} onChange={set('practiceMin')} format={(n) => `${n} min`} />
        </div>
        <div className="border-2 border-ink bg-paper p-4 sm:p-5">
          <p className="tl-mono text-[10.5px] text-ink-2">Live dials needed</p>
          <CountUp value={dials} start={inView} format={int} className="block font-mono text-4xl font-bold text-ink" />
          <p className="mb-5 text-sm text-ink-2">dials to reach {int(i.tries)} prospects, each one hearing a draft opener</p>
          <div className="space-y-4">
            <div>
              <p className="mb-1.5 text-sm font-semibold text-ink">On live calls</p>
              <StackedBar segments={[{ label: 'Hours of dialing', value: liveHours, colorClass: 'bg-peach' }]} start={inView} format={hrs} scaleMax={scale} legendCols={1} />
            </div>
            <div>
              <p className="mb-1.5 text-sm font-semibold text-ink">In practice</p>
              <StackedBar segments={[{ label: 'Hours of practice', value: practiceHours, colorClass: 'bg-mint' }]} start={inView} format={hrs} scaleMax={scale} legendCols={1} />
            </div>
          </div>
          <div className="mt-5 border-2 border-dashed border-ink bg-sheet p-3 text-sm text-ink-2">
            Practice gets you the same tries about{' '}
            <CountUp value={practiceHours > 0 ? liveHours / practiceHours : 0} start={inView} format={(n) => `${Math.round(n)}×`} className="font-mono font-bold text-ink" />{' '}
            faster, and no prospect hears the rough drafts.
          </div>
        </div>
      </div>
    </Figure>
  )
}
