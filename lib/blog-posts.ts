export type BlogPostMeta = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  featured: boolean
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'sales-coaching-framework',
    title: 'A Sales Coaching Framework Managers Will Actually Use Every Week',
    excerpt:
      'A 30-minute weekly loop per rep: watch one call moment, name one behavior with a pass line, rehearse it, check it on a live call. Time budget, models and a tracker.',
    category: 'Coaching Guide',
    readTime: '11 min read',
    date: 'November 21, 2026',
    featured: false,
  },
  {
    slug: 'patient-communication-training',
    title: 'Patient Communication Training: Programs, Costs and Five Skills to Practice',
    excerpt:
      'Seven programs from a $50 Mayo Clinic module to a six-month CMPA course, what a 55-study review says works, five skills with scripts and drills, and a rubric to measure change.',
    category: 'Training Guide',
    readTime: '12 min read',
    date: 'November 21, 2026',
    featured: false,
  },
  {
    slug: 'sales-role-play-interview',
    title: 'Sales Role Play Interview: Questions, Answers and How to Prepare',
    excerpt:
      'Eight role play prompts with a weak and a strong reply, what interviewers score and hide, the questions asked before and after, and a 48-hour plan to rehearse out loud.',
    category: 'Interview Guide',
    readTime: '11 min read',
    date: 'November 20, 2026',
    featured: false,
  },
  {
    slug: 'classroom-management-role-play-scenarios',
    title: 'Classroom Management Role Play Scenarios for Teacher Training, With Scripts',
    excerpt:
      'Ten scenarios from calling out to a student who swears, each with a student brief and a hidden reason, a least-intrusive first move, a script, a 12-minute format and a rubric.',
    category: 'Scenario Guide',
    readTime: '12 min read',
    date: 'November 20, 2026',
    featured: false,
  },
  {
    slug: 'objection-handling-techniques',
    title: 'Objection Handling Techniques You Can Actually Practice, With Drills for Each One',
    excerpt:
      'Seven techniques with a weak reply, a strong reply and a drill for each, Gong data on the objections reps hear most, an objection matrix and a four-week practice plan.',
    category: 'Skills Guide',
    readTime: '11 min read',
    date: 'November 19, 2026',
    featured: false,
  },
  {
    slug: 'healthcare-sales-training',
    title: 'Healthcare Sales Training in 2026: Programs, Costs and the Skills That Close Deals',
    excerpt:
      'Published prices for medical sales programs from $499 to $19,495, what team programs cover, the PhRMA and AdvaMed codes, hospital value analysis, and six scenarios to practice.',
    category: 'Industry Guide',
    readTime: '12 min read',
    date: 'November 19, 2026',
    featured: false,
  },
  {
    slug: 'ai-roleplay-pricing',
    title: 'AI Roleplay Pricing in 2026: Per Seat vs Per Minute, and Which One Costs Less',
    excerpt:
      'Seats, seats with a minute pool, minute blocks and sessions: what nine AI roleplay tools publish, the break-even between seats and minutes, and eight questions for any quote.',
    category: 'Pricing Guide',
    readTime: '11 min read',
    date: 'November 19, 2026',
    featured: false,
  },
  {
    slug: 'parent-teacher-conference-role-play-scenarios',
    title: 'Parent-Teacher Conference Role Play Scenarios, With Scripts and a Scoring Rubric',
    excerpt:
      'Ten conference scenarios from good news to separated parents who disagree, each with a parent brief and a hidden concern, plus scripts, a 20-minute format and a rubric.',
    category: 'Scenario Guide',
    readTime: '12 min read',
    date: 'November 19, 2026',
    featured: false,
  },
  {
    slug: 'how-much-does-sales-training-cost',
    title: 'How Much Does Sales Training Cost in 2026? Real Prices and the Costs Nobody Quotes',
    excerpt:
      'Published prices from MEDDIC Academy to Dale Carnegie, the seven vendors that only quote, what rep time adds, and a calculator for your year-one budget.',
    category: 'Pricing Guide',
    readTime: '12 min read',
    date: 'November 18, 2026',
    featured: true,
  },
  {
    slug: 'best-ai-sales-training-tools-2026',
    title: 'Best AI Sales Training Tools in 2026: A Buyer’s Guide for GTM Teams',
    excerpt:
      'Compare Tough Tongue AI, Hyperbound, Second Nature, PitchMonster, and Yoodli on builder workflows, MCP, multimodal practice, and enablement fit, with an honest pick for GTM engineers.',
    category: "Buyer's Guide",
    readTime: '14 min read',
    date: 'July 31, 2026',
    featured: false,
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
