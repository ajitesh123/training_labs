import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { DisclaimerTimingFigure, LinesFigure } from './figures-lines'
import { ObjectionDrillFigure, PracticeQuarterFigure } from './figures-practice'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// license, skills and lines of business
// ------------------------------------------------------------------------------
export function LicenseSection() {
  return (
    <Section id="license-vs-sales" title="What the license covers, and what it leaves out">
      <p>
        Every agent starts with a license. The{' '}
        <ExtLink href={SRC.blsAgents}>Bureau of Labor Statistics</ExtLink> notes that agents must be
        licensed in each state where they work, and counts about 572,600 insurance sales agent jobs in
        2025, with a median wage of $62,280 in May 2025. It projects about 43,100 openings a year
        through 2035, many of them replacing people who move to other jobs or retire. That is a lot of new
        agents learning to sell, every single year.
      </p>
      <p>
        Pre-licensing teaches product and law, and it ends with a multiple-choice exam.{' '}
        <ExtLink href={SRC.priceGroup}>The Price Group</ExtLink>, a marketing organization that
        recruits agents, put state pre-licensing courses at $150 to $500 and 20 to 52 hours of
        coursework in its May 2026 update. Nothing on that exam asks an agent to sit with a couple, find
        out what they actually need, and explain it in a sentence.
      </p>
      <p>
        The annuity rules make the split explicit. The{' '}
        <ExtLink href={SRC.naicModel}>NAIC annuity model regulation</ExtLink> requires a one-time
        course of at least four credits before an agent sells annuities, and it forbids that course
        from teaching sales techniques. By design, regulated training stops at knowledge. Selling is
        left to the agency, the carrier and the agent.
      </p>
      <p>
        A weak first month looks like this: license, a carrier product webinar, a list of leads. A
        stronger one puts four weeks of short, scored practice between the webinar and the first paid
        lead, on the needs review and the three objections the agency hears most.
      </p>
    </Section>
  )
}

export function SkillsSection() {
  return (
    <Section id="skills" title="What insurance sales training should cover">
      <p>
        Insurance is hard to sell: the client cannot touch it, and plenty of prospects doubt they
        need more of it. Good training builds five skills, and each one is a conversation, not a
        fact:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong>Needs analysis.</strong> The fact finder in the figure at the top: dependents, income,
          debts and the coverage the client already has, before any price.
        </li>
        <li>
          <strong>Explaining coverage plainly.</strong> What a policy does and does not do, so an agent
          never promises something the form will not deliver, a point{' '}
          <ExtLink href={SRC.totalCsr}>TotalCSR’s training guide</ExtLink> makes for every line.
        </li>
        <li>
          <strong>Objection handling.</strong> The spouse, the work policy, the price, the website.
        </li>
        <li>
          <strong>Compliance language.</strong> The disclosures each line requires, said naturally and
          in the right order.
        </li>
        <li>
          <strong>Referrals, cross-selling and the first renewal.</strong> The calls that build a book
          after the first sale.
        </li>
      </ol>
      <p>
        Needs analysis comes first for a reason. An agent who leads with price turns every call into a
        comparison with the last quote the client saw. An agent who leads with the fact finder ends up
        quoting an amount the client worked out with them, which is much easier to defend when the
        spouse asks why.
      </p>
    </Section>
  )
}

