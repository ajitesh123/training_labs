import type { ReactNode } from 'react'

type PostHeaderProps = {
  category: string
  date: string
  readTime: string
  title: string
  lede: ReactNode
}

export function PostHeader({ category, date, readTime, title, lede }: PostHeaderProps) {
  return (
    <header className="mb-10">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-[var(--blog-accent-blue)]/10 px-3 py-1 font-medium text-[var(--blog-accent-blue)]">
          {category}
        </span>
        <span className="text-[var(--blog-text-muted)]">{date}</span>
        <span className="text-[var(--blog-text-muted)]">· {readTime}</span>
      </div>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="text-xl leading-relaxed text-[var(--blog-text-secondary)]">{lede}</p>
    </header>
  )
}
