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
    <div ref={ref} className="space-y-3.5">
      {items.map((item, i) => {
        const pct = Math.max((item.value / top) * 100, 1.5)
        const delay = DELAY_CLASSES[Math.min(i, DELAY_CLASSES.length - 1)]
        return (
          <div key={item.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className={item.highlight ? 'font-semibold text-ink' : 'text-ink-2'}>
                {item.label}
                {item.note && <span className="tl-mono ml-2 text-[10.5px] text-ink-2">{item.note}</span>}
              </span>
              <CountUp
                value={item.value}
                start={inView}
                format={(n) => formatNumber(n, format)}
                className="shrink-0 font-mono font-semibold text-ink"
              />
            </div>
            <div className="h-4 border-2 border-ink bg-paper">
              <div
                className={`h-full border-r-2 border-ink transition-[width] duration-1000 ease-out motion-reduce:transition-none ${delay} ${
                  item.highlight ? 'bg-butter' : 'bg-sky'
                }`}
                style={{ width: inView ? `${pct}%` : '0%' }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
