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
      <div className="tl-mono mb-5 flex flex-wrap items-center gap-3 text-[11.5px] font-semibold text-ink-2">
        <span className="border-2 border-ink bg-butter px-2 py-1 text-ink">{category}</span>
        <span>{date}</span>
        <span>· {readTime}</span>
      </div>
      <h1 className="mb-6 text-balance font-mono text-[30px] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px] md:text-[44px]">
        {title}
      </h1>
      <p className="text-xl leading-relaxed text-ink-2">{lede}</p>
    </header>
  )
}
