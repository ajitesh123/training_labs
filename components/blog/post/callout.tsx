import type { ReactNode } from 'react'

type CalloutProps = {
  label: string
  children: ReactNode
  tone?: 'answer' | 'note'
}

/**
 * Boxed text near the top of a post. `answer` holds the quotable two or three
 * sentence answer search engines lift; `note` is for caveats and disclosures.
 */
export function Callout({ label, children, tone = 'answer' }: CalloutProps) {
  const answer = tone === 'answer'
  return (
    <div
      className={`my-8 border-2 border-ink p-5 sm:p-6 ${
        answer ? 'bg-sheet shadow-[6px_6px_0_var(--color-ink)]' : 'border-dashed bg-paper'
      }`}
    >
      <p className="tl-mono mb-3 inline-block text-[11.5px] font-semibold text-ink">
        <span className={answer ? 'bg-butter px-1.5 py-0.5' : ''}>{label}</span>
      </p>
      <div className="space-y-3 text-[16px] leading-relaxed text-ink">{children}</div>
    </div>
  )
}
