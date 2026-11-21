'use client'

import { useState } from 'react'
import { Figure, Segmented, useInView } from '@/components/blog/figures'

// ------------------------------------------------------------------------------
// five skills: a weak line and a stronger one
// ------------------------------------------------------------------------------
type SkillId = 'agenda' | 'teachback' | 'ask' | 'nurse' | 'spikes'

type Skill = {
  label: string
  moment: string
  patient?: string
  weak: { line: string; stamp: string }
  strong: { line: string; stamp: string }
  shift: string
}

// Lines are written examples; the research behind each one is cited in the post.
const SKILLS: Record<SkillId, Skill> = {
  agenda: {
    label: 'Agenda',
    moment: 'The patient has just named their first concern.',
    weak: { line: '(At the door, hand on the handle) “Anything else?”', stamp: 'Invites a no' },
    strong: {
      line: '“Is there something else you want to address in the visit today?”',
      stamp: 'Opens the list',
    },
    shift: 'Asked early, with “something” instead of “anything.”',
  },
  teachback: {
    label: 'Teach-back',
    moment: 'You have just explained a new inhaler.',
    weak: { line: '“Does that make sense?”', stamp: 'Yes or no' },
    strong: {
      line: '“I want to check I explained this clearly. Can you show me how you’ll use it tonight?”',
      stamp: 'Checks the explanation',
    },
    shift: 'The patient explains or shows it in their own words.',
  },
  ask: {
    label: 'Ask-tell-ask',
    moment: 'A test result is back and needs a change in treatment.',
    weak: { line: '“Your sugar test came back high, so we’re adding a second medicine.”', stamp: 'Tells first' },
    strong: {
      line: '“What have you heard about your results so far?” Then one short piece of news. Then: “What questions does that raise?”',
      stamp: 'Asks first',
    },
    shift: 'Find out what they believe, tell one thing, check how it landed.',
  },
  nurse: {
    label: 'NURSE',
    moment: 'A patient hears the condition has come back.',
    patient: '“I can’t believe this is happening again.”',
    weak: { line: '“The good news is the treatment options are much better now.”', stamp: 'Skips the feeling' },
    strong: {
      line: '“It sounds like this is a lot to take in. Can you tell me what worries you most?”',
      stamp: 'Names, then explores',
    },
    shift: 'Name the emotion a notch softer, then ask a focused question.',
  },
  spikes: {
    label: 'SPIKES',
    moment: 'A biopsy result shows cancer.',
    weak: { line: '“The biopsy showed cancer. We’ll start treatment next week.”', stamp: 'No warning' },
    strong: {
      line: '“What’s your understanding of why we did the biopsy?” Then: “I’m sorry, I have some difficult news.” Then a pause.',
      stamp: 'Asks, warns, pauses',
    },
    shift: 'Before you tell, ask. Warn before the news, then leave room.',
  },
}

const ORDER: SkillId[] = ['agenda', 'teachback', 'ask', 'nurse', 'spikes']
const STAMP_IN = 'tl-stamp 0.32s cubic-bezier(0.3, 1.6, 0.6, 1) forwards'

function LineCard({
  tone,
  line,
  stamp,
  play,
}: {
  tone: 'weak' | 'strong'
  line: string
  stamp: string
  play: boolean
}) {
  const strong = tone === 'strong'
  return (
    <div
      className={`flex min-w-0 flex-col gap-3 border-2 border-ink p-4 ${
        strong ? 'bg-mint shadow-[5px_5px_0_var(--color-ink)]' : 'bg-paper'
      } ${play ? 'blog-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: strong ? '250ms' : '0ms' }}
    >
      <p className="tl-mono text-[10.5px] font-semibold text-ink-2">{strong ? 'Stronger' : 'Weak'}</p>
      <p className="text-[15px] leading-snug text-ink">{line}</p>
      <span
        className={`tl-stamp mt-auto self-start ${strong ? 'tl-stamp-1 text-stamp-green' : 'tl-stamp-2 text-stamp-red'}`}
        style={play ? { animation: `${STAMP_IN} ${strong ? 1.1 : 0.6}s` } : undefined}
      >
        {stamp}
      </span>
    </div>
  )
}

export function SkillSwitcher() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [id, setId] = useState<SkillId>('agenda')
  const s = SKILLS[id]
  return (
    <Figure
      title="Five moments in a visit: the weak line and a stronger one"
      caption="Lines are written examples for practice, not quotes from real visits, except the agenda question, which is the wording tested by Heritage and colleagues. Tap a skill to compare."
      source="Heritage et al., Journal of General Internal Medicine (2007); AHRQ Health Literacy Universal Precautions Toolkit, Tool 5; VitalTalk guides; Baile et al., The Oncologist (2000)."
    >
      <div ref={ref}>
        <div className="mb-5">
          <Segmented<SkillId>
            label="Choose a skill"
            value={id}
            onChange={setId}
            options={ORDER.map((k) => ({ value: k, label: SKILLS[k].label }))}
          />
        </div>
        <div key={id}>
          <div className="mb-4 border-l-4 border-ink bg-paper px-3 py-2">
            <p className="tl-mono text-[10px] font-semibold text-ink-2">The moment</p>
            <p className="text-sm text-ink">{s.moment}</p>
            {s.patient && (
              <p className="mt-1.5 text-sm text-ink">
                <span className="tl-mono mr-2 border-2 border-ink bg-butter px-1 text-[9.5px] font-semibold">Patient</span>
                {s.patient}
              </p>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LineCard tone="weak" line={s.weak.line} stamp={s.weak.stamp} play={inView} />
            <LineCard tone="strong" line={s.strong.line} stamp={s.strong.stamp} play={inView} />
          </div>
          <p
            className={`mt-4 text-sm text-ink ${inView ? 'blog-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '600ms' }}
          >
            <span className="tl-mono mr-2 text-[10.5px] font-semibold text-ink-2">What changed</span>
            <span className={inView ? 'tl-hl' : ''}>{s.shift}</span>
          </p>
        </div>
      </div>
    </Figure>
  )
}
