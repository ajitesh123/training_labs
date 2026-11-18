import Link from 'next/link'
import { SectionHead, wrap } from '@/components/section-head'
import { type BlogPostMeta, blogPosts } from '@/lib/blog-posts'

const STAIRS = [22, 38, 55, 72, 90]
const CHECKS = '✓✓✗✓✓✓✗✓✗✓✓✓✓✗✓'.split('')

/** Small outlined drawing that hints at the kind of guide; picked by category. */
function Thumb({ post }: { post: BlogPostMeta }) {
  if (post.category === 'Pricing Guide') {
    return (
      <div className="flex h-[150px] items-end justify-center gap-2.5 border-b-2 border-ink bg-sky-soft px-6 pt-5">
        {STAIRS.map((h, i) => (
          <span
            key={h}
            className="tl-stair w-7 border-2 border-b-0 border-ink bg-butter"
            style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    )
  }
  if (post.category === "Buyer's Guide") {
    return (
      <div className="grid h-[150px] grid-cols-5 place-items-center gap-1.5 border-b-2 border-ink bg-mint px-5 py-4 font-mono text-[15px] font-bold text-ink">
        {CHECKS.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
    )
  }
  return (
    <div className="flex h-[150px] flex-col justify-center gap-3 border-b-2 border-ink bg-peach px-6">
      {['Before', 'After'].map((label, i) => (
        <div key={label} className="tl-mono flex items-center gap-2.5 text-[11px] font-semibold">
          <span className="w-16">{label}</span>
          <b
            className={`tl-versus-bar h-[18px] border-2 border-ink ${i ? 'bg-sky' : 'bg-sheet'}`}
            style={{ animationDelay: `${i * 1.5}s` }}
          />
        </div>
      ))}
    </div>
  )
}

/** The three newest posts, so the homepage links into the blog. */
export default function LatestGuides() {
  const latest = blogPosts.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <section className="border-b-2 border-ink py-14 sm:py-24">
      <div className={wrap}>
        <SectionHead
          kicker="Guides"
          title="Latest From the Blog"
          aside={
            <div className="lg:justify-self-end">
              <Link href="/blog" className="tl-btn">
                All guides →
              </Link>
            </div>
          }
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-2 border-ink bg-sheet transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_var(--color-ink)] motion-reduce:transition-none"
            >
              <Thumb post={post} />
              <div className="p-4">
                <p className="tl-mono text-[11px] font-semibold text-ink-2">{post.category}</p>
                <h3 className="mb-2.5 mt-2 text-lg font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-[13px] text-ink-2">{post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
