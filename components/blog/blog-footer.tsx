import Link from 'next/link'

export function BlogFooter() {
  return (
    <footer className="border-t border-[var(--blog-border-default)] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-black">Training Labs</p>
          <p className="text-sm text-[var(--blog-text-muted)] mt-1">
            Independent editorial on sales training, coaching, and enablement.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-[var(--blog-text-secondary)]">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  )
}
