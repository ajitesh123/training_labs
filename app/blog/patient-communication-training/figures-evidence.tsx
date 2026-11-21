'use client'

import { useState } from 'react'
import { AnimatedBars, type BarItem, CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// hero: one teach-back loop in an exam room
// ------------------------------------------------------------------------------
type Turn = {
  who: 'Clinician' | 'Patient'
  before: string
  mark?: string
  after?: string
  at: number
  stamp?: { text: string; tone: 'red' | 'green'; at: number }
}

// `at` is seconds after the sheet scrolls into view.
const TURNS: Turn[] = [
  { who: 'Clinician', before: 'Take one tablet twice a day with food, and finish all ten days of the pack.', at: 0.2 },
  { who: 'Clinician', before: 'I want to be sure I explained that well. How will you take these at home?', at: 1.3 },
  {
    who: 'Patient',
    before: 'Twice a day with food, and I can ',
    mark: 'stop once I feel better',
    after: '.',
    at: 2.4,
    stamp: { text: 'Misunderstood', tone: 'red', at: 3.7 },
  },
  {
    who: 'Clinician',
    before: 'That part was my fault. Keep going all ten days, even after you feel better. Walk me through it once more?',
    at: 4.4,
  },
  {
    who: 'Patient',
    before: 'One at breakfast, one at dinner, every day until the pack is empty.',
    at: 5.6,
    stamp: { text: 'Understood', tone: 'green', at: 6.6 },
  },
]

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const PRINT = 'tl-print 0.8s steps(16) forwards'

export function TeachBackHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Exam room · teach-back loop ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example visit · new prescription</p>
      </div>
      <ol className="space-y-3.5">
        {TURNS.map((t, i) => (
          <li
            key={i}
            className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-x-3 gap-y-2 sm:grid-cols-[88px_minmax(0,1fr)_140px]"
          >
            <span
              className={`tl-mono border-2 border-ink px-1 py-1 text-center text-[9.5px] font-semibold text-ink sm:text-[10.5px] ${
                t.who === 'Clinician' ? 'bg-sky-soft' : 'bg-butter'
              }`}
            >
              {t.who}
            </span>
            <p
              className="tl-line min-w-0 bg-sheet text-[14.5px] leading-snug text-ink sm:text-[15.5px]"
              style={inView ? { animation: `${PRINT} ${t.at}s` } : undefined}
            >
              {t.before}
              {t.mark && (
                <span
                  className="tl-mark"
                  style={inView ? { animation: `tl-hl 0.55s ease-out ${t.at + 0.9}s forwards` } : undefined}
                >
                  {t.mark}
                </span>
              )}
              {t.after}
            </p>
            {t.stamp ? (
              <span
                className={`tl-stamp col-start-2 justify-self-start sm:col-start-3 sm:justify-self-end ${
                  t.stamp.tone === 'red' ? 'tl-stamp-2 text-stamp-red' : 'tl-stamp-1 text-stamp-green'
                }`}
                style={inView ? { animation: `${STAMP_IN} ${t.stamp.at}s` } : undefined}
              >
                {t.stamp.text}
              </span>
            ) : (
              <span aria-hidden className="hidden sm:block" />
            )}
          </li>
        ))}
      </ol>
      <div
        className="tl-score mt-5 grid gap-2 border-t-2 border-ink pt-4 sm:grid-cols-3"
        style={inView ? { animation: 'tl-pop 0.3s ease-out 7.2s forwards' } : undefined}
      >
        {['Explain in small chunks', 'Ask for it back, in their words', 'Re-explain and check again'].map((s, i) => (
          <p key={s} className="tl-mono flex items-center gap-2 text-[10.5px] font-semibold text-ink">
            <span className="grid h-5 w-5 shrink-0 place-items-center border-2 border-ink bg-mint text-[10px]">{i + 1}</span>
            {s}
          </p>
        ))}
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// the evidence: 55 programs in the 2025 BMC Medical Education review
// ------------------------------------------------------------------------------
type View = 'methods' | 'focus' | 'results'

const VIEWS: Record<View, { items: BarItem[]; max: number; format: 'int' | 'pct'; note: string }> = {
  methods: {
    max: 55,
    format: 'int',
    note: 'Programs using each teaching method, out of 55. Most combined several.',
    items: [
      { label: 'Role play with facilitator or peer feedback', value: 46, highlight: true },
      { label: 'Didactics (short lectures)', value: 45 },
      { label: 'Group work and reflection', value: 37 },
      { label: 'Booster: coaching, phone or email after', value: 8 },
      { label: 'Online or virtual modules', value: 8 },
    ],
  },
  focus: {
    max: 55,
    format: 'int',
    note: 'Programs by main topic, out of 55.',
    items: [
      { label: 'Basic and patient-centered communication', value: 22, highlight: true },
      { label: 'Breaking bad news', value: 19 },
      { label: 'Empathy and emotional support', value: 17 },
      { label: 'Advance care planning', value: 14 },
      { label: 'Shared decision-making', value: 7 },
    ],
  },
  results: {
    max: 100,
    format: 'pct',
    note: 'Share of studies that measured each outcome and found a significant improvement.',
    items: [
      { label: 'Communication behaviors improved', value: 93, highlight: true, note: '37 of 40' },
      { label: 'Self-efficacy and confidence improved', value: 96, note: '26 of 27' },
    ],
  },
}

export function EvidenceBars() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('methods')
  const v = VIEWS[view]
  return (
    <Figure
      title="What 55 communication training programs taught, how, and what changed"
      caption="Programs for clinicians in chronic care: 15 randomized trials and 40 quasi-experimental studies, half of them in oncology. Counts are as reported by the review authors."
      source="Training in communication skills for healthcare providers in chronic care: a systematic review, BMC Medical Education (October 2025)."
    >
      <div ref={ref}>
        <div className="mb-5 grid grid-cols-3 gap-2">
          {[
            { label: 'Programs', value: 55 },
            { label: 'Randomized trials', value: 15 },
            { label: 'Built with patients', value: 4 },
          ].map((s) => (
            <div key={s.label} className="border-2 border-ink bg-paper p-2.5 sm:p-3">
              <CountUp value={s.value} start={inView} className="block font-mono text-2xl font-semibold leading-none text-ink sm:text-3xl" />
              <p className="tl-mono mt-1.5 text-[9px] leading-tight text-ink-2 sm:text-[10.5px]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<View>
            label="Review view"
            value={view}
            onChange={setView}
            options={[
              { value: 'methods', label: 'How they taught' },
              { value: 'focus', label: 'What they taught' },
              { value: 'results', label: 'What changed' },
            ]}
          />
        </div>
        <p className="mb-4 text-xs text-ink-2">{v.note}</p>
        <AnimatedBars key={view} items={v.items} format={v.format} max={v.max} />
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// how long the programs ran, against published online courses
// ------------------------------------------------------------------------------
const BINS = [
  { label: '2.25 h or less', value: 5 },
  { label: '4 to 5 h', value: 7 },
  { label: '6 to 8 h', value: 15 },
  { label: '9 to 12 h', value: 6 },
  { label: '13 to 24 h', value: 15 },
  { label: '25 h or more', value: 5 },
] as const

const COURSES = [
  { name: 'Mayo Clinic module', length: 'About 30 min' },
  { name: 'Mayo Clinic CNE course', length: '3.5 credits' },
  { name: 'CAPC, five courses', length: '5.25 credits' },
] as const

export function DurationHistogram() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const top = 15
  return (
    <Figure
      title="Total training time per program in the review, and where recorded courses sit"
      caption="53 of the 55 programs reported a duration; two were unclear. The review counts total training time, including role play. Course figures below are recorded content or credit hours, read from each provider’s page in November 2026."
      source="BMC Medical Education systematic review (October 2025); Mayo Clinic and CAPC course pages (November 2026)."
    >
      <div ref={ref}>
        <div className="flex h-48 items-end gap-1.5 border-b-2 border-ink sm:h-56 sm:gap-3">
          {BINS.map((b, i) => (
            <div key={b.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
              <div
                className={`relative border-2 border-b-0 border-ink transition-[height] duration-1000 ease-out motion-reduce:transition-none ${
                  b.value === top ? 'bg-sky' : 'bg-sky-soft'
                }`}
                style={{ height: inView ? `${(b.value / top) * 82}%` : '0%', transitionDelay: `${i * 120}ms` }}
              >
                <span className="absolute inset-x-0 bottom-full mb-1 text-center font-mono text-[12px] font-semibold text-ink sm:text-sm">
                  {b.value}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-1.5 sm:gap-3">
          {BINS.map((b) => (
            <p key={b.label} className="tl-mono min-w-0 flex-1 text-center text-[8.5px] leading-tight text-ink-2 sm:text-[10.5px]">
              {b.label}
            </p>
          ))}
        </div>
        <p className="mt-1 text-center text-[11px] text-ink-2">Number of programs, by total training time</p>
        <div className="mt-5 border-2 border-dashed border-ink bg-paper p-3">
          <p className="tl-mono mb-2.5 text-[10.5px] font-semibold text-ink">Published online courses, for comparison</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {COURSES.map((c, i) => (
              <div
                key={c.name}
                className={`border-2 border-ink bg-butter px-3 py-2 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${900 + i * 150}ms` }}
              >
                <p className="text-xs text-ink-2">{c.name}</p>
                <p className="font-mono text-sm font-semibold text-ink">{c.length}</p>
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-xs text-ink-2">
            The review’s authors note that three very brief programs produced no change in communication behavior.
          </p>
        </div>
      </div>
    </Figure>
  )
}
