import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'objection-handling-techniques',
  title: 'Objection Handling Techniques You Can Actually Practice, With Drills for Each One',
  seoTitle: 'Objection Handling Techniques You Can Practice (Drills)',
  description:
    'Seven objection handling techniques, each with a weak reply, a strong reply, a drill and what to score, plus Gong data on which objections reps hear most.',
  datePublished: '2026-11-19',
  faqs: [
    {
      q: 'What are the best objection handling techniques?',
      a: 'Seven hold up across most sales calls: acknowledge and ask, isolate the objection, feel felt found, reframe, boomerang, make the ask smaller, and proof from a similar customer. All of them sit inside the same five moves: pause, acknowledge in the buyer’s words, ask one question, check it is the only concern, then respond and confirm the next step.',
    },
    {
      q: 'What objections do salespeople hear most often?',
      a: 'Gong analyzed more than 300 million cold calls and found that dismissive objections such as “not interested” or “send me some information” make up 49.5 percent of all objections, situational ones such as “too expensive” or “no budget” 42.6 percent, and existing-solution objections such as “we do it in-house” 7.9 percent. The top five objections account for 74 percent of everything reps hear.',
    },
    {
      q: 'What is the LAER objection handling model?',
      a: 'LAER stands for listen, acknowledge, explore and respond. The rep lets the buyer finish, says back the concern in the buyer’s words, asks a question to find what sits underneath it, and only then answers. HubSpot’s 2026 guide pairs it with a fifth step, anticipating likely objections before the call.',
    },
    {
      q: 'How do you practice objection handling?',
      a: 'Pick the five objections you hear most, write one strong reply for each, then drill them in two-minute repetitions: a partner or an AI buyer raises the objection, you respond, and you score yourself on whether you paused, asked before answering, and ended with a next step. Ten minutes a day, five days a week, gives you about 100 repetitions a month.',
    },
    {
      q: 'What is an objection handling matrix?',
      a: 'A simple grid that ranks objections by how often you hear them and how often a call ends there. Objections that are both frequent and fatal get drilled first; frequent but harmless ones get a prepared line; rare ones can wait. Build it from your own call recordings, not from a generic list.',
    },
    {
      q: 'Should you use feel, felt, found?',
      a: 'Only with a real story behind it. Buyers recognize the phrase, so “I understand how you feel” followed by a vague claim sounds scripted. It works when “others felt the same” names a similar customer and “found” states a specific result you can back up.',
    },
  ],
}

