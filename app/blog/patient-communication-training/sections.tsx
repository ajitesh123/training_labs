import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, ExtLink } from '@/components/blog/post/prose'
import { LINK, SRC } from './content'
import { DurationHistogram } from './figures-evidence'
import { SkillSwitcher } from './figures-skills'

const H3 = 'pt-2 font-mono text-[17px] font-semibold uppercase leading-snug text-ink'

// ------------------------------------------------------------------------------
// programs compared
// ------------------------------------------------------------------------------
export function ProgramsSection() {
  return (
    <Section id="programs" title="Patient communication training programs compared">
      <p>
        Most program pages describe one course. Here are seven options side by side, each read in
        November 2026. They differ less in topic than in format: how long they run, whether anyone
        watches you practice, and what happens after the course ends.
      </p>
      <DataTable
        columns={['Program', 'Format and length', 'Published price (Nov 2026)', 'Learner practice']}
        rows={[
          [
            <ExtLink key="ms" href={SRC.mayoSeries}>Mayo Clinic, Clinician Communication Series: Partnering with Patients</ExtLink>,
            'Self-paced online, about 30 minutes; available to December 31, 2026',
            '$50',
            'Recorded examples; no live practice listed',
          ],
          [
            <ExtLink key="mc" href={SRC.mayoCne}>Mayo Clinic, Effective Communication in Healthcare</ExtLink>,
            'Recorded online course, 3.5 credits (AMA, ANCC, ASWB)',
            '$350',
            'Demonstrations with standardized patients',
          ],
          [
            <ExtLink key="ca" href={SRC.capc}>CAPC, Communication Skills for Serious Illness Conversations</ExtLink>,
            'Five online courses; 5.25 AMA credits, 6.5 nursing CNE',
            'Credits free for CAPC members; membership price not listed',
            'Case scenarios to practice with',
          ],
          [
            <ExtLink key="vd" href={SRC.vitaltalk}>VitalTalk, Delivering Serious News</ExtLink>,
            'Online on demand, 8 weeks of access, 5 CME credits',
            'Not published on the course page',
            'Self-paced',
          ],
          [
            <ExtLink key="vm" href={SRC.vitaltalk}>VitalTalk, Virtual Mastering Tough Conversations</ExtLink>,
            'Self-paced modules plus live virtual classes',
            'Not published on the course page',
            'Role play with a live simulated patient, led by a facilitator',
          ],
          [
            <ExtLink key="cm" href={SRC.cmpa}>CMPA, Clinical Communication Program</ExtLink>,
            'Six months in three phases, small groups; up to 41 Mainpro+ credits',
            'Not published',
            'Simulated patient interactions, then coaching in your own practice',
          ],
          [
            <ExtLink key="cc" href={SRC.rede}>Cleveland Clinic, R.E.D.E. to Communicate</ExtLink>,
            'Licensed program with a peer-led foundations course',
            'Not published',
            'Experiential, peer-led',
          ],
        ]}
        note="CMPA’s program serves physicians in Canada. Cleveland Clinic offers R.E.D.E. to Communicate as a licensed program for organizations."
      />
      <p>
        Prices are easy to compare where they exist. Mayo Clinic’s modules cost $50 and its
        accredited online course $350, and CAPC’s courses carry free credits for members. VitalTalk,
        CMPA and Cleveland Clinic do not list prices on these pages, so expect to ask.
      </p>
      <p>
        The more useful column is the last one. Recorded courses explain the skills well and fit a
        busy schedule, but the learner never speaks. VitalTalk’s virtual course puts each learner
        in front of a live simulated patient with a facilitator. The CMPA program is the most
        complete: six weeks of preparation and goal setting, four weeks of online group training,
        then fourteen weeks of putting it into practice with coaching. More than half of its
        calendar happens after the class.
      </p>
      <DurationHistogram />
      <p>
        The programs in the review cluster at about a working day (6 to 8 hours) or several days
        (13 to 24 hours) of total training time, role play included. Recorded courses sit at the
        short end. That makes them a good, cheap foundation, and on their own the shape of program
        the evidence is least sure about. If you start with one, budget for practice afterward.
        (If you are training sales reps who call on clinicians rather than clinicians themselves,
        our{' '}
        <Link href="/blog/healthcare-sales-training" className={LINK}>
          healthcare sales training guide
        </Link>{' '}
        covers those programs.)
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// five skills, with scripts and drills
// ------------------------------------------------------------------------------
export function SkillsSection() {
  return (
    <Section id="skills" title="Five patient communication skills to practice, with scripts">
      <p>
        These five skills cover most of what goes wrong in a visit: the concern that never comes
        up, the instruction that is misheard, the explanation aimed at the wrong question, the
        feeling nobody acknowledged and the news delivered too fast. Tap through the weak and the
        stronger line for each, then read why it works and a drill for practicing it.
      </p>
      <SkillSwitcher />
      <h3 className={H3}>1. Set the agenda with “something else”</h3>
      <p>
        In a study of 20 family physicians and 224 patients (
        <ExtLink href={SRC.heritage}>Heritage and colleagues, Journal of General Internal Medicine, 2007</ExtLink>
        ), doctors asked one of two questions after the patient’s first concern. Asking whether
        there was “something else” to address eliminated 78 percent of unmet concerns compared with
        visits where nobody asked. Asking about “anything else” made no measurable difference, and
        neither version made visits longer. One word changed the answer, because “anything” leans
        toward a no.
      </p>
      <p>
        <strong>Drill:</strong> a partner plays a patient with three concerns who reveals the third
        only if asked early, with “something else.” Run it five times with a different opening
        complaint each time.
      </p>
      <h3 className={H3}>2. Teach-back, not “Does that make sense?”</h3>
      <p>
        <ExtLink href={SRC.ahrq}>AHRQ’s Health Literacy Universal Precautions Toolkit</ExtLink>{' '}
        describes teach-back as asking patients to say in their own words what they need to know or
        do. Its rules are worth putting on a card: you are checking your explanation, not testing
        the patient; yes-or-no questions do not count; check in small chunks during the visit
        rather than once at the end; and when teach-back finds a gap, explain it a different way
        and check again. For a new medicine, ask the patient to show you, because saying the dose
        correctly and taking it correctly are not the same thing.
      </p>
      <p>
        <strong>Drill:</strong> explain one discharge instruction while your partner gets one
        detail wrong on purpose. Re-explain it without reusing your first wording, then ask again.
      </p>
      <h3 className={H3}>3. Ask, tell, ask</h3>
      <p>
        Before you explain, find out what the patient already believes.{' '}
        <ExtLink href={SRC.nurse}>VitalTalk</ExtLink> treats ask-tell-ask as one unit of
        information transfer: ask what the patient knows or thinks, tell one piece of information,
        then ask how it landed. It prevents the most common mistake in a busy visit, a long
        explanation aimed at a question the patient was not asking.
      </p>
      <p>
        <strong>Drill:</strong> deliver one test result in three turns, keeping the middle turn to
        two sentences. Your partner answers the first question with a misunderstanding you have to
        correct.
      </p>
      <h3 className={H3}>4. Respond to emotion before adding information</h3>
      <p>
        When a patient says something charged, more information rarely helps until the feeling has
        been acknowledged. VitalTalk’s NURSE statements give five ways to do it: Name the emotion,
        show you Understand, Respect what the person has been doing, Support them with a
        commitment, and Explore with a focused question. VitalTalk adds a practical note: when you
        name an emotion, turn the intensity down a notch. “It sounds like this is frustrating” lands
        better than “You’re furious.”
      </p>
      <p>
        <strong>Drill:</strong> your partner delivers five emotional lines in a row. Answer each
        with a different NURSE statement and no medical information at all.
      </p>
      <h3 className={H3}>5. Share serious news with SPIKES</h3>
      <p>
        <ExtLink href={SRC.spikes}>SPIKES, published by Baile and colleagues in The Oncologist in 2000</ExtLink>
        , breaks a bad news conversation into six steps: set up the conversation, assess the
        patient’s perception, get an invitation to share information, give the knowledge, address
        emotions with empathy, and close with a strategy and summary. Its core rule is “before you
        tell, ask.” It also recommends a warning before the news, plain words such as “spread”
        instead of “metastasized,” and information in small chunks.
      </p>
      <p>
        Most clinicians learned this skill by watching, if at all. In a survey of oncologists at a
        2000 ASCO workshop, reported in the same paper, 42 percent had neither formal teaching nor
        experience sitting in on bad news conversations, and 52 percent expected the emotion step
        to be the hardest.
      </p>
      <p>
        <strong>Drill:</strong> run all six steps with a partner who reacts with silence the first
        time and anger the second.
      </p>
    </Section>
  )
}
