'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// the response ladder: least intrusive first
// ------------------------------------------------------------------------------
const RUNGS = [
  { label: 'Look or signal', height: 'h-[16%]' },
  { label: 'Proximity', height: 'h-[30%]' },
  { label: 'Name + lesson question', height: 'h-[44%]' },
  { label: 'Quiet reminder', height: 'h-[58%]' },
  { label: 'Private choice', height: 'h-[72%]' },
  { label: 'Follow-up or school process', height: 'h-[86%]' },
] as const

type Behavior = 'chat' | 'phone' | 'putdown' | 'refusal'

const BEHAVIORS: Record<Behavior, { label: string; start: number; lines: string[] }> = {
  chat: {
    label: 'Chatting',
    start: 0,
    lines: [
      'Pause mid-sentence and look at the pair.',
      'Keep teaching from beside their desks.',
      '“Maya, what do you think the next step is?”',
      '“Voices off while I’m explaining, thanks.”',
      '“Work quietly here, or move to the front table. Your call.”',
      'A short talk after class about what was going on.',
    ],
  },
  phone: {
    label: 'Phone out',
    start: 1,
    lines: [
      '',
      'Walk over and keep going; most phones vanish here.',
      '“Ari, can you read question four for us?”',
      'Crouch down: “Phone away, please.”',
      '“Bag or my desk, your choice. Thanks.”',
      'Apply the school phone rule and log it.',
    ],
  },
  putdown: {
    label: 'Put-downs',
    start: 3,
    lines: [
      '',
      '',
      '',
      '“That’s a put-down. We don’t do those here.”',
      '“Jordan, front table please. Thank you.”',
      'Talk to both after class; report if it is bullying.',
    ],
  },
  refusal: {
    label: 'Refusal',
    start: 4,
    lines: [
      '',
      '',
      '',
      '',
      'Low voice: “Question 3 first, or question 1 with me?”',
      'Check back in two minutes; involve support if needed.',
    ],
  },
}

