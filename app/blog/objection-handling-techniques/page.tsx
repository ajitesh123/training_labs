import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, techniques, toc } from './content'
import { ObjectionMovesHero, PauseRuler } from './figures-moves'
import { DrillPlan, ObjectionMatrix } from './figures-practice'
import { ObjectionMix, TechniquePicker } from './figures-techniques'

const SRC = {
  gongCold: 'https://www.gong.io/blog/we-found-the-top-objections-across-300m-cold-calls-heres-how-to-handle-them-all',
  gongLabs: 'https://www.gong.io/resources/labs/objection-handling-techniques',
  hubspot: 'https://blog.hubspot.com/sales/handling-common-sales-objections',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function ObjectionHandlingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most objection handling advice is a list of comebacks. A comeback only survives a real buyer if you have said it out loud a few dozen times. Here are seven techniques, each with a weak reply to drop, a stronger one to use, and a drill you can run in ten minutes a day."
      />
      <ObjectionMovesHero />

      <Section id="quick-answer" title="What are the best objection handling techniques?">
        <Callout label="Quick answer">
          <p>
            The objection handling techniques that hold up on real calls are{' '}
            <strong>acknowledge and ask, isolate the objection, feel felt found, reframe, boomerang,
            make the ask smaller, and proof from a similar customer</strong>. All seven sit inside the
            same five moves: pause, acknowledge in the buyer’s words, ask one question, check it is
            the only concern, then respond and confirm a next step.
          </p>
          <p>
            Knowing them is the easy part. Using them under pressure takes repetition: about{' '}
            <strong>100 two-minute drills a month</strong> if you practice ten minutes a day.
          </p>
        </Callout>
        <p>
          The guides that rank for this topic are good at lists.{' '}
          <ExtLink href={SRC.hubspot}>HubSpot’s guide (updated August 2026)</ExtLink> covers 44
          common objections with a reply for each. What they rarely cover is the gap between reading
          a reply and saying it calmly while a buyer sounds irritated. That gap is a practice
          problem, and this guide is built around it: every technique below comes with a drill and
          with the one thing to score, so you know whether a repetition counted.
        </p>
      </Section>

      <Section id="what-buyers-say" title="What objections do sales reps hear most?">
        <p>
          Fewer than you think.{' '}
          <ExtLink href={SRC.gongCold}>Gong analyzed more than 300 million cold calls</ExtLink> (July
          2024, updated November 2026) and sorted every objection into three kinds. Half are
          dismissive, close to half are situational, and fewer than one in ten are about a product
          the buyer already has.
        </p>
        <ObjectionMix />
        <p>
          Two things follow. First, about half of what a rep hears on a cold call is a reflex, not a
          judgment on the offer. “Not interested” from someone who has heard eight words is not a
          reason to argue. The job of the reply is to earn one more question, nothing bigger.
        </p>
        <p>
          Second, the list is short. Gong found that the five most common objections account for 74
          percent of everything reps hear. A rep who has drilled five strong replies is prepared for
          most calls, which is a far easier goal than memorizing 44. Late-stage deals bring other
          objections (procurement, security reviews, legal), but the same logic holds: find the few
          you hear most and drill those, using the matrix further down.
        </p>
      </Section>

      <Section id="five-moves" title="The five moves behind every technique">
        <p>
          Before any technique, there is a pace problem.{' '}
          <ExtLink href={SRC.gongLabs}>Gong Labs studied 67,149 sales meetings</ExtLink> and found
          that successful reps pause for longer after an objection than at any other point in a
          call, while less successful reps interrupt. Flustered reps also speed up: from a typical
          173 words per minute to 188.
        </p>
        <PauseRuler />
        <p>
          The pause is not a trick. It is the moment you decide which objection you are actually
          hearing, and it signals to the buyer that the concern was taken seriously. Every technique
          in this guide runs inside the same five moves:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Pause.</strong> Let the buyer finish, including the second sentence, which often holds the real concern.</li>
          <li><strong>Acknowledge in their words.</strong> “More than you budgeted.” Skip “I understand, but”; the “but” cancels the first half.</li>
          <li><strong>Ask one question.</strong> Find what sits under the stated objection before you answer it.</li>
          <li><strong>Isolate.</strong> “If that were sorted, is there anything else?” A second concern is often the real one.</li>
          <li><strong>Respond and confirm.</strong> Answer the concern you found, then propose a specific next step.</li>
        </ol>
        <p>
          This is close to LAER (listen, acknowledge, explore, respond), which HubSpot credits to
          Carew International and pairs with a first step, anticipating objections before the call.
          Here is the difference in practice. A weak reply to “it’s too expensive” starts with a
          return-on-investment speech. A strong reply says “too expensive compared to what?” and
          waits. The second rep learns whether the problem is the total, the timing of the payment,
          or a cheaper competitor, and each of those needs a different answer.
        </p>
      </Section>

      <Section id="techniques" title="Seven objection handling techniques, each with a drill">
        <p>
          Each technique below suits a different kind of objection. Pick one to see the objection it
          fits, a common weak reply, a stronger one, and how to practice it.
        </p>
        <TechniquePicker />
        <DataTable
          columns={['Technique', 'Use it when', 'The drill']}
          rows={techniques.map((t) => [t.name, t.bestFor, t.drill])}
        />
        <p>
          A few cautions. <strong>Feel, felt, found</strong> is so well known that buyers hear it
          coming; it only works when the “found” is a real, specific customer story.{' '}
          <strong>Boomerang</strong> can sound glib if the objection is a hard constraint, so use it
          only when the objection restates the problem you solve. And none of the seven starts with
          a discount. Leading with price on a timing or trust objection teaches the buyer that your
          price was never firm.
        </p>
        <p>
          You do not need all seven on day one. Most reps get the biggest gain from the first two,
          acknowledge and ask and isolate, because they change what happens before any answer is
          given.
        </p>
      </Section>

      <Section id="matrix" title="Build an objection matrix from your own calls">
        <p>
          Generic lists are a starting point. Your drills should come from what your buyers say. Pull
          your last 30 to 40 recorded calls, write down every objection, and mark the ones where the
          call ended. Then rank them on two axes: how often you hear each one, and how often it ends
          the conversation.
        </p>
        <ObjectionMatrix />
        <p>
          Objections in the top right are frequent and fatal: drill those first. Frequent but
          harmless ones, like “send me some information”, need one prepared line rather than daily
          practice. Rare but fatal ones, like a known competitor, come second. Redo the matrix every
          quarter; when a new product, price or competitor arrives, the top right changes.
        </p>
      </Section>

      <Section id="practice-plan" title="How to practice objection handling: a four-week plan">
        <p>
          The weak version of objection practice is a monthly team role-play where one rep performs
          in front of everyone and the rest watch. It produces one repetition per person, under
          stage fright. The stronger version is small and daily: ten minutes, the same five
          objections, two minutes per repetition, with the difficulty rising each week.
        </p>
        <DrillPlan />
        <p>
          Keep the objections fixed for the month and change only the difficulty. In week one the
          buyer raises one objection and accepts a good reply. In week two the buyer pushes back
          twice. In week three two objections arrive together, such as price and then timing. In
          week four the objection is buried inside a full call, the way it happens in real life.
          Record the repetitions; listening to one of your own replies each day teaches more than
          reading another list.
        </p>
        <p>
          If you are budgeting this for a team, our{' '}
          <Link href="/blog/how-much-does-sales-training-cost#cost-per-practice" className={LINK}>
            sales training cost guide
          </Link>{' '}
          works out what one practice repetition costs with a manager and with an AI buyer. Managers
          who want to fold these drills into a weekly routine can use our{' '}
          <Link href="/blog/sales-coaching-framework" className={LINK}>
            sales coaching framework
          </Link>
          , which turns one objection from a real call into a practice round and a live-call check.
        </p>
      </Section>

      <Section id="scoring" title="How to score an objection reply">
        <p>
          A repetition only helps if you can tell a good one from a bad one. Score each reply on
          five yes or no checks, one per move:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Did you pause before answering, instead of talking over the end of the objection?</li>
          <li>Did your first sentence use the buyer’s own words?</li>
          <li>Did you ask at least one question before giving an answer?</li>
          <li>Did you check whether anything else was in the way?</li>
          <li>Did you end with a specific next step: a time, a person, or a small ask?</li>
        </ol>
        <p>
          As a rule of thumb, move to the next week’s difficulty once you score four of five on
          three replies in a row. Also listen for speed. If your reply sounds faster than your
          opening, that is the 173 to 188 words per minute jump Gong describes, and the fix is the
          first check, not a better script.
        </p>
      </Section>

      <Section id="ai-practice" title="Practicing objections with an AI buyer">
        <Disclosure />
        <p>
          The bottleneck in the plan above is the partner. A colleague can play the buyer a few
          times a week; an AI buyer can raise the same objection the same way twenty times in a
          row, get more skeptical on request, and score each reply against your rubric. That makes
          it a good fit for the repetitions, while a manager stays the best judge of which habit to
          fix next.
        </p>
        <p>
          In <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, you can build a buyer from your own
          objection list and score replies with the five checks above. Pricing as of November 2026
          starts with 25 free minutes, then $20 a month for 150 minutes; a full month of the
          ten-minute plan is about 200 minutes per rep. For other options, see our{' '}
          <Link href="/blog/best-ai-sales-training-tools-2026" className={LINK}>
            guide to AI sales training tools
          </Link>{' '}
          and how{' '}
          <Link href="/blog/ai-roleplay-pricing" className={LINK}>
            AI roleplay pricing
          </Link>{' '}
          works per seat and per minute.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Objection handling techniques are easy to list and hard to use, because the buyer’s
          pushback arrives at the exact moment a rep’s pace and judgment slip. The data says the job
          is smaller than it looks: three kinds of objection, five of them covering 74 percent of
          cold call pushback, and one set of five moves underneath every good reply.
        </p>
        <p>
          Our recommendation: build an objection matrix from your last 40 calls this week, pick the
          five objections in the top right, and give each one a strong reply using acknowledge and
          ask plus isolate. Then drill them ten minutes a day for four weeks, raising the difficulty
          each week and scoring every repetition on the five checks. Add the other techniques only
          once the pause and the first question have become automatic.
        </p>
      </Section>

      <CtaBlock
        headline="Drill your top five objections, not forty-four"
        body="Build an AI buyer from your own objection list, practice the reply in two-minute reps, and score each one on the five moves. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['how-much-does-sales-training-cost', 'cold-call-practice', 'best-ai-sales-training-tools-2026', 'sales-role-play-interview']} />
      </section>
    </PostShell>
  )
}
