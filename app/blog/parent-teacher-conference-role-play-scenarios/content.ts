import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'parent-teacher-conference-role-play-scenarios',
  title: 'Parent-Teacher Conference Role Play Scenarios, With Scripts and a Scoring Rubric',
  seoTitle: 'Parent-Teacher Conference Role Play Scenarios + Scripts',
  description:
    'Ten parent-teacher conference role play scenarios, easiest to hardest, with parent briefs, opening lines, sample scripts, a 20-minute format and a rubric.',
  datePublished: '2026-11-19',
  faqs: [
    {
      q: 'What is a parent-teacher conference role play?',
      a: 'A rehearsal in which one person plays the teacher and another plays a parent from a short brief: who they are, what they want, and one concern they have not said out loud. The teacher practices opening, raising a concern, listening and agreeing a next step, then gets feedback and runs the hardest moment again.',
    },
    {
      q: 'What are good parent-teacher conference role play scenarios for new teachers?',
      a: 'Start with low-heat conferences: good news for a worried parent, a drop in grades, missing homework. Then add pushback: a parent who says the child is bored, a grading dispute, a conference through an interpreter. Save accommodation disputes, bullying reports and separated parents who disagree for later rounds.',
    },
    {
      q: 'How do you handle a difficult parent-teacher conference?',
      a: 'Open with a specific strength, describe the concern with evidence instead of labels, ask what the parent sees at home before you advise, stay calm when challenged, and end with one next step, an owner and a date. If the parent raises a policy matter such as bullying or accommodations, record the details and name who acts next instead of improvising.',
    },
    {
      q: 'How long should a parent-teacher conference role play take?',
      a: 'About 20 minutes: 3 minutes to read the brief, 8 minutes of role play, 5 minutes of feedback against a rubric, and 4 minutes to rerun the hardest moment. Short reruns teach more than one long attempt.',
    },
    {
      q: 'Can teachers practice parent conferences with AI?',
      a: 'Yes. An AI parent can play a brief the same way every time, can be made more or less defensive, and lets a teacher rerun one moment without booking a colleague. Bibb County schools in Georgia piloted AI parent simulations with new teachers in the 2025-26 school year, with mentor debriefs after each session. Use AI for repetitions and keep a mentor for the debrief.',
    },
    {
      q: 'How many parents attend parent-teacher conferences?',
      a: 'In the 2022-23 school year, 72 percent of US parents and guardians reported attending a regularly scheduled parent-teacher conference, down from 75 percent in 2018-19, according to the National Center for Education Statistics.',
    },
  ],
}

