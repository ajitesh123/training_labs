import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'chatgpt-sales-training',
  title: 'ChatGPT Sales Training: How Far Role Play on ChatGPT Goes, and When to Build or Buy',
  seoTitle: 'ChatGPT Sales Training: Role Play, Limits, Build vs Buy',
  description:
    'ChatGPT sales training in 2026: role play that holds, voice limits, the December 11 custom GPT retirement, where it breaks for teams, and build vs buy costs.',
  datePublished: '2026-11-28',
  faqs: [
    {
      q: 'Can you do sales role play with ChatGPT?',
      a: 'Yes. Give it a buyer brief, rules to stay in character and not agree to a next step until you earn it, and a stop word that makes it score you against criteria you wrote. ChatGPT Plus costs $20 a month and, as of November 2026, includes 3 hours of Live voice in any rolling 24-hour window, which is plenty for daily practice. It works best for one rep preparing for a specific call.',
    },
    {
      q: 'Can I still build a custom GPT for sales role play?',
      a: 'Not on a personal plan. OpenAI’s help center says new GPT creation and publishing are not available on Free, Go, Plus and Pro accounts, and that custom GPTs are scheduled to retire on December 11, 2026, with a migration path to plugins. For a role play setup, a ChatGPT Project keeps the instructions and files together instead.',
    },
    {
      q: 'Is ChatGPT enough to train a sales team?',
      a: 'Usually not on its own. Each rep’s prompt produces a slightly different buyer, feedback arrives as prose rather than a stored score, and a manager has no view of who practiced or improved. A team of more than a few reps needs the same scenario for everyone, scores against one rubric, and a record over time.',
    },
    {
      q: 'How much does it cost to build your own AI sales role play tool?',
      a: 'The voice runtime is cheap: OpenAI lists GPT-Live at $0.05 per active minute, and gpt-realtime-2.1 at $32 and $64 per million audio input and output tokens (November 2026). Engineering is the real cost: scenarios, scoring, storage, sign-in and a manager view, maintained as models change. At the BLS May 2025 median of $135,980 a year for software developers, 20 hours a month is about $1,300.',
    },
    {
      q: 'Is it safe to paste real sales calls into ChatGPT?',
      a: 'On Free, Plus and Pro, OpenAI may use your conversations to improve its models unless you turn off “Improve the model for everyone” in Data controls. By default it does not train on content from ChatGPT Business, Enterprise or Edu workspaces. Either way, remove customer names and details from transcripts and follow your company’s policy.',
    },
    {
      q: 'What is the difference between ChatGPT and an AI role play platform?',
      a: 'ChatGPT plays whatever buyer you describe, as long as you write the brief and keep steering it. A role play platform gives every rep the same prepared buyer, scores each attempt against criteria set in advance, and stores the results for managers. Many teams use both: ChatGPT to prepare for calls and draft scenarios, and a platform to practice and measure.',
    },
  ],
}

export const meta = {
  category: 'Buyer’s Guide',
  date: 'November 28, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'setup', label: 'Run a role play on ChatGPT' },
  { id: 'december', label: 'What changes on December 11' },
  { id: 'team-gaps', label: 'Where it breaks for a team' },
  { id: 'options', label: 'Four ways to run it' },
  { id: 'build', label: 'What building costs' },
  { id: 'decide', label: 'Build, buy or stay' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  plus: 'https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus',
  business: 'https://help.openai.com/en/articles/8792828-chatgpt-business-overview',
  voice: 'https://help.openai.com/en/articles/20001274-chatgpt-voice',
  releaseNotes: 'https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes',
  gptRetire: 'https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq',
  gptCreate: 'https://help.openai.com/en/articles/8554397-creating-and-editing-gpts',
  dataUse: 'https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance',
  apiPricing: 'https://developers.openai.com/api/docs/pricing',
  realtimeModel: 'https://developers.openai.com/api/docs/models/gpt-realtime',
  cekura: 'https://www.cekura.ai/blogs/openai-realtime-api-pricing',
  pitchMonster: 'https://www.pitchmonster.io/blog/build-vs-buy-ai-role-play',
  hyperbound: 'https://www.hyperbound.ai/blog/hyperbound-beats-chatgpt-sales',
  blsDev: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
  ttai: 'https://www.toughtongueai.com/pricing/',
  ttPlugin: 'https://www.toughtongueai.com/blog/tough-tongue-ai-chatgpt-plugin',
  scorecard: 'https://www.snapsdr.com/blog/sales-call-scorecard',
}

// Prices read November 2026: OpenAI help center and API pricing; Tough Tongue AI pricing page.
// Developer hour: BLS May 2025 median for software developers, $135,980 / 2,080 hours.
export const RATES = {
  plusMonthly: 20,
  businessSeatMonthly: 25,
  liveApiPerMinute: 0.05,
  devHourly: 65.38,
}

// Tough Tongue AI team plans: monthly price, seats, included minutes, extra minute rate.
export const TT_PLANS = [
  { name: 'Business', price: 299, seats: 15, minutes: 2990, extra: 0.1 },
  { name: 'Growth', price: 499, seats: 25, minutes: 6000, extra: 0.0832 },
  { name: 'Momentum', price: 999, seats: 50, minutes: 13000, extra: 0.0768 },
] as const
