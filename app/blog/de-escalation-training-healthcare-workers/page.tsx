import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { SettingRiskFigure, WaitingRoomHero } from './figures-hero'
import { EscalationLadderFigure } from './figures-skills'
import { DoesItWorkSection, PracticeSection, ProgramsSection, TenSkillsSection, WhatToSaySection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function DeEscalationTrainingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most healthcare workers sit through a de-escalation module once a year and then meet the real thing at 2 AM, tired, with a crowd watching. Here is what the Joint Commission requires, the free and paid courses worth knowing, the ten skills that matter, and how to practice the words until they come out right."
      />
      <WaitingRoomHero />

      <Section id="quick-answer" title="What is de-escalation training for healthcare workers?">
        <Callout label="Quick answer">
          <p>
            De-escalation training teaches healthcare workers to notice agitation early and lower it
            with <strong>words, distance and choices</strong> before it becomes a threat or an
            assault. Joint Commission-accredited hospitals must provide it{' '}
            <strong>at hire, every year, and whenever their violence prevention program changes</strong>.
          </p>
          <p>
            Courses run from <strong>free</strong> (the NIOSH course for nurses and a 40-minute
            University of Colorado course) to <strong>$89</strong> for a 90-minute self-paced course,
            up to custom workshops for high-risk units. The course is the easy part. The words only
            come out right under pressure if staff have said them out loud before.
          </p>
        </Callout>
        <p>
          The conversation above is an example, but it shows the whole skill in about a minute. The
          nurse agrees with what is true, gives a real time instead of a vague promise, and offers a
          choice. Each of those moves is teachable, and each one gets easier with repetition.
        </p>
      </Section>

      <Section id="why-it-matters" title="Why healthcare workers need de-escalation training">
        <p>
          Healthcare carries more workplace violence than any other private industry. In the{' '}
          <ExtLink href={SRC.blsFact}>Bureau of Labor Statistics fact sheet for 2021 to 2022</ExtLink>,
          health care and social assistance had 41,960 violence cases that cost workers days away,
          restricted duty or a transfer: 72.8 percent of all such cases in private industry. The
          rate was 14.2 per 10,000 full-time workers, against 2.9 for private industry overall.
          Among detailed service jobs, psychiatric aides stood out at 543.6.
        </p>
        <p>
          Risk is not spread evenly, and that matters for how you train. The chart below uses{' '}
          <ExtLink href={SRC.ncci}>NCCI’s July 2026 analysis of the 2023 to 2024 BLS data</ExtLink>.
          Toggle between the two views.
        </p>
        <SettingRiskFigure />
        <p>
          Psychiatric hospitals have by far the highest rate, but general hospitals have the most
          incidents, about 30 percent of the sector’s cases. That suggests two layers of training.
          High-risk units need deep, practiced training that includes physical skills. Everyone else
          who meets the public, from triage nurses to the front desk, needs the verbal basics,
          practiced often enough to use them.
        </p>
        <p>
          These numbers are a floor. They count only incidents that cost someone work time, and
          violence is underreported: a{' '}
          <ExtLink href={SRC.tjcReview}>2022 review of the new Joint Commission standards</ExtLink>{' '}
          cites a study in which 88 percent of health workers had not formally documented any
          incident in the hospital’s system.
        </p>
      </Section>

      <Section id="requirements" title="Is de-escalation training required for hospital staff?">
        <p>
          For accredited hospitals, yes. The Joint Commission’s workplace violence prevention
          standards took effect on{' '}
          <ExtLink href={SRC.tjcR3}>January 1, 2022</ExtLink>. Its{' '}
          <ExtLink href={SRC.tjcTraining}>education and training requirement</ExtLink> asks hospitals
          to train leaders, staff and licensed practitioners at the time of hire, annually, and
          whenever the program changes, and to document it. Each hospital decides which parts each
          role needs. The content has to cover six things:
        </p>
        <DataTable
          columns={['Required element', 'What it means in practice', 'Format that fits']}
          rows={[
            ['What counts as workplace violence', 'Verbal, written and physical acts, threats, bullying and harassment, from patients, visitors or colleagues', 'Short online module'],
            ['Roles and responsibilities', 'What leaders, clinical staff, security and police each do', 'Unit huddle with your own policy'],
            ['De-escalation', 'The words, the distance, the limits and the choices', 'Role play or simulation, repeated'],
            ['Nonphysical and physical intervention', 'Breakaways and safe holds, for roles that need them', 'In person, certified instructor'],
            ['Response to emergency incidents', 'Codes, who responds and how to clear the area', 'Drills'],
            ['Reporting process', 'How and where to report, including verbal abuse', 'Module plus manager follow-up'],
          ]}
          note="Elements from Joint Commission standard HR.01.05.03, EP 29 (hospitals and critical access hospitals). Behavioral health and home care programs carry matching requirements."
        />
        <p>
          Notice what the standard does not say: how long the training runs, or how it is taught. A
          30-minute video can tick the de-escalation box on paper. Whether it changes what a nurse
          says at hour four of a bad shift is a different question, and the rest of this guide is
          about that question.
        </p>
      </Section>

      <Section id="stages" title="When to keep talking and when to get help">
        <p>
          De-escalation is not about talking anyone down at any cost. Good training teaches staff to
          read the stage a person is in, because the right move changes as agitation rises. Early on,
          the best tool is a short, specific conversation. Later, the job becomes keeping distance
          and getting help.
        </p>
        <EscalationLadderFigure />
        <p>
          The weak pattern is a staff member who waits until stage two to engage and then argues the
          facts. The stronger pattern is to step in at stage one, when a person is pacing and asking
          the same question twice, with a name, an update and a time. Stage one is where a two-minute
          update costs the least and saves the most.
        </p>
        <p>
          The same ladder works outside hospitals. Teachers use a version of it in our guide to{' '}
          <Link href="/blog/classroom-management-role-play-scenarios" className={LINK}>
            classroom management role play scenarios
          </Link>
          .
        </p>
      </Section>

      <TenSkillsSection />
      <WhatToSaySection />
      <ProgramsSection />
      <DoesItWorkSection />
      <PracticeSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          De-escalation training for healthcare workers is required for accredited hospitals, cheap
          to start and easy to do badly. Free courses from NIOSH and the University of Colorado cover
          the knowledge, and paid programs add instructors and physical skills. What none of them
          give by default is enough repetitions of the words under pressure.
        </p>
        <p>
          Our recommendation: run one course a year for everyone who meets the public, with physical
          skills for high-risk units. Then add ten minutes a month of rehearsal on the five moments
          your staff actually face, scored on the ten Project BETA skills, and debrief every real
          incident. Track restraint use, security calls and reports, not just completion rates.
        </p>
      </Section>

      <CtaBlock
        headline="Rehearse the hard sentence before the hard shift"
        body="Staff practice with an AI patient or family member who gets louder when the reply is wrong, scored on your de-escalation checklist. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['patient-communication-training', 'classroom-management-role-play-scenarios', 'healthcare-sales-training', 'ai-roleplay-pricing']} />
      </section>
    </PostShell>
  )
}
