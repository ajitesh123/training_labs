import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { CertificationFigure, ReadinessSheetHero } from './figures-hero'
import { AccessSection, CurriculumSection, OffLabelSection, PlanSection, PracticeSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function PharmaceuticalSalesTrainingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most pharmaceutical sales training is very good at one half of the job. Reps leave knowing the disease, the label and the rules. Fewer leave able to deliver a two-minute detail to a physician who did not ask for it. Here is what the programs cost, what companies teach, and how to practice the part the exams miss."
      />
      <ReadinessSheetHero />

      <Section id="quick-answer" title="What is pharmaceutical sales training?">
        <Callout label="Quick answer">
          <p>
            Pharmaceutical sales training prepares reps for compliant, useful conversations with
            physicians about prescription drugs. It has two halves: <strong>knowledge</strong> (the
            disease state, the product label, compliance rules and market access), which companies
            teach and test with exams, and <strong>conversation</strong> (the detail itself), which
            only improves with spoken practice and feedback.
          </p>
          <p>
            For people trying to break in, published certifications cost{' '}
            <strong>$285 to $2,833</strong> in November 2026. None of them replaces a degree or an
            employer’s product training, and none of the program pages we read includes a scored
            practice call.
          </p>
        </Callout>
        <p>
          The readiness sheet above is an example, but the pattern is common. A new rep can score
          above 90 percent on every knowledge exam and still freeze when a physician asks about a
          use that is not on the label, or end a good conversation without asking for the next
          visit. Pharmaceutical sales training works when both halves get practiced, and the second
          half gets far less time than the first.
        </p>
      </Section>

      <Section id="two-paths" title="Two kinds of pharmaceutical sales training">
        <p>The phrase covers two different purchases, and most search results mix them up.</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Training for career changers.</strong> Self-paced certifications you buy as an
            individual to learn the vocabulary of the industry before you interview. You pay, you
            study, you sit an exam.
          </li>
          <li>
            <strong>Training for a company’s sales force.</strong> What a manufacturer gives its
            own reps: home study on the disease and product, a classroom block, product and
            compliance certification, field rides with a manager, then refreshers at every launch
            and label change. The employer pays, and the content is its own.
          </li>
        </ul>
        <p>
          This guide covers both, with more weight on the second. For medical device programs,
          hospital value analysis committees and the wider healthcare market, see our guide to{' '}
          <Link href="/blog/healthcare-sales-training" className={LINK}>
            healthcare sales training
          </Link>
          .
        </p>
      </Section>

      <Section id="certifications" title="Pharmaceutical sales certifications and what they cost">
        <p>
          These are the credentials sold directly to individuals, with the prices published on each
          provider’s page in November 2026.
        </p>
        <DataTable
          columns={['Credential', 'Published price', 'What the page says you get', 'Source']}
          rows={[
            ['NAPSRx CNPR', '$285 Total Package; $375 Premium; $39 exam retake', '18th edition manual, online exam, quizzes, one year of membership; shipping $11', <ExtLink key="a" href={SRC.cnprOrder}>NAPSRx</ExtLink>],
            ['CMR Institute Pharmaceutical Readiness', '$299', '10 self-paced courses, about 6 hours, one year of access', <ExtLink key="b" href={SRC.cmr}>CMR Institute</ExtLink>],
            ['Biopharma Institute Sales & Marketing Compliance', '$645 (single courses $185)', 'Self-paced compliance certification on US promotion rules', <ExtLink key="c" href={SRC.biopharma}>Biopharma Institute</ExtLink>],
            ['ACMA Pharmaceutical Representative Certification (PRC)', '$1,199 ($49 application, $900 course, $250 credential)', '15 modules, about 12 hours, 75-question exam in three hours, renew every two years', <ExtLink key="d" href={SRC.prcFees}>ACMA</ExtLink>],
            ['SDSU Global Campus, Certified Pharmaceutical Sales Representative', '$2,833', '110 course hours over six months, with the ACMA PRC exam included', <ExtLink key="e" href={SRC.sdsu}>SDSU Global Campus</ExtLink>],
          ]}
          note="ACMA requires a bachelor’s degree or two years of relevant sales experience to enroll in the PRC."
        />
        <CertificationFigure />
        <p>
          <strong>Is a pharmaceutical sales certification worth it?</strong> It depends on what
          you lack. The{' '}
          <ExtLink href={SRC.bls}>Bureau of Labor Statistics</ExtLink> says reps who sell
          scientific or technical products typically need at least a bachelor’s degree, and it put
          the May 2025 median wage for those reps at $104,920. No certification is a legal
          requirement, and every employer retrains new hires on its own product. NAPSRx itself
          pitches the CNPR as a way for applicants to get noticed and earn interviews, and its{' '}
          <ExtLink href={SRC.cnprEdu}>curriculum</ExtLink> is mostly vocabulary: medical
          terminology, pharmacology, sampling rules, managed care and selling techniques.
        </p>
        <p>
          That vocabulary helps a career changer follow the conversation in an interview. It does
          not prepare you for the part of the interview that decides most offers: a role play where
          a manager plays a physician. A weak plan spends $2,833 on the longest program and walks
          in having never said a detail out loud. A stronger plan buys the cheapest credential that
          fills your real gap, then spends the saved weeks rehearsing a two-minute detail and the
          questions in our{' '}
          <Link href="/blog/sales-role-play-interview" className={LINK}>
            sales role play interview guide
          </Link>
          .
        </p>
      </Section>

      <CurriculumSection />
      <AccessSection />
      <OffLabelSection />
      <PracticeSection />
      <PlanSection />

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Pharmaceutical sales training already does the knowledge half well. The PhRMA Code asks
          companies to train reps on the rules and the science and to assess them periodically, and
          most programs do that with modules and exams. The gap is the conversation: ZS’s clients
          report that 90 percent of rep training is on the product, while physicians want practice
          knowledge twice as much, and the visits reps do get are shorter and booked in advance.
        </p>
        <p>
          If you are breaking in, buy the cheapest credential that fills a real gap and rehearse the
          detail out loud. If you train a sales force, keep your exams, and add one rule: no rep
          meets a physician until they pass a scored practice detail that includes an access
          question and an off-label question, against the same rubric their manager uses in the
          field.
        </p>
      </Section>

      <CtaBlock
        headline="Score the detail before the doctor does"
        body="Reps rehearse the opener, the access question and the off-label question with an AI physician built from your approved messaging, scored on your rubric. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['healthcare-sales-training', 'patient-communication-training', 'objection-handling-techniques', 'sales-coaching-framework']} />
      </section>
    </PostShell>
  )
}
