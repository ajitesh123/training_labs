import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'sales-coaching-techniques',
  title: 'Sales Coaching Techniques: Eight Moves for Reviewing a Call, Shown on One Recording',
  seoTitle: 'Sales Coaching Techniques: 8 Moves for Call Reviews',
  description:
    'Eight sales coaching techniques for call reviews, on one recorded call: pick one moment, let the rep go first, model the line, redo it, check the next call.',
  datePublished: '2026-11-26',
  faqs: [
    {
      q: 'What are the best sales coaching techniques?',
      a: 'For call reviews, eight moves cover most of it: pick one moment instead of the whole call, let the rep review first, ask before telling, quote the exact words, model the better line once, have the rep redo the moment out loud three times, play a teammate’s version of the same moment, and check that moment again on the next live call.',
    },
    {
      q: 'How do you coach a sales rep from a call recording?',
      a: 'Ask the rep to flag one timestamp they would redo before you meet. Listen to two or three minutes around it. In the review, ask what they wanted to happen, quote what was actually said, model one better line, and have them redo the moment until it passes. Agree on what you will look for in the next call.',
    },
    {
      q: 'How long should a sales call review take?',
      a: 'About 15 minutes of conversation plus a few minutes of preparation, if you review one moment. Listening to a whole 30-minute call together and then discussing it takes an hour per rep, which is why most managers stop doing it after a few weeks.',
    },
    {
      q: 'How do you give feedback on a sales call without the rep getting defensive?',
      a: 'Keep it about the task, not the person. Kluger and DeNisi’s 1996 meta-analysis of 607 effects found feedback raised performance on average, but over a third of feedback interventions lowered it, and feedback worked less well the more it pulled attention toward the self. “At 14:32 you named a discount before asking what she compared it to” lands better than “you get nervous on price”.',
    },
    {
      q: 'How many calls should a manager review per rep?',
      a: 'One moment per rep per week is a workable floor that most managers can keep. New hires and reps working on a specific skill benefit from two. Reviewing more whole calls rarely helps if nothing gets rehearsed afterward.',
    },
    {
      q: 'Can AI help with sales coaching?',
      a: 'Yes, in two places. Conversation intelligence tools help find the moment worth coaching, and an AI buyer gives the rep repetitions of that moment between reviews. The manager still decides which moment matters and checks the next live call.',
    },
  ],
}

export const meta = {
  category: 'Coaching Guide',
  date: 'November 26, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-reviews-fail', label: 'Why reviews change nothing' },
  { id: 'before', label: 'Before the review' },
  { id: 'during', label: 'In the review' },
  { id: 'after', label: 'After the review' },
  { id: 'by-problem', label: 'Technique by problem' },
  { id: 'time', label: 'How long it takes' },
  { id: 'ai-practice', label: 'Where AI practice fits' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  kluger: 'https://psycnet.apa.org/record/1996-02773-003',
  msc: 'https://www.mysalescoach.com/blog/sales-coaching-techniques',
  snapQuestions: 'https://www.snapsdr.com/blog/sales-coaching-questions',
  snapScorecard: 'https://www.snapsdr.com/blog/sales-call-scorecard',
  snapTalk: 'https://www.snapsdr.com/blog/talk-to-listen-ratio',
  ttai: 'https://www.toughtongueai.com/pricing/',
}