export function LinesSection() {
  return (
    <Section id="by-line" title="Insurance sales training by line of business">
      <p>
        The core skills carry across, but the call changes with the product. A personal lines agent may
        quote and close in one phone call. A commercial producer runs a long needs review with a
        business owner. A Medicare agent works inside a recorded call with a required order of events.
        Pick a line to see what changes.
      </p>
      <LinesFigure />
      <p>
        If your agency sells several lines, do not run one generic sales course for everyone. Teach the
        shared skills once, then give each line its own short drill and its own practice client. The
        life agent needs the spouse objection; the Medicare agent needs a caller who jumps straight to
        benefits.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// compliance, programs, objections and practice
// ------------------------------------------------------------------------------
export function ComplianceSection() {
  return (
    <Section id="compliance" title="The compliance lines agents have to practice saying">
      <p>
        In regulated lines, part of the sales call is fixed by rule, and agents fail it by talking in
        the wrong order rather than by not knowing the rule. Two sets of rules shape the call in late 2026.
      </p>
      <p>
        <strong>Medicare.</strong> For contract year 2027 marketing, starting October 1, 2026, CMS
        changed what a sales call must sound like, per its{' '}
        <ExtLink href={SRC.cmsChanges}>September 2026 summary</ExtLink>. A third-party marketing
        organization that sells for more than one plan must say its disclaimer{' '}
        <ExtLink href={SRC.cfrDisclaimer}>before any benefits are discussed</ExtLink>, not within the
        first minute as before. The 48-hour wait after a Scope of Appointment is gone, but the Scope of
        Appointment must still be agreed and recorded before the appointment. Sales calls{' '}
        <ExtLink href={SRC.cfrAgents}>must be recorded</ExtLink> and kept for at least six years, down
        from ten. Agents must also be trained and tested every year and score 85 percent or higher.
      </p>
      <DisclaimerTimingFigure />
      <p>
        The figure shows why this is a practice problem. Under the old rule, an agent who answered a
        dental question at 20 seconds and said the disclaimer at 50 was fine. Under the new one, the
        same call fails, while a slower call that records the Scope of Appointment first passes. A
        written test will not build that habit. Ten practice calls with a caller who interrupts will.
      </p>
      <p>
        <strong>Annuities.</strong> The 2020 revision of NAIC Model #275, implemented in{' '}
        <ExtLink href={SRC.naicBrief}>49 jurisdictions as of August 2025</ExtLink>, asks agents to act
        in the consumer’s best interest. Per the{' '}
        <ExtLink href={SRC.naicFaq}>NAIC’s FAQ</ExtLink>, that means knowing the client’s finances and
        goals, having a reasonable basis for the recommendation, and disclosing the agent’s role,
        compensation and any material conflicts. Saying how you are paid, out loud and without sounding
        defensive, is a skill. Most agents have never rehearsed it.
      </p>
    </Section>
  )
}

export function ProgramsSection() {
  return (
    <Section id="programs" title="Insurance sales training programs and what they cost">
      <Disclosure />
      <p>
        Prices are hard to find, as they are across sales training. These are the published numbers we
        could confirm in November 2026, plus the programs that quote on request.
      </p>
      <DataTable
        columns={['Option', 'Published price', 'What you mostly get', 'Source']}
        rows={[
          ['State pre-licensing course', '$150 to $500', 'Exam prep: product and law, 20 to 52 hours', 'The Price Group, May 2026'],
          ['Carrier or IMO training', 'Often free to contracted agents', 'Product training, scripts, some coaching', 'The Price Group, May 2026'],
          [
            <ExtLink key="isl" href={SRC.isl}>Insurance Sales Lab</ExtLink>,
            '$200 or $300 a month; $2,200 or $3,300 a year',
            'Masterclasses, a 15-minute role play each morning, a weekly call-review session',
            'Vendor page, Nov 2026',
          ],
          ['Standalone programs', '$100 to $500 a month', 'Online courses with live sessions', 'The Price Group, May 2026'],
          ['Intensive bootcamps', '$2,000 to $5,000', 'Short, concentrated training', 'The Price Group, May 2026'],
          [
            <ExtLink key="ac" href={SRC.anthonyCole}>Anthony Cole Training</ExtLink>,
            'Quoted',
            'Custom producer programs; a six-month plan with 12 phone coaching sessions',
            'Vendor page, Nov 2026',
          ],
          [
            <ExtLink key="tt" href={SRC.ttai}>Tough Tongue AI</ExtLink>,
            'Free 25 minutes; $20 a month; $299 a month for 15 seats',
            'AI role play built from your scripts, scored on your rubric',
            'Vendor page, Nov 2026',
          ],
        ]}
        note="Insurance Sales Lab’s $300 Pro plan adds the commercial and life masterclasses, per Alpharun’s 2026 comparison. The Price Group is a marketing organization that offers free training to its own agents, so read its framing of paid programs with that in mind."
      />
      <p>
        The pattern matches what we found for{' '}
        <Link href="/blog/how-much-does-sales-training-cost" className={LINK}>
          sales training costs in general
        </Link>
        : what separates the tiers is practice and follow-up, not content. A membership with a daily
        role play and a weekly call review gives more repetitions than a bootcamp that ends on Friday.
        Whatever you buy, ask how many times each agent will practice the needs review and the top
        objections in the 90 days after it starts.
      </p>
    </Section>
  )
}

export function ObjectionsSection() {
  return (
    <Section id="objections" title="Insurance sales objections to drill">
      <p>
        Here are four common life insurance objections. Each has a reply that politely ends the call
        and a reply that keeps it going. The difference is rarely the words; it is whether the
        agent asks a question instead of defending the product.
      </p>
      <ObjectionDrillFigure />
      <p>
        Practice each one with a client who pushes back a second time, because the second objection is
        where scripts run out. Our guide to{' '}
        <Link href="/blog/objection-handling-techniques" className={LINK}>
          objection handling techniques
        </Link>{' '}
        has the general method and the drills that go with it.
      </p>
    </Section>
  )
}

export function PracticeSection() {
  return (
    <Section id="practice" title="A weekly practice plan for agents">
      <p>
        Insurance Sales Lab’s format, a short role play every morning and a weekly review of real
        recordings, is a good model for any agency, whatever you buy. The point is frequency. A two-day
        workshop gives an agent a handful of tries at the spouse objection; fifteen minutes three times a
        week gives them 39 in a quarter.
      </p>
      <PracticeQuarterFigure />
      <p>A plan that fits around appointments:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Two or three 15-minute sessions a week</strong> on the calls the agent actually takes:
          one fact finder, one objection, and the compliance opening for their line.
        </li>
        <li>
          <strong>A score after every session</strong> on four or five lines, such as “asked about
          dependents before quoting” and “booked a time with both decision makers.”
        </li>
        <li>
          <strong>One real recording reviewed each week</strong> by a manager, picking one moment to fix,
          as in our guide to{' '}
          <Link href="/blog/sales-coaching-techniques" className={LINK}>
            sales coaching techniques
          </Link>
          .
        </li>
      </ul>
      <p>
        With the defaults above, the agent’s own time costs about five times more than the AI minutes,
        so the real budget question is hours, not software. Short sessions between appointments use the
        gaps in a day rather than a whole day off the phones. For new hires, put the first round of
        practice inside the{' '}
        <Link href="/blog/sales-onboarding-checklist" className={LINK}>
          first 90 days of onboarding
        </Link>
        , before the first paid lead.
      </p>
    </Section>
  )
}
