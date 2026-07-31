'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Training Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground transition">
              Courses
            </Link>
            <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">
              Blog
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3 pb-4">
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#courses" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Courses
            </Link>
            <Link href="#testimonials" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Testimonials
            </Link>
            <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Blog
            </Link>
            <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1">Sign In</Button>
              <Button className="flex-1">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
