import { CallSheet } from '@/components/call-sheet'
import { wrap } from '@/components/section-head'
import Link from 'next/link'
import { bookPath } from '@/lib/site'

export default function Hero() {
  return (
    <section className="tl-dots border-b-2 border-ink">
      <div className={`${wrap} grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.02fr_1fr] lg:gap-14 lg:py-20`}>
        <div>
          <span className="tl-mono inline-block border-2 border-ink bg-sheet px-2.5 py-1 text-[11px] sm:text-xs">
            Sales training that builds real pipeline skills
          </span>
          <h1 className="mb-5 mt-5 font-mono text-[38px] font-medium uppercase leading-[1.04] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[58px]">
            Master Sales Training <span className="tl-hl">&amp; Coaching</span>
          </h1>
          <p className="mb-7 max-w-[30em] text-base text-ink-2 sm:text-lg">
            Practical programs for reps, managers, and enablement leaders: discovery, objection
            handling, demos, negotiation, and coaching systems your team will actually use.
          </p>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-3.5">
            <Link href={bookPath} className="tl-btn tl-btn-lg bg-sky">
              Start training today →
            </Link>
            <a href="#courses" className="tl-btn tl-btn-lg">
              Explore courses
            </a>
          </div>
        </div>
        <CallSheet />
      </div>
    </section>
  )
}
