'use client'

import { type CSSProperties, useState } from 'react'
import { AnimatedBars, CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (inView: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(inView ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

// ------------------------------------------------------------------------------
// what each program lists: topics against live role-play
// ------------------------------------------------------------------------------
const TOPICS = ['Cycle and funnel', 'Territory and travel', 'Ethics', 'Financial aid', 'Hard questions', 'Live role-play'] as const

type Program = { name: string; price: string; covers: boolean[] }

const PROGRAMS: Program[] = [
  { name: 'NACAC Emerging Leaders', price: '$230 / $410', covers: [true, false, true, true, false, false] },
  { name: 'AACRAO Counselor/Recruiter 101', price: '$445 / $495', covers: [true, true, true, false, false, false] },
  { name: 'NACCAP New Counselor Training', price: '$250 / $300', covers: [true, true, false, false, true, false] },
  { name: 'RNL Counselors Track (Bronze to Gold)', price: 'Not published', covers: [true, true, true, true, true, true] },
]

const PRACTICE = TOPICS.length - 1

export function ProgramMatrix() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const withRolePlay = PROGRAMS.filter((p) => p.covers[PRACTICE]).length
  return (
    <Figure
      title="What four admissions counselor programs list, topic by topic"
      caption="Read from each program’s published topic list in November 2026. A cross means the page does not mention the topic, not that it never comes up in class. Prices are member / nonmember for one person; NACCAP’s drop to $200 / $250 for groups of five or more."
      source="NACAC, AACRAO, NACCAP and RNL program pages, November 2026."
    >
      <div ref={ref}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-2 border-ink bg-paper text-left">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="tl-mono p-2 text-[10px] font-semibold text-ink">Program</th>
                {TOPICS.map((t, j) => (
                  <th
                    key={t}
                    className={`tl-mono p-2 text-center text-[9.5px] font-semibold leading-tight text-ink ${j === PRACTICE ? 'bg-butter' : ''}`}
                  >
                    {t}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROGRAMS.map((p, i) => (
                <tr key={p.name} className="border-t border-ink/20 first:border-t-0">
                  <td className="p-2">
                    <p className="text-[12.5px] font-semibold leading-snug text-ink">{p.name}</p>
                    <p className="font-mono text-[10.5px] text-ink-2">{p.price}</p>
                  </td>
                  {p.covers.map((c, j) => (
                    <td key={TOPICS[j]} className={`p-2 text-center ${j === PRACTICE ? 'bg-butter/40' : ''}`}>
                      <span
                        className={`inline-block font-mono text-[16px] font-bold leading-none opacity-0 motion-reduce:opacity-100 ${
                          c ? 'text-stamp-green' : 'text-stamp-red'
                        }`}
                        style={stamp(inView, 0.2 + i * 0.35 + j * 0.06, j % 2 ? '6deg' : '-6deg')}
                      >
                        {c ? '✓' : '✗'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-2">
          <CountUp value={inView ? withRolePlay : 0} start={inView} className="font-mono text-lg font-bold text-ink" /> of{' '}
          {PROGRAMS.length} list live role-play, and only in the advanced level of a two-day, in-person track.
        </p>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// why onboarding never stops: staffing and tenure
// ------------------------------------------------------------------------------
type View = 'challenges' | 'tenure'

const VIEWS: Record<View, { note: string; items: { label: string; value: number; highlight?: boolean }[] }> = {
  challenges: {
    note: 'Share of admissions leaders naming each as a current staffing challenge (AACRAO, October 2025)',
    items: [
      { label: 'Limited budget for competitive salaries', value: 65 },
      { label: 'Lack of career laddering', value: 56 },
      { label: 'Staff burnout', value: 54 },
      { label: 'High turnover rates', value: 45, highlight: true },
      { label: 'Difficulty recruiting qualified candidates', value: 42 },
      { label: 'Seasonal workload management', value: 25 },
    ],
  },
  tenure: {
    note: 'Share in their current position for three years or less (CUPA-HR, data as of November 2021)',
    items: [
      { label: 'Admissions coordinators and counselors', value: 71, highlight: true },
      { label: 'All higher ed professionals in the survey', value: 53 },
    ],
  },
}

export function StaffingFigure() {
  const [view, setView] = useState<View>('challenges')
  return (
    <Figure
      title="Why admissions training has to be repeatable: turnover and burnout"
      caption="Shares of respondents. AACRAO’s 60-second survey asked admissions leaders to pick every staffing challenge that applies; CUPA-HR’s figures come from its annual higher education workforce surveys."
      source="AACRAO, Admissions Staffing 60-Second Survey (October 2025); CUPA-HR, The Higher Ed Admissions Workforce (April 2023)."
    >
      <div className="mb-5 space-y-2">
        <Segmented<View>
          label="Data set"
          value={view}
          onChange={setView}
          options={[
            { value: 'challenges', label: 'Staffing challenges' },
            { value: 'tenure', label: 'Time in position' },
          ]}
        />
        <p className="text-xs text-ink-2">{VIEWS[view].note}</p>
      </div>
      <AnimatedBars key={view} format="pct" max={80} items={VIEWS[view].items} />
    </Figure>
  )
}
