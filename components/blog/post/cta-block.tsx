import Link from 'next/link'
import { appUrl, bookPath } from '@/lib/site'

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
        <Link href={bookPath} className="tl-btn bg-butter">
          Book time with the founder →
        </Link>
        <a href={appUrl} target="_blank" rel="noopener noreferrer" className="tl-btn">
          Try Tough Tongue AI free
        </a>
      </div>
    </div>
  )
}
