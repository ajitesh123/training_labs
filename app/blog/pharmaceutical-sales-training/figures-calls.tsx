'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties
const print = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-print 0.6s ${at}s steps(12) forwards` } : undefined
const pop = (on: boolean, at: number): CSSProperties | undefined =>
  on ? { animation: `tl-pop 0.3s ${at}s ease-out forwards` } : undefined

// ------------------------------------------------------------------------------
// three replies to an off-label question
// ------------------------------------------------------------------------------
type Reply = 'answer' | 'shut' | 'route'

const CHECKS = [
  'Stays inside the approved label',
  'Does not volunteer unapproved-use data',
  'Gives the physician a route to an answer',
  'Logged the way company procedure requires',
]

const REPLIES: Record<Reply, { text: string; checks: boolean[]; verdict: string; good: boolean }> = {
  answer: {
    text: '“A few doctors I call on use it that way and say it works. The early data looks promising. I can show you a study.”',
    checks: [false, false, true, false],
    verdict: 'Off-label promotion risk',
    good: false,
  },
  shut: {
    text: '“Sorry, I can’t talk about that.” The rep moves to the next slide.',
    checks: [true, true, false, false],
    verdict: 'Compliant, but a dead end',
    good: false,
  },
  route: {
    text: '“That use isn’t in the approved label, so I can’t discuss it. I can send a request to our medical information team today, and they’ll reply with what’s published. Shall I? For your patients who do fit the label, here’s what’s new.”',
    checks: [true, true, true, true],
    verdict: 'On label, and still helpful',
    good: true,
  },
}

export function OffLabelFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [reply, setReply] = useState<Reply>('answer')
  const r = REPLIES[reply]
  return (
    <Figure
      title="A physician asks about a use outside the label: three replies, four checks"
      caption="An illustrative exchange, not legal advice. The checks follow FDA’s 2011 draft guidance on unsolicited requests, which says off-label answers should come from medical or scientific staff. Your company’s procedure decides how a request is logged and who replies."
      source="FDA, Responding to Unsolicited Requests for Off-Label Information (draft guidance, December 2011)."
    >
      <div ref={ref}>
        <div className="mb-4 border-2 border-ink bg-paper p-3">
          <p className="tl-mono mb-1 text-[10px] text-ink-2">Physician</p>
          <p className="text-[15px] text-ink">“Have you seen it used for patients outside the label? I have one in mind.”</p>
        </div>
        <Segmented<Reply>
          label="Rep reply"
          value={reply}
          onChange={setReply}
          options={[
            { value: 'answer', label: 'Answer it' },
            { value: 'shut', label: 'Shut it down' },
            { value: 'route', label: 'Route it' },
          ]}
        />
        <div
          key={reply}
          className={`blog-fade-up mt-4 border-2 border-ink p-4 ${r.good ? 'bg-mint shadow-[5px_5px_0_var(--color-ink)]' : 'bg-sheet'}`}
        >
          <p className="tl-mono mb-1 text-[10px] text-ink-2">Rep</p>
          <p className="mb-4 text-[15px] text-ink">{r.text}</p>
          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {CHECKS.map((c, i) => (
              <li
                key={c}
                className="flex items-start gap-2 border-2 border-ink bg-sheet p-2 text-[13px] text-ink opacity-0 motion-reduce:opacity-100"
                style={pop(inView, 0.15 + i * 0.18)}
              >
                <span className={`font-mono text-base font-bold leading-none ${r.checks[i] ? 'text-stamp-green' : 'text-stamp-red'}`}>
                  {r.checks[i] ? '✓' : '✗'}
                </span>
                {c}
              </li>
            ))}
          </ul>
          <span
            className={`tl-stamp whitespace-normal ${r.good ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={stamp(inView, 0.95, r.good ? '-4deg' : '3deg')}
          >
            {r.verdict}
          </span>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// a short detail that scores itself turn by turn
// ------------------------------------------------------------------------------
type Version = 'weak' | 'strong'
type Turn = { t: string; who: 'Rep' | 'Dr. Rao'; text: string }
type Criterion = { label: string; turn: number }

const CRITERIA: Criterion[] = [
  { label: 'Opens on her patients', turn: 0 },
  { label: 'Asks one real question', turn: 2 },
  { label: 'Core message with safety information', turn: 4 },
  { label: 'Answers the access question', turn: 6 },
  { label: 'Asks for a specific next step', turn: 7 },
]

const SCRIPTS: Record<Version, { turns: Turn[]; points: number[] }> = {
  strong: {
    points: [2, 2, 2, 2, 2],
    turns: [
      { t: '0:00', who: 'Rep', text: 'Last visit you mentioned patients still waking at night on their inhaler. I have one update on that group.' },
      { t: '0:12', who: 'Dr. Rao', text: 'Okay, two minutes.' },
      { t: '0:15', who: 'Rep', text: 'Of those patients, who worries you most right now?' },
      { t: '0:22', who: 'Dr. Rao', text: 'The ones who have been to the ER this year.' },
      { t: '0:30', who: 'Rep', text: 'In the main trial on the label, patients on Product V had fewer severe attacks than on placebo. The most common side effects were headache and sore throat, and it is not for an attack in progress.' },
      { t: '1:10', who: 'Dr. Rao', text: 'Coverage is my problem. Half my patients’ plans fight these.' },
      { t: '1:15', who: 'Rep', text: 'The two biggest plans here cover it with a prior authorization. I can leave the checklist with your front desk.' },
      { t: '1:40', who: 'Rep', text: 'Could I come back on the 12th to hear how the first authorization went?' },
    ],
  },
  weak: {
    points: [0, 0, 1, 0, 0],
    turns: [
      { t: '0:00', who: 'Rep', text: 'Hi doctor, just stopping by to remind you about Product V.' },
      { t: '0:05', who: 'Dr. Rao', text: 'Okay, two minutes.' },
      { t: '0:08', who: 'Rep', text: 'It’s a great option. Really effective.' },
      { t: '0:12', who: 'Dr. Rao', text: 'For which patients?' },
      { t: '0:15', who: 'Rep', text: 'Most of your asthma patients, honestly. Patients love it.' },
      { t: '0:24', who: 'Dr. Rao', text: 'Coverage is my problem. Half my patients’ plans fight these.' },
      { t: '0:28', who: 'Rep', text: 'It’s really worth it for them.' },
      { t: '0:33', who: 'Rep', text: 'Thanks, doctor. See you next time.' },
    ],
  },
}
const STEP = 0.55

export function DetailScorerFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [version, setVersion] = useState<Version>('weak')
  const s = SCRIPTS[version]
  const total = s.points.reduce((a, b) => a + b, 0)
  return (
    <Figure
      title="One short detail, scored line by line on a five-part rubric"
      caption="An invented practice script: Product V and its trial result are fictional. Each criterion scores 0, 1 or 2. Switch versions to replay the call. The weak run names the product but never gives safety information, so it earns one point for the message."
      source="Training Labs example rubric."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<Version>
            label="Version of the call"
            value={version}
            onChange={setVersion}
            options={[
              { value: 'weak', label: 'Weak run' },
              { value: 'strong', label: 'Strong run' },
            ]}
          />
        </div>
        <div key={version} className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <ol className="space-y-2 border-2 border-ink bg-paper p-3">
            {s.turns.map((turn, i) => (
              <li key={turn.t + turn.who} className="tl-line grid grid-cols-[2.6rem_1fr] gap-2 text-[13px]" style={print(inView, i * STEP)}>
                <span className="font-mono text-[11px] text-ink-2">{turn.t}</span>
                <span className={turn.who === 'Rep' ? 'text-ink' : 'italic text-ink-2'}>
                  <span className="tl-mono mr-1.5 text-[10px] font-semibold not-italic text-ink">{turn.who}</span>
                  {turn.text}
                </span>
              </li>
            ))}
          </ol>
          <div className="border-2 border-ink bg-sheet p-3">
            <ul className="space-y-2">
              {CRITERIA.map((c, i) => {
                const p = s.points[i]
                const fill = p === 2 ? 'bg-mint' : p === 1 ? 'bg-butter' : 'bg-peach'
                return (
                  <li key={c.label} className="flex items-center justify-between gap-2 text-[13px]">
                    <span className="text-ink-2">{c.label}</span>
                    <span
                      className={`shrink-0 border-2 border-ink px-1.5 font-mono text-xs font-bold text-ink opacity-0 motion-reduce:opacity-100 ${fill}`}
                      style={pop(inView, c.turn * STEP + 0.5)}
                    >
                      {p}/2
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 flex items-end justify-between gap-2 border-t-2 border-ink pt-2">
              <span className="tl-mono text-[10.5px] font-semibold text-ink">Score</span>
              <CountUp value={total} start={inView} format={(n) => `${Math.round(n)} / 10`} durationMs={s.turns.length * STEP * 1000} className="font-mono text-2xl font-bold text-ink" />
            </div>
            <span
              className={`tl-stamp mt-3 whitespace-normal ${total >= 8 ? 'text-stamp-green' : 'text-stamp-red'}`}
              style={stamp(inView, s.turns.length * STEP + 0.4, total >= 8 ? '-4deg' : '4deg')}
            >
              {total >= 8 ? 'Ready for the field' : 'Rehearse again'}
            </span>
          </div>
        </div>
      </div>
    </Figure>
  )
}
