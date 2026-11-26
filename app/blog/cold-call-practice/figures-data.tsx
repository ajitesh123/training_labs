'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// what Gong's cold call data says to practice
// ------------------------------------------------------------------------------
type View = 'openers' | 'objections' | 'length'
type Row = { label: string; value: number; top?: boolean }

const VIEWS: Record<View, { rows: Row[]; unit: string; decimals: number; max: number; lesson: string }> = {
  openers: {
    unit: 'meetings booked',
    decimals: 2,
    max: 12,
    lesson: 'Own the cold call and say why you called. The apologetic opener is the worst one Gong measured.',
    rows: [
      { label: '“Heard the name tossed around?”', value: 11.24, top: true },
      { label: 'Permission-based, owns the cold call', value: 11.18, top: true },
      { label: '“How’s your day going?”', value: 7.6 },
      { label: '“Did I catch you at a bad time?”', value: 2.15 },
    ],
  },
  objections: {
    unit: 'share of objections',
    decimals: 0,
    max: 20,
    lesson: 'These five made up 74 percent of all objections. Drill them before anything else.',
    rows: [
      { label: 'Not interested', value: 17, top: true },
      { label: 'Product fit (“not for us”)', value: 17, top: true },
      { label: 'No budget', value: 16 },
      { label: 'Not my responsibility', value: 13 },
      { label: 'Hangs up without a word', value: 11 },
    ],
  },
  length: {
    unit: 'calls that booked a meeting',
    decimals: 0,
    max: 25,
    lesson: 'The median successful call ran 4.8 minutes, so you need to get through at least two objections.',
    rows: [
      { label: 'Under 1 minute', value: 0 },
      { label: '2 minutes', value: 4 },
      { label: '4 minutes', value: 13 },
      { label: '6 minutes', value: 21, top: true },
    ],
  },
}

