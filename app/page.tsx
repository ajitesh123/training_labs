import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Courses from '@/components/courses'
import Stats from '@/components/stats'
import LatestGuides from '@/components/latest-guides'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <LatestGuides />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
