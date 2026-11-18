'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  value: number
  start: boolean
  format?: (n: number) => string
  durationMs?: number
  className?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

// Named formats are serializable, so server-rendered pages can pass them to
// client figures (a function prop cannot cross that boundary).
export type NumberFormat = 'int' | 'usd' | 'usd2' | 'pct'

export function formatNumber(n: number, fmt: NumberFormat): string {
  switch (fmt) {
    case 'usd':
      return `$${Math.round(n).toLocaleString('en-US')}`
    case 'usd2':
      return `$${n.toFixed(2)}`
    case 'pct':
      return `${Math.round(n)}%`
    case 'int':
      return Math.round(n).toLocaleString('en-US')
  }
}

/**
 * Counts from the last shown value to `value` once `start` is true. Re-runs
 * when `value` changes, so sliders animate between results instead of jumping.
 */
export function CountUp({
  value,
  start,
  format = (n) => Math.round(n).toLocaleString('en-US'),
  durationMs = 900,
  className,
}: CountUpProps) {
  const [shown, setShown] = useState(0)
  const from = useRef(0)

  useEffect(() => {
    if (!start) return
    const begin = from.current
    const t0 = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min((now - t0) / durationMs, 1)
      const next = begin + (value - begin) * easeOutCubic(t)
      setShown(next)
      from.current = next
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, start, durationMs])

  return <span className={`tabular-nums ${className ?? ''}`}>{format(shown)}</span>
}
