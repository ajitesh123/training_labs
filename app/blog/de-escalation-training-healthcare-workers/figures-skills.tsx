'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, useInView } from '@/components/blog/figures'

const STAMP = 'inline-block border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider'

// ------------------------------------------------------------------------------
// escalation ladder: when to keep talking and when to get help
// ------------------------------------------------------------------------------
type Stage = {
  key: string
  label: string
  fill: string
  verdict: string
  tone: 'green' | 'red'
  see: string
  helps: string
  avoid: string
  call: string
}

const STAGES: Stage[] = [
  {
    key: 'anxious',
    label: 'Anxious',
    fill: 'bg-mint',
    verdict: 'Talk early',
    tone: 'green',
    see: 'Pacing, the same question asked twice, checking the clock, short answers.',
    helps: 'Go over before they come to you. Say your name, what you know and when you will be back.',
    avoid: 'Waiting until it grows. “Please calm down.”',
    call: 'Nobody yet. Mention it at handoff if it keeps coming back.',
  },
  {
    key: 'verbal',
    label: 'Verbal',
    fill: 'bg-butter',
    verdict: 'Talk, one voice',
    tone: 'green',
    see: 'Raised voice, blame, demands, swearing at the situation rather than at you.',
    helps: 'One staff member speaks. Short sentences, name the feeling, agree with what is true, offer a choice.',
    avoid: 'Arguing the facts, matching their volume, three people answering at once.',
    call: 'Tell a colleague where you are. Keep a clear path to the door.',
  },
  {
    key: 'threat',
    label: 'Threatening',
    fill: 'bg-peach',
    verdict: 'Limit and get help',
    tone: 'red',
    see: 'Threats, clenched fists, throwing things, blocking a doorway, a fixed stare.',
    helps: 'State one calm limit, keep two arm lengths, reduce the audience, offer a way out that saves face.',
    avoid: 'Turning your back, touching, cornering, ultimatums you cannot keep.',
    call: 'Security or your behavioral response team, by the code your policy sets.',
  },
  {
    key: 'danger',
    label: 'Physical danger',
    fill: 'bg-[var(--color-flame)]',
    verdict: 'Leave and call',
    tone: 'red',
    see: 'Hitting, grabbing, a weapon, someone already hurt.',
    helps: 'Get yourself and others out of reach. Follow your emergency response.',
    avoid: 'Trying to talk it down alone.',
    call: 'Your emergency code, security and police, as policy directs.',
  },
]

