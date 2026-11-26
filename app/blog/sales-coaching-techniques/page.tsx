import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { CallMomentHero, FeedbackEvidenceFigure } from './figures-hero'
import { AfterSection, AiPracticeSection, ByProblemSection, DuringSection, TimeSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function SalesCoachingTechniquesPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most lists of sales coaching techniques tell you to ask good questions and focus on one skill. Fair enough, but what does that look like with a real recording open on your screen? Here are eight moves for a call review, each one shown on the same example call, with the evidence for why most reviews change nothing."
      />
      <CallMomentHero />

      <Section id="quick-answer" title="What are the best sales coaching techniques?">
        <Callout label="Quick answer">
          <p>
            The sales coaching techniques that change behavior work on <strong>one moment from a
            real call</strong>, not the whole call. Pick the moment, let the rep review it first,
            ask what they wanted to happen, quote the exact words, model a better line once, and
            have the rep <strong>redo it out loud until it passes</strong>. Then check the same
            moment on their next live call.
          </p>
          <p>
            Done this way, a call review takes <strong>about 15 to 20 minutes per rep</strong>{' '}
            instead of an hour, which is what makes it possible to keep doing every week.
          </p>
        </Callout>
        <p>
          The sheet above is an example discovery call. It has five moments worth a note, and a
          manager could talk about all of them for an hour. The technique starts with choosing
          one: at 14:32 the buyer asked the price and the rep offered a discount before learning
          anything, and the call never recovered. That is the moment this guide coaches.
        </p>
      </Section>

      <Section id="why-reviews-fail" title="Why most call reviews change nothing">
        <p>
          The usual call review goes like this. The manager listens to the whole call, then walks
          the rep through everything they would have done differently. The rep nods, agrees with
          all of it, and makes the same move on Thursday. Nothing was wrong with the advice. The
          rep just never practiced the new version, and could not hold six notes in their head on
          a live call anyway.
        </p>
        <p>
          There is research on why this happens. In a{' '}
          <ExtLink href={SRC.kluger}>1996 meta-analysis in Psychological Bulletin</ExtLink>, Avraham
          Kluger and Angelo DeNisi pooled 607 effects of feedback on performance. Feedback helped
          on average, but over a third of the feedback interventions made performance worse. The
          pattern they found: feedback worked less well the more it pulled attention away from the
          task and toward the person.
        </p>
        <FeedbackEvidenceFigure />
        <p>
          That gives three rules for a review. Point at a moment the rep can replay. Let the rep do
          most of the thinking. And make sure they say the new version out loud before they leave.
          The eight techniques below are those three rules, in the order you use them. If you want
          the weekly rhythm around them, our{' '}
          <Link href="/blog/sales-coaching-framework" className={LINK}>
            sales coaching framework
          </Link>{' '}
          covers the cadence; this guide zooms in on the 15 minutes in the room.
        </p>
      </Section>

      <Section id="before" title="Before the review: two techniques">
        <h3 className="font-mono text-[17px] font-semibold uppercase text-ink">1. Pick one moment, not the whole call</h3>
        <p>
          A good moment has three traits. It changed what the buyer did next, it shows up on this
          rep’s other calls too, and the rep can redo it in under two minutes. In the example,
          14:32 has all three: the discount turned an interested buyer into “send me something”,
          and in this example the rep gets a price question on most calls.
        </p>
        <p>
          The weak version is a list of six notes, from the long small talk to the missed finance
          lead. The stronger version is one moment to fix and one to praise. Praise the question at
          06:45 by its timestamp too, so the rep knows exactly what to keep doing. The other notes
          wait; the finance lead can be next week’s moment.
        </p>
        <h3 className="font-mono text-[17px] font-semibold uppercase text-ink">2. Have the rep review it first</h3>
        <p>
          Before you meet, ask the rep to listen to their own call and flag two timestamps: one
          they would redo and one they are proud of. It takes them ten minutes and saves you most of
          the diagnosis. If they flag 14:32 too, you can skip straight to the fix. If they flag
          something else, ask why. The gap between what they noticed and what you noticed is often
          the real coaching topic.
        </p>
        <p>
          For questions to ask in other kinds of sessions, such as deal reviews and roleplay
          debriefs, SnapSDR keeps a good list of{' '}
          <ExtLink href={SRC.snapQuestions}>36 sales coaching questions by moment</ExtLink>.
        </p>
      </Section>

      <DuringSection />
      <AfterSection />
      <ByProblemSection />
      <TimeSection />
      <AiPracticeSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Good sales coaching techniques are small and specific. Pick one moment, let the rep find
          it, ask before you tell, quote the words, model the line once, have the rep redo it until
          it passes, show a teammate’s version, and check the same moment on the next live call.
          Feedback about the task helps; feedback about the person often does not.
        </p>
        <p>
          Our recommendation: run one 15-minute review per rep per week on a single flagged
          moment, and end every review with three out-loud redos, not a list of notes. Keep a
          shared folder of the best 60-second clips, organized by moment. Judge the coaching by one
          question: did the moment go better on the next call?
        </p>
      </Section>

      <CtaBlock
        headline="Coach one moment, then make them say it again"
        body="Reps redo the moment you flagged with an AI buyer who reacts the same way every time, scored on your checks, so the review ends in practice instead of a nod. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['sales-coaching-framework', 'objection-handling-techniques', 'cold-call-practice', 'sales-training-roi']} />
      </section>
    </PostShell>
  )
}
