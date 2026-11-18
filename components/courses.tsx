import { SectionHead, SectionLede, wrap } from '@/components/section-head'
import { bookingUrl } from '@/lib/site'

type Level = 'Beginner' | 'Intermediate' | 'Advanced'

const courses: {
  title: string
  description: string
  level: Level
  duration: string
  students: string
  rating: string
  price: string
}[] = [
  {
    title: 'Discovery Call Mastery',
    description:
      'Run sharper discovery conversations: pain, impact, stakeholders, and next steps that advance deals.',
    level: 'Beginner',
    duration: '8 weeks',
    students: '12,500+',
    rating: '4.9',
    price: '$299',
  },
  {
    title: 'Objection Handling Intensive',
    description:
      'Practice pricing, timing, competitor, and status-quo objections until responses feel natural under pressure.',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '8,300+',
    rating: '4.8',
    price: '$349',
  },
  {
    title: 'Product Demo Excellence',
    description:
      'Structure demos that tell a story, map to buyer pain, and leave prospects clear on value and next steps.',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '6,200+',
    rating: '4.9',
    price: '$349',
  },
  {
    title: 'Enterprise Negotiation & Closing',
    description:
      'Navigate multi-threaded deals, procurement, and late-stage negotiation without discounting away the win.',
    level: 'Advanced',
    duration: '12 weeks',
    students: '4,800+',
    rating: '4.7',
    price: '$399',
  },
  {
    title: 'Sales Coaching for Managers',
    description:
      'Build a coaching cadence: call reviews, pipeline inspection, and skill drills that raise team performance.',
    level: 'Beginner',
    duration: '6 weeks',
    students: '9,100+',
    rating: '4.8',
    price: '$199',
  },
  {
    title: 'Outbound Prospecting Systems',
    description:
      'Craft cold call frameworks, email sequences, and multi-channel cadences that book qualified meetings.',
    level: 'Advanced',
    duration: '14 weeks',
    students: '2,900+',
    rating: '4.9',
    price: '$449',
  },
]

const LEVEL_FILL: Record<Level, string> = {
  Beginner: 'bg-mint',
  Intermediate: 'bg-sky',
  Advanced: 'bg-peach',
}

export default function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 border-b-2 border-ink py-14 sm:py-24">
      <div className={wrap}>
        <SectionHead
          kicker="Courses"
          title="Featured Courses"
          aside={
            <SectionLede>
              Sales training and coaching courses for individual contributors, managers, and
              enablement teams, at every stage of the funnel.
            </SectionLede>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col border-2 border-ink bg-sheet transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ink)] motion-reduce:transition-none"
            >
              <div className={`tl-mono flex items-center justify-between border-b-2 border-ink px-4 py-2.5 text-xs font-semibold ${LEVEL_FILL[course.level]}`}>
                <span>{course.level}</span>
                <span>★ {course.rating}</span>
              </div>
              <div className="flex flex-1 flex-col px-4 py-5">
                <h3 className="mb-2 text-xl font-semibold leading-tight tracking-tight text-ink">{course.title}</h3>
                <p className="mb-4 flex-1 text-[15px] text-ink-2">{course.description}</p>
                <div className="tl-mono flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span className="border-[1.5px] border-ink px-1.5 py-0.5">{course.duration}</span>
                  <span className="border-[1.5px] border-ink px-1.5 py-0.5">{course.students} students</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t-2 border-ink px-4 py-3">
                <span className="font-mono text-[26px] font-semibold leading-none tracking-tight text-ink">{course.price}</span>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="tl-btn tl-btn-sm">
                  Enroll now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
