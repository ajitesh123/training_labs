'use client'

import { type CSSProperties, useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// phase playbook: what to see, aim for, say and avoid in each phase
// ------------------------------------------------------------------------------
type Phase = { name: string; height: number; fill: string; see: string; goal: string; say: string; avoid: string }

// Strategies paraphrased from Colvin and Sugai via the Queensland PBL fact sheet,
// Michigan MTSS TA Center and the IRIS Center. Lines under "Say" are examples.
const PHASES: Phase[] = [
  { name: 'Calm', height: 12, fill: 'bg-mint', see: 'On task, cooperative, responds to praise.', goal: 'Keep the student here.', say: '“You got started right away. That is exactly it.”', avoid: 'Saving all your attention for problems.' },
  { name: 'Trigger', height: 26, fill: 'bg-mint', see: 'Restless, frustrated or anxious after something happens: a hard task, a comment, a bad morning.', goal: 'Prevent and redirect.', say: '“This one is tricky. Let’s do the first line together.”', avoid: 'Adding a new demand right now.' },
  { name: 'Agitation', height: 44, fill: 'bg-butter', see: 'Darting eyes, tapping, starting and stopping, staring off, pulling away.', goal: 'Lower anxiety and demands.', say: '“Rough start? Two minutes at the side table, or start with number 2. Your call.”', avoid: 'Public warnings, sarcasm, pushing for completion.' },
  { name: 'Acceleration', height: 68, fill: 'bg-peach', see: 'Arguing, refusing, provoking, behavior aimed at you.', goal: 'Space, safety and disengagement.', say: '“I’m going to give you a minute. I’ll be right here.”', avoid: 'Ultimatums, cornering, debating the facts, an audience.' },
  { name: 'Peak', height: 94, fill: 'bg-[var(--color-flame)]', see: 'Out of control: shouting, throwing, hitting or running.', goal: 'Safety only.', say: '“Everyone, line up by the door with Ms. Rivera.”', avoid: 'Lectures, consequences, any hold you are not trained and authorized to use.' },
  { name: 'De-escalation', height: 52, fill: 'bg-butter', see: 'Confused, withdrawn, crying or blaming others.', goal: 'Let it happen without re-triggering.', say: '“You’re okay. Take your time.”', avoid: 'Forcing eye contact, making them talk, piling on now.' },
  { name: 'Recovery', height: 22, fill: 'bg-mint', see: 'Subdued, may not want to talk about it.', goal: 'Restore routine, then repair.', say: '“Welcome back. Here is where we are. Let’s talk at lunch about what would help next time.”', avoid: 'Skipping the debrief, or holding a grudge.' },
]

export function PhasePlaybookFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [active, setActive] = useState(2)
  const p = PHASES[active]
  const rows = [
    { label: 'You see', text: p.see },
    { label: 'Your goal', text: p.goal },
    { label: 'Say', text: p.say },
    { label: 'Avoid', text: p.avoid },
  ]

  return (
    <Figure
      title="The acting-out cycle: tap a phase to see what to say and what to avoid"
      caption="Phase descriptions and strategies follow Colvin and Sugai’s acting-out cycle as summarized by the IRIS Center, the Queensland Department of Education and Michigan’s MTSS TA Center. The quoted lines are our examples. Bar heights show rising and falling intensity, not measured data."
      source="IRIS Center, Vanderbilt University; Queensland PBL fact sheet (June 2026); Michigan MTSS TA Center (August 2022)."
    >
      <div ref={ref}>
        <div className="flex h-36 items-end gap-1 border-b-2 border-ink sm:gap-2" role="group" aria-label="Phases of the acting-out cycle">
          {PHASES.map((ph, i) => (
            <button
              key={ph.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              aria-label={`Phase ${i + 1}: ${ph.name}`}
              className="flex h-full flex-1 cursor-pointer flex-col justify-end"
            >
              <span
                className={`block border-2 border-b-0 border-ink transition-all duration-700 ease-out motion-reduce:transition-none ${ph.fill} ${
                  active === i ? 'shadow-[4px_-4px_0_var(--color-ink)]' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ height: inView ? `${ph.height}%` : '0%', transitionDelay: `${i * 80}ms` }}
              />
            </button>
          ))}
        </div>
        <div className="mt-2 flex gap-1 sm:gap-2">
          {PHASES.map((ph, i) => (
            <p
              key={ph.name}
              className={`tl-mono flex-1 text-center text-[8.5px] leading-tight sm:text-[10.5px] ${active === i ? 'font-bold text-ink' : 'text-ink-2'}`}
            >
              {i + 1}. {ph.name.length > 9 ? `${ph.name.slice(0, 6)}.` : ph.name}
            </p>
          ))}
        </div>
        <div key={active} className="blog-fade-up mt-5 border-2 border-ink bg-paper p-4 shadow-[5px_5px_0_var(--color-ink)]">
          <p className="tl-mono mb-3 text-[12px] font-bold text-ink">
            Phase {active + 1} of 7 · {p.name}
          </p>
          <dl className="grid gap-3 sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.label} className="border-2 border-ink bg-sheet p-3">
                <dt className={`tl-mono mb-1 text-[10px] font-semibold ${r.label === 'Avoid' ? 'text-stamp-red' : r.label === 'Say' ? 'text-stamp-green' : 'text-ink-2'}`}>
                  {r.label}
                </dt>
                <dd className="text-[14px] leading-snug text-ink">{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-4 flex gap-3">
          <button type="button" className="tl-btn tl-btn-sm" onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}>
            ← Earlier
          </button>
          <button type="button" className="tl-btn tl-btn-sm bg-butter" onClick={() => setActive((a) => Math.min(6, a + 1))} disabled={active === 6}>
            Next phase →
          </button>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// power struggle vs exit ramp: five moments, two replies each
// ------------------------------------------------------------------------------
type Reply = 'struggle' | 'ramp'
type Moment = { moment: string; struggle: string; ramp: string; why: string }

const MOMENTS: Moment[] = [
  { moment: 'Refuses to start the worksheet', struggle: '“Everyone else is working. Start now or you do it at recess.”', ramp: '“Pick any two problems to start. I’ll check back in three minutes.”', why: 'A choice and a time return some control without a contest.' },
  { moment: '“This is stupid,” said to the room', struggle: '“Excuse me? Say that again and see what happens.”', ramp: 'At the desk, quietly: “Sounds like this feels pointless. Which part? We’ll fix that part.”', why: 'Private, names the feeling, asks for one small next step.' },
  { moment: 'Phone out after one reminder', struggle: '“Give it to me. Now. I said now.”', ramp: '“Bag or my desk, your call. Then question 3.”', why: 'Two acceptable options and the next task, no showdown.' },
  { moment: 'Stands up, shoves the chair, voice rising', struggle: '“Sit down! You do not talk to me like that.”', ramp: '“I’m going to step back and give you space. Class, page 40 with your partner.”', why: 'Fewer words, more distance, and the audience is gone.' },
  { moment: 'Back in class after an outburst', struggle: '“Are you going to apologize? You owe everyone one.”', ramp: '“Glad you’re back. Next step is on the board. We’ll talk at lunch.”', why: 'Repair happens later, in private, once the student is calm.' },
]

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

export function ReplyFlipFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [reply, setReply] = useState<Reply>('struggle')
  const ramp = reply === 'ramp'

  return (
    <Figure
      title="Five classroom moments: the reply that starts a power struggle, and the exit ramp"
      caption="Example lines written for this guide, not a script from any program. Flip between the two replies to compare them."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Reply>
            label="Reply"
            value={reply}
            onChange={setReply}
            options={[
              { value: 'struggle', label: 'Power struggle' },
              { value: 'ramp', label: 'Exit ramp' },
            ]}
          />
        </div>
        <ol className="space-y-3">
          {MOMENTS.map((m, i) => (
            <li key={m.moment} className="border-2 border-ink bg-paper p-3 sm:p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <p className="tl-mono text-[10.5px] font-semibold text-ink-2">
                  {i + 1}. {m.moment}
                </p>
                <span
                  key={reply}
                  className={`tl-stamp px-1.5 py-1 text-[10px] ${ramp ? 'text-stamp-green' : 'text-stamp-red'}`}
                  style={{ '--rot': ramp ? '-4deg' : '4deg', ...(inView ? { animation: `${STAMP_IN} ${0.5 + i * 0.25}s` } : {}) } as CSSProperties}
                >
                  {ramp ? 'Exit ramp' : 'Power struggle'}
                </span>
              </div>
              <p
                key={`${reply}-${i}`}
                className="tl-line text-[15px] leading-snug text-ink"
                style={inView ? { animation: `tl-print 0.6s ${i * 0.25}s steps(14) forwards` } : undefined}
              >
                {ramp ? m.ramp : m.struggle}
              </p>
              {ramp && <p className="blog-fade-up mt-1.5 text-[13px] text-ink-2">{m.why}</p>}
            </li>
          ))}
        </ol>
      </div>
    </Figure>
  )
}
