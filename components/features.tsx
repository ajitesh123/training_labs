'use client'

import { useEffect, useState } from 'react'
import { type LoopStage, PracticeLoop } from '@/components/practice-loop'
import { SectionHead, SectionLede, wrap } from '@/components/section-head'

const features: { title: string; description: string; stage: LoopStage }[] = [
  {
    title: 'Live Roleplay Practice',
    description:
      'Rehearse discovery calls, demos, and negotiations with structured scenarios that mirror real buyer conversations.',
    stage: 'practice',
  },
  {
    title: 'Playbook-Ready Curriculum',
    description:
      'Courses built around modern GTM motions: outbound, inbound, expansion, and enterprise selling.',
    stage: 'playbook',
  },
  {
    title: 'Manager Coaching Tracks',
    description:
      'Train frontline managers to run 1:1s, deal reviews, and call coaching that actually stick.',
    stage: 'coach',
  },
  {
    title: 'Skills That Move Pipeline',
    description:
      'Focus on behaviors that show up in win rates: qualification, storytelling, objection handling, and closing.',
    stage: 'live',
  },
  {
    title: 'Certifications',
    description:
      'Earn credentials for ramp completion and methodology mastery your enablement team can standardize on.',
    stage: 'scorecard',
  },
  {
    title: 'Flexible Learning',
    description:
      'Self-paced modules with lifetime access, so new hires and veterans can train around live selling.',
    stage: 'practice',
  },
]

const AUTO_ADVANCE_MS = 4200

export default function Features() {
  const [open, setOpen] = useState(0)
  const [touched, setTouched] = useState(false)

  // Walk through the features until the visitor picks one themselves.
  useEffect(() => {
    if (touched || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setOpen((i) => (i + 1) % features.length), AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [touched])

  return (
    <section id="features" className="scroll-mt-20 border-b-2 border-ink py-14 sm:py-24">
      <div className={wrap}>
        <SectionHead
          kicker="Features"
          title="Why Choose Training Labs?"
          aside={
            <SectionLede>
              Sales training and coaching programs designed for revenue teams: practical,
              methodology-aligned, and built for real selling situations.
            </SectionLede>
          }
        />
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="grid gap-3">
            {features.map((feature, i) => (
              <button
                key={feature.title}
                type="button"
                aria-expanded={open === i}
                onClick={() => {
                  setTouched(true)
                  setOpen(i)
                }}
                className="tl-acc block w-full cursor-pointer border-2 border-ink bg-sheet px-4 py-4 text-left text-ink sm:px-5"
              >
                <span className="tl-mono flex justify-between gap-3 text-[13px] font-semibold sm:text-sm">
                  {feature.title}
                  <span aria-hidden>{open === i ? '−' : '+'}</span>
                </span>
                {open === i && <span className="mt-3 block text-[15px] text-ink-2">{feature.description}</span>}
              </button>
            ))}
          </div>
          <PracticeLoop active={features[open].stage} />
        </div>
      </div>
    </section>
  )
}
