import Link from 'next/link'
import { AnimatedBars, Figure } from '@/components/blog/figures'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, toc } from './content'
import { InvoiceIceberg, PriceStaircaseHero, PriceVisibilityGrid } from './figures-market'
import { BudgetCalculator, PracticeRepCost } from './figures-practice'

const SRC = {
  harris: 'https://theharrisconsultinggroup.com/sales-training-cost/',
  salesFix: 'https://local.salesfixx.com/sales-pricing-benchmark',
  trainingCost: 'https://trainingcost.com/by-type/sales-training',
  durhamLane: 'https://durhamlane.com/blog/b2b-sales-training-programs',
  kayvon: 'https://kayvon.com/articles/best-corporate-sales-training-programs',
  coldOpen: 'https://getcoldopen.com/blog/sales-training-program-costs-compared',
  braintrust:
    'https://braintrustgrowth.com/how-much-does-sales-training-cost-a-2026-pricing-guide-for-enablement-leaders',
  cardone: 'https://training.grantcardone.com/cardoneuniversity',
  trainingMag: 'https://trainingmag.com/2025-training-industry-report',
  atd: 'https://www.td.org/content/atd-blog/2026-state-of-the-industry-report-indicates-latest-td-trends',
  blsTable: 'https://www.bls.gov/news.release/ocwage.t01.htm',
  blsManagers: 'https://www.bls.gov/ooh/management/sales-managers.htm',
  ttai: 'https://www.toughtongueai.com/pricing/',
  yoodli: 'https://yoodli.ai/pricing',
  hyperbound: 'https://www.hyperbound.ai/pricing',
  quotain: 'https://www.quotain.com/blog/best-ai-sales-roleplay-platforms',
}

