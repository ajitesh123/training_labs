import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Training Labs AI completely transformed my career. The hands-on projects and expert mentorship helped me land a machine learning role at a top tech company.',
    author: 'Sarah Chen',
    role: 'ML Engineer at Google',
    avatar: 'SC'
  },
  {
    quote: 'The curriculum is incredibly thorough and practical. I appreciated how each course built on previous knowledge and included real-world applications.',
    author: 'James Rodriguez',
    role: 'Data Scientist at Microsoft',
    avatar: 'JR'
  },
  {
    quote: 'As a career changer, I was nervous about jumping into AI. The supportive community and clear instruction made the learning journey smooth and enjoyable.',
    author: 'Maria Patel',
    role: 'AI Product Manager at Stripe',
    avatar: 'MP'
  },
  {
    quote: 'The advanced reinforcement learning course opened my eyes to new possibilities. Highly recommend for anyone serious about mastering AI.',
    author: 'David Kim',
    role: 'Research Scientist at DeepMind',
    avatar: 'DK'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who have advanced their careers and achieved their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
