'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'
import { stampStyle } from './fx'

// ------------------------------------------------------------------------------
// a weak prompt drifts into agreement; a strong brief holds the objection
// ------------------------------------------------------------------------------
type PromptKind = 'weak' | 'strong'

const PROMPTS: Record<PromptKind, { prompt: string; turns: [string, string][]; stamp: string; ok: boolean }> = {
  weak: {
    prompt: 'Pretend to be a customer so I can practice my sales pitch.',
    turns: [
      ['Hi, I’m calling from RouteWise. We help teams plan delivery routes faster.', 'That sounds interesting! Tell me more.'],
      ['We cut route planning time in half.', 'Wow, that would really help us. How do we get started?'],
      ['I can set up a demo on Thursday.', 'Perfect, Thursday works great!'],
    ],
    stamp: 'Buyer agreed by turn 3',
    ok: false,
  },
  strong: {
    prompt:
      'You are Dana Ruiz, operations director at a 60-person logistics firm. You plan routes in spreadsheets. Your last software tool sat unused for a year. Budget is set until April. Do not volunteer information. Do not agree to a next step unless I connect the product to a cost you named. Stay in character until I type DEBRIEF, then score me 1 to 5 on discovery, objection handling and next step, quoting my words.',
    turns: [
      ['Hi Dana, I’m calling from RouteWise. We help teams plan delivery routes faster.', 'We plan routes fine. What is this about?'],
      ['We cut route planning time in half.', 'Everyone says that. Our last tool sat unused for a year.'],
      ['What made it go unused?', 'Dispatchers had to retype every order. Nobody had the time.'],
    ],
    stamp: 'Objection held until asked',
    ok: true,
  },
}

