'use client'

import { type CSSProperties, useEffect, useState } from 'react'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

/** Style for a `tl-stamp` that lands `at` seconds after `on` turns true. */
export const stampStyle = (on: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(on ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

/** Turns true `ms` after `on`, or at once for reduced-motion users. */
export function useDelayed(on: boolean, ms: number) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!on) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true)
      return
    }
    const t = window.setTimeout(() => setReady(true), ms)
    return () => window.clearTimeout(t)
  }, [on, ms])
  return ready
}

export const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
export const usd2 = (n: number) => `$${n.toFixed(2)}`
