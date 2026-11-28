'use client'

import { useInView } from '@/components/blog/figures'
import { stampStyle } from './fx'

// ------------------------------------------------------------------------------
// hero: what a chat gives a sales team, and the layers a team has to add
// ------------------------------------------------------------------------------
type Kind = 'built' | 'supply' | 'missing'

const STAMPS: Record<Kind, { label: string; color: string; rot: string }> = {
  built: { label: 'Built in', color: 'text-stamp-green', rot: '-4deg' },
  supply: { label: 'You supply it', color: 'text-ink', rot: '3deg' },
  missing: { label: 'Not in a chat', color: 'text-stamp-red', rot: '-3deg' },
}

// Bottom of the stack first: the conversation is the foundation.
const LAYERS: { title: string; detail: string; kind: Kind }[] = [
  { title: 'A buyer who talks back', detail: 'Any persona you describe', kind: 'built' },
  { title: 'Real-time voice', detail: 'Live voice, 3 hours a day on Plus', kind: 'built' },
  { title: 'Your product, prices and objections', detail: 'Files and instructions in a Project', kind: 'supply' },
  { title: 'The same buyer for every rep', detail: 'Each rep runs their own copy', kind: 'supply' },
  { title: 'A score against your rubric', detail: 'Only when asked, inside that chat', kind: 'supply' },
  { title: 'History per rep and a manager view', detail: 'Nothing rolls up across reps', kind: 'missing' },
]

const CHAT = [
  { who: 'Rep', text: 'Hi Dana, I’m calling from RouteWise. We help teams plan routes faster.' },
  { who: 'AI buyer', text: 'We plan routes fine. Our last tool sat unused for a year. Why is this different?' },
  { who: 'Rep', text: 'What made the last one go unused?' },
]

const STEP = 0.32

export function RoleplayStackHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const fills: Record<Kind, string> = { built: 'bg-mint', supply: 'bg-butter', missing: 'bg-peach' }

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Sales role play on ChatGPT: what a team gets, what it adds ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">November 2026</p>
      </div>
      <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col border-2 border-ink bg-paper">
          <div className="tl-mono flex items-center justify-between border-b-2 border-ink bg-sheet px-3 py-2 text-[10.5px] font-semibold text-ink">
            <span>Chat · Project: Renewal practice</span>
            <span className="text-ink-2">Voice</span>
          </div>
          <div className="flex flex-1 flex-col gap-2.5 p-3">
            {CHAT.map((m, i) => (
              <div
                key={m.text}
                className={`max-w-[92%] border-2 border-ink px-3 py-2 ${m.who === 'Rep' ? 'self-end bg-sky-soft' : 'self-start bg-sheet'} ${
                  inView ? 'blog-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + i * 0.6}s` }}
              >
                <p className="tl-mono mb-0.5 text-[9.5px] text-ink-2">{m.who}</p>
                <p className="text-[13px] leading-snug text-ink">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="tl-mono border-t-2 border-ink px-3 py-2 text-[10px] text-ink-2">The conversation itself works well</p>
        </div>
        <div className="flex flex-col-reverse gap-2">
          {LAYERS.map((l, i) => {
            const s = STAMPS[l.kind]
            const at = 0.3 + i * STEP
            return (
              <div
                key={l.title}
                className={`flex items-center justify-between gap-3 border-2 border-ink px-3 py-2 ${fills[l.kind]} ${
                  inView ? 'blog-fade-up' : 'opacity-0'
                } ${l.kind === 'missing' ? 'shadow-[4px_4px_0_var(--color-ink)]' : ''}`}
                style={{ animationDelay: `${at}s` }}
              >
                <div className="min-w-0">
                  <p className="text-[13.5px] font-semibold leading-snug text-ink">{l.title}</p>
                  <p className="text-[11.5px] leading-snug text-ink-2">{l.detail}</p>
                </div>
                <span
                  className={`tl-stamp shrink-0 px-1.5 py-1 text-[9.5px] ${s.color}`}
                  style={stampStyle(inView, at + LAYERS.length * STEP + 0.2, s.rot)}
                >
                  {s.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="tl-mono mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-ink sm:text-[11px]">
        <p className="border-2 border-ink bg-mint py-1">Built in: 2</p>
        <p className="border-2 border-ink bg-butter py-1">You supply: 3</p>
        <p className="border-2 border-ink bg-peach py-1">Not in a chat: 1</p>
      </div>
    </div>
  )
}