export function EscalationLadderFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(1)
  const s = STAGES[active]
  const rows = [
    ['What you see', s.see],
    ['What helps', s.helps],
    ['What to avoid', s.avoid],
    ['Who to call', s.call],
  ]

  return (
    <Figure
      title="Four stages of escalation: what changes at each step"
      caption="A simplified teaching model, not a clinical protocol. Your hospital’s policy and response codes decide who is called and when. Delirium, intoxication and dementia can skip stages."
      source="Training Labs summary drawing on the Project BETA de-escalation consensus (2012) and the Joint Commission workplace violence standards."
    >
      <div ref={ref} className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col-reverse gap-2" role="group" aria-label="Escalation stage">
          {STAGES.map((st, i) => (
            <button
              key={st.key}
              type="button"
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer items-center justify-between gap-2 border-2 border-ink px-3 py-2.5 text-left transition-[transform,box-shadow] duration-200 ${st.fill} ${
                active === i ? '-translate-x-[3px] -translate-y-[3px] shadow-[5px_5px_0_var(--color-ink)]' : ''
              } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(STAGES.length - i) * 120}ms`, marginLeft: `${i * 6}%` }}
            >
              <span className="tl-mono text-[11px] font-semibold text-ink">
                {i + 1}. {st.label}
              </span>
            </button>
          ))}
          <p className="tl-mono text-[10px] text-ink-2">Tap a stage</p>
        </div>
        <div key={s.key} className="blog-fade-up border-2 border-ink bg-paper p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="tl-mono text-[11px] font-semibold text-ink">Stage {active + 1}</p>
            <span className={`${STAMP} -rotate-2 ${s.tone === 'green' ? 'text-stamp-green' : 'text-stamp-red'}`}>{s.verdict}</span>
          </div>
          <dl className="space-y-2.5 text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
                <dt className="tl-mono text-[10.5px] font-semibold text-ink-2">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// Project BETA's ten domains, each with a line that shows it
// ------------------------------------------------------------------------------
type Domain = { name: string; says: string; not: string }

const DOMAINS: Domain[] = [
  { name: 'Respect personal space', says: '“I’ll stand over here so we both have room.”', not: 'Stepping in close to be heard over the noise.' },
  { name: 'Do not be provocative', says: '“I’m here to help sort this out.” Hands open, voice level.', not: 'Crossed arms, a sigh, “Calm down.”' },
  { name: 'Establish verbal contact', says: '“I’m Maya, one of the nurses. I’ll be the one talking with you.”', not: 'Three staff members answering at once.' },
  { name: 'Be concise', says: '“You’re next for a room. I’ll update you at 9:40.”', not: 'A long explanation of how triage works.' },
  { name: 'Identify wants and feelings', says: '“What were you hoping would happen tonight?”', not: 'Guessing the problem and fixing the wrong one.' },
  { name: 'Listen closely', says: '“So she hasn’t eaten since morning. Did I get that right?”', not: 'Planning your reply while they are still talking.' },
  { name: 'Agree or agree to disagree', says: '“You’re right. Nobody updated you, and that shouldn’t happen.”', not: 'Defending the system or the colleague.' },
  { name: 'Set clear limits', says: '“I want to keep helping. I can’t while you’re shouting at me.”', not: 'Vague warnings or threats you will not carry out.' },
  { name: 'Offer choices and optimism', says: '“Wait here or in the quiet room? Either way, I’ll find you.”', not: '“There’s nothing I can do.”' },
  { name: 'Debrief patient and staff', says: '“Earlier was hard. What would have helped sooner?”', not: 'Moving on to the next patient without a word.' },
]

export function TenDomainsFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(3)
  const d = DOMAINS[active]
  const tileAnim = (i: number): CSSProperties => ({ animationDelay: `${i * 80}ms` })

  return (
    <Figure
      title="The ten domains of verbal de-escalation, and how each one sounds"
      caption="Domain names from the Project BETA consensus statement. The example lines are ours, written for a hospital waiting room; adapt them to your unit."
      source="Richmond et al., Verbal De-escalation of the Agitated Patient, Western Journal of Emergency Medicine (2012), via PubMed Central."
    >
      <div ref={ref}>
        <p className="mb-4 text-sm text-ink-2">
          <CountUp value={DOMAINS.length} start={inView} className="font-mono text-lg font-bold text-ink" /> skills. Tap one to hear it.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {DOMAINS.map((dm, i) => (
            <button
              key={dm.name}
              type="button"
              aria-pressed={active === i}
              onClick={() => setActive(i)}
              className={`flex h-full cursor-pointer flex-col items-start gap-1 border-2 border-ink p-2.5 text-left transition-colors ${
                active === i ? 'bg-butter' : 'bg-paper hover:bg-sky-soft'
              } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={tileAnim(i)}
            >
              <span className="font-mono text-[11px] font-bold text-ink">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[12.5px] font-medium leading-snug text-ink">{dm.name}</span>
            </button>
          ))}
        </div>
        <div key={d.name} className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="blog-fade-up border-2 border-ink bg-sheet p-3 shadow-[4px_4px_0_var(--color-ink)]">
            <span className={`${STAMP} mb-2 -rotate-2 text-stamp-green`}>Sounds like</span>
            <p className="text-sm text-ink">{d.says}</p>
          </div>
          <div className="blog-fade-up border-2 border-dashed border-ink bg-paper p-3" style={{ animationDelay: '120ms' }}>
            <span className={`${STAMP} mb-2 rotate-2 text-stamp-red`}>Not like</span>
            <p className="text-sm text-ink-2">{d.not}</p>
          </div>
        </div>
      </div>
    </Figure>
  )
}