export const meta = {
  category: 'Scenario Guide',
  date: 'November 19, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-rehearse', label: 'Why rehearse conferences' },
  { id: 'format', label: 'A 20-minute format' },
  { id: 'scenarios', label: 'Ten scenarios' },
  { id: 'scripts', label: 'Scripts for hard moments' },
  { id: 'structure', label: 'A structure that holds' },
  { id: 'rubric', label: 'Scoring rubric' },
  { id: 'ai-practice', label: 'Practicing with AI' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export type Scenario = {
  n: number
  title: string
  // 1 to 5: how upset the parent arrives, and how many people or rules are involved.
  heat: number
  complexity: number
  brief: string
  opening: string
  hidden: string
  pass: string
}

export const scenarios: Scenario[] = [
  {
    n: 1, title: 'Good news, worried parent', heat: 1, complexity: 1,
    brief: 'Maya is doing well, but her father asked for the meeting. He is polite and a little anxious.',
    opening: '“Her grades look fine. I just want to know if she is okay in class.”',
    hidden: 'Maya has told him she eats lunch alone, and he does not want to say it first.',
    pass: 'Opens with a specific strength, asks an open question about home, and agrees one way to check on friendships, with a date.',
  },
  {
    n: 2, title: 'Grades fell from Bs to Ds', heat: 2, complexity: 1,
    brief: 'A mother saw the progress report last night. She is more surprised than angry.',
    opening: '“How did this happen without anyone telling me?”',
    hidden: 'She stopped checking the parent portal after a password reset failed.',
    pass: 'Shows dates and missing work without blame, owns any gap in communication, and sets a two-week check-in.',
  },
  {
    n: 3, title: 'Missing homework, parent works evenings', heat: 2, complexity: 2,
    brief: 'A father works night shifts. His son has turned in 5 of the last 14 assignments.',
    opening: '“He tells me he finishes it at school.”',
    hidden: 'Nobody is home between 4 and 10 p.m. to see homework happen.',
    pass: 'Asks about the evening routine before suggesting anything, and offers an in-school option that does not depend on a parent at home.',
  },
  {
    n: 4, title: '“He is bored, not misbehaving”', heat: 3, complexity: 2,
    brief: 'Her son has been sent out of class twice this month. She believes he is under-challenged.',
    opening: '“He is smart. He only acts out because he is bored.”',
    hidden: 'She is afraid he is being labeled a troublemaker.',
    pass: 'Agrees with the strength she sees, separates the behavior from the child, and agrees one change in class and one at home.',
  },
  {
    n: 5, title: '“Your grading is unfair”', heat: 4, complexity: 2,
    brief: 'A parent disputes a C on a project and arrives with the rubric printed and annotated.',
    opening: '“I went through your rubric line by line. This is at least a B.”',
    hidden: 'The grade feeds an application for a selective program next month.',
    pass: 'Walks the rubric calmly, does not change the grade on the spot, explains the review process, and asks what is at stake.',
  },
  {
    n: 6, title: '“Move her away from that boy”', heat: 3, complexity: 3,
    brief: 'A parent wants a seat change or class change because of another student.',
    opening: '“I want her moved away from him, starting Monday.”',
    hidden: 'Something happened on the bus that the teacher has not heard about.',
    pass: 'Asks what happened, never discusses the other child, explains what a teacher can and cannot decide, and names who decides class moves.',
  },
  {
    n: 7, title: 'A conference through an interpreter', heat: 2, complexity: 4,
    brief: 'The family speaks Spanish at home; a school interpreter joins the meeting.',
    opening: '“Is she in trouble? Nobody called us before.”',
    hidden: 'The parents assume a meeting means bad news, because the school only calls with problems.',
    pass: 'Speaks to the parents, not the interpreter, in short sentences without acronyms, and checks understanding by asking them to say the plan back.',
  },
  {
    n: 8, title: 'Accommodations not followed', heat: 4, complexity: 4,
    brief: 'A student’s 504 plan gives extra test time. His mother says he did not get it on the last test.',
    opening: '“The plan says extra time. He did not get it. Again.”',
    hidden: 'She has a folder of dates and is weighing a formal complaint.',
    pass: 'Does not argue the record, acknowledges the obligation, writes down the dates, and names the case manager and a follow-up date.',
  },
  {
    n: 9, title: '“My child is being bullied”', heat: 5, complexity: 4,
    brief: 'A parent reports months of name-calling and a hallway shove. Their son now avoids one wing of the school.',
    opening: '“What is the school going to do, and why did nobody notice?”',
    hidden: 'They need to know their son will not be blamed or embarrassed.',
    pass: 'Records who, where and how often, does not minimize, explains the reporting policy and who acts next, and sets a date to report back.',
  },
  {
    n: 10, title: 'Two parents who disagree', heat: 4, complexity: 5,
    brief: 'Separated parents attend together. One wants a tutor and stricter rules; the other thinks the child is stressed.',
    opening: '“I have told him for months he needs to focus.” “And I have told you he is anxious.”',
    hidden: 'The child moves between homes midweek, and homework is lost in the handover.',
    pass: 'Stays neutral, keeps the talk on the student, finds one shared goal, and agrees a plan both households can follow.',
  },
]
