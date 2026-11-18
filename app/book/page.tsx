import type { Metadata } from 'next'
import { BookingEmbed } from '@/components/booking-embed'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { wrap } from '@/components/section-head'
import { bookingUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book Time With the Founder | Training Labs',
  description:
    'Book 30 minutes with the founder of Training Labs to map your team’s sales training: what to practice, which program fits, and a plan you can start this week.',
  alternates: { canonical: '/book' },
}

const STEPS = [
  { title: 'Your team and goals', text: 'Who sells, what they sell, and where deals stall today.' },
  { title: 'The right program', text: 'Which course or practice plan fits, and what it costs.' },
  { title: 'A plan for this week', text: 'Concrete next steps, whether or not you work with us.' },
]

export default function BookPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="tl-dots border-b-2 border-ink">
        <div className={`${wrap} grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:py-20`}>
          <div>
            <p className="tl-mono mb-4 text-xs font-semibold text-ink-2">[ Book time with the founder ]</p>
            <h1 className="mb-5 text-balance font-mono text-[34px] font-medium uppercase leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              30 minutes with the founder
            </h1>
            <p className="mb-8 max-w-[30em] text-base text-ink-2 sm:text-lg">
              Tell us what your team needs to practice. We map it to a program, show how the
              practice works, and agree on next steps. No slides, no hard sell.
            </p>
            <ol className="mb-8 grid gap-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-4 border-2 border-ink bg-sheet p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-ink bg-butter font-mono text-sm font-bold">
                    {i + 1}
                  </span>
                  <span>
                    <b className="tl-mono block text-[13px] font-semibold">{step.title}</b>
                    <span className="text-[15px] text-ink-2">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="flex items-center gap-4 border-2 border-dashed border-ink p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center border-2 border-ink bg-sky font-mono font-bold shadow-[3px_3px_0_var(--color-ink)]">
                AA
              </span>
              <span className="text-sm">
                <b className="block text-base">Ajitesh Abhishek, founder</b>
                <span className="text-ink-2">Former product manager at Google Cloud · Kellogg MBA · IIT Delhi</span>
              </span>
            </div>
          </div>

          <div className="border-2 border-ink bg-sheet shadow-[8px_8px_0_var(--color-ink)]">
            <div className="tl-mono flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-butter px-4 py-2.5 text-[11.5px] font-semibold">
              <span>Pick a time · 30 minutes</span>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Open in a new tab ↗
              </a>
            </div>
            <div className="min-h-[620px]">
              <BookingEmbed />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
