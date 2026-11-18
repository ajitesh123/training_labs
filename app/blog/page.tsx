import Link from 'next/link'
import { BlogFooter } from '@/components/blog/blog-footer'
import { BlogHeader } from '@/components/blog/blog-header'
import { GuideThumb } from '@/components/latest-guides'
import { blogPosts } from '@/lib/blog-posts'

const CARD_HOVER =
  'transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ink)] motion-reduce:transition-none'

export default function BlogIndexPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((post) => post.slug !== featured?.slug)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <BlogHeader />

      <main className="pb-16 pt-24 sm:pt-28">
        <div className="blog-fade-up mx-auto max-w-7xl px-4 sm:px-6">
          <header className="mb-12 max-w-3xl">
            <p className="tl-mono mb-4 text-xs font-semibold text-ink-2">[ Training Labs blog ]</p>
            <h1 className="mb-4 text-balance font-mono text-4xl font-medium uppercase leading-[1.06] tracking-[-0.03em] sm:text-5xl">
              Sales training &amp; coaching insights
            </h1>
            <p className="text-lg leading-relaxed text-ink-2">
              Practical buyer&apos;s guides on coaching platforms, roleplay systems, and enablement
              programs revenue teams actually use.
            </p>
          </header>

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className={`group mb-10 grid border-2 border-ink bg-sheet md:grid-cols-2 ${CARD_HOVER}`}
            >
              <div className="md:border-r-2 md:border-ink [&>*]:border-b-2 md:[&>*]:border-b-0">
                <GuideThumb post={featured} height="h-[200px] md:h-full md:min-h-[300px]" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="tl-mono mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-ink-2">
                  <span className="border-2 border-ink bg-butter px-2 py-0.5 text-ink">Featured · {featured.category}</span>
                  <span>{featured.date}</span>
                  <span>· {featured.readTime}</span>
                </div>
                <h2 className="mb-3 text-2xl font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="leading-relaxed text-ink-2">{featured.excerpt}</p>
              </div>
            </Link>
          )}

          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={`group block border-2 border-ink bg-sheet ${CARD_HOVER}`}>
                  <GuideThumb post={post} />
                  <div className="p-5">
                    <p className="tl-mono mb-2 text-[11px] font-semibold text-ink-2">
                      {post.category} · {post.readTime}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-2">{post.excerpt}</p>
                  </div>
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
