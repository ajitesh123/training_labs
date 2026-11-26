'use client'

import { type CSSProperties, useEffect, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

// ------------------------------------------------------------------------------
// hero: one waiting-room conversation, with the agitation meter moving per line
// ------------------------------------------------------------------------------
type Line = { who: 'Daughter' | 'Nurse'; text: string; level: number; tag?: string }

const LINES: Line[] = [
  { who: 'Daughter', text: 'Four hours. My mother is 82 and nobody has told us anything. Is anyone even working here?', level: 4 },
  { who: 'Nurse', text: 'Four hours with no update would make me angry too. I’m Maya, the charge nurse tonight.', level: 4, tag: 'Named the feeling' },
  { who: 'Daughter', text: 'Don’t give me a speech. I want a doctor. Now.', level: 4 },
  { who: 'Nurse', text: 'Fair. She is third for a room. I’ll be back by 9:40 with an update, either way.', level: 3, tag: 'A real time' },
  { who: 'Daughter', text: 'And if you don’t come back?', level: 3 },
  { who: 'Nurse', text: 'Then come find me at the desk. Would she rest better in the quiet corner? I can bring a blanket.', level: 2, tag: 'Offered a choice' },
  { who: 'Daughter', text: 'The corner. Thank you.', level: 1 },
]
const LEVELS = ['Calm', 'Uneasy', 'Upset', 'Angry', 'Threatening'] as const
const FILLS = ['bg-mint', 'bg-mint', 'bg-butter', 'bg-peach', 'bg-[var(--color-flame)]'] as const
const STEP = 1.1

function useStepper(on: boolean, total: number, stepSec: number) {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (!on) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(total)
      return
    }
    const id = window.setInterval(() => setStep((s) => (s >= total ? s : s + 1)), stepSec * 1000)
    return () => window.clearInterval(id)
  }, [on, total, stepSec])
  return step
}

export function WaitingRoomHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const step = useStepper(inView, LINES.length, STEP)
  const level = step === 0 ? 3 : LINES[step - 1].level

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ De-escalation · waiting room, hour four ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example practice scenario</p>
      </div>
      <div className="mb-4 border-2 border-ink bg-paper p-3">
        <div className="mb-2 flex items-baseline justify-between">
          <p className="tl-mono text-[10.5px] font-semibold text-ink">Agitation</p>
          <p className="tl-mono text-[10.5px] text-ink-2">{LEVELS[level - 1]}</p>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {LEVELS.map((l, i) => (
            <div key={l} className="h-4 border-2 border-ink bg-sheet">
              <div
                className={`h-full transition-[width] duration-500 ease-out motion-reduce:transition-none ${FILLS[i]}`}
                style={{ width: i < level ? '100%' : '0%' }}
              />
            </div>
          ))}
        </div>
      </div>
      <ol className="space-y-2.5 border-2 border-ink bg-sheet p-3 sm:p-4">
        {LINES.map((l, i) => (
          <li key={i}>
            <div className="tl-line grid grid-cols-[4.6rem_1fr] gap-2 text-[13.5px] leading-snug" style={print(inView, i * STEP)}>
              <span className="tl-mono pt-0.5 text-[10px] font-semibold text-ink">{l.who}</span>
              <span className={l.who === 'Nurse' ? 'text-ink' : 'italic text-ink-2'}>{l.text}</span>
            </div>
            {l.tag && (
              <div className="mt-1.5 pl-[5.1rem]">
                <span className="tl-stamp px-1.5 py-1 text-[10px] text-stamp-green" style={stamp(inView, i * STEP + 0.7, '-4deg')}>
                  {l.tag}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2">
        <p className="text-[13px] text-ink">No raised voice from staff, no security call, about 60 seconds of talk.</p>
        <span className="tl-stamp text-stamp-green" style={stamp(inView, LINES.length * STEP + 0.4, '-3deg')}>
          De-escalated
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// where violence lands: rate vs share of cases, by setting
// ------------------------------------------------------------------------------
type View = 'rate' | 'share'
type Setting = { label: string; rate: number; share: number }

// NCCI analysis of BLS SOII, private industry, annualized 2023-24 (July 2026).
const SETTINGS: Setting[] = [
  { label: 'Psychiatric and substance use hospitals', rate: 138.8, share: 8.2 },
  { label: 'Other residential care facilities', rate: 68.2, share: 4.7 },
  { label: 'Residential disability, mental health and substance use facilities', rate: 60.9, share: 17.8 },
  { label: 'General medical and surgical hospitals', rate: 14.9, share: 30.5 },
  { label: 'Nursing care facilities', rate: 14.8, share: 8.6 },
]
const ALL_SECTOR_RATE = 11.9

export function SettingRiskFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('rate')
  const value = (s: Setting) => (view === 'rate' ? s.rate : s.share)
  const top = Math.max(...SETTINGS.map(value))
  const fmt = (n: number) => (view === 'rate' ? n.toFixed(1) : `${n.toFixed(1)}%`)

  return (
    <Figure
      title="Where healthcare violence happens: highest risk vs most cases"
      caption={`Violent acts by another person causing days away from work, private industry, annualized 2023 to 2024. Rate is cases per 10,000 full-time workers; the sector as a whole sits at ${ALL_SECTOR_RATE}. Share is each setting’s part of all health care and social assistance cases.`}
      source="NCCI, Workplace Violence Part 3 (July 2026), from BLS Survey of Occupational Injuries and Illnesses."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<View>
            label="Measure"
            value={view}
            onChange={setView}
            options={[
              { value: 'rate', label: 'Rate per 10,000' },
              { value: 'share', label: 'Share of cases' },
            ]}
          />
          <p className="text-xs text-ink-2">{view === 'rate' ? 'Where each worker is most at risk' : 'Where most incidents happen'}</p>
        </div>
        <div className="space-y-3.5">
          {SETTINGS.map((s, i) => {
            const best = value(s) === top
            return (
              <div key={s.label}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className={best ? 'font-semibold text-ink' : 'text-ink-2'}>{s.label}</span>
                  <CountUp value={value(s)} start={inView} format={fmt} className="shrink-0 font-mono font-semibold text-ink" />
                </div>
                <div className="h-4 border-2 border-ink bg-paper">
                  <div
                    className={`h-full border-r-2 border-ink transition-[width] duration-700 ease-out motion-reduce:transition-none ${best ? 'bg-butter' : 'bg-sky'}`}
                    style={{ width: inView ? `${Math.max((value(s) / top) * 100, 1.5)}%` : '0%', transitionDelay: `${i * 90}ms` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Figure>
  )
}
