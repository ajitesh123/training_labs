import Link from 'next/link'

export function BlogHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[var(--blog-border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black flex items-center justify-center">
            <span className="font-bold text-white text-sm sm:text-base">T</span>
          </div>
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-black">
            Training Labs
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-[var(--blog-text-secondary)] hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm text-black font-medium transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
