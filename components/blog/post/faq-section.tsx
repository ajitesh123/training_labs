import type { FaqItem } from '@/lib/blog-seo'

/** Visible FAQ. Pass the same array the layout feeds to PostJsonLd. */
export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-xl border border-[var(--blog-border-default)] bg-white p-5 open:shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-black">
            <h3 className="text-base">{f.q}</h3>
            <span className="mt-0.5 text-[var(--blog-accent-blue)] transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--blog-text-secondary)]">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  )
}
