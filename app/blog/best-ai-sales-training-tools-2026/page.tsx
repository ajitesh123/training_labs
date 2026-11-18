'use client'

import { useEffect, useState } from 'react'
import { BlogFooter } from '@/components/blog/blog-footer'
import { BlogHeader } from '@/components/blog/blog-header'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { ToolCard } from '@/components/blog/tool-card'

const tocSections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'evaluation', label: 'How We Evaluated' },
  { id: 'tough-tongue-ai', label: '1. Tough Tongue AI' },
  { id: 'hyperbound', label: '2. Hyperbound' },
  { id: 'second-nature', label: '3. Second Nature' },
  { id: 'pitchmonster', label: '4. PitchMonster' },
  { id: 'yoodli', label: '5. Yoodli' },
  { id: 'comparison', label: 'Feature Comparison' },
  { id: 'who-should-pick', label: 'Who Should Pick What' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'faq', label: 'FAQ' },
]

const comparisonRows = [
  {
    feature: 'MCP / coding-agent workflow',
    values: ['✅', '❌', '❌', '❌', '❌'],
  },
  {
    feature: 'Google Meet practice',
    values: ['✅', '❌', '❌', '⚠️', '❌'],
  },
  {
    feature: 'Phone call practice',
    values: ['✅', '⚠️', '❌', '✅', '❌'],
  },
  {
    feature: 'Live slides / multimodal tools',
    values: ['✅', '❌', '⚠️', '⚠️', '❌'],
  },
  {
    feature: 'Interactive AI roleplay',
    values: ['✅', '✅', '✅', '✅', '⚠️'],
  },
  {
    feature: 'Custom rubrics / methodology scoring',
    values: ['✅', '✅', '✅', '✅', '⚠️'],
  },
  {
    feature: 'Builder-friendly scenario creation',
    values: ['✅', '⚠️', '⚠️', '✅', '⚠️'],
  },
  {
    feature: 'Peer / async video coaching',
    values: ['⚠️', '⚠️', '⚠️', '⚠️', '✅'],
  },
  {
    feature: 'Transparent public pricing',
    values: ['✅', '❌', '❌', '❌', '⚠️'],
  },
]

export default function BestAiSalesTrainingToolsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">

      <BlogHeader />

      <main className="pb-16 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-10">
            <TableOfContents sections={tocSections} />

            <article
              className={`flex-1 max-w-3xl transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <header className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="tl-mono border-2 border-ink bg-butter px-2 py-1 text-[11.5px] font-semibold text-ink">
                    Buyer&apos;s Guide
                  </span>
                  <span className="tl-mono text-[11.5px] font-semibold text-ink-2">
                    July 31, 2026
                  </span>
                  <span className="tl-mono text-[11.5px] font-semibold text-ink-2">
                    · 14 min read
                  </span>
                </div>

                <h1 className="mb-6 text-balance font-mono text-[30px] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px] md:text-[44px]">
                  Best AI Sales Training Tools in 2026: A Buyer&apos;s Guide for
                  GTM Teams
                </h1>

                <p className="text-xl text-[var(--blog-text-secondary)] leading-relaxed">
                  Content libraries don&apos;t build muscle memory. The best AI
                  sales training tools turn your playbook into practice systems.
                  For GTM engineers, that means APIs, MCP, and scenarios
                  you can compose, not just consume.
                </p>
              </header>

              <div className="tl-dots relative mb-12 aspect-[2/1] overflow-hidden border-2 border-ink bg-sheet shadow-[7px_7px_0_var(--color-ink)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative p-8">
                    <div className="relative grid grid-cols-3 gap-3 text-center">
                      {[
                        'Roleplay',
                        'MCP',
                        'Meet',
                        'Phone',
                        'Rubrics',
                        'Feedback',
                      ].map((label) => (
                        <div
                          key={label}
                          className="tl-mono border-2 border-ink bg-butter px-3 py-3 text-[11px] font-semibold text-ink even:bg-sky sm:text-xs"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <section id="introduction" className="mb-14 scroll-mt-28">
                <h2 className="mb-4 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
                  Introduction
                </h2>
                <div className="text-lg text-[var(--blog-text-secondary)] space-y-4">
                  <p>
                    Sales enablement used to mean decks, LMS modules, and a
                    quarterly ride-along. In 2026, the teams that ramp faster
                    treat training like product: versioned scenarios, scored
                    practice loops, and feedback that maps to the methodology
                    you actually sell with.
                  </p>
                  <p>
                    That shift matters most for two audiences. Sales enablement
                    leaders need tools managers will adopt. GTM engineers need
                    platforms they can wire into Gong transcripts, CRM context,
                    and coding agents, not another sealed SaaS silo.
                  </p>
                  <p>
                    This buyer&apos;s guide compares five AI sales training
                    platforms with that dual lens. We spotlight{' '}
                    <a
                      href="https://www.toughtongueai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--blog-accent-blue)] font-medium hover:underline"
                    >
                      Tough Tongue AI
                    </a>{' '}
                    as the strongest fit for builder-led GTM teams, while giving
                    Hyperbound, Second Nature, PitchMonster, and Yoodli fair
                    credit for where they win.
                  </p>
                </div>
              </section>

              <section id="evaluation" className="mb-14 scroll-mt-28">
                <h2 className="mb-4 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
                  How We Evaluated
                </h2>
                <div className="text-lg text-[var(--blog-text-secondary)] space-y-4">
                  <p>
                    We scored each platform against criteria that decide whether
                    practice actually transfers to live deals:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong className="text-ink">
                        Scenario composability
                      </strong>:{' '}
                      Can you build practice from real calls, docs, and ICP
                      context?
                    </li>
                    <li>
                      <strong className="text-ink">
                        Builder / MCP surface
                      </strong>:{' '}
                      Can GTM engineers automate scenario creation, scoring,
                      and analytics from Claude, Codex, or Cursor?
                    </li>
                    <li>
                      <strong className="text-ink">Practice fidelity</strong>:{' '}
                      Voice, video meetings, phone, slides. Does practice
                      resemble the channel where deals happen?
                    </li>
                    <li>
                      <strong className="text-ink">Multimodal feedback</strong>:{' '}
                      Does coaching cover delivery (tone, pacing, presence),
                      not only transcript keywords?
                    </li>
                    <li>
                      <strong className="text-ink">Enablement fit</strong>:{' '}
                      Rubrics, certifications, manager workflows, LMS needs.
                    </li>
                    <li>
                      <strong className="text-ink">
                        Pricing transparency
                      </strong>:{' '}
                      Can a mid-market team evaluate cost without a six-week
                      RFP?
                    </li>
                  </ul>
                </div>
              </section>

              <section id="tough-tongue-ai" className="mb-14 scroll-mt-28">
                <ToolCard
                  name="Tough Tongue AI"
                  websiteUrl="https://www.toughtongueai.com"
                  tagline="Agentic multimodal practice with MCP, built for GTM engineers who treat training like product"
                  ranking={1}
                  isRecommended
                  agenticFeatures={{
                    google_meet: true,
                    phone: true,
                    slides: true,
                  }}
                  features={[
                    'MCP server + agent skills for Claude, Codex, and Cursor (create, refine, and analyze scenarios from the IDE)',
                    'Voice agents that practice on phone, video meetings, and in-product embeds',
                    'Multimodal sessions: slides, diagrams, whiteboard-style tools during roleplay',
                    'Custom evaluation rubrics aligned to your sales methodology',
                    'Generate and iterate scenarios from transcripts, docs, or natural language',
                    'Session analytics, meeting bots, and SIP calling via public API',
                    'Team practice that mirrors real selling environments, not a chatbot sandbox',
                  ]}
                  pricing="Standard: $12/month (100 minutes) · Premium: $20/month (unlimited) · Team/org plans available"
                  pros={[
                    'Only shortlisted platform with first-class MCP + coding-agent workflow',
                    'True Meet / phone / slides practice channels',
                    'Multimodal feedback beyond transcript scoring',
                    'Transparent, approachable pricing for builders and mid-market teams',
                    'Public API surface that GTM engineers can actually automate',
                  ]}
                  cons={[
                    'Newer brand than enterprise enablement incumbents',
                    'Less “all-in-one LMS” packaging than Second Nature or traditional RE platforms',
                  ]}
                  verdict="Tough Tongue AI is the clear pick when your enablement motion is builder-led. MCP and skills mean a GTM engineer can pull lost-deal objections from Gong, spin a practice scenario, and ship it to reps without living in a vendor UI. Pair that with Meet, phone, and multimodal coaching, and practice finally looks like selling."
                />

                <div className="mt-6 border-2 border-ink bg-butter/40 p-6">
                  <h4 className="font-bold text-ink mb-3">
                    Why MCP changes sales training
                  </h4>
                  <p className="text-[var(--blog-text-secondary)] text-sm leading-relaxed mb-3">
                    Most coaching tools assume an admin clicks through a
                    scenario builder. Tough Tongue&apos;s MCP tools and skills
                    let coding agents do the ops work: generate scenarios from
                    real transcripts, diagnose weak sessions, and update
                    configs, the same way modern GTM teams already operate
                    Salesforce and Gong.
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--blog-text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--blog-accent-blue)]">→</span>
                      <span>
                        <strong className="text-ink">Compose:</strong> “Pull
                        the last three lost deals and build a pricing-objection
                        scenario.”
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--blog-accent-blue)]">→</span>
                      <span>
                        <strong className="text-ink">Analyze:</strong> Batch
                        session reviews and surface the top skill gaps for a
                        cohort.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--blog-accent-blue)]">→</span>
                      <span>
                        <strong className="text-ink">Deploy:</strong> Practice
                        on the channels reps already use: Meet, phone, and
                        multimodal agents with slides.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="hyperbound" className="mb-14 scroll-mt-28">
                <ToolCard
                  name="Hyperbound"
                  tagline="Well-funded conversational AI roleplay for enterprise sales orgs"
                  ranking={2}
                  agenticFeatures={{
                    google_meet: false,
                    phone: false,
                    slides: false,
                  }}
                  features={[
                    'Voice-based AI buyer roleplay',
                    'Transcript analysis and coaching recommendations',
                    'Custom scenario creation for discovery, demos, and objections',
                    'Manager analytics and call-monitoring workflows',
                    'Enterprise support and integrations',
                  ]}
                  pricing="Enterprise pricing (not publicly listed), typically quoted per seat"
                  pros={[
                    'Strong conversational roleplay experience',
                    'Credible enterprise footprint and funding',
                    'Useful manager dashboards for coaching programs',
                    'Focused product with less LMS bloat',
                  ]}
                  cons={[
                    'No MCP / coding-agent surface for GTM builders',
                    'Practice stays inside the product sandbox vs Meet/phone realism',
                    'Opaque pricing slows evaluation for mid-market teams',
                    'Less multimodal tooling (slides, diagrams) during sessions',
                  ]}
                  verdict="Hyperbound is a solid #2 for enterprises that want polished conversational practice and manager analytics, and are fine buying through a sales cycle. If your differentiator is GTM engineering (automating scenario ops from agents and APIs), you'll feel the ceiling quickly."
                />
              </section>

              <section id="second-nature" className="mb-14 scroll-mt-28">
                <ToolCard
                  name="Second Nature"
                  tagline="Avatar-led pitch practice with LMS-friendly packaging"
                  ranking={3}
                  agenticFeatures={{
                    google_meet: false,
                    phone: false,
                    slides: false,
                  }}
                  features={[
                    'AI avatar roleplay for pitches and objection handling',
                    'Customizable virtual sales scenarios',
                    'Performance scoring and analytics',
                    'LMS integrations, certification, and compliance tracking',
                    'Multi-language support for global teams',
                  ]}
                  pricing="Custom enterprise pricing, typically quoted per user"
                  pros={[
                    'Polished avatar experience that engages some learners',
                    'Strong fit for compliance and certification programs',
                    'Established case studies in large organizations',
                    'LMS integrations reduce change-management friction',
                  ]}
                  cons={[
                    'Avatar practice can feel less like a real buyer call',
                    'Limited builder/MCP automation for GTM engineers',
                    'Customization depth varies vs transcript-native tools',
                    'Enterprise pricing without transparent public tiers',
                  ]}
                  verdict="Choose Second Nature when enablement is LMS- and compliance-led: certifications, global rollout, and avatar-based practice at scale. It is less compelling for builder-led teams that want Meet/phone realism and agent-driven scenario ops."
                />
              </section>

              <section id="pitchmonster" className="mb-14 scroll-mt-28">
                <ToolCard
                  name="PitchMonster"
                  tagline="AI roleplay with a Socratic coach, strong for compliance-conscious teams"
                  ranking={4}
                  agenticFeatures={{
                    google_meet: false,
                    phone: true,
                    slides: false,
                  }}
                  features={[
                    'AI buyer roleplay across cold calls, discovery, demos, and objections',
                    'Socratic AI coach that prompts reflection before scorecards',
                    'Scenario building from transcripts, docs, or URLs',
                    'Custom rubrics aligned to methodologies like MEDDPICC',
                    'Gong / Salesforce connections for scenario context',
                    'Emphasis on data residency and enterprise compliance',
                  ]}
                  pricing="Quote-based team pricing (public estimates often start around ~$4.8k/year)"
                  pros={[
                    'Thoughtful coaching loop with reflection before scores',
                    'Fast scenario customization from real materials',
                    'Compliance and data-residency positioning for regulated orgs',
                    'Covers full-funnel conversation practice',
                  ]}
                  cons={[
                    'No MCP / IDE-native builder workflow',
                    'Quote-only pricing',
                    'Smaller public review footprint than category giants',
                    'Less multimodal Meet + slides agent depth than Tough Tongue',
                  ]}
                  verdict="PitchMonster earns a fair seat on any shortlist for teams that want serious roleplay plus a coaching pedagogy that changes behavior, especially where compliance matters. Tough Tongue still leads for GTM engineers who need MCP-native ops and multimodal meeting practice."
                />
              </section>

              <section id="yoodli" className="mb-14 scroll-mt-28">
                <ToolCard
                  name="Yoodli"
                  tagline="Async video practice with AI feedback and peer coaching"
                  ranking={5}
                  agenticFeatures={{
                    google_meet: false,
                    phone: false,
                    slides: false,
                  }}
                  features={[
                    'Record pitches and get AI feedback on delivery',
                    'Peer review workflows for team coaching',
                    'Libraries of best-practice examples',
                    'Gamification and leaderboards',
                    'Mobile-friendly practice for field teams',
                  ]}
                  pricing="Team plans around $25/user/month · Enterprise custom"
                  pros={[
                    'Lowest-friction start for async pitch practice',
                    'Peer feedback culture is a real differentiator',
                    'Good for distributed / field teams',
                    'More transparent pricing than most enterprise roleplay tools',
                  ]}
                  cons={[
                    'Not a full interactive AI buyer conversation loop',
                    'No Meet / phone agentic practice',
                    'Weak builder/MCP story for GTM engineering',
                    'Skills transfer depends heavily on what reps choose to record',
                  ]}
                  verdict="Yoodli is the right tool when your motion is async video + peer coaching, not live AI buyers. Use it as a complement to interactive roleplay, not as the sole practice system for complex discovery and negotiation."
                />
              </section>

              <section id="comparison" className="mb-14 scroll-mt-28">
                <h2 className="mb-6 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
                  Feature Comparison
                </h2>

                <div className="overflow-x-auto border-2 border-ink bg-sheet">
                  <table className="w-full border-collapse min-w-[720px]">
                    <thead>
                      <tr className="bg-paper">
                        <th className="tl-mono border border-ink/20 p-4 text-left text-[11px] font-semibold text-ink">
                          Feature
                        </th>
                        {[
                          'Tough Tongue AI',
                          'Hyperbound',
                          'Second Nature',
                          'PitchMonster',
                          'Yoodli',
                        ].map((name, i) => (
                          <th
                            key={name}
                            className={`p-4 text-center font-semibold text-ink border border-ink/20 ${
                              i === 0 ? 'bg-blue-50' : ''
                            }`}
                          >
                            {name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.feature} className="hover:bg-butter/30">
                          <td className="p-4 text-[var(--blog-text-secondary)] border border-ink/20 font-medium">
                            {row.feature}
                          </td>
                          {row.values.map((value, j) => (
                            <td
                              key={`${row.feature}-${j}`}
                              className={`p-4 text-center border border-ink/20 ${
                                j === 0 ? 'bg-blue-50' : ''
                              }`}
                            >
                              <span className="text-lg">{value}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm text-[var(--blog-text-muted)]">
                  ✅ = Full support &nbsp;|&nbsp; ⚠️ = Partial / limited
                  &nbsp;|&nbsp; ❌ = Not available
                </p>
              </section>

              <section id="who-should-pick" className="mb-14 scroll-mt-28">
                <h2 className="mb-4 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
                  Who Should Pick What
                </h2>
                <div className="space-y-4 text-lg text-[var(--blog-text-secondary)]">
                  <div className="border-2 border-ink bg-sheet p-5">
                    <p className="font-semibold text-ink mb-1">
                      GTM engineers / builder-led enablement
                    </p>
                    <p>
                      Start with{' '}
                      <a
                        href="https://www.toughtongueai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--blog-accent-blue)] font-medium hover:underline"
                      >
                        Tough Tongue AI
                      </a>
                      . MCP, APIs, and multimodal channels match how you already
                      ship GTM systems.
                    </p>
                  </div>
                  <div className="border-2 border-ink bg-sheet p-5">
                    <p className="font-semibold text-ink mb-1">
                      Enterprise sales orgs buying conversational roleplay
                    </p>
                    <p>
                      Shortlist Hyperbound for polish and manager analytics;
                      keep Tough Tongue on the board if Meet/phone realism and
                      builder automation matter.
                    </p>
                  </div>
                  <div className="border-2 border-ink bg-sheet p-5">
                    <p className="font-semibold text-ink mb-1">
                      Compliance / LMS-heavy enablement
                    </p>
                    <p>
                      Second Nature or PitchMonster: avatar/LMS packaging vs
                      Socratic coaching and residency controls. Pair either with
                      a practice-first tool if certification alone isn&apos;t
                      enough.
                    </p>
                  </div>
                  <div className="border-2 border-ink bg-sheet p-5">
                    <p className="font-semibold text-ink mb-1">
                      Async video + peer culture
                    </p>
                    <p>
                      Yoodli is purpose-built. Use interactive AI roleplay
                      alongside it for objection handling and live negotiation
                      skills.
                    </p>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-14 scroll-mt-28">
                <h2 className="mb-4 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">
                  Conclusion
                </h2>
                <div className="text-lg text-[var(--blog-text-secondary)] space-y-4">
                  <p>
                    There is no universal “best” sales training tool, only the
                    best fit for how your team builds and runs practice.
                  </p>

                  <div className="border-2 border-ink bg-sky-soft p-6 shadow-[5px_5px_0_var(--color-ink)]">
                    <h4 className="font-bold text-ink mb-3">
                      Our top pick: Tough Tongue AI
                    </h4>
                    <p className="mb-3">
                      For GTM engineers and enablement leaders who want practice
                      systems, not just another content portal,{' '}
                      <a
                        href="https://www.toughtongueai.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--blog-accent-blue)] font-medium hover:underline"
                      >
                        Tough Tongue AI
                      </a>{' '}
                      leads. MCP and coding-agent skills turn scenario ops into
                      something you can automate; Meet, phone, and multimodal
                      agents make practice feel like the job.
                    </p>
                    <p>
                      Hyperbound, Second Nature, PitchMonster, and Yoodli each
                      win clear niches. Rank them honestly against your
                      constraints, then pick the platform your builders will
                      actually extend.
                    </p>
                  </div>
                </div>
              </section>

              <div className="mb-12 border-2 border-ink bg-sky p-8 text-center shadow-[7px_7px_0_var(--color-ink)]">
                <div className="relative">
                  <h3 className="mb-3 text-balance font-mono text-[22px] font-semibold uppercase text-ink sm:text-[26px]">
                    Explore Tough Tongue AI
                  </h3>
                  <p className="mx-auto mb-6 max-w-lg text-ink">
                    See how MCP-native, multimodal sales practice works for
                    builder-led GTM teams.
                  </p>
                  <a
                    href="https://www.toughtongueai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tl-btn bg-butter"
                  >
                    Visit Tough Tongue AI
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <section id="faq" className="mb-14 scroll-mt-28">
                <h2 className="mb-6 text-balance font-mono text-[22px] font-semibold uppercase leading-tight text-ink sm:text-[26px]">FAQ</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'What is the best AI sales training tool for GTM engineers?',
                      a: 'Tough Tongue AI ranks first in this guide for builder-led teams because of MCP/coding-agent workflows, public APIs, and multimodal practice on Meet and phone, not only in-app chat.',
                    },
                    {
                      q: 'How is AI sales coaching different from a sales LMS?',
                      a: 'An LMS delivers content and tracks completion. AI coaching tools create interactive practice with buyers (or async video feedback) and score skills against your methodology.',
                    },
                    {
                      q: 'Do I still need Hyperbound or PitchMonster if I use Tough Tongue?',
                      a: 'Usually no for core roleplay. Some enterprises still shortlist Hyperbound for incumbent comfort, or PitchMonster when compliance/residency and Socratic coaching are non-negotiable procurement criteria.',
                    },
                    {
                      q: 'Is Yoodli enough for objection-handling practice?',
                      a: 'Yoodli is strong for async delivery coaching and peer review. Complex, multi-turn objection handling typically needs interactive AI buyers: Tough Tongue, Hyperbound, Second Nature, or PitchMonster.',
                    },
                    {
                      q: 'What should sales enablement leaders evaluate first?',
                      a: 'Adoption (will reps practice weekly?), rubric alignment to your methodology, manager visibility, and whether scenarios can be built from real call data, not marketing feature lists.',
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="border-2 border-dashed border-ink bg-paper p-5"
                    >
                      <h3 className="font-semibold text-ink mb-2">{item.q}</h3>
                      <p className="text-[var(--blog-text-secondary)] text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t-2 border-ink pt-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center border-2 border-ink bg-butter font-mono font-bold text-ink">
                    T
                  </div>
                  <div>
                    <p className="font-semibold text-ink">
                      Training Labs Editorial
                    </p>
                    <p className="text-sm text-[var(--blog-text-muted)]">
                      Independent guides on sales training and GTM enablement
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
