import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Training Labs reshaped how we ramp AEs. Discovery and objection courses cut time-to-first-deal, and managers finally have a shared coaching language.',
    author: 'Sarah Chen',
    role: 'VP Sales Enablement, Northwind',
    avatar: 'SC',
  },
  {
    quote:
      'The demo excellence track is the most practical training our SEs have taken. Clear frameworks, tough practice scenarios, and feedback that stuck.',
    author: 'James Rodriguez',
    role: 'Director of Sales Engineering, Cascade',
    avatar: 'JR',
  },
  {
    quote:
      'As a new manager, the coaching course gave me a cadence I could run the next week — call reviews, pipeline inspection, and skill drills without fluff.',
    author: 'Maria Patel',
    role: 'Sales Manager, Brightline',
    avatar: 'MP',
  },
  {
    quote:
      'Outbound Prospecting Systems cleaned up our cadences. SDRs book more meetings with less spray-and-pray — and leadership can see the skill lift.',
    author: 'David Kim',
    role: 'Head of Growth, Meridian',
    avatar: 'DK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Teams That Train With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from sales leaders and coaches who raised win rates, shortened
            ramp, and made coaching a weekly habit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-muted/50 rounded-lg p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
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
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
