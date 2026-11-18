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
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        answer
          ? 'border-[var(--blog-accent-blue)]/30 bg-gradient-to-br from-blue-50/70 to-white'
          : 'border-[var(--blog-border-default)] bg-[var(--blog-background-secondary)]'
      }`}
    >
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-wider ${
          answer ? 'text-[var(--blog-accent-blue)]' : 'text-[var(--blog-text-muted)]'
        }`}
      >
        {label}
      </p>
      <div className="space-y-3 text-[16px] leading-relaxed text-[#222]">{children}</div>
    </div>
  )
}
