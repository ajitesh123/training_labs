import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, toc } from './content'
import { BreakEvenChart } from './figures-math'
import { PricingLanes, TeamUsageHero } from './figures-models'
import { MeterTimeline, QuoteChecklist } from './figures-quote'

const SRC = {
  ttai: 'https://www.toughtongueai.com/pricing/',
  quotain: 'https://www.quotain.com/pricing',
  kendo: 'https://www.kendo.ai/pricing',
  smtp: 'https://www.sellmethispen.ai/pricing',
  yoodli: 'https://yoodli.ai/pricing',
  pitchmonster: 'https://pitchmonster.io/pricing',
  hyperbound: 'https://www.hyperbound.ai/pricing',
  outdoo: 'https://www.outdoo.ai/pricing',
  aiStudios: 'https://www.aistudios.com/answers/ai-roleplay-tools-sales-training',
  zylo: 'https://zylo.com/news/2026-saas-management-index',
}

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function AiRoleplayPricingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="AI roleplay pricing comes in four different units, and the unit decides your bill more than the headline price does. Here is what nine tools publish, the math that tells you which unit is cheaper for your team, and the questions that make two quotes comparable."
      />
      <TeamUsageHero />

      <Section id="quick-answer" title="How is AI roleplay priced?">
        <Callout label="Quick answer">
          <p>
            AI roleplay pricing comes in four units: a <strong>seat</strong> per rep ($99 to $249 a
            month where published), a <strong>seat with a pooled minute allowance</strong> ($50 to
            $100 a seat for 180 to 480 minutes), a <strong>monthly block of minutes</strong> (from
            $299 for 2,990 minutes shared by up to 15 seats), or <strong>sessions</strong> for
            individuals (from $8 a month). Prices are as published in November 2026.
          </p>
          <p>
            Minutes are cheaper until the average rep practices more than the seat price divided
            by the minute rate. For a $50 seat against $0.10 a minute, that is{' '}
            <strong>500 minutes per rep a month</strong>, about 24 minutes every working day.
          </p>
        </Callout>
        <p>
          The chart above is the reason the unit matters. Ten reps on a $50 seat that includes 180
          minutes each paid for 1,800 minutes in the month. They practiced 600, and most of those
          came from three people. The list price was $0.28 a minute. The price they actually paid
          for each minute of practice was $0.83, three times higher.
        </p>
        <p>
          Nothing about that plan is unfair. It is simply priced for a team that practices
          evenly, and most teams do not. So before you compare vendors, figure out how your team
          will practice. Then pick the unit that fits that pattern, and only then compare prices.
        </p>
      </Section>

      <Section id="pricing-models" title="What are the four ways AI roleplay is priced?">
        <p>Every published plan we found in November 2026 uses one of these units:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Per seat, not metered.</strong> A flat monthly fee per rep, however much they
            practice. Easy to forecast, and you pay for quiet reps too.
          </li>
          <li>
            <strong>Per seat with a minute pool.</strong> Each seat adds a set number of minutes to
            one shared team pool. Heavy users can draw on the minutes light users leave.
          </li>
          <li>
            <strong>A minute block.</strong> You buy a monthly block of minutes for the team, with a
            cap on seats. Cost follows practice, with a floor at the block price.
          </li>
          <li>
            <strong>Sessions or credits.</strong> A count of roleplays per week or a balance of
            credits. Common on individual and free plans.
          </li>
        </ul>
        <PricingLanes />
        <p>
          The pattern switch is the useful part. A steady team, where every rep does two drills a
          week because a manager checks, gets good value from any unit, and a flat seat is the
          easiest to budget. An uneven team is the common case: a few reps prepare for big calls
          and several never start. A bursty team practices hard during onboarding or before a
          certification and then goes quiet, which is where minutes that roll over earn their keep.
        </p>
      </Section>

      <Section id="published-prices" title="What AI roleplay tools cost in November 2026">
        <Disclosure />
        <p>
          These are the prices each vendor publishes, read from their own pricing pages on 19
          November 2026. Where a vendor quotes instead, the table says so.
        </p>
        <DataTable
          columns={['Tool', 'Unit', 'Published price (Nov 2026)', 'Notes']}
          rows={[
            [<ExtLink key="t" href={SRC.ttai}>Tough Tongue AI</ExtLink>, 'Minute block', '25 free minutes; Starter $20/mo (150 min); Pro $99/mo (900 min); Business $299/mo (2,990 min, 15 seats); Growth $499/mo (6,000 min, 25 seats); Momentum $999/mo (13,000 min, 50 seats); Enterprise $0.07/min', 'Extra minutes $0.0768 to $0.1333; unused minutes roll over on Pro and team plans, reset on Starter'],
            [<ExtLink key="q" href={SRC.quotain}>Quotain</ExtLink>, 'Seat + minute pool', 'Starter $50 a seat (180 min); Pro $100 a seat (480 min); Enterprise custom', 'Pool resets monthly; only completed practice calls count'],
            [<ExtLink key="k" href={SRC.kendo}>Kendo</ExtLink>, 'Seat + minute pool', 'Pro $55 a seat (180 min); Max $100 a seat (480 min); Enterprise custom', 'Pro and Max include 25 or 100 hours of live call scoring'],
            [<ExtLink key="s" href={SRC.smtp}>SellMeThisPen</ExtLink>, 'Seat', 'Core $99, $129 or $179 a seat; with Real-Time $119, $169 or $249 (yearly)', 'Roleplay not metered; 5-seat minimum, 20 on the top plan'],
            [<ExtLink key="y" href={SRC.yoodli}>Yoodli</ExtLink>, 'Sessions; seats for teams', 'Free (5 lifetime sessions); Pro $8/mo (10 a week); Advanced $20/mo (unlimited), billed annually; Business quoted', 'Any session over 30 seconds counts'],
            [<ExtLink key="p" href={SRC.pitchmonster}>PitchMonster</ExtLink>, 'Seat', 'Quoted', '12-month standard term, 3 and 6 months possible; seats swap free'],
            [<ExtLink key="h" href={SRC.hyperbound}>Hyperbound</ExtLink>, 'User', 'Free plan (45 prebuilt roleplays); Practice and Perform quoted', 'Volume and multi-year discounts'],
            [<ExtLink key="o" href={SRC.outdoo}>Outdoo</ExtLink>, 'Credits, then quoted', 'Free (60 minutes of credits); Growth and Enterprise quoted', 'No card for the free plan'],
            ['Second Nature', 'Quoted', 'Not published', 'Per AI Studios’ review, November 2026'],
          ]}
          note="Bundles differ: Kendo and SellMeThisPen include live-call features that pure practice tools do not, so compare like with like."
        />
        <p>
          Two things stand out. First, the published seat prices cluster: two vendors sell 180
          pooled minutes for $50 to $55 a seat and 480 minutes for $100. Second, the tools that
          quote are the ones most enterprise buyers shortlist, so the published numbers are your
          anchors in that negotiation. For what each tool does beyond price, see our{' '}
          <Link href="/blog/best-ai-sales-training-tools-2026" className={LINK}>guide to AI sales training tools</Link>.
        </p>
      </Section>

      <Section id="break-even" title="Per seat vs per minute: where is the break-even?">
        <p>
          The break-even is one division: <strong>seat price ÷ per-minute rate</strong>. Below that
          many minutes per rep a month, paying by the minute costs less. Above it, an uncapped seat
          costs less. Move the sliders to your own quotes.
        </p>
        <BreakEvenChart />
        <p>
          With the defaults, a $50 seat and $0.10 a minute meet at 500 minutes per rep a month.
          That is about 24 minutes of live roleplay every working day, for every rep. Some programs
          do reach it, such as a new-hire class with daily drills. Most teams do not, and the
          last slider shows why the gap is wider than it looks: if only 70 percent of reps practice
          in a month, each practicing rep carries $71 of seat cost, and the break-even climbs to
          714 minutes.
        </p>
        <p>
          The comparison changes when a seat includes a pool. A $50 seat with 180 minutes is, in
          effect, a minute plan at $0.28 a minute with a floor of $50 a rep. That is still a fine
          deal for a team that uses its pool, and a poor one for a team that does not.
        </p>
      </Section>

      <Section id="practiced-minute" title="The number to compare: cost per practiced minute">
        <p>
          List prices tell you what a minute could cost. The number that matters is the monthly
          bill divided by the minutes your reps actually practiced. A weak comparison puts $50 a
          seat next to $0.10 a minute and picks the smaller number. A stronger one runs a 30-day
          pilot, exports minutes per rep, and works out what each plan would have charged for that
          exact month.
        </p>
        <p>
          Run the ten-rep month from the top of this post through three published shapes. On a
          $50 seat with a pool, 600 practiced minutes cost $500, or $0.83 each. On a $99 unmetered
          seat they cost $990, or $1.65 each. On a $299 block of 2,990 minutes they cost $0.50
          each, with 2,390 minutes left over that only help if they roll over. At 600 minutes no
          plan is cheap. The fix for an expensive practiced minute is usually more practice, not a
          cheaper plan.
        </p>
        <p>
          Unused capacity is normal in software, not a roleplay problem. The{' '}
          <ExtLink href={SRC.zylo}>Zylo 2026 SaaS Management Index</ExtLink> (January 2026) found
          organizations leave an average of 36 percent of their SaaS licenses unused, measured
          against industry-recommended utilization. Expect practice tools to behave the same way
          unless someone owns the habit, and price that in.
        </p>
        <p>
          For the wider budget, including rep and manager time, the{' '}
          <Link href="/blog/how-much-does-sales-training-cost" className={LINK}>sales training cost guide</Link>{' '}
          prices a single practice repetition against a manager-led roleplay.
        </p>
      </Section>

      <Section id="what-counts" title="What counts as a minute, a session or a seat?">
        <p>
          Two plans with the same price can charge differently for the same practice, because
          they count different things. Switch between the meters to see one realistic session
          counted three ways.
        </p>
        <MeterTimeline />
        <p>
          Retries are where meters disagree. A rep who fumbles the opening and immediately tries
          it again is doing exactly the practice you want. A minute meter charges two minutes for
          that. A weekly session cap charges a whole roleplay, so on a plan with ten a week the rep
          learns to avoid short retries. Ask each vendor to put the counting rule in writing:
          whether time spent reading feedback counts, what happens to a dropped call, and how short
          a session can be before it is free.
        </p>
      </Section>

      <Section id="rationing" title="Will reps ration practice on a per-minute plan?">
        <p>
          It is the fair objection to minutes, and it does happen when each rep watches a personal
          balance shrink. The fix is to stop treating minutes as an allowance and start treating
          them as assignments:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Pool minutes at the team level, and do not show reps a personal meter.</li>
          <li>
            Assign drills, not time: two 10-minute drills a week is about 87 minutes per rep a
            month.
          </li>
          <li>Budget the block as reps × assigned minutes, plus 20 percent for extra practice.</li>
          <li>Review usage monthly and move unused minutes to the reps with big calls coming up.</li>
        </ol>
        <p>
          Seat plans ration too, just less visibly. A weekly session cap limits retries, and a seat
          count decides who gets to practice at all. Whichever unit you choose, the manager’s
          weekly check matters more than the meter.
        </p>
      </Section>

      <Section id="quote-questions" title="Eight questions to ask before you sign">
        <p>
          A first quote usually names a unit and a price. Before you compare two vendors, get
          written answers to all eight of these, or you will be comparing different products.
        </p>
        <QuoteChecklist />
        <p>
          Builder costs deserve extra attention. A practice tool is only as good as its scenarios,
          and building scenarios from your own calls, objections and rubric can be included, sold
          as a workshop, or left to your team. Ask who builds the first five and who maintains them.
        </p>
      </Section>

      <Section id="which-model" title="Which AI roleplay pricing model fits your team?">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Per seat</strong> fits mandated, steady practice above the break-even, or when
            you also want bundled live-call features such as call scoring or real-time assist.
          </li>
          <li>
            <strong>Seat plus pool</strong> fits teams that want a per-rep line in the budget but
            practice unevenly, since heavy users draw on the shared pool.
          </li>
          <li>
            <strong>A minute block</strong> fits uneven or bursty practice, pilots and onboarding
            cohorts, as long as unused minutes roll over.
          </li>
          <li>
            <strong>Sessions</strong> fit one person preparing for their own calls.
          </li>
        </ul>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          AI roleplay pricing looks simple until you notice that vendors charge for different
          things. Published seats run $50 to $249 a month, pooled minute blocks start at $299 for a
          team, and individual plans start at $8. None of those numbers tells you what you will pay
          per minute of real practice.
        </p>
        <p>
          Start from how your team will practice. If every rep will drill daily, seats are simple
          and fair. If practice will be uneven, which is the common case, choose pooled minutes and
          make sure they roll over. Either way, run a 30-day pilot, compute the cost per practiced
          minute from real usage, and get all eight quote questions answered in writing.
        </p>
        <p>
          To see what a practiced minute feels like before you budget for thousands, you can try
          an AI buyer in <ExtLink href="https://app.toughtongueai.com">Tough Tongue AI</ExtLink> with
          25 free minutes.
        </p>
      </Section>

      <CtaBlock
        headline="Pay for practice that happens"
        body="Pool minutes across your team, roll over what you do not use, and build scenarios from your own calls and rubric. Start with 25 free minutes, then talk to us about a pilot."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['how-much-does-sales-training-cost', 'best-ai-sales-training-tools-2026']} />
      </section>
    </PostShell>
  )
}
