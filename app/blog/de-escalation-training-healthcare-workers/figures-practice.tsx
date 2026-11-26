'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, SliderField, StackedBar, useInView } from '@/components/blog/figures'
import { AI_PER_MINUTE, COURSE_PRICE } from './content'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, animation: `${STAMP_IN} ${at}s` }) as CSSProperties

// ------------------------------------------------------------------------------
// five hard moments: the reply that escalates and the one that lowers it
// ------------------------------------------------------------------------------
type MomentKey = 'wait' | 'family' | 'refusal' | 'desk' | 'confused'
type Moment = { who: string; trigger: string; weak: string; strong: string; skills: string[] }

const MOMENTS: Record<MomentKey, Moment> = {
  wait: {
    who: 'Patient, emergency department',
    trigger: '“I’ve been here six hours. I’m leaving.”',
    weak: 'Everyone has to wait. The doctors are very busy tonight.',
    strong: 'Six hours is a long time, and I’d want to leave too. Before you decide, can I find out exactly where you are in the queue? Give me five minutes.',
    skills: ['Agree', 'Be concise', 'Offer a choice'],
  },
  family: {
    who: 'Son of an inpatient',
    trigger: '“I want to talk to whoever is in charge. Right now.”',
    weak: 'The doctor is busy. You’ll have to wait like everyone else.',
    strong: 'I’ll call the charge nurse now. While I do, tell me the one thing you most need answered, so she comes ready with it.',
    skills: ['Verbal contact', 'Wants and feelings', 'Optimism'],
  },
  refusal: {
    who: 'Patient on a medical ward',
    trigger: '“I’m not taking that. You people keep pumping me full of stuff.”',
    weak: 'Your doctor ordered it, so you need to take it.',
    strong: 'You don’t have to take anything without knowing what it is. Can I tell you what this one is for, and then you decide?',
    skills: ['Not provocative', 'Be concise', 'Offer a choice'],
  },
  desk: {
    who: 'Patient at the front desk',
    trigger: '“Why is there a $400 bill? My insurance covers this. This is a scam.”',
    weak: 'That’s not something I can help with. You’ll need to call billing.',
    strong: 'A bill you didn’t expect is stressful. I can’t change it at this desk, but I can print what was billed and get you to the person who can, today.',
    skills: ['Name the feeling', 'Clear limit', 'Optimism'],
  },
  confused: {
    who: 'Older patient, night shift',
    trigger: '“Where am I? I need to go home. My dog is alone.”',
    weak: 'You’re in the hospital. You can’t go home. Please get back in bed.',
    strong: 'You’re safe. I’m Maya, your nurse tonight. Tell me about your dog. What’s his name?',
    skills: ['Verbal contact', 'Listen closely', 'Wants and feelings'],
  },
}

