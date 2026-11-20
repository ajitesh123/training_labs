import type { PostSeo } from '@/lib/blog-seo'

export const post: PostSeo = {
  slug: 'classroom-management-role-play-scenarios',
  title: 'Classroom Management Role Play Scenarios for Teacher Training, With Scripts',
  seoTitle: 'Classroom Management Role Play Scenarios + Scripts',
  description:
    'Ten classroom management role play scenarios for teacher training, from calling out to a refusal, each with a student brief, first move, script and rubric.',
  datePublished: '2026-11-20',
  faqs: [
    {
      q: 'What are classroom management role play scenarios?',
      a: 'Short rehearsals in which one teacher responds to a classroom situation while a colleague plays the student from a brief. A good brief says what the student does, how they react to different responses, and one reason for the behavior they will not say out loud, such as not understanding the task or waiting for news from home.',
    },
    {
      q: 'How do you run a classroom management role play in teacher training?',
      a: 'Work in threes: a teacher, a student and an observer. Read the brief for two minutes, run the scene for four, give feedback against a short rubric for four, then rerun the hardest moment for two. Rotate roles so each teacher gets a turn, and rehearse in a classroom, standing, at the volume you would use with students.',
    },
    {
      q: 'What is the least intrusive response to student misbehavior?',
      a: 'A look, a pause or a non-verbal signal, then proximity, which means teaching from beside the student’s desk. If the behavior continues, use the student’s name with a question about the lesson, then a quiet reminder of the expected behavior, then a choice with a consequence. Save the school’s formal process for behavior that is serious or unsafe.',
    },
    {
      q: 'What should a teacher do when a student refuses to work?',
      a: 'Remove the audience first. Move closer, lower your voice and offer a real choice, such as starting with an easier question or working through the first one together, then step away and come back when you said you would. Arguing in front of the class turns a refusal into a contest the student cannot afford to lose.',
    },
    {
      q: 'Does role play improve classroom management skills?',
      a: 'The evidence is encouraging. In a 2024 study of 145 trainee primary teachers, confidence in handling low-level disruption rose after each role play session, and trainees who took part ended training more confident than a comparison group of 52 who did not. A 2024 study of 57 pre-service teachers in China found simulated practice and video learning helped equally at first, but the simulation group retained more on a delayed test.',
    },
    {
      q: 'Can teachers practice classroom management with AI?',
      a: 'Yes, for the spoken parts: the quiet redirect, the private conversation after class, the de-escalation with a student who is upset. An AI student can play a brief the same way every time and become more defiant on request. It cannot reproduce a full room of thirty students, so keep colleague role plays and mentor observation for that.',
    },
  ],
}

export const meta = {
  category: 'Scenario Guide',
  date: 'November 20, 2026',
  readTime: '12 min read',
}

export const toc = [
  { id: 'quick-answer', label: 'Quick answer' },
  { id: 'why-rehearse', label: 'Why rehearse it' },
  { id: 'evidence', label: 'Does role play work?' },
  { id: 'ladder', label: 'Least intrusive first' },
  { id: 'scenarios', label: 'Ten scenarios' },
  { id: 'audience', label: 'Removing the audience' },
  { id: 'format', label: 'Running it in PD' },
  { id: 'rubric', label: 'Scoring each run' },
  { id: 'ai-practice', label: 'Practice between sessions' },
  { id: 'faq', label: 'FAQ' },
  { id: 'conclusion', label: 'Conclusion' },
]

export type Scenario = {
  n: number
  title: string
  band: 'Elementary' | 'Middle' | 'High' | 'Any grade'
  level: 1 | 2 | 3 | 4
  brief: string
  hidden: string
  first: string
  script: string
  pass: string
}

export const levels: Record<Scenario['level'], string> = {
  1: 'Low-level',
  2: 'Persistent',
  3: 'Escalating',
  4: 'Serious',
}

