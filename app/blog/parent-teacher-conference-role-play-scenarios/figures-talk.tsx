'use client'

import { useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// one parent line, three replies
// ------------------------------------------------------------------------------
type Reply = 'defend' | 'placate' | 'strong'

const REPLIES: Record<Reply, { text: string; stamp: string; good: boolean; hears: string }> = {
  defend: {
    text: 'With respect, my lessons are not the problem. Other students manage to stay on task.',
    stamp: 'Defends',
    good: false,
    hears: 'You think my son is the problem, and you will not change anything.',
  },
  placate: {
    text: 'You are probably right. I will find more advanced work for him from now on.',
    stamp: 'Overpromises',
    good: false,
    hears: 'The behavior is your fault. Nothing happens if the advanced work never arrives.',
  },
  strong: {
    text: 'I see how quick he is, especially in discussions. I also need him in the room to learn. Can we try harder work on Tuesdays and Thursdays, and a signal he can use when he finishes early? I will update you in two weeks.',
    stamp: 'Validates + plans',
    good: true,
    hears: 'You see my son. There is a plan, a date, and something he can do.',
  },
}

export function ReplyRewriter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [reply, setReply] = useState<Reply>('defend')
  const r = REPLIES[reply]

  return (
    <Figure
      title="Same parent line, three replies: what the parent hears"
      caption="From scenario 4. The replies are written examples for practice, not quotes from a real conference."
    >
      <div ref={ref}>
        <div className="mb-4 border-2 border-ink bg-peach p-3">
          <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Parent</p>
          <p className="text-ink">“He is smart. He only acts out because he is bored.”</p>
        </div>
        <div className="mb-4">
          <Segmented<Reply>
            label="Teacher reply"
            value={reply}
            onChange={setReply}
            options={[
              { value: 'defend', label: 'Defend' },
              { value: 'placate', label: 'Placate' },
              { value: 'strong', label: 'Validate + plan' },
            ]}
          />
        </div>
        <div key={reply} className="relative border-2 border-ink bg-sky-soft p-3 pr-4 sm:pr-40">
          <p className="tl-mono text-[10.5px] font-semibold text-ink-2">You</p>
          <p className={`text-ink ${inView ? 'tl-line' : 'opacity-0'}`} style={inView ? { animation: 'tl-print 0.9s steps(18) forwards' } : undefined}>
            “{r.text}”
          </p>
          <span
            className={`tl-stamp mt-3 sm:absolute sm:right-3 sm:top-3 sm:mt-0 ${r.good ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={inView ? { animation: STAMP_IN, animationDelay: '0.9s' } : undefined}
          >
            {r.stamp}
          </span>
        </div>
        <p key={`${reply}-hears`} className="blog-fade-up mt-4 border-l-4 border-ink pl-3 text-sm text-ink-2" style={{ animationDelay: '1.1s' }}>
          <span className="tl-mono font-semibold text-ink">What the parent hears: </span>
          {r.hears}
        </p>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// a 15-minute conference, weak vs strong
// ------------------------------------------------------------------------------
type Version = 'weak' | 'strong'
type Speaker = 'teacher' | 'parent' | 'both'
type Part = { label: string; min: number; who: Speaker }

const AGENDA: Record<Version, Part[]> = {
  weak: [
    { label: 'Small talk', min: 2, who: 'both' },
    { label: 'Teacher lists problems', min: 7, who: 'teacher' },
    { label: 'Parent defends', min: 4, who: 'parent' },
    { label: '“We’ll keep an eye on it”', min: 2, who: 'teacher' },
  ],
  strong: [
    { label: 'Welcome', min: 1, who: 'both' },
    { label: 'A real strength', min: 2, who: 'teacher' },
    { label: 'Concern + evidence', min: 3, who: 'teacher' },
    { label: 'Parent’s view', min: 4, who: 'parent' },
    { label: 'Plan together', min: 4, who: 'both' },
    { label: 'Next step + date', min: 1, who: 'teacher' },
  ],
}

const FILL: Record<Speaker, string> = { teacher: 'bg-sky', parent: 'bg-butter', both: 'bg-mint' }
const TOTAL = 15

// Shared time counts half to the parent.
const parentShare = (parts: Part[]) =>
  (parts.reduce((s, p) => s + (p.who === 'parent' ? p.min : p.who === 'both' ? p.min / 2 : 0), 0) / TOTAL) * 100

export function ConferenceTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [version, setVersion] = useState<Version>('weak')
  const parts = AGENDA[version]
  const strong = version === 'strong'

  return (
    <Figure
      title="Where 15 minutes go: a weak conference vs a strong one"
      caption="Example agendas, not measured data. Shared time counts half to the parent. The ASCD study below suggests counting your own questions and how often you build on the parent’s ideas; parent talk time is a quick proxy."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Version>
            label="Conference version"
            value={version}
            onChange={setVersion}
            options={[
              { value: 'weak', label: 'Weak' },
              { value: 'strong', label: 'Strong' },
            ]}
          />
          <p className="text-sm text-ink-2">
            Parent talks{' '}
            <CountUp value={parentShare(parts)} start={inView} format={(n) => `${Math.round(n)}%`} className="font-mono text-lg font-bold text-ink" />
          </p>
        </div>
        <div key={version} className="flex h-16 border-2 border-ink bg-paper">
          {parts.map((p, i) => (
            <div
              key={p.label}
              className={`relative h-full overflow-hidden border-r-2 border-ink last:border-r-0 ${FILL[p.who]} ${inView ? 'tl-line' : 'opacity-0'}`}
              style={{ width: `${(p.min / TOTAL) * 100}%`, animation: inView ? `tl-print 0.4s ${i * 0.25}s ease-out forwards` : undefined }}
            >
              <span className="absolute bottom-1 left-1 font-mono text-[10px] font-semibold text-ink">{p.min}m</span>
            </div>
          ))}
        </div>
        <ol key={`${version}-labels`} className="mt-3 grid grid-cols-1 gap-1.5 text-[13px] sm:grid-cols-2">
          {parts.map((p, i) => (
            <li key={p.label} className="blog-fade-up flex items-center gap-2 text-ink-2" style={{ animationDelay: `${i * 80}ms` }}>
              <span className={`h-3 w-3 shrink-0 border-[1.5px] border-ink ${FILL[p.who]}`} />
              <span className="font-mono text-[11px] text-ink">{p.min}m</span> {p.label}
            </li>
          ))}
        </ol>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-2">
          {(['teacher', 'parent', 'both'] as Speaker[]).map((w) => (
            <span key={w} className="tl-mono flex items-center gap-1.5 text-[10px]">
              <span className={`h-3 w-3 border-[1.5px] border-ink ${FILL[w]}`} /> {w === 'both' ? 'Shared' : w}
            </span>
          ))}
          <span
            key={`${version}-stamp`}
            className={`tl-stamp ml-auto ${strong ? 'text-stamp-green' : 'text-stamp-red'}`}
            style={inView ? { animation: STAMP_IN, animationDelay: '1.6s' } : undefined}
          >
            {strong ? 'Ends with a date' : 'No next step'}
          </span>
        </div>
      </div>
    </Figure>
  )
}