export function HardMomentsFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [key, setKey] = useState<MomentKey>('wait')
  const m = MOMENTS[key]

  return (
    <Figure
      title="Five hard moments: the reply that escalates and the one that lowers it"
      caption="Example lines written for training, not scripts to read aloud. Confusion at night can be delirium, which needs a clinical assessment alongside the words."
      source="Skill names follow the Project BETA ten domains (2012)."
    >
      <div ref={ref}>
        <div className="mb-4">
          <Segmented<MomentKey>
            label="Pick a moment"
            value={key}
            onChange={setKey}
            options={[
              { value: 'wait', label: 'Long wait' },
              { value: 'family', label: 'Family' },
              { value: 'refusal', label: 'Refusal' },
              { value: 'desk', label: 'Front desk' },
              { value: 'confused', label: 'Confused' },
            ]}
          />
        </div>
        {inView && (
          <div key={key} className="space-y-3">
            <div className="blog-fade-up border-2 border-ink bg-paper p-3">
              <p className="tl-mono mb-1 text-[10px] text-ink-2">{m.who}</p>
              <p className="text-[15px] italic text-ink">{m.trigger}</p>
            </div>
            <div className="blog-fade-up flex flex-col gap-2 border-2 border-dashed border-ink bg-sheet p-3" style={{ animationDelay: '150ms' }}>
              <span className="tl-stamp self-start text-[10px] text-stamp-red" style={stamp(0.5, '3deg')}>
                Escalates
              </span>
              <p className="text-sm text-ink-2 line-through decoration-stamp-red/60">{m.weak}</p>
            </div>
            <div className="blog-fade-up flex flex-col gap-2 border-2 border-ink bg-sheet p-3 shadow-[4px_4px_0_var(--color-ink)]" style={{ animationDelay: '450ms' }}>
              <span className="tl-stamp self-start text-[10px] text-stamp-green" style={stamp(1.1, '-3deg')}>
                Lowers it
              </span>
              <p className="text-sm text-ink">{m.strong}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {m.skills.map((s) => (
                  <span key={s} className="tl-mono border-2 border-ink bg-mint px-1.5 py-0.5 text-[10px] font-semibold text-ink">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// year-one plan: one course plus short monthly rehearsal
// ------------------------------------------------------------------------------
type Inputs = { staff: number; course: number; minutes: number; perTry: number }

const DEFAULTS: Inputs = { staff: 40, course: COURSE_PRICE, minutes: 10, perTry: 4 }
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const int = (n: number) => Math.round(n).toLocaleString('en-US')

export function RehearsalPlanFigure() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [i, setI] = useState<Inputs>(DEFAULTS)
  const set = (k: keyof Inputs) => (v: number) => setI((p) => ({ ...p, [k]: v }))
  const tries = Math.floor((i.minutes * 12) / i.perTry)
  const hours = (i.minutes * 12) / 60
  const courseFees = i.staff * i.course
  const aiMinutes = i.staff * i.minutes * 12 * AI_PER_MINUTE
  const total = courseFees + aiMinutes

  return (
    <Figure
      title="Year one: one course, then a few minutes of rehearsal a month"
      caption="Example inputs. $89 is the published price of Pollack Peacebuilding Systems’ self-paced healthcare course. AI practice is priced at $0.10 a minute, Tough Tongue AI’s Business plan rate; plans are monthly with seat limits, so treat this as an estimate, not a quote. Physical intervention skills still need in-person training."
      source="deescalation-training.com and toughtongueai.com/pricing, read November 2026."
    >
      <div ref={ref} className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <SliderField label="Staff trained" value={i.staff} min={5} max={300} step={5} onChange={set('staff')} format={int} />
          <SliderField label="Course price per person" value={i.course} min={0} max={300} step={1} onChange={set('course')} format={usd} hint="$0 for the free NIOSH or CU courses" />
          <SliderField label="Rehearsal minutes per person, per month" value={i.minutes} min={0} max={40} step={2} onChange={set('minutes')} format={(n) => `${n} min`} />
          <SliderField label="Minutes per practice try" value={i.perTry} min={2} max={10} step={1} onChange={set('perTry')} format={(n) => `${n} min`} />
        </div>
        <div className="border-2 border-ink bg-paper p-4 sm:p-5">
          <p className="tl-mono text-[10.5px] text-ink-2">Out-loud tries per person, per year</p>
          <CountUp value={tries} start={inView} format={int} className="block font-mono text-4xl font-bold text-ink" />
          <p className="mb-5 text-sm text-ink-2">
            from <CountUp value={hours} start={inView} format={(n) => `${n.toFixed(1)} hours`} className="font-semibold text-ink" /> of rehearsal, spread across the year
          </p>
          <p className="tl-mono mb-2 text-[10.5px] text-ink-2">Year-one invoice</p>
          <StackedBar
            segments={[
              { label: 'Course fees', value: courseFees, colorClass: 'bg-sky' },
              { label: 'AI rehearsal minutes', value: aiMinutes, colorClass: 'bg-mint' },
            ]}
            start={inView}
            format={usd}
            legendCols={1}
          />
          <div className="mt-5 border-2 border-dashed border-ink bg-sheet p-3 text-sm text-ink-2">
            <CountUp value={i.staff > 0 ? total / i.staff : 0} start={inView} format={usd} className="font-mono font-bold text-ink" /> per person for the year. Each try
            is the words said out loud to someone who pushes back, not a quiz answer.
          </div>
        </div>
      </div>
    </Figure>
  )
}
