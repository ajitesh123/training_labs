import Link from 'next/link'
import { AnimatedBars, Figure } from '@/components/blog/figures'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { FirstMonthFigure, GateScorecardFigure } from './figures-gates'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// before day one and the first month
// ------------------------------------------------------------------------------
export function BeforeDayOneSection() {
  return (
    <Section id="before-day-one" title="Before day one: the setup that decides week one">
      <p>
        The cheapest days to waste are the first ones, and they are the easiest to waste. In a weak
        plan, the rep spends Monday and Tuesday waiting for a CRM login and reading an old wiki. In a
        stronger plan, every login has been tested by someone who actually signed in, the first two
        weeks are already on the calendar, and the rep makes a practice call on day two.
      </p>
      <p>Three setup items get skipped more than the rest:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>The comp plan, in writing.</strong> It is the first thing most new reps want to
          understand. Explain the ramp quota and when full quota starts, and put it on paper.
        </li>
        <li>
          <strong>A written definition of ramped.</strong> For example, the first month at full
          quota, or three months in a row at 80 percent. Without it you cannot measure ramp, and the
          rep cannot tell whether they are on track.
        </li>
        <li>
          <strong>A peer mentor with time set aside.</strong> A mentor who has not been told is just a
          colleague who gets interrupted.
        </li>
      </ul>
    </Section>
  )
}

