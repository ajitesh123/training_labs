'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { wrap } from '@/components/section-head'
import { blogPosts } from '@/lib/blog-posts'
import { appUrl } from '@/lib/site'

const NAV = [
  { href: '#features', label: 'Features' },
  { href: '#courses', label: 'Courses' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '#about', label: 'About' },
]

// "Title? Subtitle" and "Title: subtitle" read better cut at the break.
function shortTitle(title: string): string {
  const q = title.indexOf('?')
  if (q > 0) return title.slice(0, q + 1)
  const c = title.indexOf(':')
  return c > 0 ? title.slice(0, c) : title
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const latest = blogPosts[0]

  return (
    <>
      {latest && (
        <Link
          href={`/blog/${latest.slug}`}
          className="tl-mono block border-b-2 border-ink bg-butter px-4 py-2 text-center text-[11px] font-medium text-ink sm:text-[12.5px]"
        >
          New guide: {shortTitle(latest.title)}
          <span className="ml-2.5 underline underline-offset-4">Read it →</span>
        </Link>
      )}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
        <div className={`${wrap} flex h-[62px] items-center gap-9 sm:h-[72px]`}>
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-ink">
            <span className="grid h-[34px] w-[34px] place-items-center border-2 border-ink bg-butter font-mono text-[15px] font-bold shadow-[3px_3px_0_var(--color-ink)]">
              T
            </span>
            Training Labs
          </Link>
          <nav className="tl-mono mr-auto hidden items-center gap-7 text-[13px] text-ink md:flex">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href} className="hover:underline hover:underline-offset-4">
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={appUrl} className="tl-mono hidden text-[13px] text-ink hover:underline md:inline">
            Sign in
          </a>
          <a href={appUrl} className="tl-btn hidden bg-sky md:inline-flex">
            Get started
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto grid h-9 w-10 place-items-center border-2 border-ink bg-sheet text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {isOpen && (
          <nav className="tl-mono border-t-2 border-ink bg-paper px-5 py-4 text-sm text-ink md:hidden">
            <div className="grid gap-3">
              {NAV.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={appUrl} className="tl-btn">Sign in</a>
              <a href={appUrl} className="tl-btn bg-sky">Get started</a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
