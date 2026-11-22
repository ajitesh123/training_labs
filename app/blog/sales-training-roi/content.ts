import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'sales-training-roi',
  title: 'Sales Training ROI: How to Measure Ramp Time, First Sale and Win Rate',
  seoTitle: 'Sales Training ROI: Measure Ramp, Win Rate and Payback',
  description:
    'Sales training ROI is attributable benefit minus fully loaded cost, over cost. Measure ramp, first sale and win rate, use a control group, and price the result.',
  datePublished: '2026-11-22',
  faqs: [
    {
      q: 'How do you calculate sales training ROI?',
      a: 'ROI (%) equals attributable benefit minus fully loaded cost, divided by fully loaded cost, times 100. Attributable benefit is the improvement you can credit to training after comparing against a group that was not trained, valued at gross margin rather than bookings, for the first year only. Fully loaded cost includes fees, materials, rep and manager time, tools and administration.',
    },
    {
      q: 'What is a good ROI for sales training?',
      a: 'There is no standard benchmark you can trust. In the ROI Institute’s published retail case, a three-day selling skills program returned 118 percent in its first year, against a target the company set in advance of 25 percent. Set your own target before the program starts, based on what the budget could earn elsewhere, and judge the result against it.',
    },
    {
      q: 'Which metrics show whether sales training worked?',
      a: 'Track a chain: practice scores and pass rates show learning, behavior on recorded calls shows application, and ramp time, time to first sale and win rate show business impact. A 2022 Mediafly and RevOps Squared survey of 339 companies found only 17 percent measured new hire ramp time to judge enablement ROI.',
    },
    {
      q: 'How long does it take to see ROI from sales training?',
      a: 'Learning shows up within days, behavior on live calls within one to three months, and ramp time and win rate within one to two quarters. The Bridge Group’s 2026 survey puts average account executive ramp at 6.2 months, so a program aimed at new hires needs at least two quarters of data before an ROI number means anything.',
    },
    {
      q: 'How do you isolate the effect of sales training from other factors?',
      a: 'The strongest method is a comparison group: train one group first and compare it with a similar group that starts later. Trend lines and manager or participant estimates are weaker but common. In an ROI Institute sample of 246 practitioners, 57 percent used participant estimates and 34 percent used control groups.',
    },
    {
      q: 'Should rep time count as a cost of sales training?',
      a: 'Yes. Hours reps spend in training are hours not spent selling, and the ROI Institute counts participant salaries plus benefits as a cost. In its retail case they were $12,442 of $32,984, the largest single line. Leaving them out makes any program look better than it is.',
    },
  ],
}

export const meta = {
  category: 'Pricing Guide',
  date: 'November 22, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'formula', label: 'The formula' },
  { id: 'levels', label: 'Five levels to measure' },
  { id: 'ramp', label: 'Lever 1: ramp time' },
  { id: 'first-sale', label: 'Lever 2: first sale' },
  { id: 'win-rate', label: 'Lever 3: win rate' },
  { id: 'isolate', label: 'Isolating the effect' },
  { id: 'cost', label: 'Fully loaded cost' },
  { id: 'calculator', label: 'ROI calculator' },
  { id: 'plan', label: 'A 180-day plan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  roiDeck:
    'https://roiinstitute.net/wp-content/uploads/2024/03/Measuring-the-Success-of-Sales-Training_Patti-Phillips.pdf',
  bridge: 'https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics',
  mediafly: 'https://www.benchmarkit.ai/_files/ugd/2a084b_abde99a53ab648c59880487067e6232e.pdf',
  revspire: 'https://www.revspire.io/research/sales-ramp-time-benchmark',
  bls: 'https://www.bls.gov/news.release/ocwage.t01.htm',
  ttai: 'https://www.toughtongueai.com/pricing/',
  app: 'https://app.toughtongueai.com',
}

// ROI Institute retail case (Patti Phillips, March 2024): 48 sales associates
// trained, 46 counted in benefits; weekly sales per person, weeks after training.
export const roiCase = {
  weeks: [1, 2, 3, 13, 14, 15],
  trained: [9723, 9978, 10424, 13960, 11491, 11044],
  control: [9698, 9720, 9812, 11572, 9683, 10092],
  trainedLate: 12075,
  controlLate: 10449,
  margin: 0.02,
  people: 46,
  weeksPerYear: 48,
  benefits: 71760,
  costs: [
    { label: 'Facilitation, 3 courses', value: 11250 },
    { label: 'Materials, 48 people', value: 1680 },
    { label: 'Meals, 3 days', value: 4032 },
    { label: 'Facilities, 9 days', value: 1080 },
    { label: 'Participant salaries + benefits', value: 12442 },
    { label: 'Coordination and evaluation', value: 2500 },
  ],
  totalCost: 32984,
}

// Rates used by the calculator. Wages: BLS OEWS May 2025 medians. Quota:
// Bridge Group 2026 median AE quota. Tool: Tough Tongue AI Business plan.
export const rates = {
  repHourly: 33.65,
  managerHourly: 71.28,
  medianQuota: 960000,
  rampMonths: 6.2,
  toolMonthly: 299,
}
