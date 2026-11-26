import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'pharmaceutical-sales-training',
  title: 'Pharmaceutical Sales Training: Programs, Certification Costs and How Reps Practice the Detail',
  seoTitle: 'Pharmaceutical Sales Training: Programs, Cost, Practice',
  description:
    'Pharmaceutical sales training compared: CNPR from $285, ACMA PRC at $1,199, what company programs teach, the off-label rule, and how reps practice the detail.',
  datePublished: '2026-11-26',
  faqs: [
    {
      q: 'How much does pharmaceutical sales training cost?',
      a: 'For individuals, published prices in November 2026 run from $285 for the NAPSRx CNPR Total Package (manual, exam and a year of membership) and $299 for the CMR Institute Pharmaceutical Readiness Certificate to $1,199 for the ACMA Pharmaceutical Representative Certification and $2,833 for the San Diego State University Global Campus program with the exam included. Training for company sales forces is built in house or quoted by vendors.',
    },
    {
      q: 'Do you need a certification to become a pharmaceutical sales rep?',
      a: 'No law requires one. The Bureau of Labor Statistics says reps who sell scientific or technical products typically need at least a bachelor’s degree, and employers train new hires on their own products. A certification can help a career changer learn the vocabulary and show commitment, but none of the certification pages we read describes a scored practice call.',
    },
    {
      q: 'What do pharmaceutical companies train new sales reps on?',
      a: 'Two layers. The knowledge layer covers the disease state, the product label, compliance rules such as the PhRMA Code and FDA promotion rules, and market access. The conversation layer covers opening on the physician’s patients, delivering the core message with its safety information, handling cost and access questions, routing off-label questions, and closing on a next step. Most programs test the first layer far more than the second.',
    },
    {
      q: 'Can a pharmaceutical sales rep answer an off-label question?',
      a: 'Reps must not promote a use that is not in the approved label. For unsolicited questions, FDA’s 2011 draft guidance says the response should come from medical or scientific staff and be truthful, balanced and non-promotional, so most companies train reps to log a medical information request. FDA’s January 2025 final guidance lets firms share certain scientific information on unapproved uses with disclosures, under company procedures. Follow your company’s policy.',
    },
    {
      q: 'How long is a pharmaceutical sales call with a physician?',
      a: 'Short, and harder to get than it used to be. In a 2026 ZoomRx survey of 105 US physicians, 68 percent said reps now need an appointment and only 6 percent still allow walk-ins, and 94 percent said new or relevant clinical information is what earns a productive visit. Train reps to make their point in a few minutes and to earn the next appointment.',
    },
    {
      q: 'How can pharmaceutical sales reps practice before meeting physicians?',
      a: 'Rehearse the detail out loud against a colleague, a trainer or an AI physician, and score each run on a short rubric: open on the physician’s patients, ask one question, give the core message with its safety information, answer the access question, route any off-label question, and ask for a specific next step. Repeat the moment that scored lowest.',
    },
  ],
}

export const meta = {
  category: 'Industry Guide',
  date: 'November 26, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'two-paths', label: 'Two kinds of training' },
  { id: 'certifications', label: 'Certifications and cost' },
  { id: 'curriculum', label: 'What companies teach' },
  { id: 'access', label: 'Time with physicians' },
  { id: 'off-label', label: 'Off-label questions' },
  { id: 'practice', label: 'Practicing the detail' },
  { id: 'plan', label: 'A 90-day plan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  cnprOrder: 'https://www.napsronline.org/cnpr-pharmaceutical-sales-program/order-now',
  cnprEdu: 'https://www.napsronline.org/cnpr-pharmaceutical-sales-program/pharmaceutical-sales-education',
  prcFees: 'https://www.pharmasalestraining.org/fees',
  prcExam: 'https://www.pharmasalestraining.org/policies/exam/',
  sdsu: 'https://careertraining.sdsu.edu/training-programs/certified-pharmaceutical-sales-representative',
  cmr: 'https://www.cmrinstitute.org/learning-hub',
  biopharma: 'https://www.biopharmainstitute.com/program?CATvalue=Pharmaceutical%20Sales%20and%20Marketing',
  bls: 'https://www.bls.gov/ooh/sales/wholesale-and-manufacturing-sales-representatives.htm',
  phrmaCode: 'https://cdn.aglty.io/phrma/global/resources/PhRMA%20Code%20-%20Final.pdf',
  zsReps: 'https://www.zs.com/insights/human-sales-reps-value-ai-era',
  zsOncology: 'https://www.zs.com/insights/restricted-access-pharma-reps-rethinking-sales-planning-oncology',
  zs2015: 'https://www.fiercepharma.com/marketing/crossing-threshold-more-than-half-of-physicians-restrict-access-to-sales-reps',
  zoomTime: 'https://zoomrx.com/blog/what-earns-physician-time-2026',
  zoomAccess: 'https://zoomrx.com/blog/did-your-hcp-access-benchmarks-survive-covid',
  fdaSiuu:
    'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/communications-firms-health-care-providers-regarding-scientific-information-unapproved-uses',
  fdaUnsolicited: 'https://www.fda.gov/media/82660/download',
  lsl: 'https://www.lifescienceleader.com/doc/a-door-ajar-fda-s-final-siuu-guidance-and-off-label-communications-0001',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

// ------------------------------------------------------------------------------
// published certification prices (read November 2026)
// ------------------------------------------------------------------------------
// hours: study hours stated on the program page; null when not published.
export type Cert = { name: string; issuer: string; price: number; hours: number | null; note: string }

export const certs: Cert[] = [
  { name: 'CNPR Total Package', issuer: 'NAPSRx', price: 285, hours: null, note: 'Manual, exam, 1-year membership' },
  { name: 'Pharmaceutical Readiness', issuer: 'CMR Institute', price: 299, hours: 6, note: '10 eLearning courses, about 6 hours' },
  { name: 'Sales & Marketing Compliance', issuer: 'Biopharma Institute', price: 645, hours: null, note: 'Compliance only, self-paced' },
  { name: 'PRC certification', issuer: 'ACMA', price: 1199, hours: 12, note: '15 modules, about 12 hours, 75-question exam' },
  { name: 'Certified Pharma Sales Rep', issuer: 'SDSU Global Campus', price: 2833, hours: 110, note: '110 course hours, PRC exam included' },
]
