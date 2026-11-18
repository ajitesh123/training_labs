'use client'

import { useState } from 'react'
import { CountUp, Figure, SliderField, useInView } from '@/components/blog/figures'
import { WORKING_DAYS } from './content'

// ------------------------------------------------------------------------------
// break-even: a flat seat vs a per-minute rate
// ------------------------------------------------------------------------------
const X_MAX = 1000
const usd0 = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const usd2 = (n: number) => `$${n.toFixed(2)}`
const int = (n: number) => Math.round(n).toLocaleString('en-US')

type Inputs = { seat: number; rate: number; active: number }

const DEFAULTS: Inputs = { seat: 50, rate: 0.1, active: 100 }

function breakEven({ seat, rate, active }: Inputs) {
  const seatPerActive = seat / (active / 100)
  const minutes = seatPerActive / rate
  // Round the y-axis up to a clean $50 step so both lines stay on the chart.
  const yMax = Math.min(Math.max(100, Math.ceil((seatPerActive * 1.3) / 50) * 50), 1000)
  return { seatPerActive, minutes, yMax }
}

export function BreakEvenChart() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const set = (key: keyof Inputs) => (v: number) => setInputs((prev) => ({ ...prev, [key]: v }))
  const { seatPerActive, minutes, yMax } = breakEven(inputs)
  const onChart = minutes <= X_MAX
  const seatY = 100 - (seatPerActive / yMax) * 100
  const rateEndY = 100 - Math.min((inputs.rate * X_MAX) / yMax, 1) * 100
  const rateEndX = Math.min((yMax / inputs.rate / X_MAX) * 100, 100)
  const dotX = onChart ? (minutes / X_MAX) * 100 : 100
  const draw = inView ? 'tl-print 1.2s ease-out forwards' : undefined

  return (
    <Figure
      title="Monthly cost per practicing rep: flat seat vs per-minute rate"
      caption={`Defaults are example inputs: a $50 seat (Quotain Starter’s list price) and $0.10 a minute (Tough Tongue AI’s Business rate), both November 2026. The seat line assumes no minute cap; seats that include a pool behave like a minute plan once the pool runs out. A working month is ${WORKING_DAYS} days. Real minute plans sell minutes in monthly blocks, so very low use still pays the block.`}
      source="Quotain and Tough Tongue AI pricing pages, read 19 November 2026."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
        <div className="space-y-4">
          <SliderField label="Seat price, per month" value={inputs.seat} min={10} max={250} step={1} onChange={set('seat')} format={usd0} />
          <SliderField label="Per-minute rate" value={inputs.rate} min={0.05} max={0.4} step={0.01} onChange={set('rate')} format={usd2} />
          <SliderField
            label="Reps who practice in a month"
            value={inputs.active}
            min={20}
            max={100}
            step={5}
            onChange={set('active')}
            format={(n) => `${n}%`}
            hint="Idle seats are still billed, so each practicing rep carries more of the cost."
          />
          <div className="border-2 border-ink bg-sheet p-4 shadow-[5px_5px_0_var(--color-ink)]">
            <p className="tl-mono text-[10.5px] font-semibold text-ink-2">Break-even</p>
            {onChart ? (
              <>
                <p className="font-mono text-3xl font-bold text-ink">
                  <CountUp value={minutes} start={inView} format={int} /> min
                </p>
                <p className="text-sm text-ink-2">
                  per rep a month, about{' '}
                  <CountUp value={minutes / WORKING_DAYS} start={inView} format={int} className="font-semibold text-ink" />{' '}
                  minutes every working day. Below it, minutes cost less.
                </p>
              </>
            ) : (
              <p className="text-sm text-ink-2">
                Beyond {int(X_MAX)} minutes per rep a month, so the per-minute rate is cheaper across this whole chart.
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="tl-mono flex w-12 shrink-0 flex-col justify-between py-1 text-right text-[10px] text-ink-2">
              <span>{usd0(yMax)}</span>
              <span>{usd0(yMax / 2)}</span>
              <span>$0</span>
            </div>
            <div className="relative h-64 flex-1 border-b-2 border-l-2 border-ink bg-paper sm:h-72">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full">
                <rect
                  x={0} y={0} width={dotX} height={100} fill="var(--color-mint)" fillOpacity={0.45}
                  className={`transition-opacity delay-1000 duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
                />
                <line x1={0} y1={50} x2={100} y2={50} stroke="var(--color-ink)" strokeOpacity={0.12} strokeWidth={1} vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="tl-line absolute inset-0" style={{ animation: draw }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="h-full w-full">
                  <line x1={0} y1={seatY} x2={100} y2={seatY} stroke="var(--color-signal)" strokeWidth={3} vectorEffect="non-scaling-stroke" />
                  <line x1={0} y1={100} x2={rateEndX} y2={rateEndY} stroke="var(--color-flame)" strokeWidth={3} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              {onChart && (
                <div
                  className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 border-2 border-ink bg-butter ${inView ? 'opacity-100' : 'opacity-0'}`}
                  style={{ left: `${dotX}%`, top: `${seatY}%`, transition: 'left 0.5s, top 0.5s, opacity 0.4s 1.2s' }}
                />
              )}
              <span className="tl-mono absolute left-2 top-2 bg-paper px-1 text-[9.5px] font-semibold text-ink">Minutes cheaper</span>
            </div>
          </div>
          <div className="tl-mono relative ml-14 mt-1 h-4 text-[10px] text-ink-2">
            <span className="absolute left-0">0</span>
            <span className="absolute left-1/2 -translate-x-1/2">500</span>
            <span className="absolute right-0">1,000</span>
          </div>
          <p className="tl-mono ml-14 text-center text-[10px] text-ink-2">Minutes per rep, per month</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink-2">
            <li className="flex items-center gap-2">
              <span className="h-[3px] w-5 bg-[var(--color-signal)]" /> Seat, per practicing rep:{' '}
              <CountUp value={seatPerActive} start={inView} format={usd0} className="font-mono font-semibold text-ink" />
            </li>
            <li className="flex items-center gap-2">
              <span className="h-[3px] w-5 bg-[var(--color-flame)]" /> Minutes used × rate
            </li>
          </ul>
        </div>
      </div>
    </Figure>
  )
}
