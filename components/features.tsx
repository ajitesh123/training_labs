import {
  BookOpen,
  Users,
  Zap,
  Award,
  MessageSquare,
  LineChart,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Live Roleplay Practice',
    description:
      'Rehearse discovery calls, demos, and negotiations with structured scenarios that mirror real buyer conversations.',
  },
  {
    icon: BookOpen,
    title: 'Playbook-Ready Curriculum',
    description:
      'Courses built around modern GTM motions — outbound, inbound, expansion, and enterprise selling.',
  },
  {
    icon: Users,
    title: 'Manager Coaching Tracks',
    description:
      'Train frontline managers to run 1:1s, deal reviews, and call coaching that actually stick.',
  },
  {
    icon: LineChart,
    title: 'Skills That Move Pipeline',
    description:
      'Focus on behaviors that show up in win rates: qualification, storytelling, objection handling, and closing.',
  },
  {
    icon: Award,
    title: 'Certifications',
    description:
      'Earn credentials for ramp completion and methodology mastery your enablement team can standardize on.',
  },
  {
    icon: Zap,
    title: 'Flexible Learning',
    description:
      'Self-paced modules with lifetime access — so new hires and veterans can train around live selling.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Training Labs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sales training and coaching programs designed for revenue teams —
            practical, methodology-aligned, and built for real selling situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-lg border border-border p-8 hover:border-primary hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                  <Icon
                    size={24}
                    className="text-primary group-hover:text-white transition"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
