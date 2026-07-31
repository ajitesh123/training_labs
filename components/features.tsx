import { Brain, BookOpen, Users, Zap, Award, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Expert Curriculum',
    description: 'Comprehensive courses covering machine learning, deep learning, NLP, and computer vision from industry leaders.'
  },
  {
    icon: BookOpen,
    title: 'Interactive Learning',
    description: 'Hands-on projects and real-world applications that reinforce concepts and build practical skills.'
  },
  {
    icon: Users,
    title: 'Live Mentoring',
    description: 'Direct access to experienced instructors and a vibrant community of learners for support and collaboration.'
  },
  {
    icon: Zap,
    title: 'Career Growth',
    description: 'Job placement assistance, portfolio building, and networking opportunities with top tech companies.'
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Earn recognized credentials that validate your expertise and stand out to employers.'
  },
  {
    icon: Globe,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with lifetime access to course materials and regular updates.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Training Labs AI?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing the best AI education with world-class instructors and cutting-edge curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group bg-white rounded-lg border border-border p-8 hover:border-primary hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                  <Icon size={24} className="text-primary group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