export function PromptDriftFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [kind, setKind] = useState<PromptKind>('strong')
  const p = PROMPTS[kind]
  const endAt = 0.3 + p.turns.length * 0.5

  return (
    <Figure
      title="The same opener, two prompts: how fast the AI buyer gives in"
      caption="An example exchange written for this post to show the pattern. Real output varies from run to run; the point is that a buyer with no situation and no rules tends to agree, and one with a hidden fact makes the rep ask."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<PromptKind>
            label="Prompt"
            value={kind}
            onChange={setKind}
            options={[
              { value: 'weak', label: 'One-line prompt' },
              { value: 'strong', label: 'Buyer brief with rules' },
            ]}
          />
        </div>
        <div key={kind} className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
          <div className={`border-2 border-ink bg-paper p-3 ${inView ? 'blog-fade-up' : 'opacity-0'}`}>
            <p className="tl-mono mb-2 text-[10px] font-semibold text-ink-2">Prompt</p>
            <p className="font-mono text-[12px] leading-relaxed text-ink">{p.prompt}</p>
          </div>
          <div className="space-y-2">
            {p.turns.map(([rep, buyer], i) => (
              <div key={rep} className={inView ? 'blog-fade-up' : 'opacity-0'} style={{ animationDelay: `${0.3 + i * 0.5}s` }}>
                <p className="ml-auto w-fit max-w-[88%] border-2 border-ink bg-sky-soft px-3 py-1.5 text-[13px] leading-snug text-ink">
                  <span className="tl-mono mr-1.5 text-[9.5px] text-ink-2">Rep</span>
                  {rep}
                </p>
                <p className="mt-1.5 w-fit max-w-[88%] border-2 border-ink bg-sheet px-3 py-1.5 text-[13px] leading-snug text-ink">
                  <span className="tl-mono mr-1.5 text-[9.5px] text-ink-2">Buyer</span>
                  {buyer}
                </p>
              </div>
            ))}
            <span
              className={`tl-stamp mt-2 inline-block ${p.ok ? 'text-stamp-green' : 'text-stamp-red'}`}
              style={stampStyle(inView, endAt, p.ok ? '-4deg' : '4deg')}
            >
              {p.stamp}
            </span>
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// feedback: a chat critique against a rubric score with history
// ------------------------------------------------------------------------------
type View = 'chat' | 'rubric'

const CRITERIA = [
  { name: 'Asked about the problem before pitching', score: 2, quote: '“We cut route planning time in half.”' },
  { name: 'Found the real objection', score: 4, quote: '“What made it go unused?”' },
  { name: 'Tied the product to a cost the buyer named', score: 2, quote: 'No cost named yet' },
  { name: 'Ended with a dated next step', score: 1, quote: 'Call ended on “I’ll send some info.”' },
]
const HISTORY = [
  { week: 'Week 1', total: 9 },
  { week: 'Week 2', total: 12 },
  { week: 'Week 3', total: 15 },
]
const MAX = 20

export function FeedbackFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('rubric')
  const total = CRITERIA.reduce((s, c) => s + c.score, 0)

  return (
    <Figure
      title="What comes back after the call: a chat’s critique, or a score a manager can compare"
      caption="Example feedback for the same practice call. The rubric, scores and weekly totals are illustrative, not output from any tool. A chat can produce rubric-style scores if you ask, but each rep gets them in their own chat, and nothing collects them."
      source="On stored results: Hyperbound, ChatGPT for sales training (November 2026), a vendor making the case for its own product."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<View>
            label="Feedback view"
            value={view}
            onChange={setView}
            options={[
              { value: 'chat', label: 'Chat critique' },
              { value: 'rubric', label: 'Rubric score' },
            ]}
          />
        </div>
        {view === 'chat' ? (
          <div key="chat" className="space-y-3">
            <p className={`max-w-xl border-2 border-ink bg-sheet px-4 py-3 text-[14px] leading-relaxed text-ink ${inView ? 'blog-fade-up' : 'opacity-0'}`}>
              Nice work! You were friendly and confident, and asking why the last tool went unused was a strong move.
              Next time, try asking more open-ended questions earlier and handle objections with a bit more empathy.
              Keep practicing!
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {['Changes each run', 'No number to compare', 'Stays in one rep’s chat'].map((t, i) => (
                <span key={t} className="tl-stamp px-1.5 py-1 text-[10px] text-stamp-red" style={stampStyle(inView, 0.5 + i * 0.3, i % 2 ? '3deg' : '-3deg')}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div key="rubric" className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3">
              {CRITERIA.map((c, i) => (
                <div key={c.name}>
                  <div className="mb-1 flex items-baseline justify-between gap-3 text-[13px]">
                    <span className="text-ink">{c.name}</span>
                    <span className="font-mono font-semibold text-ink">{c.score}/5</span>
                  </div>
                  <div className="grid h-3.5 grid-cols-5 gap-0.5">
                    {Array.from({ length: 5 }, (_, k) => (
                      <div
                        key={k}
                        className={`border-[1.5px] border-ink transition-colors duration-300 ${inView && k < c.score ? (c.score >= 3 ? 'bg-mint' : 'bg-peach') : 'bg-paper'}`}
                        style={{ transitionDelay: `${i * 250 + k * 80}ms` }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[11.5px] text-ink-2">{c.quote}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-2 border-ink bg-paper p-4">
              <p className="tl-mono text-[10px] text-ink-2">This call</p>
              <p className="font-mono text-3xl font-bold text-ink">
                <CountUp value={total} start={inView} />
                <span className="text-lg text-ink-2">/{MAX}</span>
              </p>
              <p className="tl-mono mb-2 mt-4 text-[10px] text-ink-2">Same rep, same scenario</p>
              <div className="flex h-24 items-end gap-2 border-b-2 border-ink">
                {HISTORY.map((h, i) => (
                  <div key={h.week} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className={`relative border-2 border-b-0 border-ink transition-all duration-700 ease-out motion-reduce:transition-none ${i === HISTORY.length - 1 ? 'bg-butter' : 'bg-sky'}`}
                      style={{ height: inView ? `${(h.total / MAX) * 100}%` : '0%', transitionDelay: `${900 + i * 200}ms` }}
                    >
                      <span className="absolute inset-x-0 bottom-full mb-0.5 text-center font-mono text-[11px] font-bold text-ink">{h.total}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-1 flex gap-2">
                {HISTORY.map((h) => (
                  <p key={h.week} className="tl-mono flex-1 text-center text-[9.5px] text-ink-2">
                    {h.week}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Figure>
  )
}
