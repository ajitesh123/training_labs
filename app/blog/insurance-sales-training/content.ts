import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'insurance-sales-training',
  title: 'Insurance Sales Training: Programs, Costs and How Agents Practice After the License',
  seoTitle: 'Insurance Sales Training: Programs, Costs and Practice',
  description:
    'Insurance sales training after the license: program prices, the 2026 Medicare and annuity rules agents must say on calls, objection drills and a practice plan.',
  datePublished: '2026-11-28',
  faqs: [
    {
      q: 'What is insurance sales training?',
      a: 'Training that teaches licensed agents how to sell: running a needs analysis, explaining coverage in plain words, handling objections, asking for referrals, and saying the compliance lines their product requires. It is separate from pre-licensing education, which prepares agents for the state exam and covers product and law rather than conversations.',
    },
    {
      q: 'How much does insurance sales training cost?',
      a: 'Pre-licensing courses cost about $150 to $500 (The Price Group, May 2026). Sales training ranges from free carrier or IMO training to memberships such as Insurance Sales Lab at $200 or $300 a month, or $2,200 and $3,300 a year (November 2026). The Price Group puts standalone programs at $100 to $500 a month and intensive bootcamps at $2,000 to $5,000. Custom programs from firms such as Anthony Cole Training and Sandler are quoted.',
    },
    {
      q: 'Do insurance agents need special training to sell annuities?',
      a: 'Yes. Under the NAIC Suitability in Annuity Transactions Model Regulation (#275), implemented in 49 jurisdictions as of August 2025, a producer must complete a one-time course of at least four credits before selling annuities and must act in the consumer’s best interest. The model bars that course from teaching sales techniques, so selling skills have to come from separate training.',
    },
    {
      q: 'What changed for Medicare agents’ sales calls in 2026?',
      a: 'For contract year 2027 marketing, starting October 1, 2026, CMS requires the third-party marketing organization disclaimer to be said before any benefits are discussed rather than within the first minute, removed the 48-hour wait after a Scope of Appointment, and requires marketing and sales calls to be recorded and kept for at least six years instead of ten.',
    },
    {
      q: 'What skills should insurance sales training cover?',
      a: 'Needs analysis (fact finding), explaining what a policy does and does not cover in plain language, handling objections such as “I need to talk to my spouse” and “I have coverage through work,” referrals and cross-selling, and the disclosures required for the line of business. Each should be practiced out loud with feedback, not only taught.',
    },
    {
      q: 'How should insurance agents practice sales calls?',
      a: 'Short, scored role plays two or three times a week on the calls agents actually take: a needs review, the two or three objections they hear most, and the compliance opening for their line. A manager reviews one real recording a week. AI role play lets an agent repeat a scenario between appointments without waiting for a manager.',
    },
  ],
}

export const meta = {
  category: 'Industry Guide',
  date: 'November 28, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'license-vs-sales', label: 'License vs sales training' },
  { id: 'skills', label: 'What it should cover' },
  { id: 'by-line', label: 'Skills by line of business' },
  { id: 'compliance', label: 'Lines agents must say' },
  { id: 'programs', label: 'Programs and costs' },
  { id: 'objections', label: 'Objection drills' },
  { id: 'practice', label: 'A weekly practice plan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  blsAgents: 'https://www.bls.gov/ooh/sales/insurance-sales-agents.htm',
  priceGroup: 'https://thepricegroup.io/blog/best-insurance-agent-training-programs',
  totalCsr: 'https://totalcsr.com/insurance-agency-blog/insurance-sales-training/',
  isl: 'https://insurancesaleslab.com/',
  alpharun: 'https://www.alpharun.com/blog/best-sales-training-for-insurance-agents',
  anthonyCole: 'https://anthonycoletraining.com/insurance-sales-training',
  naicModel: 'https://content.naic.org/sites/default/files/model-law-275.pdf',
  naicBrief:
    'https://content.naic.org/sites/default/files/government-affairs-brief-annuity-suitability-best-interest-model.pdf',
  naicFaq: 'https://content.naic.org/sites/default/files/inline-files/Final%20FAQ%20July%202021.pdf',
  cfrDisclaimer: 'https://www.ecfr.gov/current/title-42/section-422.2267',
  cfrAgents: 'https://www.ecfr.gov/current/title-42/section-422.2274',
  cmsChanges:
    'https://www.cms.gov/files/document/changes-medicare-advantage-organization-medicare-drug-plan-sponsors-marketing-guidelines.pdf',
  cmsTraining: 'https://www.cms.gov/files/document/cy2027-agent-broker-training-testing-guidelines-pdf.pdf',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

// BLS OOH, insurance sales agents: May 2025 median hourly wage.
// AI minutes: Tough Tongue AI Business plan, $0.10 a minute (November 2026).
export const RATES = {
  agentHourly: 29.94,
  aiPerMinute: 0.1,
}