export function ColdCallDataFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [view, setView] = useState<View>('openers')
  const v = VIEWS[view]
  return (
    <Figure
      title="What 300 million recorded cold calls say is worth practicing"
      caption="Gong’s analysis of calls recorded on its platform, published with the sales training firm 30 Minutes to President’s Club. Vendor data with no stated date range. Opener rates are meeting-booked rates; call length shows four of the points on Gong’s chart."
      source="Gong, How to Master Cold Calls and The best and worst cold call openers (July 2024); objection shares as labeled by 30MPC (April 2026)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<View>
            label="Data view"
            value={view}
            onChange={setView}
            options={[
              { value: 'openers', label: 'Openers' },
              { value: 'objections', label: 'Objections' },
              { value: 'length', label: 'Call length' },
            ]}
          />
        </div>
        <p className="tl-mono mb-3 text-[11px] font-semibold text-ink-2">Percent of {v.unit}</p>
        <ul key={view} className="space-y-3.5">
          {v.rows.map((r, i) => (
            <li key={r.label}>
              <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                <span className={r.top ? 'font-semibold text-ink' : 'text-ink-2'}>{r.label}</span>
                <CountUp value={r.value} start={inView} format={(n) => `${n.toFixed(v.decimals)}%`} className="shrink-0 font-mono font-semibold text-ink" />
              </div>
              <div className="h-4 border-2 border-ink bg-paper">
                <div
                  className={`h-full border-ink transition-[width] duration-1000 ease-out motion-reduce:transition-none ${r.top ? 'bg-butter' : 'bg-sky'} ${r.value > 0 ? 'border-r-2' : ''}`}
                  style={{ width: inView ? `${(r.value / v.max) * 100}%` : '0%', transitionDelay: `${i * 140}ms` }}
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-l-4 border-ink bg-paper px-3 py-2 text-sm text-ink">{v.lesson}</p>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// six drills, each with a weak and a strong reply and a pass line
// ------------------------------------------------------------------------------
type DrillId = 'opener' | 'about' | 'not' | 'email' | 'gate' | 'ask'
type Drill = { label: string; buyer: string; weak: string; strong: string; pass: string }

const DRILLS: Record<DrillId, Drill> = {
  opener: {
    label: 'Opener',
    buyer: 'Hello?',
    weak: 'Hi, how are you today? I’m calling from Ledgerline, we’re an AI-powered finance platform that helps companies…',
    strong: 'Hi Priya, Sam at Ledgerline. This is a cold call, so I’ll be quick: finance teams your size keep telling us month-end slips on invoice chasing.',
    pass: 'Name, company and reason in under 15 seconds, without reading, ten times in a row.',
  },
  about: {
    label: 'What’s this about?',
    buyer: 'What’s this about?',
    weak: 'Well, we help companies optimize their financial operations with a comprehensive suite of tools…',
    strong: 'Late invoices. Teams like yours lose days every close chasing them. Is that a problem for you, or not really?',
    pass: 'One plain sentence about their problem, then a question they can answer yes or no.',
  },
  not: {
    label: 'Not interested',
    buyer: 'Not interested.',
    weak: 'I understand, but if you give me two minutes I think you’ll see why…',
    strong: 'Fair, I called out of nowhere. Quick check before I go: is invoice chasing handled, or is it still eating time at month-end?',
    pass: 'Agree, ask one question, get back to the reason, all within two turns.',
  },
  email: {
    label: 'Send me an email',
    buyer: 'Just send me an email.',
    weak: 'Sure, what’s the best address? I’ll send something over.',
    strong: 'Happy to. So it isn’t generic: who chases late invoices today, you or AP?',
    pass: 'Accept the email, then ask one question that decides what goes in it.',
  },
  gate: {
    label: 'Gatekeeper',
    buyer: 'Can I tell her what this is regarding?',
    weak: 'I’d like to talk to her about our invoicing software and set up a demo.',
    strong: 'It’s about how her team handles late invoices at month-end. Is she the right person for that, or is it someone in AP?',
    pass: 'No pitch. Name the problem and ask who owns it.',
  },
  ask: {
    label: 'The ask',
    buyer: 'Maybe. Send me something and we’ll see.',
    weak: 'Great, I’ll follow up sometime next week.',
    strong: 'I will. Can we look at it together for 20 minutes, Tuesday at 10 or Thursday at 2?',
    pass: 'A named day, a time and a purpose, with two options offered.',
  },
}

const STAMP = 'inline-block border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider'

export function DrillCardsFigure() {
  const [id, setId] = useState<DrillId>('opener')
  const d = DRILLS[id]
  return (
    <Figure
      title="Six cold call drills: the buyer’s line, a weak reply, a strong reply, the pass line"
      caption="Example lines for an invented invoicing product. Rewrite the strong replies in your own words for your buyers; read aloud, a borrowed script sounds borrowed."
      source="Training Labs drill set."
    >
      <div className="mb-5">
        <Segmented<DrillId>
          label="Drill"
          value={id}
          onChange={setId}
          options={(Object.keys(DRILLS) as DrillId[]).map((k) => ({ value: k, label: DRILLS[k].label }))}
        />
      </div>
      <div key={id} className="space-y-3">
        <div className="blog-fade-up border-2 border-ink bg-paper p-3">
          <p className="tl-mono mb-1 text-[10px] text-ink-2">Buyer</p>
          <p className="text-[15px] italic text-ink">“{d.buyer}”</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="blog-fade-up border-2 border-ink bg-sheet p-3" style={{ animationDelay: '150ms' }}>
            <span className={`${STAMP} mb-2 rotate-2 text-stamp-red`}>Weak</span>
            <p className="text-[14px] text-ink-2">“{d.weak}”</p>
          </div>
          <div className="blog-fade-up border-2 border-ink bg-mint p-3 shadow-[5px_5px_0_var(--color-ink)]" style={{ animationDelay: '300ms' }}>
            <span className={`${STAMP} mb-2 -rotate-2 text-stamp-green`}>Strong</span>
            <p className="text-[14px] text-ink">“{d.strong}”</p>
          </div>
        </div>
        <p className="blog-fade-up border-2 border-dashed border-ink bg-sheet px-3 py-2 text-sm text-ink" style={{ animationDelay: '450ms' }}>
          <span className="tl-mono mr-2 text-[10.5px] font-semibold">Pass line</span>
          {d.pass}
        </p>
      </div>
    </Figure>
  )
}
