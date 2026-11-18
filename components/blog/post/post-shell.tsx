import type { ReactNode } from 'react'
import { BlogFooter } from '@/components/blog/blog-footer'
import { BlogHeader } from '@/components/blog/blog-header'
import { TableOfContents } from '@/components/blog/table-of-contents'

type PostShellProps = {
  toc: { id: string; label: string }[]
  children: ReactNode
}

/** Page frame for every post: header, sticky TOC, article column, footer. */
export function PostShell({ toc, children }: PostShellProps) {
  return (
    <div className="light relative min-h-screen overflow-x-clip bg-white">
      <div className="spotlight" />
      <div className="grid-pattern pointer-events-none fixed inset-0" />
      <BlogHeader />
      <main className="pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-8">
            <TableOfContents sections={toc} />
            <article className="blog-fade-up min-w-0 max-w-3xl flex-1 text-[17px] leading-relaxed text-[#333]">
              {children}
            </article>
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  )
}

type SectionProps = { id: string; title: string; children: ReactNode }

/** A TOC-linked section. Keep `id` identical to its TOC entry. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-black sm:text-[28px]">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  )
}
