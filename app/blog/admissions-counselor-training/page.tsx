import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { SRC, meta, post, toc } from './content'
import { ParentCallHero, TalkTimeFigure } from './figures-hero'
import { ConversationSwitcher, RubricScorer } from './figures-practice'
import { OngoingSection, ProgramsSection, RulesSection } from './sections'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function AdmissionsCounselorTrainingPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="Most admissions counselor training teaches the admission cycle, the territory and the ethics. Then a new counselor picks up the phone and a parent says the price is out of the question. Here is what the main programs cover and cost, and how to train the conversations they leave out."
      />
      <ParentCallHero />

      <Section id="quick-answer" title="What does admissions counselor training cover?">
        <Callout label="Quick answer">
          <p>
            Formal admissions counselor training comes from professional associations:{' '}
            <strong>NACAC’s Emerging Leaders certificate ($230 to $410)</strong>,{' '}
            <strong>AACRAO’s Admissions Counselor/Recruiter 101 ($445 to $495)</strong>,{' '}
            <strong>NACCAP’s six microcourses ($200 to $300)</strong> and RNL’s two-day certificate
            sessions. They teach the admission cycle, travel, ethics and financial aid basics.
          </p>
          <p>
            What they practice least is the phone call: cost and aid questions, credit transfer,
            comparisons with other colleges, deposit deadlines. Pair one course with weekly practice
            on those conversations, scored with a rubric and kept inside the rules.
          </p>
        </Callout>
        <p>
          A counselor’s first season is mostly conversations: with students at fairs, with high
          school counselors, and above all with parents on the phone. Those calls decide whether an
          inquiry becomes an applicant and an admit becomes an enrolled student, and they are where
          a new counselor is most likely to say something that is not true.
        </p>
        <p>
          This guide covers both halves. First, what the professional programs offer and cost.
          Then the in-house half: the rules a counselor needs before the first call, six
          conversations to rehearse, the shape of a strong call, a rubric and a 30-day plan.
        </p>
      </Section>

      <Section id="which-counselor" title="Which admissions counselor are we talking about?">
        <p>
          Search results mix two jobs with similar names. This guide is about the{' '}
          <strong>college-side admission counselor</strong>: the person employed by a college or
          program to recruit, advise and enroll students, sometimes called an admissions
          representative, recruiter or enrollment counselor. The same playbook fits admissions
          teams at edtech companies and private programs who call families after an inquiry.
        </p>
        <p>
          The other job is the <strong>school-side college counselor</strong> or independent
          consultant who guides high school students through applications. Their training is
          different, and often university-based: UCLA Extension’s{' '}
          <ExtLink href={SRC.ucla}>Introduction to Counseling for College Admission</ExtLink> runs
          about ten weeks online from $890, and UC Riverside’s{' '}
          <ExtLink href={SRC.ucr}>College Admissions Counseling certificate</ExtLink> takes 12 to 18
          months with estimated tuition of $3,345 (both read November 2026). If that is your role,
          NACAC’s <ExtLink href={SRC.nacacCerts}>certificate list</ExtLink> also has courses for
          school counselors and consultants.
        </p>
      </Section>

      <ProgramsSection />
      <OngoingSection />
      <RulesSection />

      <Section id="conversations" title="Six admissions conversations to practice">
        <p>
          These are the calls new counselors find hardest, and the ones where a weak reply does the
          most damage. Each has a question the family asks, a worry underneath it, and a line the
          counselor must not cross. Pick one and compare the two replies.
        </p>
        <ConversationSwitcher />
        <p>
          Practice each one as a short round: a five-minute call with someone playing the parent,
          a two-minute review against the rubric below, then the same call again. The second
          attempt is where the learning happens. A colleague can play the parent, though they tend
          to go easy on each other; give the parent role a brief with a hidden worry (a second
          offer, a job loss, a student who wants to go elsewhere) so the counselor has to find it.
        </p>
        <p>
          The techniques transfer from sales and teaching. Our guide to{' '}
          <Link href="/blog/objection-handling-techniques" className={LINK}>
            objection handling techniques
          </Link>{' '}
          has drills for acknowledging a concern before answering it, and the{' '}
          <Link href="/blog/parent-teacher-conference-role-play-scenarios" className={LINK}>
            parent-teacher conference scenarios
          </Link>{' '}
          show how to write a parent brief with a hidden reason.
        </p>
      </Section>

      <Section id="call-shape" title="What a strong admissions call sounds like">
        <p>
          Most weak calls fail the same way: the counselor talks first and longest, gets to price
          before knowing what the family wants, and ends without a date. A strong call reverses
          the order. It runs in five moves:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Say who you are, why you are calling, and check that now is a good time.</li>
          <li>Ask what the student hopes for and what worries the family, and let them talk.</li>
          <li>Connect two or three things about the program to what they said, not to a script.</li>
          <li>Answer cost with published tools and people who can give real numbers, not estimates.</li>
          <li>Agree a next step with a date, and invite the student to it.</li>
        </ol>
        <TalkTimeFigure />
        <p>
          The strong call is not longer. It moves time from presenting to listening, and it spends
          less time on cost because it hands the family a tool and a person instead of an estimate.
          When you review recordings, three questions catch most problems: who talked more, when
          did cost come up, and did the call end with a date.
        </p>
      </Section>

      <Section id="rubric" title="A rubric for scoring admissions calls">
        <p>
          A rubric turns “that call felt off” into something a counselor can fix. Keep it to five
          rows, write each as a behavior you could hear on a recording, and use the same rows for
          practice and for live calls.
        </p>
        <RubricScorer />
        <p>
          The rows map to the five moves above and to the rules: the cost row is where a counselor
          who guesses at aid loses points. Score with a 1 to 4 scale and set a pass at 3, so a
          counselor knows exactly which row to practice next week. If a manager reviews calls, our{' '}
          <Link href="/blog/sales-coaching-framework" className={LINK}>
            weekly coaching loop
          </Link>{' '}
          shows how to pick one row at a time instead of fixing everything at once.
        </p>
      </Section>

      <Section id="plan" title="A 30-day training plan for new admissions counselors">
        <Disclosure />
        <DataTable
          columns={['Week', 'Formal learning', 'Practice', 'Live work']}
          rows={[
            ['1', 'Enroll in one association course; read your institution’s cost, aid and transfer policies', 'Learn the rubric; listen to three good calls from colleagues', 'Shadow calls and a campus tour'],
            ['2', 'Course modules on the cycle and ethics', 'Two rounds a day on conversations 1 to 3', 'Make follow-up calls with a colleague listening'],
            ['3', 'Course modules on aid and travel', 'Two rounds a day on conversations 4 to 6', 'Own a small set of inquiries'],
            ['4', 'Finish or schedule the rest of the course', 'Rehearse the night before any hard call', 'Full call load; one recorded call scored each week'],
          ]}
          note="An example plan. Fit the course weeks to whichever program you choose; AACRAO’s runs four weeks, NACAC’s about eight."
        />
        <p>
          Practice needs a partner, and in a short-staffed office that is the bottleneck. AI
          roleplay removes it: in <ExtLink href={SRC.app}>Tough Tongue AI</ExtLink>, a counselor
          can rehearse with an AI parent built from your own programs, prices and policies, give it
          a hidden worry, and get each round scored against your rubric. Plans start at $20 a month
          for one person and $299 a month for a team of 15, with 25 free minutes, per its{' '}
          <ExtLink href={SRC.ttai}>pricing page</ExtLink> in November 2026. If your bottleneck is
          reaching every inquiry at all rather than training counselors, the same company has
          written about{' '}
          <ExtLink href={SRC.ttaiAdmissions}>AI voice agents for admissions calls</ExtLink>.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Good admissions counselor training has two parts. Buy the foundation: one association
          course, from $230 at NACAC to $495 at AACRAO, covers the cycle, ethics and aid basics
          better than most offices can teach them in-house. Build the rest yourself, because only
          you know your prices, aid process, transfer agreements and deadlines.
        </p>
        <p>
          Start with the rules, then rehearse the six conversations until the strong reply is the
          one that comes out under pressure. Score practice and live calls with the same five-row
          rubric. With turnover as high as it is in admissions, write it all down once and run
          every new counselor through it, not only the ones hired before travel season.
        </p>
      </Section>

      <CtaBlock
        headline="Let new counselors meet the hard parent first in practice"
        body="Counselors rehearse fee, aid and deposit calls with an AI parent built from your programs and policies, and every round is scored against your rubric. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['parent-teacher-conference-role-play-scenarios', 'objection-handling-techniques', 'sales-coaching-framework', 'classroom-management-role-play-scenarios']} />
      </section>
    </PostShell>
  )
}
