import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { OnboardingChecklistFigure } from './figures-checklist'
import { NinetyDayTrackHero, RampTrendFigure } from './figures-hero'
import { BeforeDayOneSection, FirstMonthSection, GatesSection, LaterSection, PracticeSection, RoleSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function SalesOnboardingChecklistPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most sales onboarding goes wrong in the first week, before anyone notices: a CRM login that does not work, a calendar with nothing on it, a new rep who listens to calls for a month and never says a word out loud. Here is a 90-day checklist with an owner for every item and a gate at the end of every phase, plus what a slow ramp costs."
      />
      <NinetyDayTrackHero />

      <Section id="quick-answer" title="What should a sales onboarding checklist include?">
        <Callout label="Quick answer">
          <p>
            A sales onboarding checklist covers five stages, each with a named owner:{' '}
            <strong>setup before day one</strong> (tested logins, the comp plan in writing, a booked
            first two weeks, a peer mentor and a written definition of ramped),{' '}
            <strong>week one</strong> (buyer, product, recorded calls and the company story said out
            loud), <strong>days 8 to 30</strong> (scored practice and a discovery certification),{' '}
            <strong>days 31 to 60</strong> (first solo calls with a weekly review) and{' '}
            <strong>days 61 to 90</strong> (a full book and a 90-day review).
          </p>
          <p>
            Ninety days is the structure, not the finish line. Average AE ramp to full productivity
            reached <strong>6.2 months</strong> in The Bridge Group’s 2026 report, so the checklist’s
            job is to make each of those months count.
          </p>
        </Callout>
        <p>
          The plan above is an example, but it shows the shape: one track, four gates, three phases
          called learn, apply and own. A rep moves to the next phase by passing a gate, not by the
          calendar turning over.
        </p>
      </Section>

      <Section id="why-ramp" title="Why ramp time needs a checklist">
        <p>
          Ramp is long and getting longer. The{' '}
          <ExtLink href={SRC.bridge2026}>Bridge Group’s 2026 AE research</ExtLink>, its tenth edition
          and a survey of 158 B2B companies, put average ramp to full productivity at 6.2 months, the
          highest in the study’s history. That happened while companies demanded more experience at
          hire (3.7 years, up from 2.7 in 2022) and while only 48 percent of reps reached quota.
        </p>
        <RampTrendFigure />
        <p>
          Put ramp next to tenure and it looks even bigger. The same report puts average AE tenure at
          3.2 years, about 38 months. Take away 6.2 months of ramp and a rep spends about 32 months at
          full productivity, so ramp eats roughly a sixth of their time in the seat. You cannot change
          the market or the buying committee. You can change what happens in a new rep’s first 90 days.
          Each month of ramp also has a price in quota capacity, and our guide to{' '}
          <Link href="/blog/sales-training-roi" className={LINK}>
            sales training ROI
          </Link>{' '}
          shows how to put a number on it.
        </p>
        <p>
          Most companies do not do this well. In{' '}
          <ExtLink href={SRC.gallup}>Gallup’s research (January 2019)</ExtLink>, only 12 percent of
          employees strongly agreed that their organization does a good job of onboarding, and Gallup
          argues that getting fully up to speed takes 12 months or more in most jobs. How you define
          “ramped” also changes the answer a lot:{' '}
          <ExtLink href={SRC.snapsdrRamp}>SnapSDR’s guide to sales ramp time</ExtLink> shows one rep’s
          record producing a ramp time anywhere from 2 to 11 months, depending on the milestone.
        </p>
      </Section>

      <Section id="checklist" title="The sales onboarding checklist">
        <p>
          Here is the whole checklist. Pick a role, open a phase and tick items to see when each gate
          passes. Every item has one owner, because an item with two owners usually has none.
        </p>
        <OnboardingChecklistFigure />
        <p>
          Two things make this a checklist rather than a calendar. Each phase ends in a gate the rep has
          to pass, and most gates are spoken, scored performances rather than quizzes. The sections
          below explain each phase and what tends to go wrong in it.
        </p>
      </Section>

      <BeforeDayOneSection />
      <FirstMonthSection />
      <GatesSection />
      <LaterSection />
      <RoleSection />
      <PracticeSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          A sales onboarding checklist is worth the afternoon it takes to write, because ramp is long
          and getting longer: 6.2 months for the average AE in 2026, against 4.3 months in 2020. The
          checklist will not make your market easier. It removes the waste you control: the lost first
          week, the month of silent shadowing, the first live calls that double as practice.
        </p>
        <p>
          Our recommendation: finish setup before day one, have the rep speak in week one, gate live
          calls behind a scored practice call, review one recorded call a week through day 60, and end
          day 90 with a review that sets the next skill goals. Then compare each cohort with the last
          on dates, not impressions.
        </p>
      </Section>

      <CtaBlock
        headline="Let new reps rehearse before they touch a live lead"
        body="New hires practice the company story, discovery and objections with an AI buyer built from your playbook, scored on your certification rubric, so managers can sign off each gate in minutes. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['sales-training-roi', 'sales-coaching-framework', 'cold-call-practice', 'objection-handling-techniques']} />
      </section>
    </PostShell>
  )
}
