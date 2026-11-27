import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { PhasePlaybookFigure } from './figures-cycle'
import { RestraintGapFigure, TwoAdultsHero } from './figures-hero'
import { PracticeSection, ProgramsSection, SpecialEducationSection, TiersSection, WhatToSaySection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function DeEscalationTeachersPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most teachers get one de-escalation session a year, usually in August, and meet the real thing in March with a full class watching. Here is what the training covers, the free and paid courses worth knowing, what to say in each phase of an outburst, and how to keep the words ready all year."
      />
      <TwoAdultsHero />

      <Section id="quick-answer" title="What is de-escalation training for teachers?">
        <Callout label="Quick answer">
          <p>
            De-escalation training for teachers teaches school staff to spot rising agitation early and
            lower it with <strong>fewer words, lower demands, space and a choice</strong>, before a
            student reaches a crisis. Most programs build on the seven-phase acting-out cycle and teach a
            different move for each phase.
          </p>
          <p>
            Courses run from <strong>free</strong> (the IRIS Center’s 2.5-hour online modules) to{' '}
            <strong>$50 per participant</strong> for a six-hour CPI class through an Indiana service
            center, and <strong>$1,495 to $3,899</strong> to certify one of your own staff as an
            instructor. Whichever you pick, plan short practice through the year. The words only come
            out right under pressure if teachers have said them before.
          </p>
        </Callout>
        <p>
          The animation above is an illustration, not data. Same student, same trigger. In the first
          version the adult’s voice and demands rise with the student’s, and the two climb to the peak
          together. In the second, the adult stays low, offers a choice and a time, and the curve turns
          at agitation. That turn is the whole skill, and it can be taught.
        </p>
      </Section>

      <Section id="why-it-matters" title="Why do teachers need de-escalation training?">
        <p>
          Because aggression toward teachers is common, not rare. The American Psychological
          Association’s task force on violence against educators has surveyed more than 35,000
          teachers and school staff since 2019. In its{' '}
          <ExtLink href={SRC.apaNea}>joint brief with the National Education Association (November 2025)</ExtLink>,
          80 percent of teachers reported at least one incident of verbal or threatening violence from
          students in the 2021 to 2022 school year, and 56 percent reported at least one incident of
          physical violence. The{' '}
          <ExtLink href={SRC.apa}>task force’s own summary</ExtLink> lists classroom management and
          trauma-informed practice among the training educators say they need most.
        </p>
        <p>
          The second reason is what happens when de-escalation fails. The{' '}
          <ExtLink href={SRC.crdc2122}>2021 to 2022 Civil Rights Data Collection</ExtLink>, released in
          January 2025, counted about 68,800 students physically restrained at school and almost 28,700
          placed in seclusion. Those students were not a cross-section of the school.
        </p>
        <RestraintGapFigure />
        <p>
          Students served under IDEA were 14 percent of enrollment but 76 percent of students physically
          restrained and 68 percent of students secluded. The gaps run by race and sex too: Black
          students were 15 percent of enrollment and 26 percent of students physically restrained, and
          boys were 80 percent of students physically restrained.
        </p>
        <p>
          Restraint is sometimes the only way to stop imminent harm. But most outbursts show warning
          signs first, and the IRIS Center notes that the acceleration phase alone can last several
          minutes. That is time in which a calmer sentence is still possible. De-escalation training
          moves the response earlier, so fewer moments reach the point where anyone has to be held.
        </p>
      </Section>

      <Section id="acting-out-cycle" title="The acting-out cycle: seven phases, a different move for each">
        <p>
          Most school programs teach some version of the acting-out cycle, a seven-phase model from Geoff
          Colvin and George Sugai. The{' '}
          <ExtLink href={SRC.irisSec}>IRIS Center at Vanderbilt</ExtLink> lays it out as calm, trigger,
          agitation, acceleration, peak, de-escalation and recovery, and makes a point every teacher
          recognizes: behavior that seems to come out of nowhere usually had warning signs first.
        </p>
        <PhasePlaybookFigure />
        <p>
          Two ideas carry most of the weight. First, the earlier you act, the less it takes. At trigger
          and agitation, a changed task or a two-option choice often works. By acceleration, the{' '}
          <ExtLink href={SRC.qld}>Queensland education department’s fact sheet</ExtLink> notes that the
          student finds rational discussion very hard, so the job shifts from persuading to space and
          safety. Second, the adult’s state matters as much as the student’s.{' '}
          <ExtLink href={SRC.michigan}>Michigan’s MTSS guide</ExtLink> warns that adults are usually
          emotionally charged by acceleration and have to resist the pull toward a power struggle.
        </p>
        <p>
          Knowing the phases is not the same as acting on them. A weak session puts the cycle on a slide
          and moves on. A stronger one has every teacher say the agitation line out loud three times,
          with a colleague playing the student, until it comes out without thinking. For the low-level
          behaviors that come before agitation, see our{' '}
          <Link href="/blog/classroom-management-role-play-scenarios" className={LINK}>
            classroom management role play scenarios
          </Link>
          .
        </p>
      </Section>

      <WhatToSaySection />
      <ProgramsSection />
      <TiersSection />
      <SpecialEducationSection />
      <PracticeSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          De-escalation training for teachers is cheap to start and easy to do badly. The IRIS Center’s
          free modules teach the acting-out cycle, regional providers run six-hour CPI classes for about
          $50 a seat, and certifying your own instructor costs $1,495 to $3,899. None of them, on their
          own, gives a teacher enough repetitions of the right sentence at the wrong moment.
        </p>
        <p>
          Our recommendation: give every adult who meets students the basics, give classroom staff the
          verbal course, keep physical skills for a small trained crisis team, and then spend ten
          minutes a month rehearsing the agitation and acceleration lines out loud. Track office
          referrals, restraint and seclusion counts and staff injury reports, not only completion
          certificates.
        </p>
      </Section>

      <CtaBlock
        headline="Rehearse the calm sentence before the hard period"
        body="Teachers practice with an AI student or parent who escalates when the reply is a demand and settles when it is a choice, scored on your school’s de-escalation checklist. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading
          slugs={['classroom-management-role-play-scenarios', 'de-escalation-training-healthcare-workers', 'parent-teacher-conference-role-play-scenarios', 'ai-roleplay-pricing']}
        />
      </section>
    </PostShell>
  )
}
