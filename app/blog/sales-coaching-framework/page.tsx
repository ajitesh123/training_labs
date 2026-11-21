import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, toc } from './content'
import { CoachingCardHero, CoverageFigure } from './figures-hero'
import { CoachingNoteCompare, ModelPicker } from './figures-loop'
import { BehaviorTracker, TimeBudget } from './figures-time'

const SRC = {
  ambition:
    'https://cdn.prod.website-files.com/69898e563b7bb8b3fcfe9b5d/6a7e5bde38108c7abf673a2f_Ambition-State-of-Sales-Coaching-Updated-Compressed.pdf',
  msc: 'https://www.mysalescoach.com/sales-coaching-statistics',
  alexander:
    'https://www.alexandergroup.com/insights/what-is-the-right-span-of-control-for-first-line-sales-managers-flsms',
  grow: 'https://www.performanceconsultants.com/grow-model',
  oskar: 'https://coachpro.tools/en/blog/104-sales-coaching-models.html',
  clear: 'https://www.dummies.com/article/use-clear-model-business-coaching-245380',
  snapLive: 'https://www.snapsdr.com/blog/real-time-sales-coaching',
  snapScenarios: 'https://www.snapsdr.com/blog/sales-role-play-scenarios',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function SalesCoachingFrameworkPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most sales coaching frameworks fail for a boring reason: they do not fit into a manager’s week. This sales coaching framework does. It takes about 30 minutes per rep, runs on one moment from one recorded call, and ends with proof from a live call before Friday. Here is the loop, the time budget, the conversation models that slot into it, and how to tell it is working."
      />
      <CoachingCardHero />

      <Section id="quick-answer" title="What is a sales coaching framework?">
        <Callout label="Quick answer">
          <p>
            A sales coaching framework is the <strong>fixed weekly routine</strong> a manager uses
            to change how a rep sells. The one in this guide has four steps:{' '}
            <strong>watch</strong> one moment from a recorded call, <strong>name</strong> one
            behavior with a pass line, let the rep <strong>rehearse</strong> it, and{' '}
            <strong>check</strong> for it on a live call before the week ends.
          </p>
          <p>
            It costs about <strong>30 minutes of manager time per rep per week</strong>. Use GROW,
            OSKAR or CLEAR to run the conversation in step two, and keep deal reviews in a separate
            slot so the urgent deal does not eat the skill work.
          </p>
        </Callout>
        <p>
          The card above is one week of that loop for one rep. On Monday the manager finds the
          moment the call turned: the buyer mentioned a budget freeze and the rep jumped to a
          discount. On Tuesday they agree on one thing to do differently and what passing looks
          like. The rep rehearses it three times, fails once, and on Friday the manager finds the
          new behavior on a real call. Nothing on the card is a general opinion about the rep. Every
          line points at something that happened or will happen on a call.
        </p>
        <p>
          That is the difference between a framework and a model. GROW, OSKAR and CLEAR are orders
          of questions for one conversation. A framework decides what evidence starts the
          conversation, what the rep does afterwards, and how anyone knows it changed anything.
        </p>
      </Section>

      <Section id="why-frameworks-stall" title="Why do most sales coaching frameworks stall?">
        <p>
          Most teams already have one on paper. In{' '}
          <ExtLink href={SRC.ambition}>Ambition’s survey of 312 sales leaders (June 2026)</ExtLink>,
          77 percent said they had some form of coaching framework, but only 38 percent said every
          manager actually used it, and 17 percent had none. Only 30 percent coached weekly or every
          two weeks.
        </p>
        <p>
          Reps notice. <ExtLink href={SRC.msc}>MySalesCoach’s 2026 research</ExtLink> found that 41
          percent of sales reps say they are never or rarely coached, and 45 percent rate the
          coaching they get as below average, up from 29 percent in 2025. Only 34 percent of sales
          managers have ever had any training in how to coach.
        </p>
        <CoverageFigure />
        <p>
          The strongest pattern in Ambition’s data is coverage. Where more than three quarters of
          reps got a structured session every week, 54 percent of organizations reported 71 percent
          or higher quota attainment. Where fewer than a quarter did, 25 percent did. Consistent use
          of a framework showed the same shape: 37 percent against 22 percent with no framework.
          These are self-reported correlations from a vendor that sells coaching software, so read
          them as a direction, not a forecast. But the direction is useful: reach every rep, every
          week, the same way.
        </p>
        <p>In our reading, frameworks stall for four reasons, and the loop below is built to avoid each:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Too long.</strong> An hour per rep is easy to promise and easy to cancel.</li>
          <li><strong>Too vague.</strong> “Be more consultative” cannot be checked, so it is never checked.</li>
          <li><strong>Mixed with deal reviews.</strong> The forecast always wins the meeting.</li>
          <li><strong>No practice in between.</strong> The rep’s next attempt is in front of a real buyer.</li>
        </ul>
      </Section>

      <Section id="weekly-loop" title="The weekly loop: watch, name, rehearse, check">
        <p>
          Each step has one job, a fixed length and an owner. The minutes are a starting point; the
          order is the part to keep.
        </p>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Watch (manager, 10 minutes).</strong> Open one recorded call from the past week
            and find the single moment where it turned. Write down the timestamp and the buyer’s
            exact words. Resist the urge to list five things. If you cannot find a moment in ten
            minutes, pick a different call, not more moments.
          </li>
          <li>
            <strong>Name (manager and rep, 15 minutes).</strong> Play the clip and ask the rep what
            they hear before you say anything. Then agree on one behavior and a pass line: what the
            rep will say or do next time, stated so that anyone listening could mark it pass or fail.
          </li>
          <li>
            <strong>Rehearse (rep alone, two or three short rounds).</strong> The rep practices that
            exact moment until a round passes. A peer can play the buyer, so can the manager, so
            can an AI buyer. What matters is that the first new attempt is not on a live deal.
          </li>
          <li>
            <strong>Check (manager, 5 minutes).</strong> Before the week ends, scan one or two of the
            rep’s live calls for the same moment. Mark pass or not on the card. That mark is the
            first thing you look at in next week’s session.
          </li>
        </ol>
        <p>
          The loop borrows its spine from how any skill is learned: see the gap, define the target,
          practice, test. What makes it a framework is that every manager on the team runs it the
          same way, every week, with every rep, and that the output is a card a second manager could
          pick up and understand.
        </p>
      </Section>

      <Section id="coaching-notes" title="What a good coaching note looks like">
        <p>
          The name step is where most coaching goes soft. A manager hears a weak pricing call and
          says “stop discounting so fast.” The rep agrees, means it, and discounts on the next call
          anyway, because nothing told them what to do instead at the moment it mattered.
        </p>
        <CoachingNoteCompare />
        <p>A useful pass line has three properties:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Observable.</strong> It describes words or actions, not attitudes. “Ask what they are comparing” passes; “be confident” does not.</li>
          <li><strong>Binary.</strong> Two people listening to the same call would mark it the same way.</li>
          <li><strong>Due soon.</strong> It shows up on calls the rep already has this week.</li>
        </ul>
        <p>
          If your team already uses a call scorecard, the pass line is one row of it, made specific
          to this rep and this week. Our guide to{' '}
          <Link href="/blog/objection-handling-techniques" className={LINK}>
            objection handling techniques you can practice
          </Link>{' '}
          has ready-made behaviors for the pricing, timing and competitor moments that come up most.
        </p>
      </Section>

      <Section id="time-budget" title="How much time does weekly sales coaching take?">
        <p>
          Less than most managers already spend. The{' '}
          <ExtLink href={SRC.alexander}>Alexander Group benchmark</ExtLink> puts first-line sales
          managers at 16 percent of their time spent coaching, against a best practice of 28
          percent, with an average of 8.5 direct reports. In a 40-hour week, 16 percent is 6.4 hours.
        </p>
        <TimeBudget />
        <p>
          With 8 reps, the 30-minute loop takes 4 hours a week, or 10 percent of a 40-hour week. Add
          10 minutes of deal review per rep and it is 5.3 hours, still under the average share.
          Push the reps slider to 17 and the same loop crosses the best-practice line, which is the
          honest answer to a question every sales leader eventually asks: at some span, the coaching
          plan stops fitting, and you need either shorter steps or another manager.
        </p>
        <p>
          A weak plan spends the same hours unevenly: an hour every two weeks with the two reps who
          are struggling and none with the middle of the team. A stronger plan gives every rep 30
          minutes every week. When time is tight, shorten the steps before you skip reps, because
          coverage is the part the survey data keeps pointing to.
        </p>
      </Section>

      <Section id="models" title="GROW, OSKAR or CLEAR: which sales coaching model?">
        <p>
          Sales coaching models are question orders for the name step. None was built for sales, and
          you do not need to pick one forever. Pick by the rep in front of you this week.
        </p>
        <ModelPicker />
        <DataTable
          columns={['Model', 'Steps', 'Best for', 'Watch out for']}
          rows={[
            [
              <ExtLink key="g" href={SRC.grow}>GROW</ExtLink>,
              'Goal, Reality, Options, Will',
              'A rep who can see the gap in the clip',
              'Letting the rep set a goal the buyer never offered',
            ],
            [
              <ExtLink key="o" href={SRC.oskar}>OSKAR</ExtLink>,
              'Outcome, Scaling, Know-how, Affirm and action, Review',
              'A rep in a slump, who needs to see what still works',
              'A 0 to 10 score with no call evidence behind it',
            ],
            [
              <ExtLink key="c" href={SRC.clear}>CLEAR</ExtLink>,
              'Contracting, Listening, Exploring, Action, Review',
              'A rep who is unsure what to work on',
              'Spending the whole 15 minutes listening',
            ],
          ]}
          note="GROW: developed by Sir John Whitmore and peers in the late 1980s and early 1990s (Performance Consultants). OSKAR: Mark McKergow and Paul Z. Jackson, around 2000 (CoachPro Tools, October 2026). CLEAR: Peter Hawkins, early 1980s (Dummies, citing Hawkins and Smith). Pages read November 2026."
        />
        <p>
          Whichever model you use, anchor the reality step in the recording, not in memory. “What
          did the buyer say at 18:30?” gets a better answer than “how do you think the pricing
          conversation went?”, because the rep cannot argue with the clip.
        </p>
      </Section>

      <Section id="skill-vs-deal" title="Keep skill coaching separate from deal reviews">
        <p>
          A deal review asks what is true about an opportunity: stage, budget, decision maker, next
          step. Skill coaching asks what the rep will do differently on every call that looks like
          this one. Both are worth doing. They are bad roommates.
        </p>
        <p>
          A weak one-on-one opens with “where are we with Northwind?” and 25 minutes later there is
          no time for the clip. A stronger week runs the skill loop in the first 15 minutes of the
          one-on-one and moves deal questions to the team pipeline meeting, or to a separate
          10-minute slot that the calculator above counts on its own. If a deal needs help before a
          big call, that is a third thing: a short prep session on that call, which can later become
          next week’s clip.
        </p>
        <p>
          Live call assist tools that prompt reps during a call are a different layer again. Our
          sister site covers{' '}
          <ExtLink href={SRC.snapLive}>how real-time sales coaching works and when it helps</ExtLink>.
        </p>
      </Section>

      <Section id="monthly-layer" title="The monthly and quarterly layer">
        <p>
          The weekly loop works on one rep at a time. Two lighter routines keep the team pointed in
          the same direction and the managers scoring the same way.
        </p>
        <DataTable
          columns={['Rhythm', 'What happens', 'Who', 'Time', 'Output']}
          rows={[
            ['Weekly', 'Watch, name, rehearse, check', 'Manager and each rep', '30 min per rep', 'One coaching card per rep'],
            ['Weekly', 'Deal review', 'Manager and each rep, or team', '10 min per rep', 'Next steps on live deals'],
            ['Monthly', 'Pick one team focus behavior from the cards', 'Sales leader and managers', '30 min', 'The focus for most cards next month'],
            ['Monthly', 'Calibration: every manager scores the same two recordings', 'All managers', '45 min', 'Shared pass lines'],
            ['Quarterly', 'Review the cards, retire passed behaviors, update the playbook', 'Sales leader and enablement', '2 hours', 'A playbook that matches real calls'],
          ]}
          note="Example cadence. Times are starting points, not benchmarks."
        />
        <p>
          The team focus behavior does not replace each rep’s card. It is a default: when a manager
          cannot find a clear moment in a call, they look for the team focus first. It also means
          practice scenarios can be shared across the team, which saves everyone time.
        </p>
        <p>
          Calibration is the step teams skip and regret. If one manager passes “asked about the
          budget” for any question and another wants a question about what changed, reps get
          different coaching for the same call. Forty-five minutes a month scoring two shared
          recordings fixes most of that.
        </p>
      </Section>

      <Section id="measure" title="How do you know the coaching framework is working?">
        <p>
          Look at the behavior before you look at quota. Quota moves late and has many causes; the
          coached behavior either shows up on this week’s calls or it does not.
        </p>
        <BehaviorTracker />
        <p>
          Rep A shows the pattern you want: one of four calls in the first week, three of four by the
          third, and a move to the next behavior after two strong weeks. Rep B is the more common
          problem. Rep B passed the practice rounds but not the live calls, which usually means the
          practice round was too easy or too polite. The fix is a harder round, closer to how real
          buyers push back, not another conversation about the same behavior.
        </p>
        <p>After that, three measures are worth a monthly look:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Coverage:</strong> the share of reps with a completed card this week. Aim for every rep.</li>
          <li><strong>Pass rate on live calls</strong> for the team focus behavior, month over month.</li>
          <li><strong>Stage conversion</strong> where the behavior lives, such as discovery to proposal for impact questions.</li>
        </ul>
      </Section>

      <Section id="practice" title="Where AI practice fits in the framework">
        <Disclosure />
        <p>
          The rehearse step is the one most frameworks leave empty, because it needs someone to play
          the buyer. Managers rarely have the time, peers are polite, and the rep’s next attempt ends
          up being a live deal.
        </p>
        <p>
          This is where an AI buyer is genuinely useful. In{' '}
          <ExtLink href="https://app.toughtongueai.com">Tough Tongue AI</ExtLink>, a manager can turn
          the moment from the card into a short roleplay: a buyer who says the budget is frozen and
          pushes for a discount, scored against the pass line you wrote. The rep can run it three
          times the same evening. As of November 2026 there are{' '}
          <ExtLink href={SRC.ttai}>25 free minutes</ExtLink>, and team plans start at $299 a month for
          15 seats and 2,990 minutes. Peers and managers can play the buyer too, and some days they
          should, because a person who knows the account adds things an AI buyer cannot. For a
          comparison of tools, see our{' '}
          <Link href="/blog/best-ai-sales-training-tools-2026" className={LINK}>
            guide to AI sales training tools
          </Link>
          ; for how the pricing models differ, see{' '}
          <Link href="/blog/ai-roleplay-pricing" className={LINK}>
            per-seat vs per-minute AI roleplay pricing
          </Link>
          .
        </p>
        <p>
          If you want a starting set of practice scenarios beyond the moment on the card, our sister
          site has{' '}
          <ExtLink href={SRC.snapScenarios}>twelve sales role play scenarios with buyer briefs</ExtLink>.
          And if you are building the business case, our breakdown of{' '}
          <Link href="/blog/how-much-does-sales-training-cost" className={LINK}>
            what sales training costs
          </Link>{' '}
          prices a practice repetition against a manager’s hour.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          A sales coaching framework managers will use every week is small on purpose: one moment,
          one behavior, a few practice rounds and one check, about 30 minutes per rep. Run it with
          every rep, every week, and use GROW, OSKAR or CLEAR for the conversation depending on who
          is in front of you.
        </p>
        <p>
          Start next Monday with your three newest reps and a single team focus behavior. Keep the
          cards for a month, then calibrate on two shared recordings before you roll the loop out to
          everyone. If the cards show reps passing practice but not live calls, make the practice
          harder before you add more meetings.
        </p>
      </Section>

      <CtaBlock
        headline="Give every rep a practice round this week"
        body="Turn the moment you coached into an AI buyer your rep can rehearse against tonight, scored against the pass line you wrote. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['objection-handling-techniques', 'how-much-does-sales-training-cost', 'best-ai-sales-training-tools-2026', 'sales-role-play-interview']} />
      </section>
    </PostShell>
  )
}
