import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { ProgramMatrix, StaffingFigure } from './figures-programs'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// programs compared
// ------------------------------------------------------------------------------
export function ProgramsSection() {
  return (
    <Section id="programs" title="Admissions counselor training programs compared">
      <p>
        Four professional programs show up again and again when offices look for formal training.
        Each was read in November 2026. They differ more in format than in topic: how long they
        run, whether anyone is live, and whether a counselor ever practices a conversation out loud.
      </p>
      <DataTable
        columns={['Program', 'Format and length', 'Published price (Nov 2026)', 'Practice listed']}
        rows={[
          [
            <ExtLink key="n" href={SRC.nacacEmerging}>NACAC, College Admission for Emerging Leaders</ExtLink>,
            'Hybrid: ten video modules, three live Zoom sessions, a capstone workbook; about eight weeks at 1.5 to 3 hours a week',
            '$230 members, $410 nonmembers; $30 off for four or more from one office',
            'Live discussion and breakout groups',
          ],
          [
            <ExtLink key="a" href={SRC.aacrao}>AACRAO, Admissions Counselor/Recruiter 101</ExtLink>,
            'Instructor-led online, four weeks at six to eight hours a week; 2026 sessions in April and July',
            '$445 members, $495 nonmembers',
            'Online course activities',
          ],
          [
            <ExtLink key="c" href={SRC.naccap}>NACCAP, New Admissions Counselor Training</ExtLink>,
            'Six on-demand microcourses of five lessons each, 60 days of access, for counselors in their first year',
            '$250 members, $300 nonmembers per person; $200 and $250 for five or more',
            'Reflection questions, short assessments, a guide for the supervisor',
          ],
          [
            <ExtLink key="r" href={SRC.rnl}>RNL, Admissions Counselors Track</ExtLink>,
            'Bronze, Silver and Gold levels, each a two-day in-person session (virtual on request)',
            'Not published',
            'Role-playing scenarios and case studies at Gold level',
          ],
        ]}
        note="NACAC’s 2026 cohorts were closed when we checked; 2027 dates were not yet posted. NACCAP is an association of Christian colleges, and its courses are written for that setting."
      />
      <p>
        For a new counselor, the NACAC and AACRAO courses are the closest thing to a standard
        foundation. At $230 to $495 they cost less than one working week of pay at the{' '}
        <ExtLink href={SRC.bls}>May 2025 BLS median</ExtLink> for educational, guidance and career
        counselors and advisors, $30.93 an hour, or $1,237 for 40 hours. NACCAP’s
        microcourses are the only ones of the four that name sales and handling hard questions as
        topics. RNL’s track is the most complete and the only one that lists role-play, but only at
        its Gold level, the third of three two-day sessions.
      </p>
      <ProgramMatrix />
      <p>
        The pattern is the same one we found in{' '}
        <Link href="/blog/patient-communication-training" className={LINK}>
          patient communication training
        </Link>
        :
        courses explain the work well, and the learner rarely speaks. That is not a reason to skip
        them. It means the conversation practice has to happen in your office, on your programs,
        prices and policies, which no outside course can know.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// why training never stops
// ------------------------------------------------------------------------------
export function OngoingSection() {
  return (
    <Section id="why-ongoing" title="Why admissions training never really stops">
      <p>
        Most admissions offices are always onboarding someone. CUPA-HR found that 71 percent of
        admissions coordinators and counselors had been in their position for three years or less,
        against 53 percent of higher education professionals overall, and the share was about the
        same when it started tracking in 2017.
      </p>
      <StaffingFigure />
      <p>
        AACRAO’s <ExtLink href={SRC.aacraoStaffing}>October 2025 staffing survey</ExtLink> of
        admissions leaders found 95 percent facing at least one staffing challenge, with 54 percent
        naming burnout and 45 percent high turnover. Only 7 percent reported no critical skills gap.
        A <ExtLink href={SRC.nacacWellBeing}>2024 NACAC committee report</ExtLink> adds that burnout
        was the top challenge named in its 2022 member survey, by 43 percent of respondents.
      </p>
      <p>
        Two consequences for training. First, it cannot depend on the one experienced director
        finding time to sit in on calls, because that person is also covering for the last
        counselor who left. Second, it has to be short and repeatable: a new counselor in October,
        in the middle of travel season, needs the same practice rounds as one hired in June.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// rules before the first call
// ------------------------------------------------------------------------------
export function RulesSection() {
  return (
    <Section id="rules" title="The rules every counselor needs before the first parent call">
      <p>
        Admissions work is persuasion, and it has firmer limits than most sales jobs. Train these
        before anyone practices a fee conversation, because the strong replies later in this guide
        are built around them. This is a summary of US rules, not legal advice.
      </p>
      <ul className="list-disc space-y-3 pl-6">
        <li>
          <strong>No pay tied to enrollments.</strong> Institutions that take federal student aid
          may not give any commission, bonus or other incentive based on securing enrollments to
          anyone in recruitment or admission, under{' '}
          <ExtLink href={SRC.incentive}>34 CFR 668.14(b)(22)</ExtLink>. The{' '}
          <ExtLink href={SRC.fsaHandbook}>2026 to 2027 FSA Handbook</ExtLink> says enrollment
          counselors and recruiters are expected to be covered, and lists contacting potential
          applicants as a covered activity.
        </li>
        <li>
          <strong>Spoken words count.</strong> The misrepresentation rules in{' '}
          <ExtLink href={SRC.misrep}>34 CFR 668.71</ExtLink> cover statements made orally, and
          omissions that make a statement misleading, about a program, its financial charges or the
          employability of its graduates. <ExtLink href={SRC.misrepProgram}>Section 668.72</ExtLink>{' '}
          names credit transfer and licensure eligibility as examples.
        </li>
        <li>
          <strong>One deposit, no rewards.</strong> NACAC’s{' '}
          <ExtLink href={SRC.nacacEthics}>Guide to Ethical Practice (August 2026)</ExtLink> asks
          members to tell students it is unethical to hold enrollment deposits at more than one US
          college, and says members should not be paid by commission or offer rewards to influence
          an enrollment or aid decision.
        </li>
      </ul>
      <p>
        If your team is not covered by these rules, for example an edtech company selling short
        courses outside federal aid, the incentive ban may not apply to you. The training point
        still holds. Families make large decisions on what a counselor says on the phone, and a
        counselor under pressure to close is the one most likely to guess at aid or invent a
        deadline. Write down what counselors may and may not promise, and score it.
      </p>
    </Section>
  )
}
