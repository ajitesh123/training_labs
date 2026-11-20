'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'
import { prompts } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const PRINT_IN = 'tl-print 0.7s steps(18) forwards'

// ------------------------------------------------------------------------------
// eight prompts: weak reply vs strong reply
// ------------------------------------------------------------------------------
type Mode = 'weak' | 'strong'

export function PromptRewriter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [id, setId] = useState(prompts[0].id)
  const [mode, setMode] = useState<Mode>('weak')
  const p = prompts.find((x) => x.id === id) ?? prompts[0]
  const strong = mode === 'strong'

  return (
    <Figure
      title="Eight role play prompts: hear the weak reply, then the strong one"
      caption="Pick a prompt, then switch between the two replies. The replies are our own examples, written to show the move each prompt tests; they are not quotes from real interviews."
    >
      <div ref={ref}>
        <div role="group" aria-label="Choose a prompt" className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {prompts.map((x, i) => (
            <button
              key={x.id}
              type="button"
              onClick={() => {
                setId(x.id)
                setMode('weak')
              }}
              aria-pressed={x.id === id}
              className={`tl-mono cursor-pointer border-2 border-ink px-2 py-1.5 text-left text-[10.5px] font-semibold leading-tight transition-colors ${
                x.id === id ? 'bg-ink text-sheet' : 'bg-sheet text-ink hover:bg-butter'
              } ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {i + 1}. {x.label}
            </button>
          ))}
        </div>

        <div className="border-2 border-ink bg-paper">
          <div className="grid grid-cols-[64px_1fr] gap-x-3 border-b-2 border-dashed border-ink/25 px-4 py-3 text-[15px]">
            <span className="tl-mono pt-0.5 text-[11px] font-semibold text-ink-2">Buyer</span>
            <span className="italic text-ink">{p.prompt}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-3">
            <Segmented<Mode>
              label="Reply quality"
              value={mode}
              onChange={setMode}
              options={[
                { value: 'weak', label: 'Weak reply' },
                { value: 'strong', label: 'Strong reply' },
              ]}
            />
            <p className="text-[12.5px] text-ink-2">
              <span className="tl-mono font-semibold text-ink">Tests: </span>
              {p.tests}
            </p>
          </div>
          <div key={`${p.id}-${mode}`} className="grid gap-3 px-4 pb-4 pt-3 sm:grid-cols-[64px_1fr_auto] sm:items-start">
            <span className={`tl-mono pt-0.5 text-[11px] font-semibold ${strong ? 'text-signal' : 'text-ink-2'}`}>You</span>
            <p className="tl-line text-[15px] leading-relaxed" style={inView ? { animation: PRINT_IN } : undefined}>
              {strong ? <mark className="tl-hl bg-transparent text-ink">{p.strong}</mark> : p.weak}
            </p>
            <span
              className={`tl-stamp ${strong ? 'tl-stamp-2 text-stamp-green' : 'tl-stamp-1 text-stamp-red'} justify-self-start`}
              style={inView ? { animation: `${STAMP_IN} 0.75s` } : undefined}
            >
              {strong ? `${p.strongMark} ✓` : p.weakMark}
            </span>
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// the interviewer's hidden brief
// ------------------------------------------------------------------------------
type Ask = 'closed' | 'feature' | 'outcome'

const ASKS: { id: Ask; question: string; reply: string; found: boolean; mark: string }[] = [
  {
    id: 'closed',
    question: 'Do you use a training tool today?',
    reply: 'We have something. It’s fine.',
    found: false,
    mark: 'Closed question',
  },
  {
    id: 'feature',
    question: 'Tell me about your onboarding program.',
    reply: 'Two weeks of bootcamp, then they shadow a senior rep.',
    found: false,
    mark: 'Surface answer',
  },
  {
    id: 'outcome',
    question: 'What happens in a new rep’s first six months?',
    reply: 'Honestly? Most aren’t productive until month seven. That’s what keeps me up.',
    found: true,
    mark: 'Hidden fact found ✓',
  },
]

export function HiddenBrief() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [ask, setAsk] = useState<Ask | null>(null)
  const current = ASKS.find((a) => a.id === ask)
  const found = current?.found ?? false

  return (
    <Figure
      title="Two briefs, one call: what the interviewer is holding back"
      caption="An example scenario we wrote in the format hiring guides recommend: the candidate gets a short brief, and the interviewer holds one fact back for good questions. Try each question and watch the redacted line."
    >
      <div ref={ref} className="grid gap-4 sm:grid-cols-2">
        <div className={`border-2 border-ink bg-paper p-4 ${inView ? 'blog-fade-up' : 'opacity-0'}`}>
          <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">Your brief · read to you</p>
          <p className="text-[14.5px] leading-relaxed text-ink">
            Alex is Head of Sales at a 120-person software company and booked this call after a
            webinar. Your goal: understand their situation and agree a next step.
          </p>
        </div>
        <div
          className={`border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)] ${inView ? 'blog-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '150ms' }}
        >
          <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">Interviewer’s brief · never shown</p>
          <ul className="space-y-2 text-[14px] leading-snug text-ink">
            <li>Open but busy. Short answers to yes/no questions.</li>
            <li className="relative">
              <span className={found ? 'tl-hl' : ''}>
                Hidden fact: new reps take about seven months to ramp. Say it only if asked about outcomes.
              </span>
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-out motion-reduce:transition-none"
                style={{ width: found ? '0%' : '100%' }}
              />
            </li>
            <li>At minute three, interrupt: “So what do you actually do?”</li>
            <li>Agree to a next step only if the candidate sums up the problem in your words.</li>
          </ul>
        </div>

        <div className="sm:col-span-2">
          <p className="tl-mono mb-2 text-[10.5px] font-semibold text-ink-2">Ask the buyer one question</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {ASKS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAsk(a.id)}
                aria-pressed={ask === a.id}
                className={`cursor-pointer border-2 border-ink px-3 py-2 text-left text-[13.5px] leading-snug transition-colors ${
                  ask === a.id ? 'bg-butter' : 'bg-sheet hover:bg-sky-soft'
                }`}
              >
                “{a.question}”
              </button>
            ))}
          </div>
          <div className="mt-3 min-h-[76px] border-2 border-dashed border-ink/40 bg-paper px-4 py-3">
            {current ? (
              <div key={current.id} className="flex flex-wrap items-start justify-between gap-3">
                <p className="tl-line text-[14.5px] italic text-ink" style={{ animation: PRINT_IN }}>
                  <span className="tl-mono mr-2 text-[11px] not-italic font-semibold text-ink-2">Buyer</span>
                  {current.reply}
                </p>
                <span
                  className={`tl-stamp ${current.found ? 'text-stamp-green' : 'text-stamp-red'}`}
                  style={{ animation: `${STAMP_IN} 0.7s` }}
                >
                  {current.mark}
                </span>
              </div>
            ) : (
              <p className="text-[13.5px] text-ink-2">Pick a question above. Only one of them opens the redacted line.</p>
            )}
          </div>
        </div>
      </div>
    </Figure>
  )
}
