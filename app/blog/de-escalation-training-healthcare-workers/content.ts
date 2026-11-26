import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'de-escalation-training-healthcare-workers',
  title: 'De-Escalation Training for Healthcare Workers: Requirements, Free Courses and What to Say',
  seoTitle: 'De-Escalation Training for Healthcare Workers (2026)',
  description:
    'De-escalation training for healthcare workers: what the Joint Commission requires, free and paid courses, the ten Project BETA skills, and how to practice them.',
  datePublished: '2026-11-26',
  faqs: [
    {
      q: 'What is de-escalation training for healthcare workers?',
      a: 'It teaches staff to notice agitation early and calm it with words, space and choices before it turns into threats or violence. Good programs cover warning signs, what to say, when to step back and call for help, how to report an incident and how to debrief afterward. Hospitals add physical intervention skills for roles that need them.',
    },
    {
      q: 'Is de-escalation training required for hospital staff?',
      a: 'For Joint Commission-accredited hospitals, yes. Since January 1, 2022, its workplace violence prevention standards require training at hire, every year, and whenever the program changes. The training must cover what counts as workplace violence, roles and responsibilities, de-escalation, nonphysical intervention, physical intervention techniques, response to emergencies and the reporting process. Each hospital decides which parts each role needs.',
    },
    {
      q: 'Is there free de-escalation training for healthcare workers?',
      a: 'Yes. In November 2026 the NIOSH Workplace Violence Prevention for Nurses course was free online, in 13 units of about 15 minutes each, with free continuing education credit through CDC TRAIN. The University of Colorado’s CU Psych Learning offered a free 40-minute video course on verbal de-escalation, and CMS published a free de-escalation in-service toolkit for nursing homes.',
    },
    {
      q: 'How long does de-escalation training take?',
      a: 'Anywhere from 30 minutes to a full day. CPI’s Prevention First is a 30-minute online course, the self-paced healthcare course from Pollack Peacebuilding Systems takes about 90 minutes, the NIOSH course carries 3.0 nursing contact hours, and live workshops for high-risk units usually run half a day to a day. The skill needs short practice after the course, not just the course.',
    },
    {
      q: 'What are de-escalation techniques in healthcare?',
      a: 'The most cited list is the ten domains from the American Association for Emergency Psychiatry’s Project BETA: respect personal space, do not be provocative, establish verbal contact, be concise, identify wants and feelings, listen closely, agree or agree to disagree, set clear limits, offer choices and optimism, and debrief the patient and staff afterward.',
    },
    {
      q: 'Does de-escalation training work?',
      a: 'It reliably improves staff confidence and preparedness. A systematic review of 36 studies, published on PubMed Central, found training was consistently linked to better clinician confidence and perceived safety, while effects on the number and severity of violent incidents were more variable. Simulation raised confidence, with less consistent gains in measured performance, so repeated practice matters.',
    },
  ],
}

export const meta = {
  category: 'Training Guide',
  date: 'November 26, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-it-matters', label: 'Where violence happens' },
  { id: 'requirements', label: 'What is required' },
  { id: 'stages', label: 'When to talk, when to call' },
  { id: 'ten-skills', label: 'The ten skills' },
  { id: 'what-to-say', label: 'What to say' },
  { id: 'programs', label: 'Courses compared' },
  { id: 'does-it-work', label: 'Does it work?' },
  { id: 'practice', label: 'Practice between refreshers' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  blsFact: 'https://www.bls.gov/iif/factsheets/workplace-violence-2021-2022.htm',
  ncci: 'https://www.ncci.com/Articles/Documents/Insights_Workplace-Violence-Part3-Assaults-and-Violence-by-Others-in-Finer-Detail.pdf',
  tjcTraining:
    'https://www.jointcommission.org/our-priorities/workforce-safety-and-well-being/resource-center/workplace-violence-prevention/education-and-training',
  tjcR3: 'https://www.jointcommission.org/standards/r3-report/r3-report-issue-30-workplace-violence-prevention-standards',
  tjcReview: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8816837/',
  beta: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3298202/',
  betaOverview: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3298232',
  review: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13713309/',
  niosh: 'https://www.cdc.gov/niosh/docs/2013-155/default.html',
  cu: 'https://cupsychlearning.org/courses/verbal-de-escalation-for-healthcare-professionals',
  cms: 'https://www.cms.gov/files/document/de-escalation-strategies-service-toolkit-final-2025.pdf',
  cpiFirst: 'https://www.crisisprevention.com/our-programs/prevention-first/',
  cpiVerbal: 'https://www.crisisprevention.com/our-programs/verbal-intervention/',
  pps: 'https://deescalation-training.com/workshops/healthcare-workers',
  benchmarque: 'https://www.benchmarquegroup.com.au/courses/de-escalation-ucc/',
  ttai: 'https://www.toughtongueai.com/pricing/',
  customerService: 'https://www.toughtongueai.com/blog/customer-service-role-play-scenarios',
}

// Tough Tongue AI Business plan overage rate, read from the pricing page in November 2026.
export const AI_PER_MINUTE = 0.1
// Pollack Peacebuilding Systems self-paced healthcare course, November 2026.
export const COURSE_PRICE = 89
