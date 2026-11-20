import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'sales-role-play-interview',
  title: 'Sales Role Play Interview: Questions, Answers and How to Prepare',
  seoTitle: 'Sales Role Play Interview Questions and Answers',
  description:
    'Sales role play interview questions and answers: eight prompts with weak and strong replies, what interviewers score, the debrief questions and a prep plan.',
  datePublished: '2026-11-20',
  faqs: [
    {
      q: 'What is a sales role play interview?',
      a: 'A mock sales conversation inside a job interview. The interviewer plays a buyer from a brief, you play the rep, and the call usually runs 10 to 20 minutes. Interviewers watch whether you ask questions before you pitch, play back what you heard, handle one objection calmly and ask for a specific next step.',
    },
    {
      q: 'What are the most common sales role play interview questions?',
      a: 'Eight prompts cover most interviews: sell me this pen (or any object), a cold call, a discovery call, “it’s too expensive”, “we already use a competitor”, “just send me an email”, an upset customer or a renewal at risk, and a request to close or book the next step.',
    },
    {
      q: 'How do you answer “sell me this pen” in an interview?',
      a: 'Do not describe the pen. Ask two short questions first, such as when the interviewer last wrote something by hand and what it was for. Play their answer back in their words, connect the pen to the one problem they named in a sentence, then ask for the sale or a next step.',
    },
    {
      q: 'How long is a sales role play interview?',
      a: 'Hiring guides for managers recommend 8 to 12 minutes for an SDR cold call and 15 to 20 minutes for an account executive discovery or pricing call, followed by 5 to 10 minutes of debrief. Many interviewers also ask you to rerun the last two minutes after giving feedback.',
    },
    {
      q: 'How do you pass a sales role play with no sales experience?',
      a: 'Lean on process instead of product knowledge. Open with a reason for the call, ask two or three open questions, repeat the buyer’s words back, answer an objection with a question, and ask for a dated next step. Then take feedback well in the debrief, because coachability is what entry-level interviewers are testing.',
    },
    {
      q: 'What do interviewers ask after a sales role play?',
      a: 'Expect “How do you think that went?”, “What would you do differently?” and “What did you learn about the buyer?”. Answer with one specific thing that worked, one specific thing you would change and why, and then ask whether you can run that moment again.',
    },
  ],
}