export const meta = {
  category: 'Skills Guide',
  date: 'November 19, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'what-buyers-say', label: 'What buyers object to' },
  { id: 'five-moves', label: 'The five moves' },
  { id: 'techniques', label: 'Seven techniques' },
  { id: 'matrix', label: 'Objection matrix' },
  { id: 'practice-plan', label: 'Four-week drill plan' },
  { id: 'scoring', label: 'How to score a reply' },
  { id: 'ai-practice', label: 'Practicing with an AI buyer' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// ------------------------------------------------------------------------------
// the seven techniques: shared by the picker figure and the summary table
// ------------------------------------------------------------------------------
export type Technique = {
  id: string
  name: string
  bestFor: string
  objection: string
  weak: string
  weakFlaw: string
  strong: string
  drill: string
  score: string
}

export const techniques: Technique[] = [
  {
    id: 'ask',
    name: 'Acknowledge and ask',
    bestFor: 'Any objection, especially vague ones',
    objection: 'This is more than we budgeted.',
    weak: 'Actually, when you look at the ROI, it pays for itself in six months.',
    weakFlaw: 'Answers before asking',
    strong: 'More than you budgeted. Is that the total, or what it costs this quarter?',
    drill: 'Hear five objections in a row and answer each with only a restatement and one question. No pitching allowed.',
    score: 'Did your first sentence repeat the buyer’s words, and did your second end in a question mark?',
  },
  {
    id: 'isolate',
    name: 'Isolate it',
    bestFor: 'Price, timing, and “let me think about it”',
    objection: 'The timing isn’t great for us.',
    weak: 'I can hold this price until the end of the month if that helps.',
    weakFlaw: 'Discounts a timing problem',
    strong: 'Fair. If timing were sorted, is there anything else that would stop you looking at this?',
    drill: 'Your partner hides a second, real objection behind the first. You pass only if you find it within two questions.',
    score: 'Did you ask “anything else?” before you offered anything?',
  },
  {
    id: 'feel',
    name: 'Feel, felt, found',
    bestFor: 'Hesitant buyers worried about risk',
    objection: 'I’m worried my team won’t use it.',
    weak: 'I understand how you feel. Others felt that way, but they found it works great.',
    weakFlaw: 'Script with no story',
    strong: 'That worry is common. A 12-person team like yours said the same; what changed it was a two-week pilot with three reps. Want to run that?',
    drill: 'Write one real customer story for each of your top three objections. Deliver each in under 20 seconds.',
    score: 'Did the “found” name a specific customer type and a specific result?',
  },
  {
    id: 'reframe',
    name: 'Reframe',
    bestFor: 'Objections built on the wrong comparison',
    objection: 'We can just do this with spreadsheets.',
    weak: 'Spreadsheets break and nobody updates them.',
    weakFlaw: 'Attacks their choice',
    strong: 'You can. The question is what it costs your managers each week to keep them current. Can I show you that math?',
    drill: 'For each objection, write down the comparison the buyer is making, then one question that swaps it for a better one.',
    score: 'Did you agree with the buyer’s point before changing the frame?',
  },
  {
    id: 'boomerang',
    name: 'Boomerang',
    bestFor: 'Objections that describe the problem you solve',
    objection: 'We’re too busy to take on anything new.',
    weak: 'It only takes an hour to set up, I promise.',
    weakFlaw: 'Argues with the buyer',
    strong: 'Being stretched is usually why teams look at us. Which part of the week would you most want back?',
    drill: 'Take your top five objections and mark which ones restate your product’s reason to exist. Drill only those.',
    score: 'Did you turn the objection into a question about their problem, not a claim about your product?',
  },
  {
    id: 'smaller',
    name: 'Make the ask smaller',
    bestFor: 'Dismissive cold call objections',
    objection: 'Not interested.',
    weak: 'Totally understand. Can I just take five minutes to walk you through what we do?',
    weakFlaw: 'Asks for more time',
    strong: 'That’s fair, I called out of the blue. Can I ask one question, and if it’s not relevant I’ll let you go?',
    drill: 'Run ten cold opens in a row where the buyer says “not interested” first. Your only goal is permission for one question.',
    score: 'Was your ask smaller than the one the buyer just refused?',
  },
  {
    id: 'proof',
    name: 'Proof from a similar customer',
    bestFor: '“We already use a competitor” and trust objections',
    objection: 'We already use another vendor for this.',
    weak: 'We’re much better than them. They don’t even have our reporting.',
    weakFlaw: 'Badmouths a rival',
    strong: 'Makes sense. What would you change about it if you could? A team that switched last year cared mostly about one thing.',
    drill: 'Keep a list of three customer stories per competitor. Practice telling one in two sentences without naming the rival’s flaws.',
    score: 'Did you ask what they like about the current vendor before you compared?',
  },
]

// ------------------------------------------------------------------------------
// objection matrix: example objections from one team's calls
// ------------------------------------------------------------------------------
// Example data for the matrix figure: heard = times per 10 calls, lost = share of
// calls that ended at this objection. Illustrative, not benchmarks.
export type MatrixPoint = { label: string; heard: number; lost: number; technique: string }

export const matrixPoints: MatrixPoint[] = [
  { label: 'Not interested', heard: 8.5, lost: 72, technique: 'Make the ask smaller' },
  { label: 'Too expensive', heard: 6, lost: 55, technique: 'Acknowledge and ask, then isolate' },
  { label: 'Send me information', heard: 7, lost: 30, technique: 'Make the ask smaller' },
  { label: 'Bad timing', heard: 4.5, lost: 48, technique: 'Isolate it' },
  { label: 'Use a competitor', heard: 2.5, lost: 66, technique: 'Proof from a similar customer' },
  { label: 'Need to ask my boss', heard: 3, lost: 25, technique: 'Acknowledge and ask' },
  { label: 'We do it in-house', heard: 1.5, lost: 40, technique: 'Reframe' },
]
