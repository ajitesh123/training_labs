import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'cold-call-practice',
  title: 'Cold Call Practice: Six Drills, Free Options and How to Use an AI Buyer',
  seoTitle: 'Cold Call Practice: Drills, Free Options and AI Buyers',
  description:
    'Cold call practice that works: six drills with pass lines, why 50 live tries at an opener take over 900 dials, free AI cold call simulators, and a rubric.',
  datePublished: '2026-11-26',
  faqs: [
    {
      q: 'What is the best way to practice cold calling?',
      a: 'Practice out loud against someone who pushes back, one piece of the call at a time, and score every attempt. Start with the first 30 seconds: the opener, the reason for the call, and your answers to “what’s this about?”, “not interested” and “send me an email”. Then run full calls and finish each one by asking for a specific day and time.',
    },
    {
      q: 'How can I practice cold calling for free?',
      a: 'Record yourself on your phone, trade role plays with a colleague, or use a free AI tier. In November 2026 Cold Call Gym gave three free scored calls by phone with no signup, SalesLab gave 10 text calls and one 10-minute voice call a month, Chambr offered a free browser simulator for a name and work email, and Tough Tongue AI gave 25 free minutes.',
    },
    {
      q: 'Can you practice cold calling with AI?',
      a: 'Yes. An AI buyer talks back by voice, interrupts, raises brush-offs and scores the call, so you can repeat the same hard moment many times in a row. Give it a buyer brief with a role, a situation, a hidden fact and a rule for when to hang up, so it does not go easy on you.',
    },
    {
      q: 'How long should I practice cold calling each day?',
      a: 'Fifteen focused minutes a day beats an hour once a week. A good session is a two-minute warm-up on the opener, five minutes on one brush-off, two full scored calls, and two minutes deciding what to fix tomorrow.',
    },
    {
      q: 'What are the most common cold call objections?',
      a: 'In Gong’s analysis of more than 300 million cold calls published in July 2024, the top five were not interested (17 percent of objections), product fit or “not for us” (17 percent), no budget (16 percent), not my responsibility (13 percent) and a hang-up without a word (11 percent). Together the top five made up 74 percent of all objections.',
    },
    {
      q: 'What is a good cold call opener?',
      a: 'One that states who you are and why you are calling in the first 15 seconds. In Gong’s 2024 data, a permission-based opener that owns the cold call booked meetings at 11.18 percent, while “Did I catch you at a bad time?” booked at 2.15 percent. Gong’s earlier data found stating the reason for your call made success 2.1 times more likely.',
    },
  ],
}

export const meta = {
  category: 'Skills Guide',
  date: 'November 26, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-practice', label: 'Why live calls are slow' },
  { id: 'first-30-seconds', label: 'What to practice' },
  { id: 'drills', label: 'Six drills' },
  { id: 'formats', label: 'Ways to practice' },
  { id: 'free-options', label: 'Free options' },
  { id: 'ai-buyer', label: 'Set up an AI buyer' },
  { id: 'scoring', label: 'Score every attempt' },
  { id: 'routine', label: 'Daily routine' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const SRC = {
  gong300m: 'https://www.gong.io/files/gong-guide-how-to-master-cold-calls.pdf',
  gongOpeners: 'https://www.gong.io/blog/the-best-and-worst-cold-call-openers-backed-by-data-from-300m-calls',
  gongStats: 'https://www.gong.io/blog/cold-call-stats',
  gongDead: 'https://www.gong.io/blog/is-cold-calling-dead',
  gongObjections: 'https://www.gong.io/blog/we-found-the-top-objections-across-300m-cold-calls-heres-how-to-handle-them-all',
  mpc: 'https://www.30mpc.com/interactive-resources/how-to-master-cold-calls-data-from-300m-calls-30mpc',
  coldCallGym: 'https://coldcallgym.com/blog/cold-call-practice-routine',
  salesLab: 'https://saleslabcenter.com/cold-call-practice',
  trackpoint: 'https://www.trackpoint.ai/blogs/cold-calling-practice',
  chambr: 'https://chambr.ai/cold-call-simulator',
  kulissa: 'https://kulissa.com/ai-cold-call-practice',
  ttai: 'https://www.toughtongueai.com/pricing/',
  connectRate: 'https://www.snapsdr.com/blog/cold-call-connect-rate',
  anxiety: 'https://www.toughtongueai.com/blog/cold-calling-anxiety-ai-coaching/',
}

// Gong, 300M+ cold calls (July 2024): average connect rate and dials per hour.
export const gong = {
  connectRate: 5.4,
  topConnectRate: 13.3,
  dialsPerHourLow: 30,
  dialsPerHourHigh: 40,
}
