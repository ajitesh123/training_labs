import { SectionHead, wrap } from '@/components/section-head'

const testimonials = [
  {
    quote:
      'Training Labs reshaped how we ramp AEs. Discovery and objection courses cut time-to-first-deal, and managers finally have a shared coaching language.',
    author: 'Sarah Chen',
    role: 'VP Sales Enablement, Northwind',
    avatar: 'SC',
  },
  {
    quote:
      'The demo excellence track is the most practical training our SEs have taken. Clear frameworks, tough practice scenarios, and feedback that stuck.',
    author: 'James Rodriguez',
    role: 'Director of Sales Engineering, Cascade',
    avatar: 'JR',
  },
  {
    quote:
      'As a new manager, the coaching course gave me a cadence I could run the next week: call reviews, pipeline inspection, and skill drills without fluff.',
    author: 'Maria Patel',
    role: 'Sales Manager, Brightline',
    avatar: 'MP',
  },
  {
    quote:
      'Outbound Prospecting Systems cleaned up our cadences. SDRs book more meetings with less spray-and-pray, and leadership can see the skill lift.',
    author: 'David Kim',
    role: 'Head of Growth, Meridian',
    avatar: 'DK',
  },
]

function RatingStamp() {
  return (
    <div className="lg:justify-self-end">
      <div className="inline-block -rotate-[4deg] border-[2.5px] border-ink bg-butter px-3.5 py-2.5 text-center font-mono text-[15px] font-bold uppercase leading-tight tracking-wider text-ink outline outline-[2.5px] outline-offset-[3px] outline-ink">
        ★★★★★ 4.9/5
        <span className="mt-1 block text-[10.5px]">Average rating</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <section id="testimonials" className="scroll-mt-20 border-b-2 border-ink bg-sky py-14 sm:py-24">
      <div className={wrap}>
        <SectionHead kicker="Testimonials" title="Teams That Train With Us" aside={<RatingStamp />} />
        <figure className="mb-6 grid gap-5 border-2 border-ink bg-sheet px-5 py-6 shadow-[5px_5px_0_var(--color-ink)] sm:px-10 sm:py-9 sm:shadow-[8px_8px_0_var(--color-ink)] lg:grid-cols-[1fr_230px] lg:gap-9">
          <blockquote className="relative m-0 pl-8 text-lg leading-relaxed text-ink sm:pl-10 sm:text-[23px]">
            <span aria-hidden className="absolute -top-2.5 left-0 font-mono text-[54px] font-bold leading-none text-flame">
              “
            </span>
            {featured.quote}
          </blockquote>
          <figcaption className="self-center border-t-2 border-ink pt-4 text-sm lg:border-l-2 lg:border-t-0 lg:pl-6 lg:pt-0">
            <span className="grid h-[46px] w-[46px] place-items-center border-2 border-ink bg-butter font-mono text-sm font-bold">
              {featured.avatar}
            </span>
            <b className="mt-2.5 block text-base text-ink">{featured.author}</b>
            <span className="text-ink-2">{featured.role}</span>
          </figcaption>
        </figure>
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {rest.map((t) => (
            <figure key={t.author} className="m-0 flex flex-col justify-between gap-5 border-2 border-ink bg-sheet p-5">
              <blockquote className="m-0 text-[15px] text-ink">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-2.5 text-[13px]">
                <span className="grid h-[38px] w-[38px] shrink-0 place-items-center border-2 border-ink font-mono text-xs font-bold">
                  {t.avatar}
                </span>
                <span>
                  <b className="block text-sm text-ink">{t.author}</b>
                  <span className="text-ink-2">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
