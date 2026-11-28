import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { meta, post, SRC, toc } from './content'
import { FactFinderHero } from './figures-hero'
import {
  ComplianceSection,
  LicenseSection,
  LinesSection,
  ObjectionsSection,
  PracticeSection,
  ProgramsSection,
  SkillsSection,
} from './sections'

export default function InsuranceSalesTrainingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Passing the state exam proves an agent knows the policy. It does not prove they can find out what a family needs, explain it in a sentence, and handle “I need to talk to my spouse” without pushing. Here is what insurance sales training should add after the license, what it costs, the rules agents now have to say on calls, and how to practice."
      />
      <FactFinderHero />

      <Section id="quick-answer" title="What is insurance sales training?">
        <Callout label="Quick answer">
          <p>
            Insurance sales training teaches licensed agents to sell: a <strong>needs analysis</strong>{' '}
            before any quote, <strong>plain explanations</strong> of what a policy covers,{' '}
            <strong>objection handling</strong>, referrals, and the <strong>compliance lines</strong>{' '}
            their product requires. It starts where pre-licensing stops, because the state exam tests
            product and law, not conversations.
          </p>
          <p>
            Published options run from free carrier training to memberships such as{' '}
            <strong>Insurance Sales Lab at $200 to $300 a month</strong>, with custom programs quoted on
            request. Whatever you buy, add short scored practice two or three times a week, because
            that is where the skills actually form.
          </p>
        </Callout>
        <p>
          The example at the top shows the habit that matters most. The price-first agent quotes a round
          number the client picked. The needs-first agent spends a few minutes on a fact finder and
          arrives at an amount the client built themselves. The rest of this guide is about training
          that second habit, and the ones that follow from it.
        </p>
      </Section>

      <LicenseSection />
      <SkillsSection />
      <LinesSection />
      <ComplianceSection />
      <ProgramsSection />
      <ObjectionsSection />
      <PracticeSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Insurance sales training is everything the license leaves out: the needs review, the plain
          explanation, the objection, and the compliance lines said in the right order. Programs range
          from free carrier training to a few hundred dollars a month, and the ones worth paying for
          build in repetition after the classroom ends.
        </p>
        <p>
          Our recommendation: train needs analysis before price, give each line of business its own
          drill, and rehearse the regulated parts out loud, especially the Medicare opening that changed
          on October 1, 2026. Then hold agents to two or three short, scored practice sessions a week
          and one reviewed recording, and judge any program by how many repetitions it gives each agent
          in its first 90 days.
        </p>
        <p>
          If you want to try a practice client before you plan a program, you can run a fact finder
          against an AI client in <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink> with the free
          minutes.
        </p>
      </Section>

      <CtaBlock
        headline="Let agents rehearse the needs review before the kitchen table"
        body="Agents practice the fact finder, the spouse objection and the Medicare opening with an AI client built from your scripts, scored on your rubric, between appointments. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading
          slugs={['objection-handling-techniques', 'sales-onboarding-checklist', 'sales-coaching-techniques', 'how-much-does-sales-training-cost']}
        />
      </section>
    </PostShell>
  )
}
