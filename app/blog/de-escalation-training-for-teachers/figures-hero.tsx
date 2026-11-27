'use client'

import { type CSSProperties, useEffect, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.7s ${at}s steps(14) forwards` } : undefined
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches), [])
  return reduced
}

// ------------------------------------------------------------------------------
// hero: same student, two adults
// ------------------------------------------------------------------------------
const XS = [40, 133, 227, 320, 413, 507, 600]
const SHORT = ['Calm', 'Trigger', 'Agitation', 'Accel.', 'Peak', 'De-esc.', 'Recovery']
const TINY = ['Calm', 'Trig.', 'Agit.', 'Accel.', 'Peak', 'De-esc.', 'Recov.']

// Catmull-Rom through the seven phase points, drawn as cubic Beziers.
function smooth(ys: number[]): string {
  const p = ys.map((y, i) => [XS[i], y] as const)
  let d = `M${p[0][0]} ${p[0][1]}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2] ?? p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`
  }
  return d
}

type Mode = 'match' | 'low'
type Scene = {
  student: number[]
  adult: number[]
  lines: { phase: string; text: string }[]
  outcome: string
  good: boolean
}

const SCENES: Record<Mode, Scene> = {
  match: {
    student: [196, 176, 134, 84, 34, 102, 184],
    adult: [206, 194, 150, 100, 56, 126, 196],
    lines: [
      { phase: 'Agitation', text: '“Phone away. I’m not asking again.”' },
      { phase: 'Acceleration', text: '“Do you want to go to the office? Keep talking.”' },
    ],
    outcome: 'Reached the peak',
    good: false,
  },
  low: {
    student: [196, 176, 138, 124, 152, 184, 196],
    adult: [208, 208, 208, 208, 208, 208, 208],
    lines: [
      { phase: 'Agitation', text: '“Rough start? Put it face down, then pick question 2 or 4.”' },
      { phase: 'Acceleration', text: '“I hear you. I’ll check back in two minutes.”' },
    ],
    outcome: 'Turned before the peak',
    good: true,
  },
}

function drawStyle(on: boolean, reduced: boolean, delay: number): CSSProperties {
  if (reduced) return { strokeDasharray: 1, strokeDashoffset: 0 }
  return { strokeDasharray: 1, strokeDashoffset: 1, animation: on ? `tl-draw 2s ${delay}s ease-out forwards` : 'none' }
}

export function TwoAdultsHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const reduced = useReducedMotion()
  const [mode, setMode] = useState<Mode>('match')
  const [touched, setTouched] = useState(false)
  const scene = SCENES[mode]
  const tone = scene.good ? 'var(--color-stamp-green)' : 'var(--color-stamp-red)'

  useEffect(() => {
    if (!inView || touched || reduced) return
    const id = window.setTimeout(() => setMode('low'), 7000)
    return () => window.clearTimeout(id)
  }, [inView, touched, reduced])

  const choose = (m: Mode) => {
    setTouched(true)
    setMode(m)
  }

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Same student, same trigger, two adults ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Illustration, not data</p>
      </div>
      <div className="mb-4">
        <Segmented<Mode>
          label="Adult response"
          value={mode}
          onChange={choose}
          options={[
            { value: 'match', label: 'Adult matches the student' },
            { value: 'low', label: 'Adult stays low' },
          ]}
        />
      </div>
      <div className="relative border-2 border-ink bg-paper">
        <p className="tl-mono absolute left-2 top-1.5 text-[9.5px] font-bold text-ink sm:left-3 sm:top-2 sm:text-[11px]">Crisis zone</p>
        <svg viewBox="0 0 640 232" className="block h-auto w-full" role="img" aria-label="Escalation curve across the seven phases">
          <rect x="0" y="0" width="640" height="62" fill="var(--color-peach)" fillOpacity="0.45" />
          {XS.map((x) => (
            <line key={x} x1={x} x2={x} y1="62" y2="222" stroke="var(--color-ink)" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 5" />
          ))}
          <line x1="0" x2="640" y1="222" y2="222" stroke="var(--color-ink)" strokeWidth="2" />
          <g key={mode}>
            <path d={smooth(scene.adult)} pathLength={1} fill="none" stroke={tone} strokeWidth="3" strokeLinecap="round" style={drawStyle(inView, reduced, 0.5)} />
            <path d={smooth(scene.student)} pathLength={1} fill="none" stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" style={drawStyle(inView, reduced, 0)} />
            {scene.student.map((y, i) => (
              <rect key={i} x={XS[i] - 6} y={y - 6} width="12" height="12" fill="var(--color-sheet)" stroke="var(--color-ink)" strokeWidth="2.5" />
            ))}
          </g>
        </svg>
        <div className="grid grid-cols-7 border-t-2 border-ink">
          {SHORT.map((l, i) => (
            <p key={l} className="tl-mono px-0.5 py-1.5 text-center text-[8.5px] leading-tight text-ink-2 sm:text-[10.5px]">
              <span className="sm:hidden">{TINY[i]}</span>
              <span className="hidden sm:inline">{l}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="tl-mono mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10.5px] font-semibold text-ink">
        <span className="flex items-center gap-2"><span className="h-1 w-6 bg-ink" />Student’s intensity</span>
        <span className="flex items-center gap-2"><span className="h-1 w-6" style={{ background: tone }} />Adult’s voice and demands</span>
      </div>
      <ol key={mode} className="mt-4 space-y-2.5 border-2 border-ink bg-sheet p-3 sm:p-4">
        {scene.lines.map((l, i) => (
          <li key={l.phase}>
            <div className="tl-line grid grid-cols-[6.2rem_1fr] gap-2 text-[13.5px] leading-snug" style={print(inView, 1.6 + i * 1.1)}>
              <span className="tl-mono pt-0.5 text-[10px] font-semibold text-ink">At {l.phase.toLowerCase()}</span>
              <span className="text-ink">{l.text}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2">
        <p className="text-[13px] text-ink">
          {scene.good ? 'Fewer words, lower demands, a choice and a time.' : 'Louder, more demands, an ultimatum in front of the class.'}
        </p>
        <span key={mode} className={`tl-stamp ${scene.good ? 'text-stamp-green' : 'text-stamp-red'}`} style={stamp(inView, 3.9, '-3deg')}>
          {scene.outcome}
        </span>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// who gets restrained: share of enrollment vs share of students restrained
// ------------------------------------------------------------------------------
type Measure = 'physical' | 'seclusion' | 'mechanical'

// 2021-22 CRDC First Look (January 2025): students served under IDEA.
const MEASURES: Record<Measure, { share: number; count: string; label: string }> = {
  physical: { share: 76, count: '68,800', label: 'physically restrained' },
  seclusion: { share: 68, count: '28,700', label: 'placed in seclusion' },
  mechanical: { share: 28, count: '8,200', label: 'mechanically restrained' },
}
const ENROLLMENT_SHARE = 14

function Waffle({ filled, on, fill }: { filled: number; on: boolean; fill: string }) {
  return (
    <div className="grid grid-cols-10 gap-[3px]">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className={`aspect-square border-[1.5px] border-ink transition-colors duration-300 motion-reduce:transition-none ${
            on && i < filled ? fill : 'bg-sheet'
          }`}
          style={{ transitionDelay: on ? `${i * 9}ms` : '0ms' }}
        />
      ))}
    </div>
  )
}

export function RestraintGapFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [measure, setMeasure] = useState<Measure>('physical')
  const m = MEASURES[measure]

  return (
    <Figure
      title="Students with disabilities: share of enrollment vs share of students restrained or secluded"
      caption={`Each grid is 100 students. Left: students served under IDEA as a share of all K-12 students. Right: their share of the ${m.count} students ${m.label} in 2021 to 2022. Students with Section 504 plans only are not counted here.`}
      source="U.S. Department of Education, Office for Civil Rights, 2021-22 Civil Rights Data Collection: A First Look (January 2025)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Measure>
            label="Practice"
            value={measure}
            onChange={setMeasure}
            options={[
              { value: 'physical', label: 'Physical restraint' },
              { value: 'seclusion', label: 'Seclusion' },
              { value: 'mechanical', label: 'Mechanical restraint' },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          <div>
            <CountUp value={ENROLLMENT_SHARE} start={inView} format={(n) => `${Math.round(n)}%`} className="block font-mono text-3xl font-bold text-ink" />
            <p className="tl-mono mb-3 min-h-[2.6em] text-[10.5px] leading-tight text-ink-2 sm:min-h-0">Of all K-12 students</p>
            <Waffle filled={ENROLLMENT_SHARE} on={inView} fill="bg-butter" />
          </div>
          <div>
            <CountUp value={m.share} start={inView} format={(n) => `${Math.round(n)}%`} className="block font-mono text-3xl font-bold text-ink" />
            <p className="tl-mono mb-3 min-h-[2.6em] text-[10.5px] leading-tight text-ink-2 sm:min-h-0">Of students {m.label}</p>
            <Waffle filled={m.share} on={inView} fill="bg-peach" />
          </div>
        </div>
      </div>
    </Figure>
  )
}
