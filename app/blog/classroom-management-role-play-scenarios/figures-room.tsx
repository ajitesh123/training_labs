'use client'

import { useState } from 'react'
import { AnimatedBars, type BarItem, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

// ------------------------------------------------------------------------------
// hero: a quiet redirect, seen from above
// ------------------------------------------------------------------------------
// Five columns, three rows. Positions are percent of the room box (4:3 on phones, 16:10 above).
const COLS = 5
const ROWS = 3
const deskLeft = (c: number) => 4 + c * 19.5
const deskTop = (r: number) => 30 + r * 22
const TARGET = { r: 1, c: 3 }
const RUN = 6.4
// Timeline, in seconds after the hero scrolls into view.
const T = { flag: 1.0, walk: 1.7, say: 3.1, settle: 4.4, stamp: 4.9 }

export function QuietRedirectHero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)
  const at = (s: number) => ({ transitionDelay: inView ? `${s}s` : '0s' })
  const desks = Array.from({ length: COLS * ROWS }, (_, i) => ({ r: Math.floor(i / COLS), c: i % COLS }))

  return (
    <div
      ref={ref}
      className="tl-dots relative mb-12 border-2 border-ink bg-sheet px-3 pb-5 pt-5 shadow-[7px_7px_0_var(--color-ink)] sm:px-7"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <p className="tl-mono text-[11.5px] font-semibold text-ink-2">[ Role play · scenario 3 · a phone under the desk ]</p>
        <p className="tl-mono text-[10.5px] text-ink-2">Run 3 of 3</p>
      </div>

      <div className="relative aspect-[4/3] w-full border-2 border-ink bg-paper sm:aspect-[16/10]">
        <div className="tl-mono absolute inset-x-[18%] top-[5%] border-2 border-ink bg-sheet py-1 text-center text-[9px] font-semibold text-ink-2 sm:text-[11px]">
          Board · fractions, lesson 4
        </div>
        {desks.map((d, i) => {
          const target = d.r === TARGET.r && d.c === TARGET.c
          return (
            <div
              key={i}
              className={`absolute h-[13%] w-[12%] border-2 border-ink bg-sheet ${inView ? 'blog-fade-up' : 'opacity-0'}`}
              style={{ left: `${deskLeft(d.c)}%`, top: `${deskTop(d.r)}%`, animationDelay: `${i * 40}ms` }}
            >
              {target && (
                <>
                  <span className={`absolute inset-0 bg-peach transition-opacity duration-300 motion-reduce:transition-none ${inView ? 'opacity-100' : 'opacity-0'}`} style={at(T.flag)} />
                  <span className={`absolute inset-0 bg-mint transition-opacity duration-500 motion-reduce:transition-none ${inView ? 'opacity-100' : 'opacity-0'}`} style={at(T.settle)} />
                  <span
                    className={`tl-mono absolute -top-[70%] left-1/2 min-w-[3.4rem] -translate-x-1/2 whitespace-nowrap border-[1.5px] border-ink bg-peach px-1 text-center sm:min-w-[4.4rem] text-[8px] font-semibold text-ink transition-opacity duration-300 sm:text-[10px] ${inView ? 'opacity-100' : 'opacity-0'}`}
                    style={at(T.flag)}
                  >
                    Phone out
                  </span>
                  <span
                    className={`tl-mono absolute -top-[70%] left-1/2 min-w-[3.4rem] -translate-x-1/2 whitespace-nowrap border-[1.5px] border-ink bg-mint px-1 text-center sm:min-w-[4.4rem] text-[8px] font-semibold text-ink transition-opacity duration-300 sm:text-[10px] ${inView ? 'opacity-100' : 'opacity-0'}`}
                    style={at(T.settle)}
                  >
                    Put away
                  </span>
                </>
              )}
            </div>
          )
        })}
        <div
          aria-label="Teacher"
          className="absolute grid aspect-square w-[5.5%] place-items-center border-2 border-ink bg-butter font-mono text-[9px] font-bold text-ink shadow-[2px_2px_0_var(--color-ink)] transition-[left,top] duration-[1200ms] ease-in-out motion-reduce:transition-none sm:text-[12px]"
          style={{
            left: inView ? `${deskLeft(TARGET.c) + 13}%` : '47%',
            top: inView ? `${deskTop(TARGET.r) + 1.5}%` : '17%',
            ...at(T.walk),
          }}
        >
          T
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="min-h-[2.8em] text-[14.5px] leading-snug">
          <span className="tl-mono mr-2 text-[11px] font-semibold text-signal">Teacher, low voice</span>
          <span className="tl-line inline-block" style={inView ? { animation: `tl-print 0.8s ${T.say}s steps(18) forwards` } : undefined}>
            “Phone in your bag or on my desk, your choice. Thanks.”
          </span>
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="tl-stamp tl-stamp-1 text-stamp-green" style={inView ? { animation: `${STAMP_IN} ${T.stamp}s` } : undefined}>
            Private ✓
          </span>
          <span className="tl-stamp tl-stamp-2 text-stamp-green" style={inView ? { animation: `${STAMP_IN} ${T.stamp + 0.4}s` } : undefined}>
            Least intrusive ✓
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="tl-mono mb-1 flex justify-between text-[10px] font-semibold text-ink-2">
          <span>Lesson time</span>
          <span>Instruction lost: 0 sec</span>
        </div>
        <div className="h-4 border-2 border-ink bg-paper">
          <div
            className="h-full border-r-2 border-ink bg-sky transition-[width] ease-linear motion-reduce:transition-none"
            style={{ width: inView ? '100%' : '0%', transitionDuration: `${RUN}s` }}
          />
        </div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------------------
// why rehearse: three views of the NCES data
// ------------------------------------------------------------------------------
type View = 'learning' | 'teachers' | 'training'

const VIEWS: Record<View, { label: string; title: string; items: BarItem[] }> = {
  learning: {
    label: 'What hurts learning',
    title: 'Share of public schools saying each behavior had a severe negative impact on learning, 2023-24',
    items: [
      { label: 'Lack of focus or inattention', value: 26 },
      { label: 'Academically unprepared', value: 21 },
      { label: 'Disruptive in the classroom', value: 19, highlight: true },
      { label: 'Not doing individual work', value: 19 },
      { label: 'Tardiness', value: 18 },
      { label: 'Phones and devices when not allowed', value: 16 },
    ],
  },
  teachers: {
    label: 'Who feels it',
    title: 'Public school teachers who agree student misbehavior interferes with their teaching, 2020-21',
    items: [
      { label: 'Middle school teachers', value: 37 },
      { label: '3 or fewer years of experience', value: 36, highlight: true },
      { label: '4 to 9 years', value: 35 },
      { label: 'All teachers', value: 32 },
      { label: '20 or more years', value: 30 },
      { label: 'High school teachers', value: 27 },
    ],
  },
  training: {
    label: 'Training asked for',
    title: 'Public schools saying they need more training on classroom management strategies',
    items: [
      { label: 'May 2022', value: 50 },
      { label: 'May 2024', value: 61, highlight: true },
    ],
  },
}

export function BehaviorData() {
  const [view, setView] = useState<View>('learning')
  const v = VIEWS[view]
  return (
    <Figure
      title="Classroom behavior in US public schools: three views from NCES"
      caption={`${v.title}. Bars are drawn on a 0 to 100 percent scale. School-level answers come from school leaders; the middle view is teachers’ own answers.`}
      source="NCES School Pulse Panel, released July 18, 2024 (2023-24 and May 2022 to May 2024 data); NCES Condition of Education, National Teacher and Principal Survey 2020-21 (updated September 2023)."
    >
      <div className="mb-5">
        <Segmented<View>
          label="Choose a view"
          value={view}
          onChange={setView}
          options={(Object.keys(VIEWS) as View[]).map((k) => ({ value: k, label: VIEWS[k].label }))}
        />
      </div>
      <AnimatedBars key={view} format="pct" max={100} items={v.items} />
    </Figure>
  )
}
