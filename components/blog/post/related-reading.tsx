import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

/** Cards for up to four existing posts, looked up by slug. */
export function RelatedReading({ slugs }: { slugs: string[] }) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p) => p !== undefined)
    .slice(0, 4)
  if (posts.length === 0) return null
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="group border-2 border-ink bg-sheet p-5 transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ink)] motion-reduce:transition-none"
        >
          <p className="tl-mono mb-1.5 text-[11px] font-semibold text-ink-2">{p.category}</p>
          <p className="font-semibold text-ink group-hover:underline group-hover:underline-offset-4">{p.title}</p>
        </Link>
      ))}
    </div>
  )
}
