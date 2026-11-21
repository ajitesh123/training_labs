'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP =
  'inline-block border-2 border-current px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider'

// ------------------------------------------------------------------------------
// weak vs strong coaching notes
// ------------------------------------------------------------------------------
type Moment = 'discovery' | 'pricing' | 'next'

type Note = {
  weak: string
  clip: string
  behavior: string
  pass: string
  rehearse: string
}

const NOTES: Record<Moment, Note> = {
  discovery: {
    weak: 'Ask better discovery questions and be more consultative.',
    clip: '04:10 · Buyer: “Our reps waste time on bad leads.” You moved to the demo.',
    behavior: 'Ask one follow-up about what the problem costs before you show anything.',
    pass: 'The buyer answers with a number: hours, deals or dollars.',
    rehearse: 'An AI buyer opens with a vague pain. Get to a number in two questions.',
  },
  pricing: {
    weak: 'Hold your ground on price. Stop discounting so fast.',
    clip: '18:30 · Buyer: “The other vendor is 20% cheaper.” You offered 15% off.',
    behavior: 'Ask what the buyer is comparing before you answer the price point.',
    pass: 'One clarifying question, and no new number in that turn.',
    rehearse: 'Three price pushbacks in a row. Never lead with a discount.',
  },
  next: {
    weak: 'Close stronger at the end of your calls.',
    clip: '27:50 · You said “I’ll send some info over,” and the call ended.',
    behavior: 'Propose a next step with a day, a time and who joins.',
    pass: 'All three are said before the goodbye.',
    rehearse: 'The buyer says “just send me something.” Book 20 minutes instead.',
  },
}

const FIELDS: { key: keyof Omit<Note, 'weak'>; label: string }[] = [
  { key: 'clip', label: 'The moment' },
  { key: 'behavior', label: 'One behavior' },
  { key: 'pass', label: 'Pass line' },
  { key: 'rehearse', label: 'Practice round' },
]

export function CoachingNoteCompare() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [moment, setMoment] = useState<Moment>('pricing')
  const note = NOTES[moment]
  return (
    <Figure
      title="The same call, two coaching notes: which one changes the next call?"
      caption="Example notes written for this article. The strong note names a timestamp, one behavior, a pass line anyone could check, and a practice round the rep can run alone."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Moment>
            label="Call moment"
            value={moment}
            onChange={setMoment}
            options={[
              { value: 'discovery', label: 'Discovery' },
              { value: 'pricing', label: 'Pricing' },
              { value: 'next', label: 'Next step' },
            ]}
          />
        </div>
        <div key={moment} className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className={`flex flex-col gap-3 border-2 border-ink bg-paper p-4 ${inView ? 'blog-fade-up' : 'opacity-0'}`}>
            <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Weak note</p>
            <p className="text-[15px] leading-snug text-ink">“{note.weak}”</p>
            <span className={`${STAMP} mt-auto -rotate-2 self-start text-stamp-red`}>Nothing to check</span>
          </div>
          <div
            className={`border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)] ${inView ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '150ms' }}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Strong note</p>
              <span className={`${STAMP} rotate-2 text-stamp-green`}>Checkable</span>
            </div>
            <dl className="space-y-2.5">
              {FIELDS.map((f, i) => (
                <div
                  key={f.key}
                  className={`grid gap-1 border-t-2 border-dashed border-ink/20 pt-2 sm:grid-cols-[112px_1fr] sm:gap-3 ${
                    inView ? 'blog-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${300 + i * 160}ms` }}
                >
                  <dt className="tl-mono text-[10px] font-semibold text-ink">{f.label}</dt>
                  <dd className="text-[14px] leading-snug text-ink-2">{note[f.key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// which conversation model for which rep
// ------------------------------------------------------------------------------
type Situation = 'gap' | 'slump' | 'unsure'

const MODELS: Record<Situation, { model: string; origin: string; steps: { step: string; ask: string }[] }> = {
  gap: {
    model: 'GROW',
    origin: 'Sir John Whitmore and peers, late 1980s',
    steps: [
      { step: 'Goal', ask: 'What should the buyer agree to by the end of your next call?' },
      { step: 'Reality', ask: 'In the recording, what did the buyer actually say about budget?' },
      { step: 'Options', ask: 'What are two other ways you could have answered at 07:42?' },
      { step: 'Will', ask: 'Which one will you use on Thursday, and how will we know?' },
    ],
  },
  slump: {
    model: 'OSKAR',
    origin: 'Mark McKergow and Paul Z. Jackson, around 2000',
    steps: [
      { step: 'Outcome', ask: 'What would a good week of calls look like for you?' },
      { step: 'Scaling', ask: 'From 0 to 10, where are you today? Why not lower?' },
      { step: 'Know-how', ask: 'On the call that went well, what did you do differently?' },
      { step: 'Affirm, act', ask: 'You let the buyer finish on Tuesday. What moves you up one point?' },
      { step: 'Review', ask: 'Next week: what got better, and what did you do to make it happen?' },
    ],
  },
  unsure: {
    model: 'CLEAR',
    origin: 'Peter Hawkins, early 1980s',
    steps: [
      { step: 'Contract', ask: 'What do you want to leave these 15 minutes with?' },
      { step: 'Listen', ask: 'Walk me through the call the way you saw it.' },
      { step: 'Explore', ask: 'What does it cost you when deals stall at pricing?' },
      { step: 'Action', ask: 'What will you try on your next two calls?' },
      { step: 'Review', ask: 'What helped today, and what should I do differently next time?' },
    ],
  },
}

export function ModelPicker() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [situation, setSituation] = useState<Situation>('gap')
  const m = MODELS[situation]
  return (
    <Figure
      title="Pick the conversation model by the rep in front of you"
      caption="Questions are examples written for this article, applied to the budget moment from the coaching card above. The model shapes step 2 of the weekly loop; the other steps stay the same."
      source="Model origins: Performance Consultants (GROW); CoachPro Tools, October 2026 (OSKAR); Dummies, Hawkins and Smith (CLEAR). Pages read November 2026."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<Situation>
            label="Rep situation"
            value={situation}
            onChange={setSituation}
            options={[
              { value: 'gap', label: 'Sees the gap' },
              { value: 'slump', label: 'In a slump' },
              { value: 'unsure', label: 'Unsure what to fix' },
            ]}
          />
        </div>
        <div key={situation} className="border-2 border-ink bg-paper p-4">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="font-mono text-[28px] font-semibold leading-none text-ink">{m.model}</p>
            <p className="tl-mono text-[10px] text-ink-2">{m.origin}</p>
          </div>
          <ol className="space-y-2">
            {m.steps.map((s, i) => (
              <li
                key={s.step}
                className={`grid grid-cols-[92px_1fr] items-start gap-3 border-2 border-ink bg-sheet p-2.5 sm:grid-cols-[120px_1fr] ${
                  inView ? 'blog-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 140}ms` }}
              >
                <span className="tl-mono border-r-2 border-ink pr-2 text-[10.5px] font-semibold text-ink">{s.step}</span>
                <span className="text-[14px] leading-snug text-ink-2">“{s.ask}”</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Figure>
  )
}
