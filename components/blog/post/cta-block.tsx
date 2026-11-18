type CtaBlockProps = {
  headline: string
  body: string
}

/** Dark call to action. Headline and body are written per post. */
export function CtaBlock({ headline, body }: CtaBlockProps) {
  return (
    <div className="relative my-12 overflow-hidden rounded-2xl bg-[var(--blog-ink)] p-8 sm:p-10">
      <div className="blog-float absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--blog-accent-blue)]/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[var(--blog-accent-cyan)]/20 blur-3xl" />
      <div className="relative">
        <h3 className="mb-3 text-2xl font-bold text-white">{headline}</h3>
        <p className="mb-6 max-w-xl text-white/70">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://app.toughtongueai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Try a free AI roleplay
          </a>
          <a
            href="https://cal.com/ajitesh/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to the team
          </a>
        </div>
      </div>
    </div>
  )
}