export const meta = {
  category: 'Interview Guide',
  date: 'November 20, 2026',
  readTime: '11 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why', label: 'Why companies use it' },
  { id: 'scoring', label: 'What gets scored' },
  { id: 'prompts', label: 'Eight prompts, with answers' },
  { id: 'hidden-brief', label: 'The interviewer’s brief' },
  { id: 'talk-time', label: 'How much to talk' },
  { id: 'debrief', label: 'Questions before and after' },
  { id: 'scorecard', label: 'Two candidates, one buyer' },
  { id: 'prepare', label: '48-hour prep plan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

// The eight prompts. `weak` and `strong` feed the rewriter figure; `tests` and
// `how` are printed on the page so the answers are readable without the figure.
export type Prompt = {
  id: string
  label: string
  prompt: string
  tests: string
  how: string
  weak: string
  strong: string
  weakMark: string
  strongMark: string
}

export const prompts: Prompt[] = [
  {
    id: 'pen',
    label: 'Sell me this pen',
    prompt: '“Sell me this pen.”',
    tests: 'Whether you find a need before you describe a product.',
    how: 'Ask two questions about when they write and what goes wrong, play the answer back, then tie the pen to that one problem and ask for the sale.',
    weak: 'This is a premium pen. Smooth ink, a comfortable grip, and it comes in three colors. It’s a great choice for anyone.',
    strong: 'Before I do: when did you last sign something by hand, and was anyone watching? … So you sign client forms in front of people, and a skipping pen looks careless. This one doesn’t skip. Want to use it on your next signature?',
    weakMark: 'Pitched first',
    strongMark: 'Asked, then sold',
  },
  {
    id: 'cold',
    label: 'Cold call',
    prompt: '“You’re calling me cold. Go.”',
    tests: 'Whether you can earn the next 30 seconds without a speech.',
    how: 'Say who you are, admit it is a cold call, give one reason you chose them and ask permission to continue. Then ask one question.',
    weak: 'Hi, how are you today? I’m calling from Northwind, a leading platform that helps companies like yours drive efficiency across the whole team.',
    strong: 'Hi Dana, it’s Sam at Northwind. You weren’t expecting me, so I’ll be brief: I called because you’re hiring six reps this quarter. Can I ask one question, and you tell me if it’s worth two more minutes?',
    weakMark: 'Generic opener',
    strongMark: 'Reason + permission',
  },
  {
    id: 'discovery',
    label: 'Discovery call',
    prompt: '“I took this meeting. What do you want to know?”',
    tests: 'The depth of your questions and whether you follow up on answers.',
    how: 'Ask why now, then follow the answer: what happens when the problem shows up, and what it costs. Summarise before you move on.',
    weak: 'Do you have a CRM? Do you use any training tools? Are you the decision maker? Do you have budget this year?',
    strong: 'What made you take this call now? … You said new reps are slow to ramp. When a rep is still ramping in month five, what does that cost the team?',
    weakMark: 'Checklist of yes/no',
    strongMark: 'Followed the answer',
  },
  {
    id: 'price',
    label: '“Too expensive”',
    prompt: '“Honestly, this is too expensive.”',
    tests: 'Composure, and whether you find out what the objection means before you answer it.',
    how: 'Acknowledge it without apologising, ask what they are comparing the price with, then answer that comparison only.',
    weak: 'I understand. I can probably get you 15 percent off if you sign this month.',
    strong: 'That’s fair to raise. Expensive compared with what you pay today, or with the budget you had in mind?',
    weakMark: 'Dropped the price',
    strongMark: 'Asked what it means',
  },
  {
    id: 'competitor',
    label: '“We use a competitor”',
    prompt: '“We already use someone for this.”',
    tests: 'Whether you stay curious instead of attacking the other vendor.',
    how: 'Agree that most teams have something, ask what made them choose it, then ask what they would change about it.',
    weak: 'We’re a lot better than them. Our reporting is stronger and our support is faster.',
    strong: 'Makes sense, most teams I speak to have something in place. What made you pick them, and if you could change one thing about it, what would it be?',
    weakMark: 'Attacked the rival',
    strongMark: 'Stayed curious',
  },
  {
    id: 'email',
    label: '“Send me an email”',
    prompt: '“Just send me an email.”',
    tests: 'Whether you can keep a polite brush-off going with one useful question.',
    how: 'Agree, then ask what the email would need to answer for them to read it. Their reply is your discovery.',
    weak: 'Sure, no problem. What’s the best address to send it to?',
    strong: 'Happy to. So it isn’t a generic one, what’s the one thing it would have to answer for you to actually read it?',
    weakMark: 'Took the exit',
    strongMark: 'One more question',
  },
  {
    id: 'upset',
    label: 'Upset customer',
    prompt: '“Your export failed and my board meets tomorrow.”',
    tests: 'Whether you listen, own a next action and stay calm under pressure.',
    how: 'Let them finish, repeat the problem back in their words, give a specific next action with a time, and offer a workaround if one exists.',
    weak: 'I’m sorry about that. It’s actually a known issue on the integration side, so it isn’t really on our end.',
    strong: 'Let me check I have this right: the export failed, and you need those numbers for tomorrow’s board meeting. I’ll pull the data manually and send it to you by 4 pm today, then find out why it failed.',
    weakMark: 'Defended the product',
    strongMark: 'Owned a next step',
  },
  {
    id: 'close',
    label: '“Close me”',
    prompt: '“Okay, wrap it up. What happens next?”',
    tests: 'Whether you ask for something specific with a date and a purpose.',
    how: 'Summarise the problem in their words and propose one next step with a day, the people who should attend and what you will bring.',
    weak: 'So, what do you think? I can send some information over and we can stay in touch.',
    strong: 'You need new reps productive by month three. Can we book 30 minutes on Thursday with your ops lead, and I’ll bring a plan built on the two numbers you gave me?',
    weakMark: 'Vague ending',
    strongMark: 'Dated next step',
  },
]

// What interviewers score: compiled from two interviewer and two candidate guides.
export const scoringRows: string[][] = [
  ['Opening', 'A reason for the call and permission to ask questions, in under 30 seconds', 'Small talk, then a company overview'],
  ['Discovery', 'Open questions that follow the buyer’s last answer, including what the problem costs', 'A checklist of yes/no questions'],
  ['Listening', 'Repeating the buyer’s words back before responding', 'Talking over the buyer, or waiting to pitch'],
  ['Objection handling', 'Acknowledging, asking what is behind it, then answering that', 'Arguing, folding on price, or pitching louder'],
  ['Value', 'One capability tied to the problem the buyer named', 'A list of features with no link to the buyer'],
  ['Next step', 'A specific meeting with a day, people and purpose', '“I’ll send some info over”'],
  ['Composure', 'Calm pace, comfortable with a pause', 'Rushing and filling every silence'],
]

// Questions before and after the role play.
export const debriefRows: string[][] = [
  ['“Do you have any questions before we start?”', 'Before', 'Confirms the buyer’s role, the goal of the call and whether you can ask questions. Never “No, I’m ready.”'],
  ['“How would you prepare for a first call with this buyer?”', 'Before', 'Names two sources (their site, customer stories or reviews) and the one problem you would expect them to have.'],
  ['“Tell me about a deal you lost.”', 'Before', 'Gives one real deal, the moment it turned, and what you now do differently.'],
  ['“How do you think that went?”', 'After', 'One specific thing that worked and one you would change, with the moment it happened.'],
  ['“What would you do differently?”', 'After', 'A concrete change, such as asking about outcomes before showing anything, not “be more confident.”'],
  ['“What did you learn about the buyer?”', 'After', 'The buyer’s problem and its cost in their words. This shows you were listening, not waiting.'],
  ['“Want to try the last two minutes again?”', 'After', 'Yes, and use the feedback you were just given. This is the coachability test.'],
]
