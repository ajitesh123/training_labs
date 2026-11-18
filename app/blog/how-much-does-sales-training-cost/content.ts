import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'how-much-does-sales-training-cost',
  title: 'How Much Does Sales Training Cost in 2026? Real Prices and the Costs Nobody Quotes',
  seoTitle: 'Sales Training Cost in 2026: Real Prices, Hidden Costs',
  description:
    'Sales training costs $100 to $5,000 per rep, $8,000+ for a private workshop, and far more once rep time is counted. Published prices, quote-only vendors, and a calculator.',
  datePublished: '2026-11-18',
  faqs: [
    {
      q: 'How much does sales training cost per person?',
      a: 'Self-paced online sales training usually costs $100 to $1,000 per person, and open-enrollment or cohort programs cost $400 to $5,000 per person (The Harris Consulting Group, August 2026). Published examples include MEDDIC Academy at $297, a Winning by Design open course at $1,500, and Dale Carnegie relationship selling at $1,995 to $2,295 per seat. The rep time spent in training comes on top of these fees.',
    },
    {
      q: 'How much does Sandler sales training cost?',
      a: 'Sandler does not publish a training price. It runs through locally owned franchise training centers, so each center quotes its own price. The $65,000 figure that often shows up in search results is the fee to buy a Sandler franchise, not the cost of training a sales team.',
    },
    {
      q: 'How much do companies spend on training per employee?',
      a: 'US organizations with 100 or more employees spent an average of $874 per learner in 2025, according to Training magazine’s 2025 Training Industry Report. ATD’s 2026 State of the Industry report puts direct learning expenditure at $846 per employee for 2025. Both figures cover all training, not only sales.',
    },
    {
      q: 'How much does AI sales roleplay software cost?',
      a: 'Few vendors publish prices. As of November 2026, Tough Tongue AI starts at $20 a month for 150 minutes and team plans start at $299 a month for 15 seats; Yoodli lists individual plans at $8 and $20 a month billed annually; Quotain lists $50 and $100 per seat a month. Hyperbound and Second Nature quote team prices on request.',
    },
    {
      q: 'What is the hidden cost of sales training?',
      a: 'Rep time. A two-day, 16-hour program takes about $538 of wages per rep at the May 2025 BLS median for sales representatives of services ($33.65 an hour), before benefits, commissions, or lost selling time. For a team of ten that is more than $5,000 that never appears on the training invoice.',
    },
    {
      q: 'Is sales training worth the cost?',
      a: 'It is worth it when the program includes practice and reinforcement after the classroom part ends. Ask every vendor what happens in the 90 days after the workshop, how reps practice, and how you will see behavior change on real calls. A cheaper program with weekly practice often beats an expensive one with none.',
    },
  ],
}

// Rates used by the figures. Wages: BLS OEWS, May 2025 medians.
// AI minutes: Tough Tongue AI Business plan, $299 for 2,990 minutes (Nov 2026).
export const rates = {
  repHourly: 33.65,
  managerHourly: 71.28,
  aiPerMinute: 0.1,
  aiPlanMonthly: 299,
}

export const meta = {
  category: 'Pricing Guide',
  date: 'November 18, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'per-person', label: 'Cost per person by format' },
  { id: 'published-prices', label: 'Published vs quote-only' },
  { id: 'hidden-costs', label: 'The costs nobody quotes' },
  { id: 'benchmarks', label: 'What companies spend' },
  { id: 'cost-per-practice', label: 'Cost per practice rep' },
  { id: 'ai-roleplay-pricing', label: 'AI roleplay pricing' },
  { id: 'calculator', label: 'Year-one calculator' },
  { id: 'quote-questions', label: 'Questions for a quote' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]
