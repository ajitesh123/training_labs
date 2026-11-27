'use client'

import { type CSSProperties, useEffect, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// interactive 90-day checklist: phases, owners, role-specific items, gates
// ------------------------------------------------------------------------------
type Role = 'sdr' | 'ae'
type PhaseKey = 'pre' | 'w1' | 'd30' | 'd60' | 'd90'
type Owner = 'Manager' | 'Enablement' | 'RevOps' | 'Rep' | 'Mentor'
type Item = { id: string; phase: PhaseKey; text: string; owner: Owner; role?: Role }

const PHASES: { key: PhaseKey; label: string; gate: string }[] = [
  { key: 'pre', label: 'Before day 1', gate: 'Day one starts with zero waiting' },
  { key: 'w1', label: 'Week 1', gate: 'Company story passes the scorecard' },
  { key: 'd30', label: 'Days 8 to 30', gate: 'Discovery certification passed' },
  { key: 'd60', label: 'Days 31 to 60', gate: 'Live call scores hold at the practice level' },
  { key: 'd90', label: 'Days 61 to 90', gate: 'Ramp milestone on track, next 90 days agreed' },
]

const ITEMS: Item[] = [
  { id: 'p1', phase: 'pre', text: 'Laptop, email, CRM, dialer and call recorder tested with a real login', owner: 'RevOps' },
  { id: 'p2', phase: 'pre', text: 'Comp plan and ramp quota explained in writing', owner: 'Manager' },
  { id: 'p3', phase: 'pre', text: 'First two weeks booked: sessions, shadow calls and 1:1s', owner: 'Enablement' },
  { id: 'p4', phase: 'pre', text: 'Peer mentor named and briefed', owner: 'Manager' },
  { id: 'p5', phase: 'pre', text: 'A written definition of “ramped” agreed', owner: 'Manager' },
  { id: 'p6', phase: 'pre', text: 'Territory, account list or lead source assigned', owner: 'Manager' },
  { id: 'w1', phase: 'w1', text: 'Buyer basics: ideal customer, personas, top three problems', owner: 'Enablement' },
  { id: 'w2', phase: 'w1', text: 'Five recorded calls heard end to end: three won, two lost', owner: 'Rep' },
  { id: 'w3', phase: 'w1', text: 'The 90-second company story said out loud and scored', owner: 'Rep' },
  { id: 'w4', phase: 'w1', text: 'First 1:1: the 90-day plan and its gates agreed', owner: 'Manager' },
  { id: 'w5', phase: 'w1', text: 'CRM basics: log a call, create an opportunity', owner: 'RevOps' },
  { id: 'w6', phase: 'w1', text: 'First scored practice cold call', owner: 'Rep', role: 'sdr' },
  { id: 'w7', phase: 'w1', text: 'Demo environment walkthrough', owner: 'Enablement', role: 'ae' },
  { id: 'd1', phase: 'd30', text: 'Product knowledge check passed', owner: 'Enablement' },
  { id: 'd2', phase: 'd30', text: 'Ten scored discovery practice runs', owner: 'Rep' },
  { id: 'd3', phase: 'd30', text: 'Drills on the five most common objections', owner: 'Rep' },
  { id: 'd4', phase: 'd30', text: 'Eight live calls shadowed, one written note each', owner: 'Mentor' },
  { id: 'd5', phase: 'd30', text: 'Cold call opener certified, then first live dials', owner: 'Manager', role: 'sdr' },
  { id: 'd6', phase: 'd30', text: 'Co-owns one live deal with a senior rep', owner: 'Manager', role: 'ae' },
  { id: 'e1', phase: 'd60', text: 'First solo calls, in certified call types only', owner: 'Rep' },
  { id: 'e2', phase: 'd60', text: 'One recorded call reviewed with the manager each week', owner: 'Manager' },
  { id: 'e3', phase: 'd60', text: 'Weekly practice on the gap that review found', owner: 'Rep' },
  { id: 'e4', phase: 'd60', text: 'Meetings booked tracked against the ramp quota', owner: 'Manager', role: 'sdr' },
  { id: 'e5', phase: 'd60', text: 'Demo certification passed, then a first solo demo', owner: 'Manager', role: 'ae' },
  { id: 'e6', phase: 'd60', text: '60-day review against the plan', owner: 'Manager' },
  { id: 'f1', phase: 'd90', text: 'Pricing and negotiation practice', owner: 'Rep' },
  { id: 'f2', phase: 'd90', text: 'Full book, territory or lead flow owned', owner: 'Manager' },
  { id: 'f3', phase: 'd90', text: 'First forecast call: stages hold under review', owner: 'Manager', role: 'ae' },
  { id: 'f4', phase: 'd90', text: 'Handoff quality reviewed with the AEs who take the meetings', owner: 'Manager', role: 'sdr' },
  { id: 'f5', phase: 'd90', text: '90-day review; skill goals for the next 90 days set', owner: 'Manager' },
  { id: 'f6', phase: 'd90', text: 'Onboarding feedback collected for the next cohort', owner: 'Enablement' },
]

const OWNER_FILL: Record<Owner, string> = {
  Manager: 'bg-butter',
  Enablement: 'bg-sky',
  RevOps: 'bg-peach',
  Rep: 'bg-mint',
  Mentor: 'bg-paper',
}

const forRole = (role: Role) => ITEMS.filter((i) => !i.role || i.role === role)
/** Items per role; both roles have the same count. */
export const CHECKLIST_COUNT = forRole('ae').length

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

export function OnboardingChecklistFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [role, setRole] = useState<Role>('ae')
  const [phase, setPhase] = useState<PhaseKey>('pre')
  const [done, setDone] = useState<Set<string>>(new Set())
  const [touched, setTouched] = useState(false)
  const items = forRole(role)
  const phaseItems = items.filter((i) => i.phase === phase)
  const doneCount = items.filter((i) => done.has(i.id)).length
  const gatePassed = phaseItems.every((i) => done.has(i.id))
  const gate = PHASES.find((p) => p.key === phase)?.gate ?? ''

  // Demo: tick the setup items one by one the first time the list is seen.
  useEffect(() => {
    if (!inView || touched) return
    const pre = ITEMS.filter((i) => i.phase === 'pre').map((i) => i.id)
    const id = window.setInterval(() => {
      setDone((prev) => {
        const next = pre.find((x) => !prev.has(x))
        if (!next) return prev
        return new Set(prev).add(next)
      })
    }, 450)
    return () => window.clearInterval(id)
  }, [inView, touched])

  const toggle = (id: string) => {
    setTouched(true)
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }
  const pickPhase = (p: PhaseKey) => {
    setTouched(true)
    setPhase(p)
  }

  return (
    <Figure
      title="The 90-day sales onboarding checklist: tick items, switch roles, watch each gate"
      caption="A template written for this guide, not a benchmark. Counts such as five recorded calls or ten practice runs are example targets; set your own. Items marked for one role swap when you switch between SDR and AE."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Role>
            label="Role"
            value={role}
            onChange={(r) => {
              setTouched(true)
              setRole(r)
            }}
            options={[
              { value: 'ae', label: 'Account executive' },
              { value: 'sdr', label: 'SDR' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={doneCount} start={inView} durationMs={300} className="font-mono text-lg font-bold text-ink" /> of {items.length} done
          </p>
        </div>
        <div className="mb-4 h-4 border-2 border-ink bg-paper">
          <div className="h-full border-r-2 border-ink bg-mint transition-[width] duration-500" style={{ width: `${(doneCount / items.length) * 100}%` }} />
        </div>
        <div className="mb-4">
          <Segmented<PhaseKey> label="Phase" value={phase} onChange={pickPhase} options={PHASES.map((p) => ({ value: p.key, label: p.label }))} />
        </div>
        <ul key={`${phase}-${role}`} className="space-y-2">
          {phaseItems.map((it, i) => {
            const on = done.has(it.id)
            return (
              <li key={it.id} className="blog-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
                <button
                  type="button"
                  onClick={() => toggle(it.id)}
                  aria-pressed={on}
                  className={`flex w-full cursor-pointer items-start gap-3 border-2 border-ink p-2.5 text-left transition-colors ${on ? 'bg-paper' : 'bg-sheet hover:bg-paper'}`}
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-ink font-mono text-[12px] font-bold ${on ? 'bg-mint' : 'bg-sheet'}`}>
                    {on ? '✓' : ''}
                  </span>
                  <span className={`flex-1 text-[14px] leading-snug ${on ? 'text-ink-2' : 'text-ink'}`}>{it.text}</span>
                  <span className={`tl-mono shrink-0 border-[1.5px] border-ink px-1.5 py-0.5 text-[9.5px] font-semibold text-ink ${OWNER_FILL[it.owner]}`}>
                    {it.owner}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-2 border-dashed border-ink bg-paper px-3 py-2.5">
          <p className="text-[13.5px] text-ink">
            <span className="tl-mono mr-2 text-[10.5px] font-bold">Gate</span>
            {gate}
          </p>
          <span
            key={`${phase}-${role}-${gatePassed}`}
            className={`tl-stamp px-1.5 py-1 text-[10px] ${gatePassed ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={{ '--rot': gatePassed ? '-4deg' : '3deg', animation: `${STAMP_IN} 0.1s` } as CSSProperties}
          >
            {gatePassed ? 'Gate passed' : 'Not yet'}
          </span>
        </div>
      </div>
    </Figure>
  )
}
