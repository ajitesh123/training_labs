import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'patient-communication-training',
  title: 'Patient Communication Training: Programs, Costs and Five Skills to Practice',
  seoTitle: 'Patient Communication Training: Programs, Skills, Drills',
  description:
    'Patient communication training compared: what Mayo, VitalTalk, CMPA and CAPC offer and charge, five skills with scripts and drills, and how to measure change.',
  datePublished: '2026-11-21',
  faqs: [
    {
      q: 'What is patient communication training?',
      a: 'Patient communication training teaches clinicians and front-line staff the conversation skills of a visit: setting an agenda, explaining information so patients understand it, checking understanding, responding to emotion and sharing serious news. Good programs pair a short explanation with role play and feedback, because the skills only change when people say the words out loud and hear how they land.',
    },
    {
      q: 'How much does patient communication training cost?',
      a: 'Published prices start low. As of November 2026, Mayo Clinic lists its self-paced Clinician Communication Series modules at $50 each and its 3.5-credit Effective Communication in Healthcare course at $350. CAPC’s five serious illness communication courses carry free continuing education credits for CAPC members. VitalTalk, the CMPA Clinical Communication Program and Cleveland Clinic’s R.E.D.E. to Communicate do not list a price on the pages we read.',
    },
    {
      q: 'What skills does patient communication training cover?',
      a: 'A 2025 systematic review of 55 programs in BMC Medical Education found the most common topics were basic and patient-centered communication (22 programs), breaking bad news (19), empathy and emotional support (17), advance care planning (14) and shared decision-making (7). In day-to-day care, five skills cover most visits: agenda setting, teach-back, ask-tell-ask, responding to emotion and delivering serious news.',
    },
    {
      q: 'Does communication skills training for healthcare professionals work?',
      a: 'Mostly yes, when it includes practice. In the 2025 BMC Medical Education review, communication behaviors improved significantly in 37 of 40 studies that measured them, and 46 of the 55 programs used role play with feedback. Three very brief interventions showed no change in behavior, which suggests a single short lecture is not enough.',
    },
    {
      q: 'What is the teach-back method?',
      a: 'Teach-back is asking patients to explain in their own words what they need to know or do, so you can check how well you explained it. AHRQ’s Health Literacy Universal Precautions Toolkit stresses that it is not a test of the patient, that “Do you understand?” does not count, and that you should re-explain in a different way and check again when teach-back reveals a gap.',
    },
    {
      q: 'How do you measure patient communication skills?',
      a: 'Use two kinds of evidence. Patient surveys such as HCAHPS ask how often nurses and doctors treated the patient with courtesy and respect, listened carefully and explained things understandably. Direct observation, with a short rubric or AHRQ’s Teach-Back Observation Tool, shows whether a specific behavior is happening. Score a recorded or observed conversation before training and again one and three months later.',
    },
  ],
}

// Tough Tongue AI Business plan: $299 for 2,990 minutes, so $0.10 a minute (Nov 2026).
export const rates = {
  aiPerMinute: 0.1,
}

export const meta = {
  category: 'Training Guide',
  date: 'November 21, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'evidence', label: 'Does it work?' },
  { id: 'programs', label: 'Programs compared' },
  { id: 'skills', label: 'Five skills, with scripts' },
  { id: 'practice', label: 'Running practice sessions' },
  { id: 'measure', label: 'Measuring change' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// Sources cited in the post, all opened November 2026.
export const SRC = {
  bmc: 'https://link.springer.com/article/10.1186/s12909-025-07797-1',
  mayoSeries: 'https://executiveeducation.mayo.edu/products/clinician-communication-series-partnering-with-patients',
  mayoCne: 'https://ce.mayo.edu/nursing/content/effective-communication-healthcare-online-cne-course-0',
  capc: 'https://www.capc.org/training/communication-skills',
  vitaltalk: 'https://courses.vitaltalk.org/courses',
  nurse: 'https://www.vitaltalk.org/guides/responding-to-emotion-respecting/',
  cmpa: 'https://www.cmpa-acpm.ca/en/education-events/workshops/clinical-communication-program',
  rede: 'https://my.clevelandclinic.org/departments/patient-experience/depts/experience-partners/licensed-programs/rede-to-communicate',
  ahrq: 'https://www.ahrq.gov/health-literacy/improve/precautions/tool5.html',
  heritage: 'https://link.springer.com/article/10.1007/s11606-007-0279-0',
  spikes: 'https://theoncologist.onlinelibrary.wiley.com/doi/10.1634/theoncologist.5-4-302',
  hcahps: 'https://hcahpsonline.org/en/survey-instruments/',
  ttai: 'https://www.toughtongueai.com/pricing/',
}

export const LINK = 'text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal'
