import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { ColdCallDataFigure } from './figures-data'
import { FirstThirtySecondsHero, LiveVsPracticeFigure } from './figures-hero'
import { AiBuyerSection, DrillsSection, FormatsSection, FreeOptionsSection, RoutineSection, ScoringSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function ColdCallPracticePage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most reps get their cold call practice by making cold calls. That is the slowest and most expensive way to get better, because every rough draft of your opener lands on a real prospect. Here is what to practice, six drills with pass lines, the free tools worth trying, and a rubric to score yourself."
      />
      <FirstThirtySecondsHero />

      <Section id="quick-answer" title="What is the best way to practice cold calling?">
        <Callout label="Quick answer">
          <p>
            Practice cold calls <strong>out loud, against someone who pushes back</strong>, one
            piece at a time, and score every try. Start with the first 30 seconds: the opener, the
            reason for the call, and your replies to “what’s this about?”, “not interested” and
            “send me an email”. Then run full calls that end with a request for a specific day and
            time.
          </p>
          <p>
            Do it before you dial. At Gong’s average connect rate of 5.4 percent,{' '}
            <strong>50 live tries at a new opener take more than 900 dials</strong>, about 26 hours
            on the phone. The same 50 tries in practice take a little over an hour.
          </p>
        </Callout>
        <p>
          The call in the sheet above is an example, but its shape is the whole game. The rep owns
          the cold call, gives a reason by the tenth second, turns “send me an email” into a
          question, and is still on the line at 30 seconds. Each of those moves is a separate skill
          you can drill until it holds up under pressure.
        </p>
      </Section>

      <Section id="why-practice" title="Why practicing on live prospects is the slow way">
        <p>
          Cold calling is a numbers game with very bad odds for the average rep. In{' '}
          <ExtLink href={SRC.gong300m}>Gong’s analysis of more than 300 million cold calls</ExtLink>{' '}
          (July 2024), the average rep connected on 5.4 percent of dials and turned 4.6 percent of
          those conversations into meetings: 402 dials per meeting. The top quartile connected on
          13.3 percent, converted 16.7 percent, and needed 45 dials.
        </p>
        <p>
          Part of that gap is list quality and dialing habits. The rest is what happens in the first
          minute, and that part is a skill. The trouble is that live calls are a terrible place to
          build it. You get one try per connection, the prospect never tells you which sentence
          lost them, and a bad draft burns a lead you cannot call again next week.
        </p>
        <LiveVsPracticeFigure />
        <p>
          None of this means skipping live calls. Real voices, real timing and real nerves teach
          things no rehearsal can. The point is the order: practice a new opener or reply until it
          passes, then take that version to the phones. If dialing makes you anxious, Tough Tongue
          AI’s guide to{' '}
          <ExtLink href={SRC.anxiety}>cold calling anxiety</ExtLink> covers that side, and SnapSDR’s
          guide to the{' '}
          <ExtLink href={SRC.connectRate}>cold call connect rate</ExtLink> covers getting more
          prospects to pick up.
        </p>
      </Section>

      <Section id="first-30-seconds" title="What to practice first: the first 30 seconds">
        <p>
          Most cold calls are decided before the pitch. In Gong’s data, calls that ended inside a
          minute booked no meetings at all, and the median successful call ran 4.8 minutes, long
          enough to get through at least two objections. That gives you a short practice list:
          open well, give a reason, and survive the first two brush-offs.
        </p>
        <ColdCallDataFigure />
        <p>
          Three findings shape the drills below. First, the opener matters: in{' '}
          <ExtLink href={SRC.gongOpeners}>Gong’s July 2024 opener study</ExtLink>, “Did I catch you
          at a bad time?” booked meetings at 2.15 percent, while a permission-based opener that
          owns the cold call booked at 11.18 percent. Second, say why you called. Gong’s{' '}
          <ExtLink href={SRC.gongStats}>earlier cold call research</ExtLink> found that stating the
          reason for the call made success 2.1 times more likely, and that reps did 55 percent of
          the talking on successful cold calls. Third, most objections are not objections.{' '}
          <ExtLink href={SRC.gongObjections}>Gong classed 49.5 percent of them as dismissive</ExtLink>{' '}
          reflexes to being interrupted, 42.6 percent as situational (budget, bandwidth, fit) and
          7.9 percent as an existing solution.
        </p>
        <p>
          One caution: this is vendor data from calls recorded on Gong’s platform, published with
          30 Minutes to President’s Club to promote a book, with no stated date range. Use it for
          direction. Your own recordings will tell you which brush-offs your buyers actually say,
          and in what order.
        </p>
      </Section>

      <DrillsSection />
      <FormatsSection />
      <FreeOptionsSection />
      <AiBuyerSection />
      <ScoringSection />
      <RoutineSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Cold call practice works when it is out loud, specific and scored. Most of the call is
          decided in the first 30 seconds, most objections are reflexes, and the same five come up
          again and again, so the practice list is short. What makes it hard is volume: learning
          those moments on live dials takes hundreds of calls and burns the leads you need.
        </p>
        <p>
          Our recommendation: pick one drill a day, run it 10 to 20 times against a buyer who
          pushes back, score each try on a fixed five-line rubric, and only take a new opener to the
          phones after it scores 8 of 10 three times in a row. Start with a free tool or a
          colleague. If you manage a team, give everyone the same buyer and the same rubric, and
          review one recording per rep each week, as in our{' '}
          <Link href="/blog/sales-coaching-framework" className={LINK}>
            sales coaching framework
          </Link>
          .
        </p>
      </Section>

      <CtaBlock
        headline="Burn practice minutes, not prospects"
        body="Reps rehearse the opener and the brush-offs with an AI buyer that interrupts, objects and can hang up, scored on your rubric. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['objection-handling-techniques', 'sales-role-play-interview', 'sales-coaching-framework', 'ai-roleplay-pricing']} />
      </section>
    </PostShell>
  )
}
