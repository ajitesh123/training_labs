'use client'

import { CountUp } from './count-up'

export type Segment = {
  label: string
  value: number
  // Tailwind background class, e.g. 'bg-sky' or 'bg-butter'.
  colorClass: string
}

type StackedBarProps = {
  segments: Segment[]
  start: boolean
  format: (n: number) => string
  // Shared scale, so two bars drawn side by side compare honestly.
  scaleMax?: number
  // Use 1 inside narrow panels so long labels do not wrap.
  legendCols?: 1 | 2
}

/**
 * One horizontal bar split into segments that grow when `start` turns true
 * and resize smoothly when values change. Legend values count up in step.
 */
export function StackedBar({ segments, start, format, scaleMax, legendCols = 2 }: StackedBarProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const scale = scaleMax ?? total
  return (
    <div>
      <div className="flex h-6 w-full overflow-hidden border-2 border-ink bg-paper">
        {segments.map((s) => (
          <div
            key={s.label}
            className={`h-full border-r-2 border-ink transition-[width] duration-700 ease-out last:border-r-0 motion-reduce:transition-none ${s.colorClass}`}
            style={{ width: start && scale > 0 ? `${(s.value / scale) * 100}%` : '0%' }}
            title={`${s.label}: ${format(s.value)}`}
          />
        ))}
      </div>
      <ul className={`mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 text-xs ${legendCols === 2 ? 'sm:grid-cols-2' : ''}`}>
        {segments.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-2 text-ink-2">
              <span className={`h-3 w-3 shrink-0 border-[1.5px] border-ink ${s.colorClass}`} />
              {s.label}
            </span>
            <CountUp value={s.value} start={start} format={format} className="font-mono font-semibold text-ink" />
          </li>
        ))}
      </ul>
    </div>
  )
}
