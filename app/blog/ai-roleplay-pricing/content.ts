import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'ai-roleplay-pricing',
  title: 'AI Roleplay Pricing in 2026: Per Seat vs Per Minute, and Which One Costs Less',
  seoTitle: 'AI Roleplay Pricing: Per Seat vs Per Minute (2026)',
  description:
    'AI roleplay pricing comes in four units: seats, seats with a minute pool, pooled minutes, or sessions. Published prices for nine tools and the break-even math.',
  datePublished: '2026-11-19',
  faqs: [
    {
      q: 'How much does AI roleplay software cost?',
      a: 'As of November 2026, published team prices run from $50 to $249 per seat a month (Quotain, Kendo and SellMeThisPen), or $299 a month for a pooled block of 2,990 minutes shared by up to 15 seats (Tough Tongue AI Business). Individual plans start at $8 a month (Yoodli Pro, billed annually) and $20 a month (Tough Tongue AI Starter). Hyperbound, PitchMonster and Second Nature quote team prices on request.',
    },
    {
      q: 'Is per-seat or per-minute pricing cheaper for AI roleplay?',
      a: 'It depends on how many minutes each rep practices. Divide the seat price by the per-minute rate to find the break-even: a $50 seat against $0.10 a minute breaks even at 500 minutes per rep a month, about 24 minutes every working day. Below that, minutes cost less. Above it, an uncapped seat costs less.',
    },
    {
      q: 'What counts as a minute or a session in AI roleplay pricing?',
      a: 'It varies by vendor. Quotain counts completed practice call time against its team pool, Yoodli counts any practice session over 30 seconds as one roleplay, and SellMeThisPen does not meter roleplay on its Core plan. Ask for the counting rule in writing, because it decides what retries and short drills cost.',
    },
    {
      q: 'Do unused AI roleplay minutes roll over?',
      a: 'Some do. Tough Tongue AI rolls unused minutes over indefinitely on its Pro and team plans, while Starter minutes reset each billing cycle. Quotain’s pooled minutes reset every billing month. Rollover changes the real price of a quiet month, so ask every vendor before you sign.',
    },
    {
      q: 'Will reps ration practice if we pay per minute?',
      a: 'They can, if each rep sees a personal meter. Pool minutes at the team level, assign specific drills instead of an open allowance, and review usage monthly. Session caps can ration practice too: a plan with 10 roleplays a week makes a two-minute retry cost as much as a full call.',
    },
    {
      q: 'How much does Hyperbound cost?',
      a: 'Hyperbound does not publish team prices. As of November 2026 it offers a free plan with 45 prebuilt roleplays, and its Practice and Perform licenses are priced per user through a quote, with volume discounts and savings on multi-year agreements.',
    },
  ],
}

export const meta = {
  category: 'Pricing Guide',
  date: 'November 19, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'pricing-models', label: 'Four ways it is priced' },
  { id: 'published-prices', label: 'Published prices' },
  { id: 'break-even', label: 'Per seat vs per minute' },
  { id: 'practiced-minute', label: 'Cost per practiced minute' },
  { id: 'what-counts', label: 'What counts as a minute' },
  { id: 'rationing', label: 'Will reps ration practice?' },
  { id: 'quote-questions', label: 'Questions for a quote' },
  { id: 'which-model', label: 'Which model fits' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// Example team for the hero: minutes each of ten reps practiced in one month.
// The seat shape ($50 with 180 pooled minutes) matches a published plan below.
export const team = {
  minutes: [0, 0, 12, 25, 34, 48, 60, 85, 130, 206],
  seatPrice: 50,
  seatMinutes: 180,
}

// Working days used to turn monthly minutes into a daily habit.
export const WORKING_DAYS = 21
