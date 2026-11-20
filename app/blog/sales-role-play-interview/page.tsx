import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { debriefRows, meta, post, prompts, scoringRows, toc } from './content'
import { HiringStakes, InterviewClockHero } from './figures-hero'
import { HiddenBrief, PromptRewriter } from './figures-prompts'
import { ScorecardCompare, TalkTimeMeter } from './figures-score'

const SRC = {
  bridge: 'https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics',
  gong: 'https://www.gong.io/blog/talk-to-listen-conversion-ratio',
  kulissa: 'https://kulissa.com/sales-roleplay-interview',
  miki: 'https://www.meetmiki.com/blog/sales-role-play-interview',
  alpharun: 'https://www.alpharun.com/blog/sales-roleplay-interview',
  duodial: 'https://www.duodial.in/sales-roleplay-interview',
  snapScenarios: 'https://www.snapsdr.com/blog/sales-role-play-scenarios',
  snapScorecard: 'https://www.snapsdr.com/blog/sales-call-scorecard',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function SalesRolePlayInterviewPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="A sales role play interview turns the hiring manager into a buyer for ten minutes and watches what you do with them. Here are the eight prompts that come up most, a weak and a strong answer to each, what the interviewer is scoring and hiding, the questions you get before and after, and a 48-hour plan to prepare out loud."
      />
      <InterviewClockHero />

      <Section id="quick-answer" title="What is a sales role play interview?">
        <Callout label="Quick answer">
          <p>
            A sales role play interview is a <strong>10 to 20 minute mock sales call</strong> in
            which the interviewer plays a buyer and you play the rep. Expect one scenario: sell me
            this pen, a cold call, a discovery call, a price objection or an upset customer.
          </p>
          <p>
            You pass by <strong>asking two or three questions before you pitch</strong>, playing
            the buyer’s words back, answering one objection with a question and ending with a
            <strong> specific next step with a day and time</strong>. Then expect a debrief: “How
            do you think that went?”
          </p>
        </Callout>
        <p>
          The clock above is a strong ten-minute discovery role play. Notice the shape. More than a
          third of the time goes to questions, the pitch is short and comes late, and every box on
          the interviewer’s notepad is about a behavior, not about how polished the candidate
          sounded. That is the whole game in a sales role play interview: show the habits you would
          bring to a real call, in a compressed version of one.
        </p>
        <p>
          Most candidates lose the round in the first two minutes, by treating it as a speech. A
          weak candidate hears “sell me this” and starts listing features. A strong one asks a
          question, because a buyer who has told you nothing has not given you anything to sell to.
        </p>
      </Section>

      <Section id="why" title="Why do companies use role plays in sales interviews?">
        <p>
          A résumé shows your number; a role play shows how you got it. And a wrong hire is slow to spot.
        </p>
        <HiringStakes />
        <p>
          <ExtLink href={SRC.bridge}>The Bridge Group’s 2026 survey of 158 B2B companies</ExtLink>{' '}
          found that an account executive takes an average of 6.2 months to reach full
          productivity, the longest in the study’s history, and that only 48 percent of AEs were at
          quota. Companies have responded by asking for more experience, 3.7 years at hire against
          2.7 in 2022. If a hire takes half a year to show whether they can sell, ten minutes of
          watching them sell before the offer is cheap insurance.
        </p>
        <p>
          The good news for candidates is that the format has become predictable. Guides written
          for hiring managers now tell them to brief you in advance, use one scenario per role and
          time-box it. <ExtLink href={SRC.kulissa}>Kulissa’s interviewer guide</ExtLink> suggests 8
          to 12 minutes for an SDR cold call and 15 to 20 for AE discovery, plus 5 to 10 minutes of
          debrief and a second attempt. <ExtLink href={SRC.miki}>Miki’s guide (March 2026)</ExtLink>{' '}
          lands on 10 to 20 minutes plus a debrief. If you get a brief, you are meant to use it.
        </p>
      </Section>

      <Section id="scoring" title="What do interviewers score in a sales role play?">
        <p>
          Four published guides, two for candidates and two for hiring managers, score nearly the
          same list. Here it is with the move that earns the mark and the habit that loses it.
        </p>
        <DataTable
          columns={['What they score', 'What earns the mark', 'What loses it']}
          rows={scoringRows}
          note="Compiled from Kulissa and Miki (interviewer guides) and Alpharun and DUODIAL (candidate guides), read November 2026."
        />
        <p>
          Two things are missing from every list: charisma and product knowledge. Nobody expects you
          to know the company’s product as well as its reps do. They expect you to find out what the
          buyer needs, and to be honest when you do not know something. “I’d want to check that with
          our product team before I promise it” scores better than a confident guess.
        </p>
      </Section>

      <Section id="prompts" title="Sales role play interview questions and answers: the eight prompts">
        <p>
          You cannot predict the exact scenario, but almost every sales role play interview is one
          of these eight. Each tests one move. Pick one below and switch between the weak and the
          strong reply.
        </p>
        <PromptRewriter />
        <div className="space-y-3">
          {prompts.map((p, i) => (
            <div key={p.id} className="border-2 border-ink bg-sheet p-4 sm:p-5">
              <h3 className="mb-2 font-mono text-[15px] font-semibold uppercase leading-snug text-ink">
                {i + 1}. {p.label}
              </h3>
              <dl className="grid gap-x-4 gap-y-1.5 text-[15px] leading-relaxed sm:grid-cols-[110px_1fr]">
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">It tests</dt>
                <dd>{p.tests}</dd>
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">How to answer</dt>
                <dd>{p.how}</dd>
              </dl>
            </div>
          ))}
        </div>
        <p>
          A pattern runs through all eight. The strong reply almost always contains a question, and
          the weak reply almost never does. When you freeze, ask something about the buyer’s
          situation. It buys you time and it is usually the right move anyway. For deeper drills on
          prompts four to six, see our guide to{' '}
          <Link href="/blog/objection-handling-techniques" className={LINK}>objection handling techniques you can practice</Link>.
        </p>
      </Section>

      <Section id="hidden-brief" title="What the interviewer knows that you don’t">
        <p>
          The interviewer is not improvising. Between them, the two hiring guides above tell
          interviewers to write the buyer down first: a mood, two or three objections, a moment to interrupt, and one fact to share
          only if you ask the right question. Miki calls it rewarding good discovery. Kulissa tells
          interviewers to keep the hidden objection hidden even when they brief you.
        </p>
        <HiddenBrief />
        <p>
          That hidden fact is the real test of a discovery role play. Closed questions (“Do you use
          a tool today?”) get one-word answers. Questions about how something works (“Tell me about
          onboarding”) get a description. Questions about outcomes (“What happens in a new rep’s
          first six months?”) get the problem. Once you have it, use the buyer’s words for the rest
          of the call, and you will usually find the interviewer’s condition for a next step is
          that you sum the problem up correctly.
        </p>
        <p>
          The scripted interruption matters too. When the buyer cuts in with “So what do you
          actually do?”, answer in two sentences and hand the conversation back with a question.
          Candidates who use the interruption to launch the pitch they were holding lose the
          listening mark.
        </p>
      </Section>

      <Section id="talk-time" title="How much should you talk in a sales role play?">
        <p>
          Less than you think, but silence is not the goal either. The best data comes from real sales calls.
        </p>
        <TalkTimeMeter />
        <p>
          In 2025, <ExtLink href={SRC.gong}>Gong revisited its talk-to-listen research</ExtLink> with
          326,000 calls. Reps talked 60 percent of the time on average: 57 percent in won deals and
          62 percent in lost ones. The bigger difference was consistency. High performers kept about
          the same ratio whether they won or lost, while low performers swung from 54 percent to 64
          percent. And more questions did not help: sellers who won asked 15 to 16 per call, while
          sellers who lost asked about 20.
        </p>
        <p>
          For a ten-minute role play, that suggests a simple target. Let the buyer talk for most of
          the discovery, keep your own turns short, and do not interrogate. Three or four good
          questions with real follow-ups beat ten scripted ones. If you notice you have been talking
          for more than about 30 seconds, stop and ask something.
        </p>
      </Section>

      <Section id="debrief" title="Questions interviewers ask before and after the role play">
        <p>
          The role play is rarely the whole conversation. Expect a few questions before it, which
          test how you prepare, and a debrief after it, which tests whether you can be coached.
          Miki suggests interviewers ask “What were you trying to do there?” and “What would you do
          differently?”, and Kulissa has them give one piece of feedback and run the last two
          minutes again.
        </p>
        <DataTable
          columns={['Question', 'When', 'A strong answer does this']}
          rows={debriefRows}
        />
        <p>
          Do not defend the run in the debrief. A candidate who says “I think I should have asked
          about their timeline before pitching” after an average role play often beats a candidate
          who did slightly better and cannot say why. And when you rerun the moment, change one
          thing on purpose so the interviewer sees the feedback land.
        </p>
      </Section>

      <Section id="scorecard" title="Same buyer, two candidates: how the score adds up">
        <p>
          Here is a scorecard built from the four guides above, with two candidates meeting the
          buyer from the hidden brief. Kulissa’s version asks for a line of evidence next to each
          mark, so this one has them too.
        </p>
        <ScorecardCompare />
        <p>
          Candidate A is not bad at selling. They are friendly, they know the product, and their
          pitch is clear. They lose because the scorecard rewards the habits that show up before
          and after the pitch, and they skipped them. Candidate B’s pitch is shorter and plainer,
          and it scores higher because it is built on what the buyer said. If you want to see how
          sales teams score real calls with the same kind of sheet, SnapSDR has a{' '}
          <ExtLink href={SRC.snapScorecard}>sales call scorecard template</ExtLink> by call type.
        </p>
      </Section>

      <Section id="prepare" title="How to prepare for a sales role play interview in 48 hours">
        <p>
          Preparation is mostly rehearsal: saying the moves out loud a dozen times, not reading about them.
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Day one, hour one: research.</strong> Read the company’s site, two customer
            stories and a page of reviews. Write down who buys, the problem they buy it for, and one
            competitor.
          </li>
          <li>
            <strong>Day one, hour two: write your kit.</strong> One opening line with a reason for
            the call, four questions that work in any scenario (“What made you take this call
            now?”, “What happens when that goes wrong?”, “What does it cost you?”, “Who else would
            weigh in?”), and one dated next step.
          </li>
          <li>
            <strong>Day two: three timed runs.</strong> Run a ten-minute call three times, out loud,
            and record each. Score yourself on the six rows above and rerun only your weakest two
            minutes.
          </li>
          <li>
            <strong>Day two, last run: against someone else.</strong> Ask a friend to play the buyer
            from a brief with one hidden fact and one interruption, so you practice finding something
            you were not told.
          </li>
          <li>
            <strong>The morning of: rehearse the debrief.</strong> Say one thing you would change, and why.
          </li>
        </ol>
        <Disclosure />
        <p>
          If you cannot find a partner, an AI buyer can play the brief. In{' '}
          <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, you can describe the buyer, their hidden
          problem and the objection you expect, then run the call by voice and get it scored. As of
          November 2026 there are 25 free minutes, which covers the three timed runs, and paid plans
          start at $20 a month (our guide to{' '}
          <Link href="/blog/ai-roleplay-pricing" className={LINK}>AI roleplay pricing</Link>{' '}
          compares how other tools charge). A friend is still better for the last run, because a person will
          surprise you in ways you did not write down. For more practice scenarios beyond the
          interview, SnapSDR publishes{' '}
          <ExtLink href={SRC.snapScenarios}>twelve sales role play scenarios with buyer briefs</ExtLink>.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          A sales role play interview is a short, scored sales call, and the scorecard is
          predictable: opening, discovery, listening, objection handling, value and a next step. The
          eight prompts in this guide cover nearly every scenario you will be handed, and every
          strong answer starts with a question.
        </p>
        <p>
          Our recommendation: spend your prep time on two things most candidates skip. First, find
          the hidden fact, by asking about outcomes instead of features and playing the answer back
          in the buyer’s words. Second, rehearse the debrief, because the interviewer is deciding
          whether you can be coached as much as whether you can sell. Three timed runs out loud
          will do more for you than another hour of reading.
        </p>
      </Section>

      <CtaBlock
        headline="Rehearse the role play before the real one"
        body="Write the buyer, their hidden problem and the objection you expect, then run the call out loud with an AI buyer and see your scorecard. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['objection-handling-techniques', 'best-ai-sales-training-tools-2026', 'how-much-does-sales-training-cost', 'ai-roleplay-pricing']} />
      </section>
    </PostShell>
  )
}
