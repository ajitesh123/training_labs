'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, animation: `${STAMP_IN} ${at}s` }) as CSSProperties
const print = (at: number): CSSProperties => ({ animation: `tl-print 0.6s ${at}s steps(12) forwards` })

// ------------------------------------------------------------------------------
// the same review, told vs asked
// ------------------------------------------------------------------------------
type Style = 'tell' | 'ask'
type Turn = { who: 'Manager' | 'Rep'; text: string }

const SCRIPTS: Record<Style, { turns: Turn[]; verdict: string; good: boolean }> = {
  tell: {
    turns: [
      { who: 'Manager', text: 'Okay, 14:32. You panicked on price. Never lead with a discount. Ask what they’re comparing us to, anchor on the ROI slide, then hold the number. And don’t end on “send me something”, book the next step.' },
      { who: 'Rep', text: 'Yeah. Got it.' },
      { who: 'Manager', text: 'Also, the small talk at the start ran long. Watch that.' },
      { who: 'Rep', text: 'Okay.' },
    ],
    verdict: 'Rep agreed, nothing rehearsed',
    good: false,
  },
  ask: {
    turns: [
      { who: 'Manager', text: 'Let’s play 14:32. What did you want to happen when she asked the price?' },
      { who: 'Rep', text: 'Keep her from walking. She said two other vendors, so I went straight to the discount.' },
      { who: 'Manager', text: 'What did she say right after?' },
      { who: 'Rep', text: '“Send me something.” So it didn’t work. I gave her a number with nothing to compare it to.' },
      { who: 'Manager', text: 'What could you ask before you give a number?' },
      { who: 'Rep', text: 'What the other two are quoting, and per what. Then price it against the problem she told me about.' },
      { who: 'Manager', text: 'Try it. I’m Elena.' },
    ],
    verdict: 'Rep named the fix, then tried it',
    good: true,
  },
}

const words = (t: string) => t.split(/\s+/).filter(Boolean).length
function managerShare(turns: Turn[]) {
  const total = turns.reduce((s, t) => s + words(t.text), 0)
  const mgr = turns.filter((t) => t.who === 'Manager').reduce((s, t) => s + words(t.text), 0)
  return total > 0 ? (mgr / total) * 100 : 0
}

export function TellVsAskFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [style, setStyle] = useState<Style>('tell')
  const s = SCRIPTS[style]
  const share = managerShare(s.turns)
  const done = s.turns.length * 0.5 + 0.4

  return (
    <Figure
      title="The same moment reviewed two ways: telling vs asking"
      caption="Example conversations about the 14:32 moment. The share is computed from the words in each script, so it changes as you switch. Notice who names the fix."
      source="Ask-first and the WAIT check (Why Am I Talking?) as described by MySalesCoach, May 2026."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Style>
            label="Review style"
            value={style}
            onChange={setStyle}
            options={[
              { value: 'tell', label: 'Tell' },
              { value: 'ask', label: 'Ask' },
            ]}
          />
          <p className="text-sm text-ink-2">
            Manager’s share of words:{' '}
            <CountUp value={inView ? share : 0} start={inView} format={(n) => `${Math.round(n)}%`} className="font-mono text-lg font-bold text-ink" />
          </p>
        </div>
        {inView && (
          <div key={style}>
            <ol className="space-y-2 border-2 border-ink bg-paper p-3">
              {s.turns.map((t, i) => (
                <li key={i} className="tl-line grid grid-cols-[4.4rem_1fr] gap-2 text-[13.5px] leading-snug" style={print(i * 0.5)}>
                  <span className="tl-mono pt-0.5 text-[10px] font-semibold text-ink">{t.who}</span>
                  <span className={t.who === 'Manager' ? 'text-ink' : 'italic text-ink-2'}>{t.text}</span>
                </li>
              ))}
            </ol>
            <div className="mt-3 flex justify-end">
              <span className={`tl-stamp ${s.good ? 'text-stamp-green' : 'text-stamp-red'}`} style={stamp(done, s.good ? '-3deg' : '3deg')}>
                {s.verdict}
              </span>
            </div>
          </div>
        )}
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// which technique for which problem
// ------------------------------------------------------------------------------
type Problem = 'price' | 'pitch' | 'next' | 'over'
type Play = { find: string; ask: string; model: string; drill: string; pass: string }

const PLAYS: Record<Problem, Play> = {
  price: {
    find: 'The first time the buyer says a number, “budget” or “cost”.',
    ask: '“What did you want to happen when she asked the price?”',
    model: '“Fair question. Before I give you a number, what are the others quoting, and per what?”',
    drill: 'Five redos of the price question, each against a different comparison.',
    pass: 'Asks one question before any number, three times in a row.',
  },
  pitch: {
    find: 'The first time the rep describes the product. Check the clock.',
    ask: '“What did you know about her problem at that point?”',
    model: '“Before I show you anything, walk me through what happens today when a shipment is late.”',
    drill: 'The first five minutes of discovery, with no product words allowed.',
    pass: 'Two follow-up questions on the problem before the first product mention.',
  },
  next: {
    find: 'The last two minutes of the call.',
    ask: '“What did you want her to agree to before you hung up?”',
    model: '“Can we put 30 minutes on Thursday with your finance lead to check the numbers?”',
    drill: 'The close of the call against three buyers: busy, unsure, ready.',
    pass: 'Ends with a named person, a day and a time, not “I’ll send something”.',
  },
  over: {
    find: 'A buyer sentence cut off mid-thought. Search the transcript for overlaps.',
    ask: '“What was she about to say at 08:10?”',
    model: 'Silence for two seconds, then: “Tell me more about that.”',
    drill: 'Ten buyer answers; the rep waits two seconds before every reply.',
    pass: 'No interruptions in a five-minute stretch of the next call.',
  },
}

export function ProblemPickerFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [p, setP] = useState<Problem>('price')
  const play = PLAYS[p]
  const rows: [string, string][] = [
    ['Find the moment', play.find],
    ['Ask first', play.ask],
    ['Model once', play.model],
    ['Redo drill', play.drill],
    ['Pass line', play.pass],
  ]

  return (
    <Figure
      title="Pick the problem, get the review: where to look, what to ask, what to drill"
      caption="Example plays written for a B2B discovery call. Swap in your own buyers, numbers and call stages."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<Problem>
            label="The problem you heard"
            value={p}
            onChange={setP}
            options={[
              { value: 'price', label: 'Caves on price' },
              { value: 'pitch', label: 'Pitches too early' },
              { value: 'next', label: 'No next step' },
              { value: 'over', label: 'Talks over the buyer' },
            ]}
          />
        </div>
        <div key={p} className="divide-y-2 divide-ink border-2 border-ink bg-sheet">
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className={`grid gap-1 px-3 py-2.5 sm:grid-cols-[8.5rem_1fr] ${i === 4 ? 'bg-mint' : ''} ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="tl-mono text-[10.5px] font-semibold text-ink-2">{k}</span>
              <span className="text-sm text-ink">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  )
}
