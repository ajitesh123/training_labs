'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// training tiers: who needs which level, from one CPI provider's school menu
// ------------------------------------------------------------------------------
type TierKey = 'all' | 'classroom' | 'crisis'
type Tier = { key: TierKey; title: string; who: string; hours: string; short: string; course: string; price: string; width: string; fill: string }

// Region 8 Education Service Center (Indiana), CPI trainings, read November 2026.
const TIERS: Tier[] = [
  { key: 'crisis', title: 'Crisis team', who: 'A few selected staff designated to intervene in a crisis', hours: '2 h online + 6 h in person', short: '2 h + 6 h', course: 'Nonviolent Crisis Intervention, with physical skills', price: '$50 per participant', width: '52%', fill: 'bg-peach' },
  { key: 'classroom', title: 'Classroom', who: 'Teachers, administrators and support staff', hours: '6 h in person', short: '6 h', course: 'Verbal Intervention, hands-off', price: '$50 per participant', width: '76%', fill: 'bg-butter' },
  { key: 'all', title: 'Everyone', who: 'Any staff who deal with students or parents', hours: '2 h, in person or virtual', short: '2 h', course: 'De-escalation basics, no certification', price: '$300 per session', width: '100%', fill: 'bg-mint' },
]

type Role = 'driver' | 'office' | 'teacher' | 'ap' | 'para'
const ROLES: { value: Role; label: string; tier: TierKey; note: string }[] = [
  { value: 'driver', label: 'Bus driver', tier: 'all', note: 'First and last adult of the day. Needs the basics, and a route to report what happened.' },
  { value: 'office', label: 'Front office', tier: 'all', note: 'Meets upset parents more than upset students. Same skills, different script.' },
  { value: 'teacher', label: 'Teacher', tier: 'classroom', note: 'Meets agitation and acceleration most days. Needs the words, practiced.' },
  { value: 'ap', label: 'Assistant principal', tier: 'classroom', note: 'Often called at acceleration. Many schools also put them on the crisis team.' },
  { value: 'para', label: 'Special ed para', tier: 'crisis', note: 'Often designated for crises in specialized classrooms, with physical skills and refreshers.' },
]

export function TrainingTiersFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [role, setRole] = useState<Role>('teacher')
  const r = ROLES.find((x) => x.value === role) ?? ROLES[2]
  const tier = TIERS.find((t) => t.key === r.tier) ?? TIERS[1]

  return (
    <Figure
      title="Who needs which level of de-escalation training: pick a role"
      caption="Tiers, hours and prices are one Indiana education service center’s menu for CPI programs (mileage extra for in-person sessions). Your provider’s hours and prices will differ; the shape, wide at the base and narrow at the top, is the point."
      source="Region 8 Education Service Center, Crisis Prevention Training page (read November 2026)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Role> label="Role" value={role} onChange={setRole} options={ROLES.map(({ value, label }) => ({ value, label }))} />
        </div>
        <div className="grid gap-5 sm:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col items-center gap-1.5">
            {TIERS.map((t, i) => {
              const on = t.key === r.tier
              return (
                <div
                  key={t.key}
                  className={`border-2 border-ink px-2 py-2.5 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${t.fill} ${
                    on ? 'shadow-[5px_5px_0_var(--color-ink)]' : 'opacity-80'
                  }`}
                  style={{ width: inView ? t.width : '0%', transitionDelay: inView ? `${(2 - i) * 150}ms` : '0ms' }}
                >
                  <p className="tl-mono truncate text-[10.5px] font-bold text-ink sm:text-[11.5px]">{t.title}</p>
                  <p className="tl-mono truncate text-[9.5px] text-ink-2 sm:text-[10.5px]">{t.short}</p>
                </div>
              )
            })}
            <p className="tl-mono mt-2 text-[10px] text-ink-2">Wide base, narrow top</p>
          </div>
          <div key={role} className="blog-fade-up border-2 border-ink bg-paper p-4">
            <p className="tl-mono mb-2 text-[11px] font-bold text-ink">{r.label} → {tier.title} tier</p>
            <dl className="space-y-2 text-[14px] leading-snug">
              <div>
                <dt className="tl-mono text-[10px] text-ink-2">Who it is for</dt>
                <dd className="text-ink">{tier.who}</dd>
              </div>
              <div>
                <dt className="tl-mono text-[10px] text-ink-2">Course</dt>
                <dd className="text-ink">{tier.course}</dd>
              </div>
              <div className="flex gap-6">
                <div>
                  <dt className="tl-mono text-[10px] text-ink-2">Time</dt>
                  <dd className="font-mono font-semibold text-ink">{tier.hours}</dd>
                </div>
                <div>
                  <dt className="tl-mono text-[10px] text-ink-2">Listed price</dt>
                  <dd className="font-mono font-semibold text-ink">{tier.price}</dd>
                </div>
              </div>
            </dl>
            <p className="mt-3 border-t-2 border-dashed border-ink pt-2 text-[13px] text-ink-2">{r.note}</p>
          </div>
        </div>
      </div>
    </Figure>
  )
}
