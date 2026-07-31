import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Ready to Raise Your Team&apos;s Win Rate?
          </h2>

          <p className="text-lg text-blue-50 max-w-2xl mx-auto text-balance">
            Join thousands of sales professionals building sharper discovery,
            demos, and coaching habits. Start with a free trial of any course.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 gap-2"
            >
              Get Started Free
              <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Talk to Enablement
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-blue-50">
              ✓ No credit card required • ✓ Lifetime access • ✓ 30-day
              money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
