import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { ReplyFlipFigure } from './figures-cycle'
import { TrainingTiersFigure } from './figures-tiers'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// what to say
// ------------------------------------------------------------------------------
export function WhatToSaySection() {
  return (
    <Section id="what-to-say" title="What to say: a power struggle or an exit ramp">
      <p>
        Most classroom escalations stop being about the original request within a minute. They become
        about who wins, in front of an audience. An exit ramp gives the student a way to comply without
        losing face. In practice that comes down to five habits:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li><strong>Say less.</strong> One short sentence, then wait. Silence is not a loss.</li>
        <li><strong>Offer two choices you can live with.</strong> “Bag or my desk” ends the argument about whether.</li>
        <li><strong>Go private.</strong> Walk over and lower your voice, rather than calling across the room.</li>
        <li><strong>Give a time and keep it.</strong> “I’ll check back in three minutes,” then do.</li>
        <li><strong>Remove the audience</strong> once acceleration starts: give the class a task, or move them.</li>
      </ol>
      <ReplyFlipFigure />
      <p>
        Notice what the stronger replies leave out: threats, questions the student cannot answer
        well (“Why would you do that?”), and debates about whether the rule is fair. Those can come
        later, in recovery, when the student can think again. The same moves work with an angry parent
        at pickup. Our{' '}
        <Link href="/blog/parent-teacher-conference-role-play-scenarios" className={LINK}>
          parent teacher conference role play scenarios
        </Link>{' '}
        include scripts for those conversations.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// programs compared
// ------------------------------------------------------------------------------
export function ProgramsSection() {
  return (
    <Section id="programs" title="Free and paid de-escalation training for teachers, compared">
      <p>
        School de-escalation training comes in three shapes: free self-paced modules, seats in a class
        run by a certified instructor, and train-the-trainer programs that certify your own staff to
        teach everyone else. These are the options we could price in November 2026.
      </p>
      <DataTable
        columns={['Program', 'Format and time', 'Price (Nov 2026)', 'Best for']}
        rows={[
          [<ExtLink key="i" href={SRC.irisCec}>IRIS Center, Addressing Challenging Behaviors (Part 1)</ExtLink>, 'Online module, elementary and secondary versions, about 2.5 hours each', 'Free', 'Learning the acting-out cycle on your own'],
          [<ExtLink key="c" href={SRC.cji}>Arkansas CJI, Staying Cool When the Temperature Rises</ExtLink>, '6-hour in-person workshop with role plays and scripts', 'Free in Arkansas; $50 out of state', 'Educators and school resource officers near Arkansas'],
          [<ExtLink key="b" href={SRC.cpiBasics}>CPI De-escalation Basics</ExtLink>, 'Online, on demand, three lessons in under an hour; a 25-minute bus driver version', 'Not published', 'Schoolwide basics for every adult'],
          [<ExtLink key="r" href={SRC.region8}>CPI classes via Region 8 ESC (Indiana)</ExtLink>, '2-hour de-escalation session; 6-hour Verbal Intervention; Nonviolent Crisis Intervention, 2 hours online plus 6 in person', '$300 per 2-hour session; $50 per participant for the others, plus mileage', 'Districts buying seats from a regional instructor'],
          [<ExtLink key="v" href={SRC.cpiRegister}>CPI instructor certification</ExtLink>, 'Train-the-trainer, two-year certification', 'From $3,899 per attendee (Verbal Intervention)', 'Districts that want in-house instructors'],
          [<ExtLink key="m" href={SRC.mandt}>The Mandt System</ExtLink>, 'Train-the-trainer: 2-day Relational level; 4-day Relational + Technical with physical skills', '$1,495 and $2,995 per instructor', 'Relationship-first training, with or without holds'],
        ]}
        note="List prices read from each provider’s page in November 2026. CPI states that it does not offer free training. Participant materials and instructor time are not included."
      />
      <p>
        The train-the-trainer price looks steep until you divide it. One instructor certified at $3,899
        who then trains 120 colleagues over the two-year certification works out to about $32 a person
        in certification fees, before materials and the instructor’s own time. The catch is that the
        quality now depends on one or two of your own staff, so pick instructors who are respected on
        the floor, not only available.
      </p>
      <p>
        Does it work? Providers report fewer referrals and restraints, but that evidence mostly comes
        from the providers. Treat a certificate as the start, and measure your own school: office
        referrals, restraint and seclusion counts, and staff injury reports, for a term before the
        training and a term after.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// tiers
// ------------------------------------------------------------------------------
export function TiersSection() {
  return (
    <Section id="who-needs-what" title="Who needs which level of training?">
      <p>
        Not every adult needs the same course. The model most providers sell, including{' '}
        <ExtLink href={SRC.cpiPrograms}>CPI’s menu of programs by role and risk level</ExtLink>, is a
        wide base of verbal skills and a narrow top of physical ones.
      </p>
      <TrainingTiersFigure />
      <p>
        Two mistakes are common. One is sending everyone to the top tier, which spends money on
        physical skills most staff should never use. The other is training only the crisis team, which
        leaves the bus driver, the lunch monitor and the front office, often the first adults to see
        agitation, with nothing but instinct.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// special education
// ------------------------------------------------------------------------------
export function SpecialEducationSection() {
  return (
    <Section id="special-education" title="De-escalation for special education teachers">
      <p>
        The restraint data above make the case on their own: students with disabilities are where
        de-escalation most often fails. For special education teams, general strategies are not
        enough. The{' '}
        <ExtLink href={SRC.qld}>Queensland fact sheet</ExtLink> says strategies need to be tailored to
        each student’s individual behavior support plan, built from a functional behavior assessment,
        and{' '}
        <ExtLink href={SRC.wisconsin}>Wisconsin’s education department</ExtLink> reminds teams that a
        student’s response does not always follow the textbook path.
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Write down each student’s known triggers and early signs, in plain words, where every adult in the room can see them.</li>
        <li>Agree the calm-down space and the exact words in advance, and use the same words every time.</li>
        <li>One adult talks during an escalation. Everyone else manages the room.</li>
        <li>After every incident, debrief with the student once calm, then update the plan.</li>
        <li>Follow your state and district rules on restraint and seclusion, including who may use them and how parents are told.</li>
      </ul>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// practice
// ------------------------------------------------------------------------------
export function PracticeSection() {
  return (
    <Section id="practice" title="How to keep de-escalation skills ready all year">
      <p>
        A six-hour course in August gives each teacher a handful of practice runs at most. By March the
        words have faded, and the moment they are needed is the moment a teacher is least able to
        improvise. The fix is small and regular: ten minutes a month, in pairs, on one phase at a
        time.
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li><strong>September and October:</strong> agitation. Offer two choices and a time, three runs each.</li>
        <li><strong>November and December:</strong> acceleration. Say one sentence, step back, move the class.</li>
        <li><strong>January:</strong> a parent at pickup who is angry about a consequence.</li>
        <li><strong>February:</strong> recovery. The debrief conversation, and the welcome back to class.</li>
        <li><strong>March to May:</strong> rerun the moments your staff actually reported this year.</li>
      </ol>
      <Disclosure />
      <p>
        AI role play is one way to get those repetitions without pulling two adults out of class. In{' '}
        <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, a teacher can rehearse with an AI student
        or parent who escalates when the reply is a demand and settles when it is a choice, then get a
        score against your school’s checklist. There are 25 free minutes, and paid plans start at $20 a
        month (pricing page, November 2026). A colleague playing the student works too. What matters is
        saying the line out loud before it is needed.
      </p>
      <p>
        Hospitals face the same problem with their annual refreshers. Our guide to{' '}
        <Link href="/blog/de-escalation-training-healthcare-workers" className={LINK}>
          de-escalation training for healthcare workers
        </Link>{' '}
        covers how they schedule practice between them.
      </p>
    </Section>
  )
}
