import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'sales-coaching-framework',
  title: 'A Sales Coaching Framework Managers Will Actually Use Every Week',
  seoTitle: 'Sales Coaching Framework: A Weekly Loop Managers Use',
  description:
    'A sales coaching framework that fits a manager’s week: watch one call moment, name one behavior, rehearse it, check it on a live call. Time budget and models.',
  datePublished: '2026-11-21',
  faqs: [
    {
      q: 'What is a sales coaching framework?',
      a: 'A sales coaching framework is the repeatable routine a manager uses to change how a rep sells: what evidence to look at, how the coaching conversation runs, how the rep practices, and how both of you check that the behavior showed up on a real call. A conversation model such as GROW is one part of it, not the whole framework.',
    },
    {
      q: 'What is the best sales coaching model?',
      a: 'There is no single best model. GROW (Goal, Reality, Options, Will) suits a rep who can see the gap. OSKAR suits a rep in a slump because it starts from what already works. CLEAR suits a conversation where the rep is unsure what they want help with. Pick one per situation and keep the weekly routine around it the same.',
    },
    {
      q: 'How often should sales managers coach reps?',
      a: 'Weekly, in short sessions, for every rep. In Ambition’s June 2026 survey of 312 sales leaders, organizations that coached more than 75 percent of reps weekly were more than twice as likely to report 71 percent or higher quota attainment as those that coached fewer than 25 percent weekly. The finding is a correlation, but it points to coverage, not long sessions for a few reps.',
    },
    {
      q: 'How much time should a sales manager spend coaching?',
      a: 'Alexander Group’s benchmark puts first-line sales managers at 16 percent of their time spent coaching, against a best practice of 28 percent, with an average of 8.5 direct reports. A 30-minute weekly loop per rep for 8 reps takes 4 hours, or 10 percent of a 40-hour week, which leaves room for deal reviews.',
    },
    {
      q: 'What is the difference between sales coaching and a pipeline review?',
      a: 'A pipeline review inspects deals: stage, amount, close date and next step. Coaching changes a rep’s behavior on future calls. Both matter, but when they share one meeting the urgent deal wins and the skill work disappears. Keep them in separate time slots.',
    },
    {
      q: 'How do you measure whether sales coaching is working?',
      a: 'Track the behavior you coached on live calls before you track quota. If the focus is asking about impact before pitching, count how many of each rep’s recorded calls this week show it. When a rep passes on three of four calls for two or three weeks running, move to the next behavior. Quota and win rate move later and have many causes.',
    },
  ],
}

export const meta = {
  category: 'Coaching Guide',
  date: 'November 21, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-frameworks-stall', label: 'Why frameworks stall' },
  { id: 'weekly-loop', label: 'The weekly loop' },
  { id: 'coaching-notes', label: 'Writing a coaching note' },
  { id: 'time-budget', label: 'The time budget' },
  { id: 'models', label: 'GROW, OSKAR or CLEAR' },
  { id: 'skill-vs-deal', label: 'Skill vs deal coaching' },
  { id: 'monthly-layer', label: 'The monthly layer' },
  { id: 'measure', label: 'How to measure it' },
  { id: 'practice', label: 'Where AI practice fits' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// Steps of the weekly loop, with the example manager minutes per rep used in
// the hero and the time-budget calculator.
export const loopSteps = [
  { key: 'watch', label: 'Watch', day: 'Mon', minutes: 10, who: 'Manager alone' },
  { key: 'name', label: 'Name', day: 'Tue', minutes: 15, who: 'Manager and rep' },
  { key: 'rehearse', label: 'Rehearse', day: 'Wed, Thu', minutes: 0, who: 'Rep alone' },
  { key: 'check', label: 'Check', day: 'Fri', minutes: 5, who: 'Manager alone' },
] as const

// Alexander Group benchmark for first-line sales managers (page read Nov 2026).
export const benchmark = {
  avgReports: 8.5,
  coachingShare: 16,
  bestPracticeShare: 28,
  weekHours: 40,
}