export function ResponseLadder() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [b, setB] = useState<Behavior>('chat')
  const beh = BEHAVIORS[b]

  return (
    <Figure
      title="The response ladder: start on the lowest rung that will work"
      caption="Rungs follow the least intrusive sequence in NCTQ’s classroom management guidance and AERO’s handbook. Which rung a behavior starts on, and the lines, are our worked examples."
      source="NCTQ, Training Our Future Teachers: Classroom Management (December 2013), as summarized by NAESP; AERO, Foundational classroom management resources handbook."
    >
      <div ref={ref}>
        <Segmented<Behavior>
          label="Choose a behavior"
          value={b}
          onChange={setB}
          options={(Object.keys(BEHAVIORS) as Behavior[]).map((k) => ({ value: k, label: BEHAVIORS[k].label }))}
        />
        <div className="mt-5 flex h-44 items-end gap-1.5 border-b-2 border-ink sm:h-52 sm:gap-2.5">
          {RUNGS.map((r, i) => {
            const start = i === beh.start
            const skipped = i < beh.start
            return (
              <div key={r.label} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className={`relative border-2 border-b-0 border-ink transition-[height,background-color,opacity] duration-700 ease-out motion-reduce:transition-none ${
                    start ? 'bg-butter shadow-[4px_0_0_var(--color-ink)]' : skipped ? 'bg-sheet opacity-40' : 'bg-sky-soft'
                  } ${inView ? r.height : 'h-0'}`}
                  style={{ transitionDelay: inView ? `${i * 90}ms` : '0ms' }}
                >
                  <span className="tl-mono absolute inset-x-0 top-1 text-center text-[10px] font-bold text-ink">{i + 1}</span>
                  {start && (
                    <span
                      key={b}
                      className="tl-stamp absolute -top-9 left-1/2 -translate-x-1/2 text-stamp-green"
                      style={inView ? { animation: `${STAMP_IN} 0.7s` } : undefined}
                    >
                      Start
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-2 flex gap-1.5 sm:gap-2.5">
          {RUNGS.map((r) => (
            <p key={r.label} className="tl-mono flex-1 text-center text-[8.5px] leading-tight text-ink-2 sm:text-[10px]">
              {r.label}
            </p>
          ))}
        </div>
        <ol key={b} className="mt-5 space-y-1.5">
          {beh.lines.map((line, i) =>
            i < beh.start ? null : (
              <li
                key={i}
                className={`blog-fade-up grid grid-cols-[28px_1fr] gap-2 border-2 border-ink px-3 py-2 text-[14px] ${
                  i === beh.start ? 'bg-butter' : 'bg-paper'
                }`}
                style={{ animationDelay: `${(i - beh.start) * 110}ms` }}
              >
                <span className="font-mono font-semibold text-ink">{i + 1}</span>
                <span className="text-ink">
                  {i > beh.start && <span className="tl-mono mr-1.5 text-[10px] text-ink-2">If it continues:</span>}
                  {line}
                </span>
              </li>
            ),
          )}
        </ol>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// removing the audience: one refusal, three replies
// ------------------------------------------------------------------------------
type Reply = 'demand' | 'office' | 'private'

const CLASS_SIZE = 24
const REPLIES: Record<Reply, { label: string; line: string; student: string; heat: number; watching: number; mark: string; good: boolean }> = {
  demand: {
    label: 'Demand it, out loud',
    line: '“Excuse me? Everyone else is working. Start now.”',
    student: '“Make me.”',
    heat: 5,
    watching: 24,
    mark: 'Power struggle',
    good: false,
  },
  office: {
    label: 'Send them out',
    line: '“Fine. Then go to the office.”',
    student: '(Leaves, and the door slams.)',
    heat: 4,
    watching: 24,
    mark: 'Problem moved, not solved',
    good: false,
  },
  private: {
    label: 'Lower the audience',
    line: '(Moves closer, low voice.) “Question 3 first, or question 1 with me? Back in two minutes.”',
    student: '(Quietly.) “…Question 3.”',
    heat: 1,
    watching: 2,
    mark: 'Audience removed ✓',
    good: true,
  },
}

export function RefusalBranch() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [reply, setReply] = useState<Reply | null>(null)
  const r = reply ? REPLIES[reply] : null
  const watching = r ? r.watching : inView ? CLASS_SIZE : 0
  const heat = r ? r.heat : 3

  return (
    <Figure
      title="Scenario 9: one refusal, three replies, and who is watching"
      caption="An example run of scenario 9 written for this guide. Heat and the number of classmates watching are illustrations of the idea, not measurements."
    >
      <div ref={ref}>
        <p className="mb-3 border-2 border-ink bg-peach px-4 py-2.5 text-[15px] italic text-ink">
          <span className="tl-mono mr-2 text-[11px] not-italic font-semibold text-ink-2">Student, loudly</span>
          “I’m not doing this. It’s pointless.”
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          {(Object.keys(REPLIES) as Reply[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setReply(k)}
              aria-pressed={reply === k}
              className={`tl-mono cursor-pointer border-2 border-ink px-3 py-2 text-left text-[11px] font-semibold transition-colors ${
                reply === k ? 'bg-ink text-sheet' : 'bg-sheet text-ink hover:bg-butter'
              }`}
            >
              {REPLIES[k].label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_200px]">
          <div className="min-h-[120px] border-2 border-dashed border-ink/40 bg-paper p-3.5">
            {r ? (
              <div key={reply} className="space-y-2 text-[14.5px]">
                <p className="tl-line" style={{ animation: 'tl-print 0.6s steps(16) forwards' }}>
                  <span className="tl-mono mr-2 text-[11px] font-semibold text-signal">Teacher</span>
                  {r.line}
                </p>
                <p className="tl-line italic" style={{ animation: 'tl-print 0.6s 0.7s steps(16) forwards' }}>
                  <span className="tl-mono mr-2 text-[11px] not-italic font-semibold text-ink-2">Student</span>
                  {r.student}
                </p>
                <span className={`tl-stamp ${r.good ? 'text-stamp-green' : 'text-stamp-red'}`} style={{ animation: `${STAMP_IN} 1.4s` }}>
                  {r.mark}
                </span>
              </div>
            ) : (
              <p className="text-[13.5px] text-ink-2">Choose a reply to see how the student and the room respond.</p>
            )}
          </div>
          <div className="space-y-3">
            <div>
              <p className="tl-mono mb-1 text-[10px] font-semibold text-ink-2">Heat</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`h-4 flex-1 border-2 border-ink transition-colors duration-500 motion-reduce:transition-none ${n <= heat ? 'bg-peach' : 'bg-sheet'}`}
                    style={{ transitionDelay: `${n * 60}ms` }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="tl-mono mb-1 text-[10px] font-semibold text-ink-2">
                Classmates watching: <span className="text-ink">{watching}</span>/{CLASS_SIZE}
              </p>
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: CLASS_SIZE }, (_, i) => (
                  <span
                    key={i}
                    className={`aspect-square border-[1.5px] border-ink transition-colors duration-500 motion-reduce:transition-none ${i < watching ? 'bg-ink' : 'bg-sheet'}`}
                    style={{ transitionDelay: `${(i % 8) * 30 + Math.floor(i / 8) * 60}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Figure>
  )
}
