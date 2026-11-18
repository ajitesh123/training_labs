import type { FaqItem } from '@/lib/blog-seo'

/** Visible FAQ. Pass the same array the layout feeds to PostJsonLd. */
export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group border-2 border-ink bg-sheet p-5 transition-shadow open:shadow-[5px_5px_0_var(--color-ink)]"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-ink">
            <h3 className="text-base">{f.q}</h3>
            <span className="mt-0.5 font-mono text-lg leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
