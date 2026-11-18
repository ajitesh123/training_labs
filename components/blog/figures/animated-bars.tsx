'use client'

import { CountUp, formatNumber, type NumberFormat } from './count-up'
import { useInView } from './use-in-view'

export type BarItem = {
  label: string
  value: number
  note?: string
  highlight?: boolean
}

type AnimatedBarsProps = {
  items: BarItem[]
  format: NumberFormat
  max?: number
}

const DELAY_CLASSES = [
  'delay-0',
  'delay-100',
  'delay-200',
  'delay-300',
  'delay-500',
  'delay-700',
  'delay-1000',
] as const

/**
 * Horizontal bars that grow on scroll, one after another, with values
 * counting up alongside. Use for benchmarks and price comparisons.
 */
export function AnimatedBars({ items, format, max }: AnimatedBarsProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const top = max ?? Math.max(...items.map((i) => i.value))

  return (
    <div ref={ref} className="space-y-3">
      {items.map((item, i) => {
        const pct = Math.max((item.value / top) * 100, 1.5)
        const delay = DELAY_CLASSES[Math.min(i, DELAY_CLASSES.length - 1)]
        return (
          <div key={item.label}>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
              <span
                className={
                  item.highlight
                    ? 'font-semibold text-black'
                    : 'text-[var(--blog-text-secondary)]'
                }
              >
                {item.label}
                {item.note && (
                  <span className="ml-2 text-xs text-[var(--blog-text-muted)]">
                    {item.note}
                  </span>
                )}
              </span>
              <CountUp
                value={item.value}
                start={inView}
                format={(n) => formatNumber(n, format)}
                className={`shrink-0 font-semibold ${
                  item.highlight ? 'text-[var(--blog-accent-blue)]' : 'text-black'
                }`}
              />
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white ring-1 ring-[var(--blog-border-default)]">
              <div
                className={`relative h-full overflow-hidden rounded-full transition-[width] duration-1000 ease-out motion-reduce:transition-none ${delay} ${
                  item.highlight
                    ? 'bg-gradient-to-r from-[var(--blog-accent-blue)] to-[var(--blog-accent-cyan)]'
                    : 'bg-gray-300'
                }`}
                style={{ width: inView ? `${pct}%` : '0%' }}
              >
                {item.highlight && inView && (
                  <span className="blog-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