export function FirstMonthSection() {
  return (
    <Section id="days-1-30" title="Days 1 to 30: learn it by saying it out loud">
      <p>
        Week one is for the buyer, the product and the company story. The single best hour is
        listening to five recorded calls start to finish, three won and two lost, because they show
        the real buyer’s words rather than the deck’s. By Friday the rep should deliver a 90-second
        company story out loud and get a score.
      </p>
      <p>
        Days 8 to 30 are where most programs go quiet. The common pattern is a month of shadowing: the
        rep listens to senior reps, takes notes and says almost nothing. Shadowing is useful for
        hearing the product in context, but it is passive. A stronger month spends the same hours with
        a different mix.
      </p>
      <FirstMonthFigure />
      <p>
        The practice month keeps shadowing but adds speaking: a product check, about ten scored
        discovery practice runs, and short drills on the five objections your team hears most. The
        rep reaches the first live call having already made the common mistakes in private. Our guide to{' '}
        <Link href="/blog/objection-handling-techniques" className={LINK}>
          objection handling techniques
        </Link>{' '}
        has drills for those, and SDRs can start with the{' '}
        <Link href="/blog/cold-call-practice" className={LINK}>
          cold call practice drills
        </Link>
        .
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// gates
// ------------------------------------------------------------------------------
export function GatesSection() {
  return (
    <Section id="gates" title="Certification gates: how a new rep earns live calls">
      <p>
        A gate is a scored performance the rep must pass before taking on the next kind of work. The
        day-30 gate in most plans is a discovery call against a practice buyer. A quiz checks whether
        the rep knows the questions. A gate checks whether they ask them, in order, while a buyer is
        pushing back.
      </p>
      <GateScorecardFigure />
      <p>
        Good gates share four features: a written rubric, a pass line, a retry date, and the same
        rubric used later on real calls, so a score of 3 means the same thing in practice and on the
        phone. A failed first attempt is normal and useful. It tells the manager exactly which drill
        to assign, here “who else decides”, instead of a general note to work on discovery.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// days 31 to 90, with the condensed template
// ------------------------------------------------------------------------------
export function LaterSection() {
  return (
    <Section id="days-31-90" title="Days 31 to 90: from first solo calls to a full book">
      <p>
        In days 31 to 60 the rep takes live calls, but only in call types they have certified. The
        manager reviews one recorded call a week and turns the biggest gap into next week’s practice,
        the same loop described in our{' '}
        <Link href="/blog/sales-coaching-framework" className={LINK}>
          sales coaching framework
        </Link>
        . The day-60 gate is simple: do real calls score at the level the rep reached in practice?
      </p>
      <p>
        In days 61 to 90 the rep owns a full book or lead flow, practices pricing and negotiation, and
        for AEs, forecasts their own deals for the first time. The 90-day review ends onboarding but
        not development. It should set two or three skill goals for the next 90 days.
      </p>
      <DataTable
        columns={['Phase', 'The rep does', 'Main owner', 'Gate at the end']}
        rows={[
          ['Before day 1', 'Nothing yet; everything is ready', 'Manager, RevOps', 'Day one starts with zero waiting'],
          ['Week 1', 'Buyer, product, five recorded calls, company story out loud', 'Enablement', 'Company story scored and passed'],
          ['Days 8 to 30', 'Scored discovery practice, objection drills, shadowing', 'Enablement, mentor', 'Discovery certification'],
          ['Days 31 to 60', 'Solo calls in certified types, weekly call review', 'Manager', 'Live scores hold at practice level'],
          ['Days 61 to 90', 'Full book, pricing practice, first forecast', 'Manager', '90-day review and next goals'],
        ]}
        note="Copy the rows into a sheet, one tab per new hire, and add dates."
      />
    </Section>
  )
}

// ------------------------------------------------------------------------------
// SDR vs AE
// ------------------------------------------------------------------------------
export function RoleSection() {
  return (
    <Section id="sdr-vs-ae" title="SDR vs AE onboarding: what changes">
      <p>
        Keep one shared foundation and change the track by role. SDRs ramp faster and certify earlier;
        AEs carry longer cycles and need deal skills that only show up after day 60.
      </p>
      <DataTable
        columns={['', 'SDR', 'Account executive']}
        rows={[
          ['Average ramp', <ExtLink key="s" href={SRC.bridgeSdr}>3.0 months (Bridge Group, 2025)</ExtLink>, <ExtLink key="a" href={SRC.bridge2026pdf}>6.2 months (Bridge Group, 2026)</ExtLink>],
          ['First gate', 'Cold call opener, often in week two', 'Discovery call, by day 30'],
          ['First live work', 'Dials, once the opener is certified', 'Co-owns a live deal with a senior rep'],
          ['Practice focus', 'Openers, objections, asking for the meeting', 'Discovery, demo, second contact, pricing'],
          ['Day-90 gate', 'AEs accept the quality of booked meetings', 'Forecast stages hold under review'],
        ]}
      />
    </Section>
  )
}

// ------------------------------------------------------------------------------
// practice
// ------------------------------------------------------------------------------
export function PracticeSection() {
  return (
    <Section id="practice" title="Where practice fits, and how much to plan">
      <p>
        Reps say the gap is practice and feedback, not content. Salesforce’s seventh State of Sales
        report surveyed 4,050 sales professionals in 22 countries:
      </p>
      <Figure
        title="Share of sales reps who say each of the following"
        caption="Survey of sales professionals; each bar is a separate statement, so they do not add up."
        source="Salesforce, State of Sales, 7th edition (read November 2026)."
      >
        <AnimatedBars
          format="pct"
          items={[
            { label: 'Traditional enablement does not give me the skills I need', value: 52 },
            { label: 'I rarely get feedback on my sales conversations', value: 46 },
            { label: 'I don’t get enough chances to roleplay before customer calls', value: 41, highlight: true },
            { label: 'My manager’s lack of time is an obstacle', value: 40 },
          ]}
        />
      </Figure>
      <p>
        The checklist above asks for a lot of spoken repetitions in the first 30 days: a scored company
        story, about ten discovery runs and the objection drills. A manager or a senior rep can play
        the buyer for some of them, but rarely for all of them, which is exactly the time problem the{' '}
        <ExtLink href={SRC.salesforce}>Salesforce survey</ExtLink> describes.
      </p>
      <Disclosure />
      <p>
        AI buyers are one way to fill that gap. In{' '}
        <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink>, new hires practice against an AI buyer
        built from your playbook and get a score on your rubric after every run, and managers review
        the runs that matter. There are 25 free minutes, and the Business plan is $299 a month for 15
        seats and 2,990 minutes (pricing page, November 2026). Keep the manager for the gate itself:
        the sign-off on a certification should be a person’s call.
      </p>
    </Section>
  )
}
