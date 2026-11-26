import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { HardMomentsFigure, RehearsalPlanFigure } from './figures-practice'
import { TenDomainsFigure } from './figures-skills'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// the ten skills
// ------------------------------------------------------------------------------
export function TenSkillsSection() {
  return (
    <Section id="ten-skills" title="De-escalation techniques in healthcare: the ten skills">
      <p>
        The most cited checklist comes from the American Association for Emergency Psychiatry. Its{' '}
        <ExtLink href={SRC.beta}>Project BETA de-escalation workgroup</ExtLink> reviewed the
        literature in 2012 and named ten domains. Their approach has three steps: engage the person
        verbally, build a working relationship, then help them out of the agitated state. The goals
        are safety, helping the person regain control, and avoiding restraint and coercion wherever
        possible.
      </p>
      <TenDomainsFigure />
      <p>
        Two of the ten are the easiest to skip. The first is <strong>establish verbal
        contact</strong>: one person speaks, and everyone else steps back. When a nurse, a doctor
        and a security officer all answer at once, the patient hears noise and a crowd. The second
        is the <strong>debrief</strong>. Talking with the patient and the team after an incident is
        how a unit learns what set it off and what to try sooner next time, and it is easy to drop on a busy shift.
      </p>
      <p>
        The ten skills overlap with everyday patient communication: naming feelings, listening and
        checking understanding. If your staff already train on those, our guide to{' '}
        <Link href="/blog/patient-communication-training" className={LINK}>
          patient communication training
        </Link>{' '}
        covers the calmer end of the same skill set.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// what to say in five common moments
// ------------------------------------------------------------------------------
export function WhatToSaySection() {
  return (
    <Section id="what-to-say" title="What to say: five moments worth rehearsing">
      <p>
        Lists of skills are easy to agree with and hard to use. What staff need is the actual
        sentence for the moments they meet every week. Here are five, each with the reply most
        people give on instinct and a stronger one.
      </p>
      <HardMomentsFigure />
      <p>
        The weak replies share a pattern. They defend the system (“everyone has to wait”), give an
        order (“you need to take it”) or close a door (“call billing”). Each one is true, and each
        one tells the person that nobody here is on their side. The strong replies agree with
        something real, give a specific next step, and leave the person a choice, which hands back
        a little of the control they feel they have lost.
      </p>
      <p>
        Notice too what the strong replies do not do. None of them promises something staff cannot
        deliver, and the front desk reply sets a clear limit (“I can’t change it at this desk”)
        while still offering help. De-escalation is not giving people whatever they demand.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// courses compared
// ------------------------------------------------------------------------------
export function ProgramsSection() {
  return (
    <Section id="programs" title="De-escalation training courses compared, free and paid">
      <p>
        These are the options a hospital, clinic or care home is most likely to shortlist, with
        what each one published in November 2026.
      </p>
      <DataTable
        columns={['Course', 'Format and length', 'Price (Nov 2026)', 'Best for']}
        rows={[
          [<ExtLink key="n" href={SRC.niosh}>NIOSH Workplace Violence Prevention for Nurses</ExtLink>, 'Online, 13 units of about 15 minutes; 3.0 nursing contact hours', 'Free, CE free via CDC TRAIN', 'Awareness and annual refreshers'],
          [<ExtLink key="c" href={SRC.cu}>CU Psych Learning, Verbal De-escalation for Healthcare Professionals</ExtLink>, 'Video course, about 40 minutes', 'Free', 'Seeing the words used on video'],
          [<ExtLink key="m" href={SRC.cms}>CMS De-escalation Strategies In-Service Toolkit</ExtLink>, 'Fact sheet, short video and module; online or group', 'Free', 'Nursing homes and long-term care'],
          [<ExtLink key="f" href={SRC.cpiFirst}>CPI Prevention First</ExtLink>, 'Online, 30 minutes, four lessons', 'Not shown on the program page', 'Every staff member, low-risk behaviors'],
          [<ExtLink key="v" href={SRC.cpiVerbal}>CPI Verbal Intervention and Nonviolent Crisis Intervention</ExtLink>, 'Instructor certification; NCI adds disengagement skills', 'Quote or consultation', 'Hospital-wide programs with in-house instructors'],
          [<ExtLink key="p" href={SRC.pps}>Pollack Peacebuilding Systems, healthcare course</ExtLink>, 'Self-paced, about 90 minutes; live workshops for 8 to 25 people', '$89 per person; live training quoted', 'Small teams buying without a contract'],
          [<ExtLink key="b" href={SRC.benchmarque}>Benchmarque Group, urgent care workshop (Australia)</ExtLink>, 'One-day workshop, private groups', 'AUD 9,500 per group, including GST', 'A reference price for a private day'],
        ]}
        note="CPI’s certified instructors must attend a CPI-facilitated program every two years to keep their certification, per its Prevention First page."
      />
      <p>
        The free courses are good, and there is no reason to pay for awareness content. NIOSH’s
        course includes case studies of an aggressive family member and a cognitively impaired
        patient, and the CU course shows verbal de-escalation on video. What free courses cannot
        give is practice with feedback, which is where paid options and in-house drills come in.
      </p>
      <p>
        Train-the-trainer programs such as CPI’s put certified instructors inside your hospital, so
        refreshers do not need an outside vendor each year. That suits large systems. A clinic with
        twelve staff is usually better served by a free course plus a short, regular practice
        routine it runs itself.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// evidence
// ------------------------------------------------------------------------------
export function DoesItWorkSection() {
  return (
    <Section id="does-it-work" title="Does de-escalation training work?">
      <p>
        It reliably changes how prepared staff feel. Whether it changes incident numbers depends on
        how it is taught. A{' '}
        <ExtLink href={SRC.review}>systematic review on PubMed Central</ExtLink> screened 9,096
        records and kept 36 studies. Training was consistently linked to better knowledge,
        confidence and preparedness. Simulation raised confidence, though measured performance
        improved less consistently. Training delivered on the unit, with real cases, was associated
        with more use of verbal de-escalation and fewer violent incidents. The authors stress that
        the evidence is correlational and that long-term retention is barely studied.
      </p>
      <p>
        The Project BETA authors made the same point more simply: like resuscitation training, the
        knowledge can be taught in a classroom, but{' '}
        <ExtLink href={SRC.betaOverview}>“the latter requires practice”</ExtLink>. So measure two
        things. Track restraint use, security calls and incident reports by unit, and check skills
        directly by watching staff run a scenario, not just by asking how confident they feel.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// practice between refreshers
// ------------------------------------------------------------------------------
export function PracticeSection() {
  return (
    <Section id="practice" title="How to practice de-escalation between annual refreshers">
      <p>
        An annual course gives each person one exposure a year. The skill is used under stress, so
        it needs short, frequent rehearsal. Four formats work well together:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Ten-minute huddle drills.</strong> One staff member plays the patient from the
          five moments above, one responds, one scores against the ten skills. Swap roles. Run one
          moment per week.
        </li>
        <li>
          <strong>Quarterly simulation for high-risk units.</strong> A standardized patient or a
          colleague, a full scenario from stage one to a security call, and a debrief.
        </li>
        <li>
          <strong>A debrief after every real incident.</strong> Ten minutes: what set it off, what
          helped, what to say sooner. This is the tenth BETA domain, and it turns incidents into
          practice material.
        </li>
        <li>
          <strong>Rehearsal with an AI patient or relative.</strong> Staff talk out loud to a voice
          that gets louder when the reply is wrong and calmer when it is right, and repeat the same
          moment until it holds.
        </li>
      </ul>
      <Disclosure />
      <p>
        Tough Tongue AI is one way to run that last format: you describe the person, the setting
        and the checklist, and staff practice by voice in a browser. It covers the verbal part
        only; breakaway and holding skills still need an instructor in the room. Its{' '}
        <ExtLink href={SRC.ttai}>pricing page</ExtLink> lists 25 free minutes, team plans from $299
        a month, and an enterprise plan with HIPAA and zero data retention. Practice scenarios
        should never contain real patient details anyway. For front desk and billing calls, its
        guide to{' '}
        <ExtLink href={SRC.customerService}>customer service role play scenarios</ExtLink> includes
        three de-escalation calls you can try free.
      </p>
      <RehearsalPlanFigure />
      <p>
        With the example inputs, forty staff get 30 out-loud tries each across the year for about
        two hours of their time. If you are weighing per-minute against per-seat tools for this,
        our comparison of{' '}
        <Link href="/blog/ai-roleplay-pricing" className={LINK}>
          AI roleplay pricing
        </Link>{' '}
        explains the trade-off.
      </p>
    </Section>
  )
}
