import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-primary px-4 py-2 rounded-full">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Introducing Advanced AI Training</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
              Master AI & Machine Learning
            </h1>

            <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-md">
              Learn from industry experts with hands-on projects, real-world applications, and a comprehensive curriculum designed for professionals and beginners alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Start Learning Today
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline">
                Explore Courses
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading organizations</p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50k+</div>
                  <div className="text-xs text-muted-foreground">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground">Expert Instructors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9/5</div>
                  <div className="text-xs text-muted-foreground">Avg. Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-2xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300 rounded-2xl opacity-20 absolute"></div>
              <div className="relative z-10 text-center">
                <div className="inline-block bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