export const scenarios: Scenario[] = [
  {
    n: 1,
    title: 'Calling out answers',
    band: 'Elementary',
    level: 1,
    brief: 'Shout out the answer every time the teacher asks a question. Stop if the teacher signals and calls on someone else without making a fuss about you.',
    hidden: 'You want the teacher to see you are smart. Last year a teacher called you slow.',
    first: 'A non-verbal signal (hand raised), then call on a student whose hand is up.',
    script: '(Hand raised, eyes on the student.) “Hands up, thank you. Leah, go ahead.” Later: “Ari, great thinking on fractions. Hand up next time and I’ll come to you.”',
    pass: 'Corrects without stopping the lesson, and acknowledges the student once they raise a hand.',
  },
  {
    n: 2,
    title: 'Two students chatting during instruction',
    band: 'Any grade',
    level: 1,
    brief: 'Talk quietly with your neighbor while the teacher explains. Stop if the teacher walks over or pauses, then start again once if nothing else happens.',
    hidden: 'Your neighbor is lost and you are explaining the instructions.',
    first: 'Proximity and a pause: keep teaching while standing beside the pair.',
    script: '(Stands by the desks, keeps teaching.) If it starts again: “Voices off while I’m explaining, thanks.” After: “Were you helping Sam? Next time, hand up and I’ll come over.”',
    pass: 'Uses proximity before words, and asks about it privately instead of assuming.',
  },
  {
    n: 3,
    title: 'A phone under the desk',
    band: 'Middle',
    level: 1,
    brief: 'Check your phone under the desk during independent work. Put it away if asked quietly. If the teacher announces it to the class, get defensive.',
    hidden: 'You are waiting for a message about your grandmother, who is in hospital.',
    first: 'A quiet, private prompt with a choice, inside the school’s phone rule.',
    script: '(Crouches by the desk, low voice.) “Phone in your bag or on my desk, your choice. Thanks.” If they explain: “Thanks for telling me. Let’s ask the office to call you if there’s news.”',
    pass: 'Private, not public; offers a choice; keeps the school rule while responding to the reason.',
  },
  {
    n: 4,
    title: 'Head down, not starting work',
    band: 'Any grade',
    level: 2,
    brief: 'Sit with your head down and do not start the task. Say “I don’t get it” only if the teacher asks what your first step is.',
    hidden: 'You did not understand the instructions and do not want classmates to know.',
    first: 'A quiet check-in that asks for the first step, not a reprimand.',
    script: '“What’s your first step?” … “Okay, let’s do the first two together now, and I’ll be back in three minutes to check.”',
    pass: 'Diagnoses before correcting, gives a small first task and a time to return, and returns.',
  },
  {
    n: 5,
    title: 'Silly answers for laughs',
    band: 'Middle',
    level: 2,
    brief: 'Raise your hand and give silly wrong answers to make the class laugh. Escalate if the teacher laughs along or argues with you.',
    hidden: 'You did not do the reading and would rather look funny than unprepared.',
    first: 'Give the joke no audience: a neutral reply and a real question to the class.',
    script: '“Not quite. Who can tell me what the author meant in paragraph two?” After class: “You got a laugh today. I want your real answer tomorrow. What would help you get there?”',
    pass: 'Does not reward the joke with attention or anger, and follows up privately.',
  },
  {
    n: 6,
    title: 'Tapping the desk, then denying it',
    band: 'Any grade',
    level: 2,
    brief: 'Tap under your desk while the teacher talks. When asked, say “I’m not doing anything.” Start again once.',
    hidden: 'You are testing whether this teacher follows through.',
    first: 'No debate: state the behavior you want, then follow through quietly.',
    script: '“I’m not going to argue about it. Hands still, thank you.” If it continues: “Let’s talk at the end of class.” Then hold that conversation.',
    pass: 'Skips the argument, names the expected behavior and keeps the promised follow-up.',
  },
  {
    n: 7,
    title: 'An early finisher distracting others',
    band: 'Elementary',
    level: 2,
    brief: 'Finish the work fast, then whisper to the students around you and walk to the pencil sharpener twice.',
    hidden: 'The work is too easy and you are bored.',
    first: 'Redirect to a ready extension task, as a routine rather than a punishment.',
    script: '“Done already? Great. Check two answers against the key, then try the challenge card.”',
    pass: 'Has an extension ready, gives it calmly, and plans harder work for next time.',
  },
  {
    n: 8,
    title: 'Put-downs that escalate',
    band: 'Middle',
    level: 3,
    brief: 'With a partner, trade small insults that get sharper each time. Stop if the teacher names it and moves one of you; keep going if the teacher only says “come on, guys.”',
    hidden: 'An argument started in a group chat over the weekend.',
    first: 'Stop it at the first put-down: name it, state the rule, move one student, follow up later.',
    script: '“That’s a put-down. We don’t do those here. Jordan, front table please. Thank you.” After class, with both: “What happened before today?”',
    pass: 'Acts at the first put-down, separates calmly, and finds the cause later.',
  },
  {
    n: 9,
    title: 'A refusal in front of the class',
    band: 'High',
    level: 3,
    brief: 'Say loudly, “I’m not doing this, it’s pointless.” Escalate if the teacher argues in front of the class. Calm down if you get a choice and some space.',
    hidden: 'The text is hard for you to read, and you do not want classmates to find out.',
    first: 'Remove the audience: lower your voice, offer a real choice, give time.',
    script: '(Moves closer, low voice.) “You can start with question 3, or we do question 1 together. I’ll check back in two minutes.”',
    pass: 'Avoids a public power struggle, offers a real choice, and comes back when promised.',
  },
  {
    n: 10,
    title: 'A student swears at the teacher',
    band: 'High',
    level: 4,
    brief: 'After being redirected, swear at the teacher. If the teacher shouts, swear again. If the teacher stays calm and firm, go quiet.',
    hidden: 'Someone humiliated you in the hallway just before class.',
    first: 'A calm, assertive voice; name the behavior; follow the school’s process; repair privately later.',
    script: '“That language isn’t okay here. We’ll talk at the end of class.” Then follow the school’s referral process, and later: “What happened before you came in?”',
    pass: 'Stays calm and firm, does not match the tone, follows school policy, and repairs privately.',
  },
]

// Level guide table: what each level looks like and where to start.
export const levelRows: string[][] = [
  ['Low-level', 'Calling out, chatting, a phone, fidgeting', 'A look, a signal or proximity, with the lesson still moving', '1, 2, 3'],
  ['Persistent', 'The same small behavior after a first correction, or work avoidance', 'A quiet, private reminder or check-in, then follow through', '4, 5, 6, 7'],
  ['Escalating', 'Put-downs that grow, refusal, arguing in front of peers', 'Act early, lower the audience, offer a choice', '8, 9'],
  ['Serious', 'Abuse, threats, anything unsafe', 'Calm, firm words and the school’s formal process', '10'],
]
