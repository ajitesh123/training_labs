import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'sales-onboarding-checklist',
  title: 'Sales Onboarding Checklist: The First 90 Days, With an Owner and a Gate for Every Step',
  seoTitle: 'Sales Onboarding Checklist: The First 90 Days (2026)',
  description:
    'A sales onboarding checklist for the first 90 days: setup before day one, weekly tasks, an owner for each, three certification gates and a practice plan.',
  datePublished: '2026-11-27',
  faqs: [
    {
      q: 'What should a sales onboarding checklist include?',
      a: 'Five parts, each with a named owner. Setup before day one: tested logins, the comp plan in writing, a booked first two weeks, a peer mentor and a written definition of ramped. Week one: the buyer, the product, recorded calls and the company story said out loud. Days 1 to 30: scored practice and a certification gate. Days 31 to 60: first solo calls with weekly review. Days 61 to 90: a full book and a 90-day review.',
    },
    {
      q: 'How long should sales onboarding take?',
      a: 'Plan 90 days of structured onboarding, then keep coaching. Ramp to full productivity takes longer than 90 days for most account executives: The Bridge Group’s June 2026 report puts the average at 6.2 months across 158 B2B companies. Its 2025 sales development report puts SDR ramp at 3.0 months.',
    },
    {
      q: 'What is a 30-60-90 day sales onboarding plan?',
      a: 'It splits a new rep’s first three months into three phases: learn the buyer, product and process in days 1 to 30, run first conversations with support in days 31 to 60, and own a book of business in days 61 to 90. Each phase should end with a gate the rep has to pass, such as a scored discovery call, before taking on the next.',
    },
    {
      q: 'Who owns sales onboarding?',
      a: 'The hiring manager owns the outcome and signs off each gate. Enablement owns the content, the practice scenarios and the certification rubric. RevOps or IT owns access to the CRM, dialer and call recorder before day one. A peer mentor answers the daily questions. The rep owns the practice itself.',
    },
    {
      q: 'What is the average ramp time for a new sales rep?',
      a: 'For account executives, 6.2 months in The Bridge Group’s 2026 report, the highest in the study’s history, up from 5.7 months in 2024, 5.3 in 2022 and 4.3 in 2020. For SDRs, 3.0 months in its 2025 report. Your own number depends on how you define ramped, so write that definition down before the rep starts.',
    },
    {
      q: 'How do you measure whether sales onboarding is working?',
      a: 'Track a few dates per hire against a written definition: first certified practice call, first live call, first qualified opportunity, first closed deal and the month the rep reaches full quota. Compare each new cohort with the last two. Small cohorts move around a lot, so read the result as a direction rather than a precise percentage.',
    },
  ],
}

export const meta = {
  category: 'Onboarding Guide',
  date: 'November 27, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-ramp', label: 'Why ramp needs a list' },
  { id: 'checklist', label: 'The checklist' },
  { id: 'before-day-one', label: 'Before day one' },
  { id: 'days-1-30', label: 'Days 1 to 30' },
  { id: 'gates', label: 'Certification gates' },
  { id: 'days-31-90', label: 'Days 31 to 90' },
  { id: 'sdr-vs-ae', label: 'SDR vs AE' },
  { id: 'practice', label: 'Where practice fits' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  bridge2026: 'https://www.bridgegroupinc.com/research/2026-ae-models-motions-metrics',
  bridge2026pdf: 'https://991.fs1.hubspotusercontent-na1.net/hubfs/991/resources/TBG_2026_SaaS_AE_Metrics.pdf',
  bridge2024: 'https://www.bridgegroupinc.com/hubfs/resources/SaaS_AE_Metrics.pdf',
  bridgeSdr: 'https://blog.bridgegroupinc.com/hubfs/resources/TBG%202025%20Sales%20Development%20Report.pdf',
  salesforce:
    'https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/reports/sales/salesforce-state-of-sales-report-2026.pdf',
  gallup: 'https://www.gallup.com/workplace/246242/essential-ingredients-effective-onboarding-program.aspx',
  snapsdrRamp: 'https://www.snapsdr.com/blog/sales-ramp-time',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

// The Bridge Group, AE Models, Motions & Metrics (June 2026): average ramp to full productivity.
export const BRIDGE = {
  rampMonths: 6.2,
}
