import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { RoiCalculator } from './figures-calc'
import { RoiWorksheetHero } from './figures-hero'
import { LevelLadder } from './figures-levels'
import { CostSection, FirstSaleSection, IsolateSection, RampSection, WinRateSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function SalesTrainingRoiPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most sales training ROI numbers fall apart on the second question from finance: compared with what? Here is how to measure the three levers training actually moves, ramp time, first sale and win rate, and how to turn them into a number that holds up."
      />
      <RoiWorksheetHero />

      <Section id="quick-answer" title="How do you calculate sales training ROI?">
        <Callout label="Quick answer">
          <p>
            Sales training ROI is <strong>attributable benefit minus fully loaded cost, divided by
            fully loaded cost</strong>, times 100. Measure the levers training moves (ramp time,
            time to first sale and win rate), compare trained reps with a similar group that was not
            trained yet, value the difference at gross margin, and count one year.
          </p>
          <p>
            In a published ROI Institute case, a three-day selling skills program produced{' '}
            <strong>$71,760 of first-year benefit for $32,984 of cost: a 118 percent ROI</strong>,
            measured against a control group.
          </p>
        </Callout>
        <p>
          The formula is the easy part. Two numbers inside it decide whether anyone believes the
          result. The first is the benefit you can attribute to training, which needs a comparison
          group or at least a conservative estimate. The second is the cost, which needs the hours
          reps and managers spent, not only the invoice.
        </p>
        <p>
          The worksheet above is a real case from{' '}
          <ExtLink href={SRC.roiDeck}>the ROI Institute (March 2024)</ExtLink>, and it gets both
          right. The rest of this post shows how to build the same worksheet for a sales team,
          lever by lever, with a calculator at the end.
        </p>
      </Section>

      <Section id="formula" title="The sales training ROI formula, and the three numbers in it">
        <p>The ROI Institute expresses the result three ways. Report all three:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Benefit-cost ratio</strong> = program benefits ÷ program costs. In the case:
            $71,760 ÷ $32,984 = 2.18.
          </li>
          <li>
            <strong>ROI (%)</strong> = (benefits − costs) ÷ costs × 100. In the case: 118 percent.
          </li>
          <li>
            <strong>Payback period</strong> = costs ÷ monthly benefit. Finance teams often ask for
            this one first.
          </li>
        </ul>
        <p>
          A ratio of 2.18 and an ROI of 118 percent describe the same result. Saying “a 2x return”
          when you mean one or the other is how ROI conversations go sideways, so name the measure.
        </p>
        <p>The benefit side comes from one of three levers, each with its own conversion to money:</p>
        <DataTable
          columns={['Lever', 'What it measures', 'Into money', 'Data from']}
          rows={[
            ['Ramp time', 'Months from start date to full productivity', 'Months saved × half a month of quota × margin', 'HR start dates, CRM'],
            ['Time to first sale', 'Days to first closed-won deal (AE) or first qualified meeting (SDR)', 'An early signal; usually not monetized on its own', 'CRM'],
            ['Win rate', 'Won ÷ decided opportunities', 'Extra wins × deal size × margin', 'CRM, by cohort'],
          ]}
          note="Whichever lever you use, multiply by the share you can credit to training before it enters the ROI."
        />
      </Section>

      <Section id="levels" title="What to measure before you get to money">
        <p>
          Revenue moves slowly and for many reasons. The levels below give you evidence along the
          way, and they tell you where a program broke if the revenue never comes. If reps passed
          the role-play (level 2) but never used the skill on calls (level 3), the problem is
          reinforcement, not content.
        </p>
        <LevelLadder />
        <p>
          Levels 2 and 3 are the ones most programs skip, and they are the cheapest to collect. A
          scored role-play at the end of training and again 30 days later tells you whether the
          skill survived. A manager listening to three recorded calls per rep tells you whether it
          reached a buyer. In the retail case, 78 percent of associates strongly agreed they used
          the skills and 52 percent said they used them with every customer, which is why the sales
          lift that followed was believable.
        </p>
      </Section>

      <RampSection />
      <FirstSaleSection />
      <WinRateSection />
      <IsolateSection />
      <CostSection />

      <Section id="calculator" title="Sales training ROI calculator">
        <p>
          Put the levers and the full cost together. The defaults describe an example team of ten
          reps, not a benchmark: change them to your own numbers, and set the credit share from your
          comparison group if you have one.
        </p>
        <RoiCalculator />
        <p>
          With the defaults, the plan costs $36,564 and the credited benefit is $77,000, an ROI of
          about 111 percent with payback in under six months. Move the credit share to 25 percent
          and the ROI drops to about 5 percent. That sensitivity is the point: the credit share is
          the number to argue about with finance, so earn it with a comparison group rather than
          assuming it.
        </p>
      </Section>

      <Section id="plan" title="A 180-day plan for measuring sales training">
        <Disclosure />
        <p>Most of the work happens before the program starts. A plan that fits on one page:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Before day 0:</strong> pick one lever and one definition, record a baseline for
            every rep, and decide which group trains second. Write the target ROI down; the retail
            case set 25 percent in advance.
          </li>
          <li>
            <strong>Days 0 to 30:</strong> collect level 1 and level 2 data. Score a role-play on
            the exact behavior the program teaches, at the end of training and again at day 30.
          </li>
          <li>
            <strong>Days 30 to 90:</strong> check level 3 on recorded calls. Track time to first
            sale for new hires in both cohorts.
          </li>
          <li>
            <strong>Days 90 to 180:</strong> compare ramp time and win rate between cohorts, convert
            at margin, apply the credit share, and calculate ROI on one year of benefit.
          </li>
        </ol>
        <p>
          Practice tools make the early levels cheap to measure. In{' '}
          <ExtLink href={SRC.app}>Tough Tongue AI</ExtLink>, for example, reps rehearse against an AI
          buyer and every session is scored against a rubric you write, so level 2 data piles up
          without a manager in the room. Its Business plan costs $299 a month for 15 seats and 2,990
          minutes, per its <ExtLink href={SRC.ttai}>pricing page</ExtLink> in November 2026. Any
          scored practice works, as long as the rubric matches the behavior you will look for on
          live calls. For how practice tools price their minutes and seats, see{' '}
          <Link href="/blog/ai-roleplay-pricing" className={LINK}>
            AI roleplay pricing
          </Link>
          .
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          A sales training ROI number is only as good as its comparison. Pick the lever the program
          is meant to move, measure it for a group that trained and a group that has not yet,
          value the gap at margin for one year, and divide by a cost that includes everyone’s time.
          In the published retail case, that discipline turned a tempting 215 percent into a
          credible 118 percent, which was still well above the 25 percent target.
        </p>
        <p>
          If you are starting from zero, start with ramp time. Training owns onboarding, the Bridge
          Group puts the average at 6.2 months and rising, and a single month saved is worth tens of
          thousands of dollars of quota per hire. Record every hire’s ramp now, stagger the next
          cohort, and you will have an ROI you can defend by the end of the second quarter.
        </p>
      </Section>

      <CtaBlock
        headline="Measure the skill before the revenue"
        body="Reps rehearse discovery, objections and pricing with an AI buyer built from your playbook, and every session is scored against your rubric, so you see level 2 evidence in week one. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['how-much-does-sales-training-cost', 'sales-coaching-framework', 'ai-roleplay-pricing', 'objection-handling-techniques']} />
      </section>
    </PostShell>
  )
}
