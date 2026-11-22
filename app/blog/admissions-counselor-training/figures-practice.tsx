'use client'

import { type CSSProperties, useState } from 'react'
import { CountUp, Figure, Segmented, useInView } from '@/components/blog/figures'

const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'
const stamp = (inView: boolean, at: number, rot: string): CSSProperties =>
  ({ '--rot': rot, ...(inView ? { animation: `${STAMP_IN} ${at}s` } : {}) }) as CSSProperties

// ------------------------------------------------------------------------------
// six conversations: weak reply, strong reply, the line you must not cross
// ------------------------------------------------------------------------------
type Talk = {
  key: string
  tab: string
  family: string
  under: string
  weak: string
  strong: string
  rule: string
}

const TALKS: Talk[] = [
  {
    key: 'price',
    tab: 'Too expensive',
    family: '“The sticker price is way over our budget.”',
    under: 'They do not know their net price yet, and they are deciding whether to keep talking.',
    weak: '“Don’t worry, nearly everyone gets aid. You’ll probably pay half that.”',
    strong: '“That’s worth saying early. I can’t estimate your aid, but the net price calculator gives you a real range in about ten minutes. Can I stay on while you try it, and set up a call with aid for anything it doesn’t answer?”',
    rule: 'Statements about cost and aid count as representations, spoken ones included. Never estimate a family’s aid from memory.',
  },
  {
    key: 'credits',
    tab: 'Credits or license',
    family: '“Will his community college credits transfer, and will this get him licensed?”',
    under: 'A yes from you is a promise they will plan a career around.',
    weak: '“Oh yes, credits transfer and our graduates all get licensed.”',
    strong: '“Here’s our published transfer agreement with his college and our licensure pass rate. For any course not on that list, the registrar decides, and I’ll get you their answer in writing.”',
    rule: 'Misleading statements about credit transfer and licensure eligibility are named examples of misrepresentation.',
  },
  {
    key: 'compare',
    tab: 'Comparing colleges',
    family: '“We’re also looking at State, and it’s cheaper.”',
    under: 'They want help comparing, not a reason to defend the other school.',
    weak: '“State is huge, she’ll just be a number there.”',
    strong: '“State is a good school. What matters most to you two in the choice? Let’s compare us on those three things, including cost after aid.”',
    rule: 'No rule needed to see it: talking down a rival makes the parent argue for it.',
  },
  {
    key: 'deposit',
    tab: 'Hold the seat',
    family: '“Can you hold her spot past the deposit deadline? We’re waiting on another offer.”',
    under: 'They are afraid of losing the seat and of choosing too early.',
    weak: '“If you don’t deposit by Friday, the seat is gone.”',
    strong: '“Our deadline is the one in her admit letter, and here’s how an extension request works. Waiting to compare aid offers makes sense. Please don’t hold deposits at two colleges, though.”',
    rule: 'NACAC asks members to tell students that holding enrollment deposits at more than one US college is unethical.',
  },
  {
    key: 'parent',
    tab: 'Parent answers all',
    family: 'Every question to the student is answered by the parent.',
    under: 'The parent is anxious; the student is the applicant and has gone quiet.',
    weak: 'The counselor talks only to the parent for the rest of the call.',
    strong: '“Mr. Rao, I’ll come right back to cost. Priya, what would make the first year feel like the right choice to you?”',
    rule: 'A skill, not a rule. Over- or under-involved parents were a top challenge for 22 percent of NACAC members in 2022.',
  },
  {
    key: 'deal',
    tab: 'Discount today?',
    family: '“Is there a scholarship if we commit today?”',
    under: 'They have heard that colleges negotiate and want to see if you will.',
    weak: '“If you deposit tonight, I can get you an extra scholarship.”',
    strong: '“Scholarships here are decided by the aid office from the application, not on this call. If anything changes for your family, here’s how to ask for a review.”',
    rule: 'Pay that depends on enrollments is banned for recruiters at schools taking federal aid, and NACAC members should not offer rewards to influence an enrollment decision.',
  },
]