export default function SalesTrainingCostPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Sales training runs from free to a quarter of a million dollars a year. Most of the big names will not tell you their price, and the number on the quote leaves out the most expensive part: your team’s time. Here is what is published, what is not, and how to price the rest."
      />
      <PriceStaircaseHero />

      <Section id="quick-answer" title="How much does sales training cost?">
        <Callout label="Quick answer">
          <p>
            Self-paced online sales training costs <strong>$100 to $1,000 per person</strong>.
            Open-enrollment and cohort programs cost <strong>$400 to $5,000 per person</strong>.
            A private half-day workshop costs <strong>$8,000 to $12,000</strong>, and a custom
            program for a team of up to 20 costs <strong>$15,000 to $30,000</strong>. Managed
            programs with ongoing coaching run <strong>$120,000 to $250,000 a year</strong>.
          </p>
          <p>
            On top of every one of these, add rep time. A 16-hour program costs about{' '}
            <strong>$538 per rep in wages</strong> at the US median, before anyone has
            practiced a single call.
          </p>
        </Callout>
        <p>
          The ranges come from{' '}
          <ExtLink href={SRC.harris}>The Harris Consulting Group (August 2026)</ExtLink> and{' '}
          <ExtLink href={SRC.salesFix}>Sales Fix (July 2026)</ExtLink>, two firms that sell
          training and publish their market ranges. They are wide for a reason. As you move up
          the staircase above, the unit you pay for changes from a person to a team, and what
          you buy changes from content to practice and reinforcement.
        </p>
        <p>
          That second shift matters more than the first. A $297 course and a $30,000 team
          program can teach the same framework. The expensive one buys hours of live practice,
          a trainer who adapts to your deals, and someone checking in after the workshop ends.
          If a quote does not say what happens after day two, you are paying for content at a
          practice price.
        </p>
      </Section>

      <Section id="per-person" title="Sales training cost per person, by format">
        <p>
          Most buyers start by asking for a per-rep number, so here is the market sorted that
          way. The ranges are estimates from firms in the market, not list prices, and they
          overlap because the same format can be thin or deep.
        </p>
        <DataTable
          columns={['Format', 'Typical price', 'What you mostly get', 'Source']}
          rows={[
            ['Free or freemium course', '$0', 'Frameworks and videos', 'Sales Fix, Jul 2026'],
            ['Self-paced online course', '$100 to $1,000 per person', 'Content, quizzes, sometimes a certificate', 'Harris, Aug 2026'],
            ['Open-enrollment or cohort seat', '$400 to $5,000 per person', 'Live sessions with other companies, some role-play', 'Harris, Aug 2026'],
            ['Private half-day workshop', '$8,000 to $12,000', 'A trainer focused on one skill for your team', 'Harris, Aug 2026'],
            ['Custom program, up to 20 people', '$15,000 to $30,000', 'Discovery, tailored material, reinforcement', 'Harris, Aug 2026'],
            ['On-site trainer day rate', '$5,000 to $15,000 per day', 'In-person delivery', 'Sales Fix, Jul 2026'],
            ['Managed program with coaching', '$120,000 to $250,000 a year', 'Training plus ongoing coaching for a team', 'Sales Fix, Jul 2026'],
          ]}
          note="Harris puts heavily customized programs with manager enablement and measurement at $25,000 to $50,000."
        />
        <p>
          Sales Fix makes a point worth repeating: what separates these tiers is reinforcement,
          not content quality. A self-paced course is fine for learning what MEDDPICC stands for.
          It will not make a rep comfortable saying “that is more than we budgeted” back to a
          buyer, because that takes repetitions with someone pushing back.
        </p>
      </Section>

      <Section id="published-prices" title="Why is it so hard to find a sales training price?">
        <p>
          Because most of the well-known programs do not publish one. When we lined up twelve
          names that buyers compare, seven of them quote only on request.
        </p>
        <PriceVisibilityGrid />
        <p>
          <strong>Sandler</strong> is quote-only for a structural reason: it runs as a franchise,
          and each local training center sets its own price. You will often see a $65,000 figure
          next to Sandler in search results. As{' '}
          <ExtLink href={SRC.kayvon}>Kayvon Kay points out</ExtLink>, that is the fee to buy a
          Sandler franchise, not the cost of training your team. <strong>Challenger</strong>,{' '}
          <strong>Korn Ferry</strong> and <strong>RAIN Group</strong> also quote per engagement,
          and{' '}
          <ExtLink href={SRC.coldOpen}>Cold Open found in July 2026</ExtLink> that every path on
          the NEPQ (7th Level) site leads to a strategy call rather than a price.
        </p>
        <p>The programs that do publish are useful anchors when you negotiate with the ones that do not:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>MEDDIC Academy</strong>: $297 for the full MEDDPICC course and $597 for the
            advanced course, per{' '}
            <ExtLink href={SRC.trainingCost}>TrainingCost.com (verified September 2026)</ExtLink>.{' '}
            <ExtLink href={SRC.durhamLane}>Durham Lane</ExtLink> lists the renewal at $97 a year.
          </li>
          <li>
            <strong>Winning by Design</strong>: $1,500 per person for an open course with live
            online role-play, or $30,000 for private training for eight or more learners (Durham
            Lane, September 2026).
          </li>
          <li>
            <strong>Dale Carnegie</strong>: $1,995 to $2,295 per seat for Winning with
            Relationship Selling across US franchises (TrainingCost.com, September 2026).
          </li>
          <li>
            <strong>Grant Cardone University</strong>: individual video programs list at $297 to
            $1,095, shown at a limited-time $97 to $297 on its{' '}
            <ExtLink href={SRC.cardone}>own page</ExtLink> in November 2026.
          </li>
        </ul>
        <p>
          Quote-only is not a red flag on its own. Custom work is hard to price on a web page.
          But it shifts the work to you: get a per-rep, first-year number and a renewal number in
          writing from every finalist, so you can line them up against the published anchors.
        </p>
      </Section>

      <Section id="hidden-costs" title="The cost of sales training that nobody quotes">
        <p>
          The largest line in a training budget is usually not on the invoice. It is the hours
          your reps spend in the room instead of selling, and the hours your managers spend
          preparing, following up and coaching.
        </p>
        <InvoiceIceberg />
        <p>
          Here is the arithmetic. The{' '}
          <ExtLink href={SRC.blsTable}>Bureau of Labor Statistics</ExtLink> puts the May 2025
          median wage for sales representatives of services at $33.65 an hour. A two-day, 16-hour
          program therefore costs about $538 per rep in wages alone. For ten reps at a $1,500 seat,
          the invoice says $15,000 and the wages add another $5,384, so the program costs about
          36 percent more than the quote before anything else is counted.
        </p>
        <p>
          That is a floor, not an estimate. Median base pay leaves out benefits and commission,
          and it says nothing about the deals that slipped while the team was out. For a team
          carrying quota at the end of a quarter, the lost selling time can be worth more than
          the training itself. This is one reason short, frequent practice is easier to defend
          than a two-day offsite: even when it adds up to the same rep hours, it never empties
          the floor at once.
        </p>
      </Section>

      <Section id="benchmarks" title="How much do companies spend on training per employee?">
        <p>
          If you need a benchmark for a budget conversation, the two standard sources are
          Training magazine’s annual Training Industry Report and ATD’s State of the Industry.
        </p>
        <Figure
          title="Average training spend per learner, US organizations with 100+ employees, 2025"
          caption="Covers all training, not only sales. ATD measures direct learning expenditure per employee across its own sample, which is why its figure differs slightly."
          source="Training magazine, 2025 Training Industry Report (November 2025); ATD, 2026 State of the Industry (May 2026, 2025 data)."
        >
          <AnimatedBars
            format="usd"
            items={[
              { label: 'Small organizations', value: 1091 },
              { label: 'All organizations', value: 874, highlight: true, note: 'Training magazine' },
              { label: 'ATD, direct spend per employee', value: 846 },
              { label: 'Midsize organizations', value: 782 },
              { label: 'Large organizations', value: 468 },
            ]}
          />
        </Figure>
        <p>
          <ExtLink href={SRC.trainingMag}>Training magazine</ExtLink> found organizations spent
          $874 per learner in 2025, up from $774 in 2024, for about 40 hours of training a year.
          Smaller organizations spend more per head ($1,091) than large ones ($468).{' '}
          <ExtLink href={SRC.atd}>ATD’s 2026 report</ExtLink> puts direct learning expenditure
          at $846 per employee for 2025, with 16.7 formal learning hours used.
        </p>
        <p>
          Both numbers cover every kind of training: compliance, software, leadership and sales
          together. Sales training sits well above them.{' '}
          <ExtLink href={SRC.braintrust}>Braintrust Growth</ExtLink> notes it routinely prices at
          two to four times the per-learner average, which matches the cohort seat prices above.
          If your finance team compares a $2,000 sales program to an $874 company average, that
          context helps.
        </p>
      </Section>

      <Section id="cost-per-practice" title="The number worth comparing: cost per practice rep">
        <p>
          Sales skills change through repetition. A rep handles a pricing objection well on a
          real call after handling it badly a dozen times in practice. So instead of comparing
          programs on price per seat, compare them on what one realistic practice repetition costs
          and how many each rep will actually get.
        </p>
        <PracticeRepCost />
        <p>
          A 20-minute roleplay with a manager playing the buyer costs about $23.76 of the
          manager’s time (at the{' '}
          <ExtLink href={SRC.blsManagers}>BLS median of $71.28 an hour</ExtLink>) and $11.22 of the
          rep’s, or $34.98 in total. The same 20 minutes against an AI buyer at $0.10 a minute
          costs $2.00 plus the same $11.22 of rep time, or $13.22.
        </p>
        <p>
          The money is not the main difference. The rep’s time is identical either way. What
          changes is that the manager-led version needs two calendars to line up, so in practice
          it happens a few times a quarter. The AI version can happen the night before a big call.
          Neither replaces the manager: an AI buyer is good at volume and consistency, and a
          manager is still the person who knows which deal is real and which habit to fix next.
          The strongest setups use AI for the repetitions and the manager for reviewing the two
          or three moments that matter.
        </p>
        <p>
          Two plans with similar budgets show the difference. A weak plan spends everything on a
          two-day workshop and stops there. A stronger plan buys a shorter workshop, then gives
          each rep two short practice rounds a week on the objections they actually hear, with a
          manager reviewing one recording a week. The second plan does not have to cost more, and
          it gives each rep about 26 repetitions a quarter instead of a handful.
        </p>
      </Section>

      <Section id="ai-roleplay-pricing" title="How much does AI sales roleplay software cost?">
        <Disclosure />
        <p>
          AI roleplay tools are the newest line in a training budget, and pricing is the first
          question buyers ask about them. Most enterprise tools still quote on request. These are
          the published prices as of November 2026:
        </p>
        <DataTable
          columns={['Tool', 'Published price (Nov 2026)', 'Unit']}
          rows={[
            [
              <ExtLink key="t" href={SRC.ttai}>Tough Tongue AI</ExtLink>,
              '25 free minutes; Starter $20/mo (150 min); Pro $99/mo (900 min); Business $299/mo (15 seats, 2,990 min); Growth $499/mo (25 seats); Momentum $999/mo (50 seats); Enterprise $0.07/min',
              'Pooled minutes; unused minutes roll over on Pro and team plans',
            ],
            [
              <ExtLink key="y" href={SRC.yoodli}>Yoodli</ExtLink>,
              'Free (5 lifetime sessions); Pro $8/mo and Advanced $20/mo, billed annually; Business quoted',
              'Per person; per seat for teams',
            ],
            [
              <ExtLink key="q" href={SRC.quotain}>Quotain</ExtLink>,
              'Starter $50 and Pro $100 per seat a month ($40 and $80 billed yearly)',
              'Per seat',
            ],
            [<ExtLink key="h" href={SRC.hyperbound}>Hyperbound</ExtLink>, 'Not published', 'Per user, quoted'],
            ['Second Nature', 'Not published (per Quotain, November 2026)', 'Quoted'],
          ]}
        />
        <p>
          The pricing unit matters as much as the price. Per-seat pricing is easy to forecast:
          you know the bill before anyone logs in. Per-minute pricing ties cost to use, which is
          cheaper when practice is uneven across a team, but raises a fair worry that reps will
          ration practice to save minutes. If you go with minutes, ask what happens to unused
          ones and whether you can pool them across the team. If you go with seats, ask what a
          seat includes and whether you can reassign it when someone leaves.
        </p>
        <p>
          For a side-by-side look at features rather than price, our{' '}
          <Link
            href="/blog/best-ai-sales-training-tools-2026"
            className="text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal"
          >
            guide to AI sales training tools
          </Link>{' '}
          compares Tough Tongue AI, Hyperbound, Second Nature, PitchMonster and Yoodli.
        </p>
      </Section>

      <Section id="calculator" title="Build your year-one sales training budget">
        <p>
          Put the pieces together. The calculator below adds program fees and a practice tool
          (the parts on an invoice) to rep and manager time (the parts that are not). Start from
          your own team size and wages; the defaults are only an example.
        </p>
        <BudgetCalculator />
        <p>
          With the default inputs, ten reps cost about $36,564 in year one, or $3,656 per rep, and
          49 percent of that is people’s time. That share surprises most finance teams, and it is
          the best argument for training formats that respect selling hours: shorter sessions,
          practice that fits between calls, and coaching aimed at specific moments instead of
          general ride-alongs.
        </p>
      </Section>

      <Section id="quote-questions" title="Seven questions to ask before you sign">
        <p>
          Whichever format you pick, these questions turn a vague quote into something you can
          compare:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>What is the per-rep price for year one, and what is it at renewal?</li>
          <li>What happens in the 90 days after the workshop, and is it included?</li>
          <li>How many live practice repetitions does each rep get, and who plays the buyer?</li>
          <li>Will the scenarios use our product, our buyers and our objections? What does that cost?</li>
          <li>Are travel, materials and certification fees extra?</li>
          <li>What are the minimums, contract length and seat reassignment rules?</li>
          <li>How will we see behavior change on real calls, and by when?</li>
        </ol>
        <p>
          A note on return-on-investment claims. You will see confident statistics about how much
          training reps forget or how much revenue programs add. Kayvon Kay’s 2026 comparison
          warns that most of the famous ones cannot be traced to a real study, and we have left
          them out of this post. Ask each vendor for evidence from customers like you instead.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Sales training costs $100 to $5,000 per person for most formats, $8,000 and up for
          private team work, and six figures a year for a managed program. Seven of the twelve
          vendors we looked at will not tell you their price until you call, so use the published
          anchors to keep quotes honest.
        </p>
        <p>
          The bigger lesson is that the invoice is only part of the cost. In our example plan it
          was about half; rep and manager time was the rest, and that is the part you can most
          easily waste. If your budget is small, pair
          a self-paced methodology course with weekly practice. If you are training a team of ten
          or more, buy a workshop only if it comes with a plan for the 90 days after, and price
          that plan per practice repetition, not per seat.
        </p>
        <p>
          If you want to see what a cheap practice repetition feels like, you can talk to an AI
          buyer in{' '}
          <ExtLink href="https://app.toughtongueai.com">Tough Tongue AI</ExtLink> with the free
          minutes, without booking a call.
        </p>
      </Section>

      <CtaBlock
        headline="Price a practice rep, not just a seat"
        body="Reps rehearse cold calls, discovery and pricing objections with an AI buyer built from your playbook, and managers review the moments that matter. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['best-ai-sales-training-tools-2026', 'ai-roleplay-pricing', 'parent-teacher-conference-role-play-scenarios', 'healthcare-sales-training']} />
      </section>
    </PostShell>
  )
}
