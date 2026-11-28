import Link from 'next/link'
import { Section } from '@/components/blog/post/post-shell'
import { DataTable, Disclosure, ExtLink } from '@/components/blog/post/prose'
import { SRC } from './content'
import { FeedbackFigure, PromptDriftFigure } from './figures-chat'
import { BuildBuyFigure, PathCostFigure } from './figures-cost'

const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'

// ------------------------------------------------------------------------------
// running it on ChatGPT, and what changes in December
// ------------------------------------------------------------------------------
export function SetupSection() {
  return (
    <Section id="setup" title="How to run a sales role play on ChatGPT">
      <p>A setup that holds up for one rep takes about ten minutes:</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          <strong>Make a Project for the call.</strong> Put the buyer brief in the project instructions
          and upload the product sheet and price list, so every practice chat starts from the same
          setup. OpenAI’s <ExtLink href={SRC.releaseNotes}>2026 release notes</ExtLink> say Live voice
          now works inside Projects and can draw on the project’s instructions and files.
        </li>
        <li>
          <strong>Write a buyer, not a customer.</strong> A name, a role, a situation, one fact the buyer
          will not volunteer, the objection they will raise, and a rule for when they may agree to a
          next step.
        </li>
        <li>
          <strong>Add a stop word and a rubric.</strong> Tell it to stay in character until you type
          DEBRIEF, then score three or four things you care about and quote your words for each.
        </li>
        <li>
          <strong>Practice out loud.</strong> Typing lets you edit; a call does not.{' '}
          <ExtLink href={SRC.voice}>OpenAI’s Voice page</ExtLink> lists 3 hours of Live voice in a
          rolling 24 hours on Plus and on Business Standard seats, which is more than any rep will use
          for practice.
        </li>
      </ol>
      <p>The brief is what separates useful practice from a friendly chat. Compare the two:</p>
      <PromptDriftFigure />
      <p>
        With the one-line prompt, the buyer agrees by the third turn and the rep learns nothing. With
        the brief, the buyer holds back the real reason, so the rep has to ask. That hidden fact is the
        most useful line in any role play prompt, and it is the line most reps leave out. If your team
        already writes call scorecards, use the same criteria in the DEBRIEF line; SnapSDR’s guide to a{' '}
        <ExtLink href={SRC.scorecard}>sales call scorecard</ExtLink> has templates by call type.
      </p>
    </Section>
  )
}

