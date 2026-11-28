'use client'

import { CountUp, useInView } from '@/components/blog/figures'
import { stampStyle, usd, useDelayed } from './fx'

// ------------------------------------------------------------------------------
// hero: a fact finder fills in, then the coverage gap sizes itself
// ------------------------------------------------------------------------------
// Example household. A simple income-replacement estimate, not advice.
const INCOME = 65000
const YEARS = 10
const MORTGAGE = 280000
const WORK_COVER = 65000
const NEED = INCOME * YEARS + MORTGAGE
const GAP = NEED - WORK_COVER

const LINES = [
  { q: 'Who depends on your income?', a: 'Spouse and two children, ages 4 and 7' },
  { q: 'Income to replace', a: `${usd(INCOME)} a year` },
  { q: 'Years to cover', a: `${YEARS}, until the youngest is in high school` },
  { q: 'Mortgage balance', a: usd(MORTGAGE) },
  { q: 'Coverage you have now', a: `${usd(WORK_COVER)} through work`, mark: true },
] as const

const LINE_GAP = 0.35
const BARS_AT = LINES.length * LINE_GAP + 0.5

export function FactFinderHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  // On phones the gap box sits below the fact finder, so it waits until it is seen.
  const gap = useInView<HTMLDivElement>(0.5)
  const sized = useDelayed(inView && gap.inView, BARS_AT * 1000)
  const pct = (n: number) => `${(n / NEED) * 100}%`

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-4 pb-6 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-8"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ A needs review comes before the quote ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Example household</p>
      </div>
      <div className="grid gap-5 md:grid-cols-[1.1fr_1fr]">
        <div className="border-2 border-ink bg-paper p-4">
          <p className="tl-mono mb-3 border-b-2 border-ink pb-2 text-[11px] font-semibold text-ink">Fact finder</p>
          <ul className="space-y-2.5">
            {LINES.map((l, i) => (
              <li
                key={l.q}
                className={`flex gap-2.5 ${inView ? 'blog-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + i * LINE_GAP}s` }}
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border-2 border-ink bg-mint text-[10px] font-bold leading-none text-ink">
                  ✓
                </span>
                <span className="min-w-0">
                  <span className="tl-mono block text-[10px] text-ink-2">{l.q}</span>
                  <span
                    className={`text-[14px] font-medium leading-snug text-ink ${'mark' in l ? 'tl-mark' : ''}`}
                    style={'mark' in l && inView ? { animation: `tl-hl 0.55s ${BARS_AT - 0.3}s ease-out forwards` } : undefined}
                  >
                    {l.a}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div ref={gap.ref} className="flex flex-col border-2 border-ink bg-paper p-4">
          <p className="tl-mono mb-4 border-b-2 border-ink pb-2 text-[11px] font-semibold text-ink">Coverage gap</p>
          <div className="space-y-4">
            <div>
              <p className="tl-mono mb-1.5 text-[10px] text-ink-2">Needed: income plus mortgage</p>
              <div className="flex h-6 border-2 border-ink bg-sheet">
                <div
                  className="h-full border-r-2 border-ink bg-sky transition-[width] duration-700 ease-out motion-reduce:transition-none"
                  style={{ width: sized ? pct(INCOME * YEARS) : '0%' }}
                />
                <div
                  className="h-full bg-butter transition-[width] delay-300 duration-700 ease-out motion-reduce:transition-none"
                  style={{ width: sized ? pct(MORTGAGE) : '0%' }}
                />
              </div>
            </div>
            <div>
              <p className="tl-mono mb-1.5 text-[10px] text-ink-2">Already covered</p>
              <div className="flex h-6 border-2 border-ink bg-sheet">
                <div
                  className="h-full border-r-2 border-ink bg-mint transition-[width] delay-500 duration-700 ease-out motion-reduce:transition-none"
                  style={{ width: sized ? pct(WORK_COVER) : '0%' }}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="tl-mono text-[10px] text-ink-2">Gap to cover</p>
              <CountUp value={GAP} start={sized} format={usd} durationMs={1200} className="font-mono text-3xl font-bold text-ink" />
            </div>
            <span className="tl-stamp text-stamp-green" style={stampStyle(sized, 1.3, '-5deg')}>
              Sized, then quoted
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <div className="flex items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2">
          <p className="text-[13px] text-ink">
            <span className="tl-mono mr-1.5 text-[10px] text-ink-2">Price first:</span>“What does $500,000 cost?”
          </p>
          <span className="tl-stamp px-1.5 py-1 text-[10px] text-stamp-red" style={stampStyle(sized, 1.7, '4deg')}>
            A guess
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-2 border-ink bg-paper px-3 py-2">
          <p className="text-[13px] text-ink">
            <span className="tl-mono mr-1.5 text-[10px] text-ink-2">Needs first:</span>a number the client built
          </p>
          <span className="tl-stamp px-1.5 py-1 text-[10px] text-stamp-green" style={stampStyle(sized, 2, '-4deg')}>
            Their number
          </span>
        </div>
      </div>
    </div>
  )
}
