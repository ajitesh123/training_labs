'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BlogFooter } from '@/components/blog/blog-footer'
import { BlogHeader } from '@/components/blog/blog-header'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogIndexPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((post) => post.slug !== featured?.slug)

  return (
    <div className="min-h-screen bg-white relative overflow-x-clip light">
      <div className="spotlight" />
      <div className="grid-pattern fixed inset-0 pointer-events-none" />

      <BlogHeader />

      <main className="pt-24 pb-16">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <header className="mb-12 max-w-3xl">
            <p className="text-sm font-medium text-[var(--blog-accent-blue)] mb-3">
              Training Labs Blog
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4">
              Sales training & coaching insights
            </h1>
            <p className="text-lg text-[var(--blog-text-secondary)] leading-relaxed">
              Practical buyer&apos;s guides on coaching platforms, roleplay
              systems, and enablement programs revenue teams actually use.
            </p>
          </header>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="block mb-10 group rounded-2xl border border-[var(--blog-border-default)] bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-48 h-48 bg-[var(--blog-accent-blue)]/30 rounded-full blur-3xl" />
                    <span className="relative text-white/80 text-sm font-medium tracking-wide uppercase">
                      Featured Guide
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-[var(--blog-accent-blue)]/10 text-[var(--blog-accent-blue)] font-medium">
                      {featured.category}
                    </span>
                    <span className="text-[var(--blog-text-muted)]">
                      {featured.date}
                    </span>
                    <span className="text-[var(--blog-text-muted)]">
                      · {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 group-hover:text-[var(--blog-accent-blue)] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[var(--blog-text-secondary)] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-[var(--blog-border-default)] bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <span className="px-2.5 py-1 rounded-full bg-[var(--blog-background-secondary)] text-[var(--blog-text-secondary)] font-medium">
                      {post.category}
                    </span>
                    <span className="text-[var(--blog-text-muted)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[var(--blog-accent-blue)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--blog-text-secondary)] leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
