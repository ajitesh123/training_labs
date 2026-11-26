import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { RedoRoundsFigure, ReviewTimeFigure } from './figures-practice'
import { ProblemPickerFigure, TellVsAskFigure } from './figures-review'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'
const H3 = 'font-mono text-[17px] font-semibold uppercase text-ink'

// ------------------------------------------------------------------------------
// in the review: techniques 3 to 5
// ------------------------------------------------------------------------------
export function DuringSection() {
  return (
    <Section id="during" title="In the review: three techniques">
      <h3 className={H3}>3. Ask before you tell</h3>
      <p>
        Open with a question about intent, not a verdict: “What did you want to happen when she
        asked the price?” Then ask what the buyer did next. Most reps find the problem themselves
        within two questions, and a fix they name is one they will actually try.{' '}
        <ExtLink href={SRC.msc}>MySalesCoach</ExtLink> suggests a useful check for managers mid-session,
        WAIT: why am I talking?
      </p>
      <TellVsAskFigure />
      <p>
        In the telling version, the manager says 92 percent of the words, covers four topics and
        gets a “got it”. In the asking version, the manager’s share drops to 38 percent, the rep
        explains what went wrong in their own words, and the session ends with the rep about to
        try the moment again. Asking is not slower, either: both conversations take under a
        minute to say.
      </p>
      <h3 className={H3}>4. Quote the exact words, about the task</h3>
      <p>
        When you do give your view, quote the timestamp, what was said and what the buyer did
        next: “At 14:32 she asked the price, you named a discount, and she asked you to send
        something.” That is a fact the rep can check, and it points at a move, not a trait.
      </p>
      <p>
        Compare “you get nervous on price”. It may be true, but it describes the person, gives the
        rep nothing to replay, and invites a defense. This is exactly the kind of self-focused
        feedback that the Kluger and DeNisi analysis found works less well.
      </p>
      <h3 className={H3}>5. Model the better line once</h3>
      <p>
        Sometimes the rep cannot find the better move alone. Then say it, once, in one or two
        sentences: “Fair question. Before I give you a number, what are the others quoting, and
        per what?” Then stop and hand it back: “Now your version.”
      </p>
      <p>
        The weak version is the manager performing the whole call as they would have run it. It
        is entertaining and it teaches a style the rep cannot copy. One line, said plainly, gives
        the rep something to adapt into their own words.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// after the review: techniques 6 to 8
// ------------------------------------------------------------------------------
export function AfterSection() {
  return (
    <Section id="after" title="After the review: three techniques">
      <h3 className={H3}>6. Redo the moment out loud, three times</h3>
      <p>
        This is the step most reviews skip and the one that matters most. You play the buyer and
        say the same line each time. The rep answers out loud, you score it on two or three
        checks, and you go again until it passes. Each try takes under a minute.
      </p>
      <RedoRoundsFigure />
      <p>
        Attempt two is the usual trap: the rep asks the right question, then drops the answer and
        quotes the price anyway. That is why the checks matter. “Asked before quoting” passes, but
        the price is still not tied to anything the buyer cares about. By attempt three the rep is
        using what the buyer said and ending on a next step. Our guide to{' '}
        <Link href="/blog/objection-handling-techniques" className={LINK}>
          objection handling techniques
        </Link>{' '}
        has more replies to drill this way.
      </p>
      <h3 className={H3}>7. Play a contrast clip</h3>
      <p>
        Keep a folder of 60-second clips, organized by moment: the price question, the first
        product mention, the close. When a rep struggles with one, play a teammate handling the
        same moment well. Hearing a peer do it on a real buyer is more convincing than any
        manager line, because it proves the move works with your buyers.
      </p>
      <p>
        The weak version is forwarding a top performer’s whole call with “listen to how she does
        it”. Nobody listens to 30 minutes to find the part that matters. The clip should start a
        few seconds before the moment and end a few seconds after.
      </p>
      <h3 className={H3}>8. Check the same moment on the next live call</h3>
      <p>
        End the review by naming what you will look for: “Next price question, I’m listening for
        one question before the number.” The following week, find that moment first and mark it
        pass or miss before anything else. Without this step, nobody knows whether the coaching
        worked.
      </p>
      <p>
        If your team scores calls, SnapSDR’s guide to building a{' '}
        <ExtLink href={SRC.snapScorecard}>sales call scorecard</ExtLink> has templates. For coaching,
        one line of it is enough: the line you practiced.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// technique by problem
// ------------------------------------------------------------------------------
export function ByProblemSection() {
  return (
    <Section id="by-problem" title="Which coaching technique fits which problem">
      <p>
        The eight moves stay the same, but what you look for and what the rep drills changes
        with the problem. Here are four common ones from discovery calls, each worked into a
        short plan.
      </p>
      <ProblemPickerFigure />
      <p>
        Two of these are about timing rather than words. Pitching too early and talking over the
        buyer both show up in the clock: when the first product word appears, and how often a
        buyer sentence gets cut off. SnapSDR’s guide to the{' '}
        <ExtLink href={SRC.snapTalk}>talk-to-listen ratio</ExtLink> covers how to read those numbers
        without turning them into a target.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// time budget
// ------------------------------------------------------------------------------
export function TimeSection() {
  return (
    <Section id="time" title="How long should a sales call review take?">
      <p>
        Time is the reason most managers stop reviewing calls. A full call reviewed together
        costs an hour per rep. A flagged moment costs about 20 minutes. Change the inputs to match
        your team.
      </p>
      <ReviewTimeFigure />
      <p>
        With eight reps and 30-minute calls, whole-call reviews take 8 hours a week and
        one-moment reviews take about 2.7. The difference is not just hours. A shorter review
        happens every week, and a weekly loop on one moment is what moves behavior. Spend part of
        the freed time on a second review with your newest reps.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// where AI practice fits
// ------------------------------------------------------------------------------
export function AiPracticeSection() {
  return (
    <Section id="ai-practice" title="Where AI practice fits in sales coaching">
      <p>
        AI helps on both ends of a review. Conversation intelligence tools find candidate moments
        faster than listening, and an AI buyer gives the rep more redos of the moment than a
        manager has time to play. What AI should not do is pick the moment for you. Which
        mistake costs the most deals is a judgment about your buyers, and that stays with the
        manager.
      </p>
      <Disclosure />
      <p>
        In Tough Tongue AI, for example, a manager can turn the 14:32 moment into a short
        scenario: the buyer’s role, the line she opens with, what she does if the rep quotes a
        discount, and the three checks. The rep runs it five or ten times before the next call,
        and the manager reviews only the best attempt. Its{' '}
        <ExtLink href={SRC.ttai}>pricing page</ExtLink> lists 25 free minutes and team plans from
        $299 a month for 15 seats. For drills that start before the first meeting, see our guide
        to{' '}
        <Link href="/blog/cold-call-practice" className={LINK}>
          cold call practice
        </Link>
        .
      </p>
    </Section>
  )
}
