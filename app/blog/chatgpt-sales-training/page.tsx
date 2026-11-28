import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, SRC, toc } from './content'
import { RoleplayStackHero } from './figures-hero'
import { BuildSection, DecemberSection, DecideSection, OptionsSection, SetupSection, TeamGapsSection } from './sections'

export default function ChatgptSalesTrainingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="ChatGPT is the first AI role play tool most sales reps try, because it is already open on their laptop, and with a good brief it plays a skeptical buyer well. The trouble starts when a manager wants twenty reps practicing the same call and wants to know who improved. Here is how far ChatGPT sales training goes, what changes on December 11, 2026, and what it really costs to build or buy the rest."
      />
      <RoleplayStackHero />

      <Section id="quick-answer" title="Can you use ChatGPT for sales training?">
        <Callout label="Quick answer">
          <p>
            Yes, for one rep. Write a buyer brief with a hidden fact and rules for when the buyer may
            agree, keep it in a <strong>Project</strong>, and practice in <strong>Live voice</strong>,
            which ChatGPT Plus ($20 a month) includes for 3 hours in any 24-hour window. Custom GPTs
            retire on <strong>December 11, 2026</strong>, so do not start one now.
          </p>
          <p>
            For a team, ChatGPT stops short: each rep’s buyer differs, feedback is prose rather than a
            stored score, and managers see no results across reps. Building that yourself costs little
            in voice minutes (OpenAI lists GPT-Live at <strong>$0.05 a minute</strong>) and a lot in
            engineering, so most teams should buy the shared layer and keep ChatGPT for preparation.
          </p>
        </Callout>
        <p>
          The stack above is the whole argument in one picture. ChatGPT brings the bottom two layers, the
          conversation and the voice, and they are good. You supply the next three yourself: your
          product, a buyer that stays the same, and a score. The top layer, a history for each rep that a
          manager can see, does not exist in a chat at all. Whether you need it depends on how many
          people are practicing.
        </p>
      </Section>

      <SetupSection />
      <DecemberSection />
      <TeamGapsSection />
      <OptionsSection />
      <BuildSection />
      <DecideSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          ChatGPT sales training works, within a clear limit. For one rep, a Project with a real buyer
          brief and Live voice is a cheap, good practice partner. For a team, it lacks the three things
          a manager needs: the same buyer for every rep, a score against one rubric, and a record over
          time. And with custom GPTs retiring on December 11, 2026, anything built that way needs to move.
        </p>
        <p>
          Our recommendation: individual reps should use ChatGPT now, with the brief format above. A
          team of more than five should buy shared scenarios and scoring rather than build them, because
          the voice minutes are cheap and the engineering is not, and should keep ChatGPT for account
          research and drafting new scenarios. Build only if your data must stay in-house and an
          engineer can own the tool for a year.
        </p>
        <p>
          If you want to see the shared layer without leaving ChatGPT, you can connect{' '}
          <ExtLink href={SRC.ttPlugin}>Tough Tongue AI in ChatGPT</ExtLink> and build a scored role play
          from a chat with the free minutes.
        </p>
      </Section>

      <CtaBlock
        headline="Keep ChatGPT for prep, give the team one buyer to practice on"
        body="Build the role play from a ChatGPT chat or the web app, give every rep the same AI buyer, and score each call on your rubric so managers can see who improved. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['ai-roleplay-pricing', 'best-ai-sales-training-tools-2026', 'cold-call-practice', 'objection-handling-techniques']} />
      </section>
    </PostShell>
  )
}
