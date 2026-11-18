import { appUrl, bookingUrl } from '@/lib/site'

type CtaBlockProps = {
  headline: string
  body: string
}

/** Closing call to action. Headline and body are written per post. */
export function CtaBlock({ headline, body }: CtaBlockProps) {
  return (
    <div className="my-12 border-2 border-ink bg-sky p-7 shadow-[7px_7px_0_var(--color-ink)] sm:p-10">
      <h3 className="mb-3 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
        {headline}
      </h3>
      <p className="mb-7 max-w-xl text-ink">{body}</p>
      <div className="grid gap-3 sm:flex sm:gap-3.5">
        <a href={appUrl} target="_blank" rel="noopener noreferrer" className="tl-btn bg-butter">
          Try a free AI roleplay →
        </a>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="tl-btn">
          Talk to the team
        </a>
      </div>
    </div>
  )
}
