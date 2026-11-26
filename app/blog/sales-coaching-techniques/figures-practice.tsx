'use client'

import { type CSSProperties, useEffect, useState } from 'react'
import { CountUp, Figure, Segmented, SliderField, StackedBar, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, animation: `${STAMP_IN} ${at}s` }) as CSSProperties

// ------------------------------------------------------------------------------
// redo the moment: three attempts scored on three checks
// ------------------------------------------------------------------------------
const CHECKS = ['Asked before quoting', 'Tied price to her problem', 'Ended on a next step'] as const
type Attempt = { line: string; pass: [boolean, boolean, boolean] }

const ATTEMPTS: Attempt[] = [
  { line: '“It’s $48 a seat. I can probably do something on that if the timing works.”', pass: [false, false, false] },
  { line: '“Fair question. What are the other two quoting? … Okay. Ours is $48 a seat.”', pass: [true, false, false] },
  {
    line: '“Fair question. Before I give you a number, what are the others quoting, and per what? … Per shipment, got it. Then let’s compare per shipment, since late shipments are what you said costs you most. Can we check it with your finance lead on Thursday?”',
    pass: [true, true, true],
  },
]
type AttemptKey = '1' | '2' | '3'

export function RedoRoundsFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [n, setN] = useState<AttemptKey>('1')
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!inView || !auto) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN('3')
      return
    }
    const t1 = window.setTimeout(() => setN('2'), 3200)
    const t2 = window.setTimeout(() => setN('3'), 6400)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [inView, auto])

  const a = ATTEMPTS[Number(n) - 1]
  const score = a.pass.filter(Boolean).length
  const pick = (v: AttemptKey) => {
    setAuto(false)
    setN(v)
  }

  return (
    <Figure
      title="Redo the moment out loud: three attempts at 14:32"
      caption="Example attempts, scored on three checks. The manager plays the buyer the same way each time, so the only thing changing is the rep’s reply."
    >
      <div ref={ref}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Segmented<AttemptKey>
            label="Attempt"
            value={n}
            onChange={pick}
            options={[
              { value: '1', label: 'Attempt 1' },
              { value: '2', label: 'Attempt 2' },
              { value: '3', label: 'Attempt 3' },
            ]}
          />
          <p className="text-sm text-ink-2">
            Score <CountUp value={inView ? score : 0} start={inView} className="font-mono text-lg font-bold text-ink" /> of 3
          </p>
        </div>
        {inView && (
          <div key={n} className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
            <div className="blog-fade-up border-2 border-ink bg-paper p-3">
              <p className="tl-mono mb-1.5 text-[10px] text-ink-2">Buyer: “What does this cost? We’re talking to two others.”</p>
              <p className="text-sm text-ink">{a.line}</p>
            </div>
            <ul className="space-y-2">
              {CHECKS.map((c, i) => (
                <li key={c} className="flex items-center justify-between gap-2 border-2 border-ink bg-sheet px-2.5 py-1.5 text-[13px] text-ink">
                  {c}
                  <span
                    className={`tl-stamp px-1.5 py-0.5 text-[9.5px] ${a.pass[i] ? 'text-stamp-green' : 'text-stamp-red'}`}
                    style={stamp(0.35 + i * 0.3, i % 2 ? '4deg' : '-4deg')}
                  >
                    {a.pass[i] ? 'Pass' : 'Miss'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// manager time: whole-call reviews vs one-moment reviews
// ------------------------------------------------------------------------------
type Inputs = { reps: number; callMin: number; clipMin: number; talkMin: number }

const DEFAULTS: Inputs = { reps: 8, callMin: 30, clipMin: 5, talkMin: 15 }
const hrs = (n: number) => `${(n / 60).toFixed(1)} h`

export function ReviewTimeFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [i, setI] = useState<Inputs>(DEFAULTS)
  const set = (k: keyof Inputs) => (v: number) => setI((p) => ({ ...p, [k]: v }))
  // Whole-call: listen to the full call, then discuss it for as long again.
  const whole = { listen: i.reps * i.callMin, talk: i.reps * i.callMin }
  const moment = { listen: i.reps * i.clipMin, talk: i.reps * i.talkMin }
  const wholeTotal = whole.listen + whole.talk
  const momentTotal = moment.listen + moment.talk
  const scale = Math.max(wholeTotal, momentTotal)

  return (
    <Figure
      title="Manager hours a week: reviewing whole calls vs one moment per rep"
      caption="Example inputs. The whole-call review assumes the manager listens to one full call per rep and then discusses it for as long again. The one-moment review assumes the rep flags a timestamp first, so the manager listens to a few minutes around it."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <SliderField label="Reps on the team" value={i.reps} min={2} max={15} step={1} onChange={set('reps')} format={(n) => `${n}`} />
          <SliderField label="Length of a typical call" value={i.callMin} min={10} max={60} step={5} onChange={set('callMin')} format={(n) => `${n} min`} />
          <SliderField label="Minutes listening around the flagged moment" value={i.clipMin} min={2} max={15} step={1} onChange={set('clipMin')} format={(n) => `${n} min`} />
          <SliderField label="Minutes of review conversation" value={i.talkMin} min={5} max={30} step={5} onChange={set('talkMin')} format={(n) => `${n} min`} />
        </div>
        <div className="border-2 border-ink bg-paper p-4 sm:p-5">
          <div className="space-y-5">
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">Whole-call reviews</p>
                <CountUp value={wholeTotal} start={inView} format={hrs} className="font-mono text-xl font-bold text-ink" />
              </div>
              <StackedBar
                segments={[
                  { label: 'Listening', value: whole.listen, colorClass: 'bg-peach' },
                  { label: 'Talking', value: whole.talk, colorClass: 'bg-sky' },
                ]}
                start={inView}
                format={hrs}
                scaleMax={scale}
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">One-moment reviews</p>
                <CountUp value={momentTotal} start={inView} format={hrs} className="font-mono text-xl font-bold text-ink" />
              </div>
              <StackedBar
                segments={[
                  { label: 'Listening', value: moment.listen, colorClass: 'bg-peach' },
                  { label: 'Talking', value: moment.talk, colorClass: 'bg-sky' },
                ]}
                start={inView}
                format={hrs}
                scaleMax={scale}
              />
            </div>
          </div>
          <div className="mt-5 border-2 border-dashed border-ink bg-sheet p-3 text-sm text-ink-2">
            The one-moment review frees{' '}
            <CountUp value={Math.max(wholeTotal - momentTotal, 0)} start={inView} format={hrs} className="font-mono font-bold text-ink" /> a week,
            enough for a second review with the reps who need it most.
          </div>
        </div>
      </div>
    </Figure>
  )
}
