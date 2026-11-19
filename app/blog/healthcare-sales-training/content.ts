import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'healthcare-sales-training',
  title: 'Healthcare Sales Training in 2026: Programs, Costs and the Skills That Close Deals',
  seoTitle: 'Healthcare Sales Training: Programs, Skills and Costs',
  description:
    'Healthcare sales training compared: published prices from $499 to $19,495, what team programs cover, compliance codes, hospital value analysis, and how to practice.',
  datePublished: '2026-11-19',
  faqs: [
    {
      q: 'How much does healthcare sales training cost?',
      a: 'For people breaking into the field, published prices in November 2026 run from $499 for the CourseCareers self-paced medical device sales course to $2,195 for the CNPR pharmaceutical sales program at a community college and $9,850 to $19,495 for Medical Sales College’s cohort programs. Programs for company sales teams, such as Richardson, The Brooks Group and HIDA’s AMS training, quote on request.',
    },
    {
      q: 'What skills does healthcare sales training cover?',
      a: 'Four layers: clinical and product knowledge, compliance with industry codes and disclosure rules, the hospital and health system buying process (including value analysis committees), and conversation skills with clinicians who have little time. Most entry programs cover the first two well. The last two decide whether a rep wins deals.',
    },
    {
      q: 'Is a medical sales certification worth it?',
      a: 'A certification can help a career changer show commitment and learn the vocabulary, but it does not replace field skills. Before paying, ask for the published tuition, the hours of live practice, what share of the program is role-play with feedback, placement data with dates, and the refund policy.',
    },
    {
      q: 'What compliance rules do pharma and medical device reps follow?',
      a: 'Pharmaceutical companies follow the PhRMA Code on interactions with health care professionals; its 2022 revision limits rep-provided meals at informational presentations to in-office or in-hospital settings and bans alcohol at speaker programs. Medical device companies follow the AdvaMed Code, last revised effective November 1, 2025. Payments to physicians are also reported to CMS Open Payments and published by name.',
    },
    {
      q: 'What is a hospital value analysis committee?',
      a: 'A multidisciplinary group that reviews new products before a hospital buys them, weighing clinical, operational and financial impact. AHVAP’s 2025 position statement proposes three tiers: low-complexity items decided within 30 days, moderate ones within 90 days, and high-complexity products such as implants or surgical robots within 120 days.',
    },
    {
      q: 'How can healthcare sales reps practice before meeting clinicians?',
      a: 'Role-play the conversations that decide deals: a physician with two minutes, a nurse manager worried about workflow, a value analysis presentation, a supply chain buyer asking for price, and an off-label question you must handle correctly. Practice with a colleague or an AI clinician, score each run, and repeat the hardest moment.',
    },
  ],
}

export const meta = {
  category: 'Industry Guide',
  date: 'November 19, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'two-markets', label: 'Two kinds of training' },
  { id: 'entry-programs', label: 'Entry programs and prices' },
  { id: 'team-programs', label: 'Programs for sales teams' },
  { id: 'compliance', label: 'Compliance basics' },
  { id: 'value-analysis', label: 'How hospitals decide' },
  { id: 'practice', label: 'How to practice' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// ------------------------------------------------------------------------------
// published entry program prices (November 2026)
// ------------------------------------------------------------------------------
// hours: instruction hours from the program page; null when not published.
export type Program = { name: string; price: number; hours: number | null; note: string }

export const programs: Program[] = [
  { name: 'CourseCareers, Medical Device Sales', price: 499, hours: 20, note: 'Self-paced, 20 hours of video' },
  { name: 'CNPR program (Fayetteville Tech)', price: 2195, hours: null, note: 'Online; hours not published' },
  { name: 'Medical Sales College, TotalBio', price: 9850, hours: 160, note: '8 weeks, about 20 hours a week' },
  { name: 'Medical Sales College, TotalOrtho', price: 14495, hours: 200, note: '10 weeks, about 20 hours a week' },
  { name: 'Medical Sales College, TotalOrtho+', price: 19495, hours: 225, note: '10 weeks, about 22.5 hours a week' },
]
