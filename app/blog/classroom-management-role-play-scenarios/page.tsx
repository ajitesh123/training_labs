import Link from 'next/link'
import { Callout } from '@/components/blog/post/callout'
import { CtaBlock } from '@/components/blog/post/cta-block'
import { FaqSection } from '@/components/blog/post/faq-section'
import { PostHeader } from '@/components/blog/post/post-header'
import { PostShell, Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { RelatedReading } from '@/components/blog/post/related-reading'
import { levelRows, levels, meta, post, scenarios, toc } from './content'
import { RefusalBranch, ResponseLadder } from './figures-moves'
import { PracticeTimeCalc, RubricRuns } from './figures-practice'
import { BehaviorData, QuietRedirectHero } from './figures-room'

const SRC = {
  pulse: 'https://nces.ed.gov/learn/press-release/about-one-quarter-public-schools-reported-lack-focus-or-inattention-students-had-severe-negative',
  coe: 'https://nces.ed.gov/programs/coe/indicator/a11',
  nctq: 'https://teacherquality.nctq.org/review',
  naesp: 'https://www.naesp.org/resource/ten-tips-for-effective-classroom-management',
  edweek: 'https://www.edweek.org/leadership/75-of-educators-expect-student-behavior-to-be-a-challenge-this-year-what-else/2026/08',
  mcnichol: 'https://lbro.repository.guildhe.ac.uk/id/eprint/1145/1/McNichol_using%20role%20play%20_2024.pdf',
  classmaster: 'https://www.nature.com/articles/s41599-024-03538-9',
  aero: 'https://www.edresearch.edu.au/sites/default/files/2024-01/classroom-management-handbook-final-aa.pdf',
  palomar: 'https://pages.palomar.edu/tjohnston2/wp-content/uploads/sites/121/2019/03/09-Role-Play-Scenarios.pdf',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

export default function ClassroomManagementRolePlayPage() {
  return (
    <PostShell toc={toc}>
      <PostHeader
        category={meta.category}
        date={meta.date}
        readTime={meta.readTime}
        title={post.title}
        lede="New teachers usually meet their first refusal, first phone standoff and first escalating argument in front of thirty students. These ten classroom management role play scenarios let them meet it first in a PD room, with a student brief that hides the real reason, a least-intrusive first move, a script and a rubric for every run."
      />
      <QuietRedirectHero />

      <Section id="quick-answer" title="What are good classroom management role play scenarios?">
        <Callout label="Quick answer">
          <p>
            A good classroom management role play scenario gives the colleague playing the student a
            short brief: <strong>what they do, how they react to each kind of response, and one
            reason they will not say out loud</strong>. Start with low-level behavior (calling out,
            chatting, a phone), move to persistent behavior (work avoidance, denial), then rehearse
            escalation: put-downs, a public refusal and a student who swears.
          </p>
          <p>
            Run each in <strong>12 minutes</strong> in trios, start every response on the least
            intrusive move that could work, and score six things: voice, the first move, naming the
            behavior you want, privacy, lesson flow and follow-up.
          </p>
        </Callout>
        <p>
          The hero above is the third run of scenario 3. The teacher walked over, kept teaching,
          crouched and offered a quiet choice. Nobody else in the room needed to know, and the
          lesson never stopped. In the first run, the same teacher called “Phone, now” across the
          room and two tables turned to watch. The difference between those runs is not knowledge.
          Most teachers know proximity works. It is having said the quiet line enough times that it
          comes out first under pressure.
        </p>
      </Section>

      <Section id="why-rehearse" title="Why rehearse classroom management at all?">
        <p>
          Because behavior is the problem schools report most, new teachers feel it most, and the
          training request is growing.
        </p>
        <BehaviorData />
        <p>
          In the <ExtLink href={SRC.pulse}>NCES School Pulse Panel released in July 2024</ExtLink>,
          19 percent of public schools said students being disruptive in the classroom had a severe
          negative impact on learning in 2023-24, and 61 percent said they needed more training on
          classroom management strategies, up from 50 percent in May 2022. Teachers report the same
          strain: in the <ExtLink href={SRC.coe}>2020-21 National Teacher and Principal Survey</ExtLink>,
          36 percent of teachers with three or fewer years of experience agreed that misbehavior
          interfered with their teaching, against 30 percent of those with 20 or more years.
        </p>
        <p>
          It is also personal. <ExtLink href={SRC.nctq}>NCTQ reports</ExtLink> that 52 percent of
          teachers call managing student behavior their top source of work-related stress, and in an{' '}
          <ExtLink href={SRC.edweek}>EdWeek Research Center survey published in August 2026</ExtLink>,
          75 percent of more than 1,000 educators named student behavior a major challenge for the
          2026-27 school year, the most common answer out of 27.
        </p>
      </Section>

      <Section id="evidence" title="Does role play actually improve classroom management?">
        <p>
          The research is small but consistent: rehearsal builds confidence, and practice that feels
          real seems to stick longer than watching.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <ExtLink href={SRC.mcnichol}>A 2024 study in Research in Teacher Education</ExtLink> followed 145 trainee
            primary teachers through two role play sessions on low-level disruption. Average
            confidence rose after each session (by 0.93 and 0.81 points), with the largest gains on
            calling out, fidgeting and noise. At the end of training they were more confident than a
            comparison group of 52 trainees who had no role plays. Two experts the author interviewed
            kept using the same phrase: low stakes.
          </li>
          <li>
            <ExtLink href={SRC.classmaster}>A 2024 study of 57 pre-service teachers</ExtLink> compared
            15 minutes in a simulated classroom with a 15-minute video on the same problem behaviors.
            Both groups improved equally right away, but the simulation group scored higher on a
            delayed test.
          </li>
        </ul>
        <p>
          Both measure what teachers report or write, not what they do in a lesson, so neither proves
          a change with real students. Together they support short, low-stakes, repeated practice.
        </p>
      </Section>

      <Section id="ladder" title="Start with the least intrusive move that will work">
        <p>
          Every scenario in this guide is scored on one idea first: did the teacher start low? NCTQ’s
          classroom management recommendations, as <ExtLink href={SRC.naesp}>summarized by NAESP</ExtLink>,
          list the subtle moves to try before anything else: proximity, rule reminders, a “teacher
          look” and a substantive question that pulls a student back into the lesson.{' '}
          <ExtLink href={SRC.aero}>AERO’s handbook</ExtLink> adds a calm, non-threatening tone, a
          choice when a prompt does not work, and acknowledging the student once they correct.
        </p>
        <ResponseLadder />
        <p>
          Starting low is not the same as starting soft. For put-downs, the right first move is
          already rung four, because waiting lets it grow. What the ladder rules out is skipping
          straight to the top for a small behavior, which costs lesson time and leaves you nowhere
          to go next. The four levels below set where each scenario starts.
        </p>
        <DataTable columns={['Level', 'What it looks like', 'Where to start', 'Scenarios']} rows={levelRows} />
      </Section>

      <Section id="scenarios" title="Ten classroom management role play scenarios, easiest to hardest">
        <p>
          Give the student brief to the colleague playing the student only. The teacher sees the
          title and the setting. The hidden reason comes out only if the teacher asks a genuine,
          private question, which is the point. Many scenario lists, such as{' '}
          <ExtLink href={SRC.palomar}>this widely shared one from Palomar College</ExtLink>, stop at
          the situation; the brief and the hidden reason are what make it rehearsable.
        </p>
        <div className="space-y-4">
          {scenarios.map((s) => (
            <div key={s.n} className="border-2 border-ink bg-sheet p-4 sm:p-5">
              <h3 className="mb-1 font-mono text-[15px] font-semibold uppercase leading-snug text-ink">
                {s.n}. {s.title}
              </h3>
              <p className="tl-mono mb-3 text-[10.5px] font-semibold text-ink-2">
                {s.band} · {levels[s.level]}
              </p>
              <dl className="grid gap-x-4 gap-y-2 text-[15px] leading-relaxed sm:grid-cols-[120px_1fr]">
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">Student brief</dt>
                <dd>{s.brief}</dd>
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">Not said</dt>
                <dd>{s.hidden}</dd>
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">First move</dt>
                <dd>{s.first}</dd>
                <dt className="tl-mono text-[11px] font-semibold text-ink-2 sm:pt-1">Script</dt>
                <dd className="italic">{s.script}</dd>
                <dt className="tl-mono text-[11px] font-semibold text-stamp-green sm:pt-1">Pass if</dt>
                <dd>{s.pass}</dd>
              </dl>
            </div>
          ))}
        </div>
        <p>
          Several scenarios end with a private conversation after class. When that conversation
          needs to move to a parent, the same trio format works; our{' '}
          <Link href="/blog/parent-teacher-conference-role-play-scenarios" className={LINK}>parent-teacher conference role play scenarios</Link>{' '}
          pick up there.
        </p>
      </Section>

      <Section id="audience" title="The hardest skill to rehearse: removing the audience">
        <p>
          Scenarios 8 to 10 share a trap. A student who escalates in front of classmates is
          defending their standing with the class, not arguing with you, and anything said loudly
          becomes part of that contest. Try the three replies below.
        </p>
        <RefusalBranch />
        <p>
          The weak replies are the natural ones, which is why this needs rehearsal. Demanding
          compliance in front of 24 students makes backing down impossible. Sending them out ends
          the noise, but the reading difficulty behind the refusal is still there tomorrow. The
          strong reply starts with movement: closer, quieter, then step away after the choice.
        </p>
      </Section>

      <Section id="format" title="How to run classroom management role plays in a PD session">
        <p>
          Use rounds of 12 minutes, in trios: a teacher, a student and an observer with the rubric.
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>Brief, 2 minutes.</strong> The student reads the full brief. The teacher reads only the title.</li>
          <li><strong>Run, 4 minutes.</strong> The student reveals the hidden reason only to a genuine, private question.</li>
          <li><strong>Feedback, 4 minutes.</strong> The observer marks the six elements and names one change.</li>
          <li><strong>Rerun, 2 minutes.</strong> Replay only the moment that went wrong, with the change. Then rotate.</li>
        </ol>
        <p>
          AERO’s handbook adds three details that make rehearsal transfer: do it in the classroom
          where you will use it, speak at the pace and volume you would use with students, and stand
          and move as if they were there. A script helps; so does recording yourself.
        </p>
        <PracticeTimeCalc />
        <p>
          The format matters more than the scenario list. In 60 minutes with 18 teachers, a
          volunteer demonstration gives the average teacher under two minutes of practice, and
          most get none. Trios give everyone 10 minutes.
        </p>
      </Section>

      <Section id="rubric" title="How to score a classroom management role play">
        <p>
          Keep the rubric to six yes-or-no elements so the observer can mark them live. Stamp each
          run, then compare runs, not people.
        </p>
        <RubricRuns />
        <p>
          Watch two elements most closely. “Private, not public” means moving before speaking, and
          “follows up as promised” only counts if the run includes the after-class talk.
        </p>
      </Section>

      <Section id="ai-practice" title="Practicing the spoken moments between sessions">
        <Disclosure />
        <p>
          A colleague is still the best student for the room-level skills: proximity, scanning,
          where to stand. But many of the hardest moments in these scenarios are short
          conversations, such as the quiet choice in scenario 9, the after-class talk in scenario 8
          or staying calm in scenario 10, and those can be rehearsed alone with an AI student. In{' '}
          <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, a mentor can paste a brief from this
          guide, including the hidden reason, and a teacher can run the conversation by voice and get
          it scored. As of November 2026 there are 25 free minutes, paid plans start at $20 a month,
          and the Business plan covers 15 seats. Our{' '}
          <Link href="/blog/ai-roleplay-pricing" className={LINK}>guide to AI roleplay pricing</Link>{' '}
          explains seats versus minutes for a school.
        </p>
      </Section>

      <Section id="faq" title="FAQ">
        <FaqSection faqs={post.faqs} />
      </Section>

      <Section id="conclusion" title="Conclusion">
        <p>
          Classroom management role play scenarios work when they are specific: a student brief with
          a hidden reason, a least intrusive first move to aim for, a script to start from and a
          short rubric. The ten here run from calling out to a student who swears, in the order a
          new teacher should practice them.
        </p>
        <p>
          Our recommendation: drop the whole-staff demonstration. Run trios in 12-minute rounds,
          start with scenarios 1 to 3 until the quiet, private first move comes out without
          thinking, and only then rehearse the refusal and the put-downs. Score privacy and
          follow-up every time, because those are the two habits that fail under pressure.
        </p>
      </Section>

      <CtaBlock
        headline="Rehearse the hard moments before Monday"
        body="Paste a student brief with the reason they won’t say, then practice the quiet redirect, the refusal and the after-class talk by voice, with every run scored. Start with 25 free minutes."
      />

      <section className="mb-12">
        <h2 className="tl-mono mb-4 text-sm font-semibold text-ink">[ Related reading ]</h2>
        <RelatedReading slugs={['parent-teacher-conference-role-play-scenarios', 'ai-roleplay-pricing', 'objection-handling-techniques']} />
      </section>
    </PostShell>
  )
}