export function ConversationSwitcher() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [key, setKey] = useState(TALKS[0].key)
  const t = TALKS.find((x) => x.key === key) ?? TALKS[0]
  const fade = inView ? 'blog-fade-up' : 'opacity-0'
  return (
    <Figure
      title="Six conversations to rehearse: pick one to see a weak and a strong reply"
      caption="Replies are examples written for this guide. Adapt the strong reply to your own policies and published facts; the rule lines summarize US federal rules and NACAC’s ethics guide, and are not legal advice."
      source="34 CFR 668.14(b)(22) and 668.71 to 668.72 (eCFR, read November 2026); NACAC Guide to Ethical Practice in College Admission (August 2026); NACAC ad hoc committee report on workplace well-being (2024)."
    >
      <div ref={ref}>
      <Segmented<string> label="Conversation" value={key} onChange={setKey} options={TALKS.map((x) => ({ value: x.key, label: x.tab }))} />
      <div key={t.key} className="mt-5 space-y-3">
        <div className={`${fade} border-2 border-ink bg-paper p-4`}>
          <p className="tl-mono mb-1 text-[10.5px] font-semibold text-ink-2">Family</p>
          <p className="text-[15px] font-semibold leading-snug text-ink">{t.family}</p>
          <p className="mt-2 text-[13px] text-ink-2">Underneath: {t.under}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={`${fade} relative border-2 border-ink bg-sheet p-4 pt-9`} style={{ animationDelay: '120ms' }}>
            <span className="tl-stamp absolute left-3 top-2.5 text-stamp-red" style={stamp(inView, 0.35, '-5deg')}>
              Weak
            </span>
            <p className="text-[14px] leading-snug text-ink-2">{t.weak}</p>
          </div>
          <div
            className={`${fade} relative border-2 border-ink bg-mint p-4 pt-9 shadow-[5px_5px_0_var(--color-ink)]`}
            style={{ animationDelay: '240ms' }}
          >
            <span className="tl-stamp absolute left-3 top-2.5 text-stamp-green" style={stamp(inView, 0.6, '4deg')}>
              Strong
            </span>
            <p className="text-[14px] leading-snug text-ink">{t.strong}</p>
          </div>
        </div>
        <p className={`${fade} border-2 border-dashed border-ink bg-paper px-4 py-3 text-[13px] text-ink-2`} style={{ animationDelay: '360ms' }}>
          <span className="tl-mono mr-2 font-semibold text-ink">The line</span>
          {t.rule}
        </p>
      </div>
      </div>
    </Figure>
  )
}

// ------------------------------------------------------------------------------
// rubric that scores in: week 1 practice against week 4
// ------------------------------------------------------------------------------
type Round = 'week1' | 'week4'

const CRITERIA = [
  { label: 'States purpose and checks it is a good time', week1: 2, week4: 4 },
  { label: 'Learns the student’s goals before any price', week1: 1, week4: 3 },
  { label: 'Answers cost with published tools, no promises', week1: 1, week4: 4 },
  { label: 'Compares on the family’s criteria, not the rival’s flaws', week1: 2, week4: 3 },
  { label: 'Ends with a dated next step, student included', week1: 1, week4: 4 },
]
const MAX = 4
const PASS = 3

export function RubricScorer() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [round, setRound] = useState<Round>('week1')
  const total = CRITERIA.reduce((s, c) => s + c[round], 0)
  return (
    <Figure
      title="An admissions call rubric, scored on two practice rounds"
      caption="Example scores for one new counselor, written for this guide. Each row is scored 1 to 4; a 3 is a pass. Score practice calls and a sample of live calls with the same five rows so the two are comparable."
    >
      <div ref={ref}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Segmented<Round>
            label="Practice round"
            value={round}
            onChange={setRound}
            options={[
              { value: 'week1', label: 'Week 1 round' },
              { value: 'week4', label: 'Week 4 round' },
            ]}
          />
          <p className="text-sm text-ink-2">
            <CountUp value={inView ? total : 0} start={inView} className="font-mono text-2xl font-bold text-ink" /> / {CRITERIA.length * MAX}
          </p>
        </div>
        <ul className="space-y-3">
          {CRITERIA.map((c, i) => {
            const score = c[round]
            return (
              <li key={c.label} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 sm:grid-cols-[1.3fr_1fr_auto]">
                <span className="text-[13.5px] leading-snug text-ink">{c.label}</span>
                <span
                  className={`tl-mono row-start-1 w-14 text-right text-[10.5px] font-bold sm:col-start-3 ${score >= PASS ? 'text-stamp-green' : 'text-stamp-red'}`}
                >
                  {score >= PASS ? 'Pass' : 'Not yet'}
                </span>
                <div className="col-span-2 grid grid-cols-4 gap-1 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                  {Array.from({ length: MAX }, (_, k) => (
                    <span key={k} className="h-4 border-2 border-ink bg-paper">
                      <span
                        className={`block h-full transition-[width] duration-500 ease-out motion-reduce:transition-none ${score >= PASS ? 'bg-mint' : 'bg-peach'}`}
                        style={{ width: inView && k < score ? '100%' : '0%', transitionDelay: `${i * 90 + k * 70}ms` }}
                      />
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Figure>
  )
}
