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
          className="group rounded-xl border border-[var(--blog-border-default)] bg-white p-5 transition-shadow hover:shadow-md"
        >
          <p className="mb-1 text-xs font-medium text-[var(--blog-accent-blue)]">
            {p.category}
          </p>
          <p className="font-semibold text-black transition-colors group-hover:text-[var(--blog-accent-blue)]">
            {p.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
