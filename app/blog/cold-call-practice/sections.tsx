import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { DrillCardsFigure } from './figures-data'
import { FreeOptionsFigure, RubricFigure } from './figures-practice'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// six drills
// ------------------------------------------------------------------------------
export function DrillsSection() {
  return (
    <Section id="drills" title="Six cold call drills, each with a pass line">
      <p>
        A drill is one moment of the call, repeated until a reply comes out right without
        thinking. Each one below has the buyer’s line, a weak reply that most reps give on day one,
        a stronger reply, and a pass line that tells you when to move on.
      </p>
      <DrillCardsFigure />
      <p>
        The weak replies share a pattern: they pitch the product, argue with the reflex, or settle
        for something vague. The strong ones talk about the buyer’s problem, agree before asking,
        and always end with a question or a specific time. Run one drill per session, 10 to 20
        tries in a row, and record them. For the reasoning behind each reply and longer objections
        such as price or a competitor, see our guide to{' '}
        <Link href="/blog/objection-handling-techniques" className={LINK}>
          objection handling techniques
        </Link>
        .
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// ways to practice, compared
// ------------------------------------------------------------------------------
export function FormatsSection() {
  return (
    <Section id="formats" title="Ways to practice cold calling, compared">
      <p>
        Every method works for something. The question is whether the other side pushes back and
        whether you get feedback while the attempt is still fresh.
      </p>
      <DataTable
        columns={['Method', 'Pushback', 'Feedback', 'Cost', 'Best for']}
        rows={[
          ['Reading the script aloud', 'None', 'None', 'Free', 'A two-minute warm-up'],
          ['Recording yourself', 'None', 'Later, your own', 'Free', 'Hearing pace, filler words, rushed openers'],
          ['Peer role play', 'Depends on the partner', 'Right away, uneven', 'Two people’s time', 'Teams, if the buyer is told to be difficult'],
          ['Manager role play', 'Realistic', 'Expert', 'Manager time', 'New campaigns and the hardest objections'],
          ['AI buyer', 'Interrupts and objects; some can hang up', 'Scored every try', 'Free tiers to paid plans', 'Many tries at one moment, on your own time'],
          ['Live calls', 'Real', 'Rare unless someone reviews the recording', 'Real leads', 'Testing a version that already passes in practice'],
        ]}
      />
      <p>
        The weak setup is the one most teams run: a role play at the monthly sales meeting where a
        friendly colleague plays the buyer and lets the rep finish every sentence. The stronger
        setup gives the person playing the buyer a written brief and one instruction: interrupt
        within ten seconds and say no at least twice. A general AI chat app in voice mode can play
        that buyer too, if you paste in the brief from the section on AI buyers below and ask it to
        score you at the end.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// free options
// ------------------------------------------------------------------------------
export function FreeOptionsSection() {
  return (
    <Section id="free-options" title="Free cold call practice options in 2026">
      <Disclosure />
      <p>
        You do not need a budget to start. These free tiers let you talk to an AI buyer out loud,
        and most score the call when you hang up.
      </p>
      <FreeOptionsFigure />
      <p>
        When you compare them, test four things in one session. Does the buyer interrupt you, or
        politely wait? Can it end the call if you ramble (SalesLab, for one, says its buyer can hang
        up)? Is the score tied to named criteria, as{' '}
        <ExtLink href={SRC.coldCallGym}>Cold Call Gym</ExtLink> does with opening, discovery,
        objection handling and close? And can you replay the same buyer, so a second try measures
        you rather than a new persona? A free tier that passes all four is enough for a solo rep.
        For a team, the questions shift to custom buyers, shared rubrics and price per rep; our
        guide to{' '}
        <Link href="/blog/ai-roleplay-pricing" className={LINK}>
          AI roleplay pricing
        </Link>{' '}
        covers that.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// setting up an AI buyer
// ------------------------------------------------------------------------------
const BRIEF = [
  ['Role', 'Head of finance at a 200-person logistics company'],
  ['Situation', 'Between meetings, did not expect a call, mildly annoyed'],
  ['Hidden fact', 'AP spends two days every month-end chasing invoices; reveal it only if asked about invoices'],
  ['Brush-offs', '“What’s this about?” first, then “just send me an email”'],
  ['Hang-up rule', 'End the call if the rep pitches features for more than 20 seconds'],
  ['Win condition', 'Agree to 20 minutes only if the rep names a specific day and time'],
]

export function AiBuyerSection() {
  return (
    <Section id="ai-buyer" title="How to set up an AI buyer that actually pushes back">
      <p>
        An AI buyer is only as useful as its brief. Left on defaults, most will be polite, patient
        and easy to book, which teaches nothing. Write the brief the way you would brief a tough
        colleague:
      </p>
      <dl className="border-2 border-ink bg-sheet">
        {BRIEF.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-t border-ink/20 px-4 py-2.5 first:border-t-0 sm:grid-cols-[9rem_1fr] sm:gap-3">
            <dt className="tl-mono text-[11px] font-semibold text-ink">{k}</dt>
            <dd className="text-[15px] text-ink-2">{v}</dd>
          </div>
        ))}
      </dl>
      <p>
        The hidden fact is what turns a drill into practice for discovery: the buyer has a real
        problem, but only a rep who asks the right question finds it. The hang-up rule punishes
        rambling the way a real prospect would. Raise the difficulty once a rep passes: a shorter
        fuse, a third brush-off, a gatekeeper first.
      </p>
      <p>
        On a team, write the brief once so every rep practices the same buyer. In{' '}
        <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, for example, a manager saves it as a
        scenario with a rubric attached, reps practice by voice, and the manager reviews the
        lowest-scoring moment rather than the whole call.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// scoring
// ------------------------------------------------------------------------------
export function ScoringSection() {
  return (
    <Section id="scoring" title="Score every attempt with a five-line rubric">
      <p>
        Practice without a score turns into repetition of whatever you already do. Score right after
        each try, while you still remember it, on lines that describe something you can hear on the
        recording. Keep the lines fixed for a month.
      </p>
      <RubricFigure />
      <p>
        The example shows what a week of practice usually changes. On Monday the rep gave the
        reason 24 seconds in, listed features and argued with “not interested”. By Friday the reason
        came by the ninth second and the brush-off got a question instead of an argument. Calm under
        a second objection was the slowest line to move, which is normal: it needs the most tries,
        so it gets the most drill time next week.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// daily routine
// ------------------------------------------------------------------------------
export function RoutineSection() {
  return (
    <Section id="routine" title="A 15-minute daily cold call practice routine">
      <p>Fifteen focused minutes before your first live dial is enough. The split:</p>
      <DataTable
        columns={['Minutes', 'What to do', 'Why']}
        rows={[
          ['0 to 2', 'Say your opener out loud three times, slower each time', 'Warms up your voice and slows a rushed start'],
          ['2 to 7', 'One drill from the six above, 10 or more tries', 'Repetition on the one moment you are fixing'],
          ['7 to 13', 'Two full calls against a buyer who pushes back', 'Puts the pieces together under pressure'],
          ['13 to 15', 'Score both calls and pick tomorrow’s weakest line', 'Turns practice into a plan'],
        ]}
      />
      <p>
        Rotate the drill through the week: openers on Monday, “what’s this about?” on Tuesday,
        dismissive brush-offs on Wednesday, budget and fit on Thursday, and full calls on Friday,
        compared against Monday’s scores. A new rep is ready for live dials when they pass the
        rubric at 8 of 10 three times in a row, against a buyer they have not heard before.
      </p>
    </Section>
  )
}