export function DecemberSection() {
  return (
    <Section id="december" title="What changes on December 11, 2026">
      <p>
        Many teams built their role play as a custom GPT. That path is closing. OpenAI’s{' '}
        <ExtLink href={SRC.gptRetire}>retirement FAQ</ExtLink> says custom GPTs are scheduled to retire
        on December 11, 2026, when they and their pages become inaccessible, with a later date only for
        FedRAMP workspaces and approved deferrals. Creators can migrate a GPT to a plugin, which brings
        instructions, reference files and connected apps together. Custom actions do not transfer
        automatically.
      </p>
      <p>
        New GPTs are already off the table for most people. Per OpenAI’s{' '}
        <ExtLink href={SRC.gptCreate}>page on creating GPTs</ExtLink>, personal accounts, including
        Free, Go, Plus and Pro, can no longer create or publish new ones. The same date also retires the
        older Advanced and Standard voice modes, which switch to Live automatically.
      </p>
      <p>
        If your sales role play lives in a custom GPT today, copy its instructions into a Project or
        migrate it to a plugin now, then run a few of your usual practice calls through the replacement
        before December 11 to check that the buyer still behaves the same way.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// the team gaps and the four options
// ------------------------------------------------------------------------------
export function TeamGapsSection() {
  return (
    <Section id="team-gaps" title="Where ChatGPT breaks for a sales team">
      <p>
        Everything above works for one rep. It starts to strain when a manager wants ten or twenty reps
        practicing the same call and wants to know who is getting better. Four gaps show up:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Every rep gets a different buyer.</strong> Each rep keeps their own copy of the prompt,
          edits it, and gets different output from run to run. Two reps’ scores on “the pricing
          objection” may not describe the same objection.
        </li>
        <li>
          <strong>Feedback is a conversation, not a record.</strong> A chat will score you if you ask, but
          the score lives in that rep’s chat. Nothing collects it.
        </li>
        <li>
          <strong>Managers see usage, not skill.</strong> ChatGPT Business gives admins{' '}
          <ExtLink href={SRC.business}>user management, usage visibility and spend controls</ExtLink>.
          That tells you who logged in, not who handled the budget objection.
        </li>
        <li>
          <strong>Real calls need care.</strong> On Free, Plus and Pro, OpenAI{' '}
          <ExtLink href={SRC.dataUse}>may use conversations to improve its models</ExtLink> unless the
          user opts out; by default it does not train on Business, Enterprise or Edu content. Strip
          customer names before pasting any real transcript.
        </li>
      </ul>
      <FeedbackFigure />
      <p>
        <ExtLink href={SRC.hyperbound}>Hyperbound</ExtLink>, which sells a role play platform, makes the
        same point about stored results, so weigh it accordingly. The fair summary is that ChatGPT is a
        strong sparring partner and a weak system of record. It is also excellent at the work around
        practice: researching an account, listing the objections a CFO might raise, and drafting the
        brief itself. Keep it for that, whatever else you buy.
      </p>
    </Section>
  )
}

export function OptionsSection() {
  return (
    <Section id="options" title="Four ways to run sales role play, compared">
      <Disclosure />
      <p>
        There are really four options, from a prompt in a chat to a dedicated platform. Prices are from
        public pages read in November 2026.
      </p>
      <DataTable
        columns={['Option', 'What you set up', 'Price (Nov 2026)', 'What a team gets']}
        rows={[
          ['A prompt in a chat', 'One prompt per session', 'Free, or Plus at $20 a month', 'Practice for one rep; the buyer varies'],
          [
            'A ChatGPT Project',
            'Instructions and files, saved once',
            'Plus $20; Business $25 a seat monthly or $20 annually',
            'A steady setup per user; scores only when asked',
          ],
          ['Your own app on the API', 'Voice, scenarios, scoring, storage, sign-in', 'GPT-Live $0.05 an active minute, plus engineering', 'Whatever you build and maintain'],
          [
            'A role play platform',
            'Scenarios and a rubric in a builder',
            'Per seat or per minute; Tough Tongue AI from $20 a month, $299 for 15 seats',
            'One scenario for every rep, stored scores',
          ],
        ]}
        note="A custom GPT is left out because personal plans can no longer create one and all custom GPTs retire on December 11, 2026."
      />
      <p>
        The pricing unit matters as much as the price; our comparison of{' '}
        <Link href="/blog/ai-roleplay-pricing" className={LINK}>
          per-seat and per-minute AI role play pricing
        </Link>{' '}
        covers the trade-off, and the{' '}
        <Link href="/blog/best-ai-sales-training-tools-2026" className={LINK}>
          guide to AI sales training tools
        </Link>{' '}
        compares the platforms on features. The options also combine.{' '}
        <ExtLink href={SRC.ttPlugin}>Tough Tongue AI has been an official ChatGPT plugin</ExtLink> since
        August 2026: you describe a role play in a ChatGPT chat, it creates the scenario and rubric,
        reps practice by voice in the browser, and the scores come back to the same chat. ChatGPT stays
        the place you think; the platform holds the shared buyer and the record.
      </p>
    </Section>
  )
}

// ------------------------------------------------------------------------------
// what building costs, and the decision
// ------------------------------------------------------------------------------
export function BuildSection() {
  return (
    <Section id="build" title="What it costs to build your own">
      <p>
        The voice part is cheap now. OpenAI’s <ExtLink href={SRC.apiPricing}>API pricing page</ExtLink>{' '}
        lists GPT-Live at $0.05 per active minute and $0.02 on standby, billed by the second. Its
        realtime model, gpt-realtime-2.1, costs $32 per million audio input tokens and $64 per million
        output tokens; <ExtLink href={SRC.cekura}>Cekura worked that out</ExtLink> at roughly $0.07 a
        minute when prompt caching works and $0.18 when it does not.{' '}
        <ExtLink href={SRC.pitchMonster}>PitchMonster</ExtLink> puts voice runtime at about $0.03 to
        $0.10 a minute on list prices.
      </p>
      <p>
        The expensive part is everything around the voice: a way for a manager to write and edit
        scenarios, scoring your managers would agree with, a store of results per rep, sign-in, and a
        plan for model changes. That last one is not hypothetical; OpenAI’s first{' '}
        <ExtLink href={SRC.realtimeModel}>gpt-realtime model</ExtLink> is already marked deprecated. At
        the <ExtLink href={SRC.blsDev}>BLS median of $135,980 a year</ExtLink> for software developers
        (May 2025), every 20 hours of upkeep a month costs about $1,300.
      </p>
      <PathCostFigure />
      <p>
        With the example inputs, ten reps cost $250 a month in ChatGPT Business seats, $299 on a team
        platform plan, and about $1,338 a month to build, before the first version exists. ChatGPT is the
        cheapest in cash, and for a small team that may settle it. The build line is almost all
        engineering: the voice minutes for 600 practice minutes come to $30.
      </p>
    </Section>
  )
}

export function DecideSection() {
  return (
    <Section id="decide" title="Build, buy, or stay in ChatGPT">
      <p>
        Most teams do not need to build. PitchMonster, which sells a role play tool, argues that a build
        only makes sense with a funded AI team committed for 18 to 24 months; our own view is that you
        need at least one engineer who owns the tool for a year. Answer four questions to see where you
        land.
      </p>
      <BuildBuyFigure />
      <p>
        Two cases are clear. A rep preparing for one big renewal should stay in ChatGPT: a Project, a
        good brief, Live voice, done. A manager running weekly practice for fifteen reps should buy
        shared scenarios and scoring, and keep ChatGPT for preparation. Building is right for a narrower
        group: teams that must keep recordings inside their own systems and have an engineer to own the
        tool. Even then, build the connections first and buy the voice. For the drills worth running in
        whichever tool you pick, start with{' '}
        <Link href="/blog/cold-call-practice" className={LINK}>
          cold call practice
        </Link>
        .
      </p>
    </Section>
  )
}
