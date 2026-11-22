import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { RampCurve } from './figures-calc'
import { ThreeReadsFigure } from './figures-hero'
import { MeasurementFigure } from './figures-levels'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// lever 1: ramp time
// ------------------------------------------------------------------------------
export function RampSection() {
  return (
    <Section id="ramp" title="Lever 1: how training shortens ramp time">
      <p>
        Ramp time is the months between a rep’s start date and full productivity. It is the lever
        most directly owned by training, because onboarding is training, and it is getting longer.
        The <ExtLink href={SRC.bridge}>Bridge Group’s 2026 survey</ExtLink> of 158 B2B companies,
        published in June 2026, puts average account executive ramp at 6.2 months, the highest in
        the study’s history. Only 48 percent of reps were at quota, down from 51 percent in 2024.
      </p>
      <p>
        To turn ramp into money, price the quota a rep carries while still ramping. At the Bridge
        Group’s median quota of $960,000, a fully ramped rep carries $80,000 a month. If ramp is a
        straight line from zero to full quota, every month you remove from it returns half a
        month’s quota per new hire, because the rep would have been halfway up the ramp during that
        month anyway.
      </p>
      <RampCurve />
      <p>
        One month saved on a $960,000 quota returns $40,000 of quota capacity per hire. That is
        bookings capacity, not profit, and not all of it will close: remember that fewer than half
        of reps reach quota. Before it goes into an ROI number, multiply it by gross margin and by
        the share you can credit to training. The calculator below does both.
      </p>
      <p>
        The bigger problem is that most teams cannot say what their ramp is. In a{' '}
        <ExtLink href={SRC.mediafly}>2022 Mediafly and RevOps Squared survey</ExtLink> of 339
        companies, 29 percent had no measurement for ramp time at all and 34 percent used a historic
        figure regardless of current reality. Pick one definition (time to first full quarter at
        quota is the most common, used by 41 percent) and record it for every hire before you change
        anything.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// lever 2: time to first sale
// ------------------------------------------------------------------------------
export function FirstSaleSection() {
  return (
    <Section id="first-sale" title="Lever 2: time to first sale, the early signal">
      <p>
        Full ramp takes two quarters, which is too long to wait before learning whether a program
        works. Time to first sale is the early version: days from start date to the first
        closed-won deal for an account executive, or to the first qualified meeting for an SDR. It
        moves within weeks, and it is hard to fake.
      </p>
      <p>
        For scale, <ExtLink href={SRC.revspire}>Revspire’s October 2026 benchmark</ExtLink> of its
        own customers reports a median of 120 days to a first won deal for enterprise account
        executives, 75 days for mid-market, and 35 days to a first qualified meeting for SDRs. It
        also reports that reps who completed AI role-plays in their first 30 days ramped in 68 days
        against 92 for those who did not. Revspire sells enablement software and the comparison is
        not controlled, so read it as a reason to run your own comparison, not as a result to quote.
      </p>
      <p>
        Two cohorts make the comparison. A weak setup trains everyone in March and compares March
        hires with last year’s hires, which mixes the program with a different market, a different
        product and different managers. A stronger setup splits one hiring class: half start the new
        onboarding in week one, half in week five, and you compare days to first sale for each half.
        The delay costs little and gives you a result you can defend.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// lever 3: win rate
// ------------------------------------------------------------------------------
export function WinRateSection() {
  return (
    <Section id="win-rate" title="Lever 3: win rate, valued at margin">
      <p>
        Win rate is where most programs aimed at existing reps show up: discovery, objection
        handling, negotiation. The math is simple. Extra wins equal the change in win rate times
        the number of decided opportunities. Multiply by average deal size for bookings, then by
        gross margin for the benefit that belongs in an ROI. A two-point lift across 400 decided
        deals is eight extra wins; at $20,000 and 70 percent margin, that is $112,000 before you
        decide how much of it training caused.
      </p>
      <p>
        That last step is where most ROI numbers go wrong. The ROI Institute’s published retail case
        shows why. A chain trained 48 electronics associates in a three-day selling skills program
        and compared their weekly sales with similar associates in stores that were not trained.
        Toggle through three readings of the same data:
      </p>
      <ThreeReadsFigure />
      <p>
        Comparing the trained group with itself credits the program with growth the untrained stores
        also enjoyed. Counting sales instead of profit treats every dollar of revenue as a dollar of
        benefit, when the case’s profit contribution was 2 percent of sales. Only the third reading,
        trained against untrained and valued at margin, gives the published 118 percent. It is also
        the only one that would survive a finance review.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// isolating the effect
// ------------------------------------------------------------------------------
export function IsolateSection() {
  return (
    <Section id="isolate" title="How to isolate the effect of sales training">
      <p>
        Isolation means answering one question honestly: how much of the change would have happened
        anyway? The ROI Institute’s guiding principles require at least one isolation method and the
        most conservative choice whenever there is a choice. In practice, teams lean on the cheapest
        methods.
      </p>
      <MeasurementFigure />
      <p>
        In the <ExtLink href={SRC.roiDeck}>ROI Institute’s sample of 246 practitioners</ExtLink>, 57
        percent used participant estimates and only 34 percent used control groups. Estimates are
        not useless: ask each rep what share of a win they credit to the training and how confident
        they are, then multiply the two, which shrinks the claim. But a comparison group is better,
        and in sales it is usually free. Programs roll out in waves anyway. Make the second wave
        your control group and write the comparison down before the first wave starts.
      </p>
      <p>
        Three rules keep the number honest:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Count one year of benefits for a one-off program, as the ROI Institute recommends.</li>
        <li>Use gross margin, not bookings, and leave out deals that were already in late stages.</li>
        <li>
          Do not borrow famous statistics. You will see claims that training returns several dollars
          per dollar spent; if you cannot open the study behind a figure, leave it out of your deck.
        </li>
      </ul>
      <p>
        If you want a weekly coaching routine that produces the behavior evidence for levels 2 and
        3, our{' '}
        <Link href="/blog/sales-coaching-framework" className={LINK}>
          sales coaching framework
        </Link>{' '}
        walks through one that takes about 30 minutes per rep.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// fully loaded cost
// ------------------------------------------------------------------------------
export function CostSection() {
  return (
    <Section id="cost" title="What goes into the fully loaded cost">
      <p>
        The denominator is easier than the benefit, but teams still shrink it by leaving out time.
        In the retail case, participant salaries and benefits were the largest single line, 38
        percent of the total.
      </p>
      <DataTable
        columns={['Cost line', 'In the retail case', 'Often forgotten?']}
        rows={[
          ['Facilitation or program fees', '$11,250 (3 courses at $3,750)', 'No: it is the invoice'],
          ['Materials, meals and rooms', '$6,792', 'Sometimes'],
          ['Participant salaries plus benefits', '$12,442 (35% benefits factor)', 'Yes, most often'],
          ['Coordination and evaluation', '$2,500', 'Yes'],
          ['Manager coaching time after the program', 'Not separately listed', 'Yes'],
          ['Practice tools and content licenses', 'Not used', 'Sometimes'],
        ]}
        note="Source: ROI Institute retail case, March 2024. Total cost $32,984."
      />
      <p>
        For a line-by-line look at what programs charge and how much rep time they take, see{' '}
        <Link href="/blog/how-much-does-sales-training-cost" className={LINK}>
          how much sales training costs
        </Link>
        . Its year-one budget uses the same default inputs as the calculator below, so the two
        numbers match.
      </p>
    </Section>
  )
}
