import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { DetailScorerFigure, OffLabelFigure } from './figures-calls'
import { PhysicianAccessFigure, PracticeVsProductFigure } from './figures-field'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// what companies teach
// ------------------------------------------------------------------------------
export function CurriculumSection() {
  return (
    <Section id="curriculum" title="What pharmaceutical companies teach new reps">
      <p>
        The industry’s own floor is written down. Section 14 of the{' '}
        <ExtLink href={SRC.phrmaCode}>PhRMA Code</ExtLink> (in force since January 2022) says
        companies should train every rep who visits health care professionals on the laws,
        regulations and codes that govern those visits, train them in enough general science and
        product information to be accurate and consistent with FDA requirements, refresh that
        training as needed, and assess reps periodically for compliance.
      </p>
      <p>
        Most company programs meet that floor with two layers. The first is taught well. The second
        is where reps struggle in the field.
      </p>
      <DataTable
        columns={['Layer', 'What reps learn', 'How it is usually checked', 'What to add']}
        rows={[
          ['Disease state', 'Condition, patient types, standard of care, guidelines', 'Module quizzes, teach-back', 'Describe a patient type in the physician’s words'],
          ['Product and label', 'Indication, dosing, trial results, safety information', 'Product certification exam', 'Say the core message with its safety information in under a minute'],
          ['Compliance', 'PhRMA Code, FDA promotion rules, sampling, adverse event reporting', 'Annual compliance test', 'Rehearse an off-label question and an adverse event mention'],
          ['Market access', 'Coverage, formularies, prior authorization', 'Often a slide deck', 'Answer “my patients’ plans won’t cover it” with the local facts'],
          ['The detail', 'Opening, questions, objections, the close', 'A few role plays at classroom training', 'Scored practice runs until the rep passes, then weekly'],
        ]}
      />
      <p>
        The imbalance is not a guess.{' '}
        <ExtLink href={SRC.zsReps}>ZS reported in March 2025</ExtLink> that its clients say
        physicians want reps to bring practice knowledge twice as much as product knowledge, while
        90 percent of rep training is on the product.
      </p>
      <PracticeVsProductFigure />
      <p>
        Practice knowledge is the part of the visit that helps an office actually use the drug:
        which plans need a prior authorization, how a product is stored or given, which form the
        front desk keeps losing. ZS’s point is that a better molecule can still lose to these
        problems. So the access answer belongs inside the detail you rehearse, not in a separate
        slide deck nobody practices out loud.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// access and time with physicians
// ------------------------------------------------------------------------------
export function AccessSection() {
  return (
    <Section id="access" title="How much time do pharma reps get with physicians?">
      <p>
        Less than they used to, and on the physician’s terms. ZS’s AccessMonitor data, built from
        rep call records, showed{' '}
        <ExtLink href={SRC.zs2015}>53 percent of US physicians restricting rep visits by 2015</ExtLink>
        , up from 23 percent in 2008. In{' '}
        <ExtLink href={SRC.zsOncology}>oncology in March 2024</ExtLink>, only 32 percent of
        providers were fully accessible. After the pandemic,{' '}
        <ExtLink href={SRC.zoomAccess}>56 percent of physicians in a 2026 ZoomRx survey</ExtLink>{' '}
        described access that had changed for good: more virtual visits, tighter restriction, or
        appointments only.
      </p>
      <p>
        The same ZoomRx study of 105 physicians asked what gets a rep in, what earns the visit, and
        what ends the relationship.
      </p>
      <PhysicianAccessFigure />
      <p>
        Three training lessons follow. First, the scheduling call is now part of the sale: with 68
        percent of physicians requiring an appointment and{' '}
        <ExtLink href={SRC.zoomTime}>walk-ins down to 6 percent</ExtLink>, reps need to practice
        asking the front desk for time as much as the detail itself. Second, each visit has to bring
        something new and clinical, because 94 percent named that as the reason a visit is worth
        having. Third, the trust killers are behaviors you can rehearse away: arriving unprepared,
        pushing, running over time, or overstating a claim.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// off-label questions
// ------------------------------------------------------------------------------
export function OffLabelSection() {
  return (
    <Section id="off-label" title="How pharma reps should handle off-label questions">
      <p>
        Physicians may prescribe a drug for uses outside its label, and they ask reps about those
        uses all the time. Companies may not promote them. The moment a physician asks, a new rep
        has a few seconds to choose between three replies, and two of them are wrong.
      </p>
      <OffLabelFigure />
      <p>
        FDA’s{' '}
        <ExtLink href={SRC.fdaUnsolicited}>2011 draft guidance on unsolicited requests</ExtLink>{' '}
        sets the pattern most companies train. An answer should be truthful, balanced, non-promotional
        and limited to the question asked, sent privately to the person who asked, with records kept.
        FDA recommends that sales and marketing staff have no input on the content of those answers,
        which is why reps are taught to log a medical information request. The guidance adds a detail
        worth drilling: a question the rep prompted, for example by hinting at a new use, does not
        count as unsolicited.
      </p>
      <p>
        The rules have moved. In{' '}
        <ExtLink href={SRC.fdaSiuu}>January 2025 FDA finalized guidance</ExtLink> on firm-initiated
        sharing of scientific information on unapproved uses, such as reprints and clinical practice
        guidelines, with recommended disclosures. As{' '}
        <ExtLink href={SRC.lsl}>Life Science Leader noted in May 2026</ExtLink>, it acknowledges that
        trained sales staff may share that content when it is kept separate from promotion.
        Companies differ on whether they allow it. Train the reply your own procedure allows, word for
        word, and rehearse it until it comes out calmly. Insurance agents face the same kind of fixed
        wording on Medicare calls, covered in our guide to{' '}
        <Link href="/blog/insurance-sales-training" className={LINK}>
          insurance sales training
        </Link>
        .
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// practicing the detail
// ------------------------------------------------------------------------------
export function PracticeSection() {
  return (
    <Section id="practice" title="How to practice a pharmaceutical sales call">
      <p>
        A short detail has five parts, and each one can be practiced on its own: an opener tied to
        the physician’s patients, one real question, the core message with its safety information,
        an answer to the access question, and a request for a specific next visit. The example below
        runs the same two-minute call twice. Watch which lines earn points.
      </p>
      <DetailScorerFigure />
      <p>Six drills cover most of what goes wrong in the field. Run each one out loud:</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li><strong>The 20-second opener.</strong> Name a patient type the physician mentioned before and one new thing you bring for it.</li>
        <li><strong>The timed core message.</strong> Benefit and safety information together, under a minute, in your own words but true to the approved materials.</li>
        <li><strong>“My patients’ plans won’t cover it.”</strong> Answer with the local coverage facts and one practical step for the office.</li>
        <li><strong>The competitor’s data.</strong> Acknowledge it, stay on your label, and do not compare outside approved materials.</li>
        <li><strong>The off-label question.</strong> The routed reply from the figure above, until it sounds natural.</li>
        <li><strong>The front desk.</strong> Ask for an appointment in two sentences, with a reason the physician will care about.</li>
      </ol>
      <p>
        Who plays the physician matters less than how often the rep practices and whether each run
        is scored the same way. Trainers at classroom training, peer triads, manager rides and AI
        role play all work. For volume, tools such as{' '}
        <ExtLink href={SRC.ttai}>Tough Tongue AI</ExtLink> let a rep rehearse against an AI
        physician built from your approved messaging and get scored on your rubric, then send the
        lowest-scoring moment to a manager. Use only approved content in any practice tool, and keep
        patient details out of it.
      </p>
      <Disclosure />
      <p>
        To score practice the same way across a team, borrow the rubric habits in our guide to{' '}
        <Link href="/blog/objection-handling-techniques" className={LINK}>
          objection handling techniques
        </Link>
        : one behavior per line, a pass line written in advance, and a rerun of the weakest moment.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// a 90-day plan
// ------------------------------------------------------------------------------
export function PlanSection() {
  return (
    <Section id="plan" title="A 90-day practice plan for new pharma reps">
      <p>
        Keep the company’s knowledge curriculum as it is and run spoken practice alongside it from
        week one, instead of saving it for a single classroom week.
      </p>
      <DataTable
        columns={['Days', 'Knowledge', 'Spoken practice', 'Proof before moving on']}
        rows={[
          ['1 to 30', 'Disease state, label, compliance and access modules; pass the exams', 'Opener and core message, three short runs a week', 'Core message with safety information, under a minute, scored 2 of 2'],
          ['31 to 60', 'Territory plan, formulary and plan coverage by account', 'Full detail with access and competitor questions; front-desk scheduling call', 'Three runs in a row at 8 of 10 or better'],
          ['61 to 90', 'Launch or label refreshers as they come', 'Off-label question in every third run; manager reviews one recording a week', 'Manager signs off on observed field calls'],
        ]}
      />
      <p>
        After day 90, the weekly rhythm in our{' '}
        <Link href="/blog/sales-coaching-framework" className={LINK}>
          sales coaching framework
        </Link>{' '}
        keeps the detail sharp: one moment from a real call, one behavior to change, one rehearsal,
        then a check on the next visit.
      </p>
    </Section>
  )
}
