import Link from 'next/link'

export function BlogFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <span className="grid h-7 w-7 place-items-center border-2 border-white bg-butter font-mono text-xs font-bold text-ink">
              T
            </span>
            Training Labs
          </p>
          <p className="mt-2 text-sm text-white/60">
            Independent editorial on sales training, coaching, and enablement.
          </p>
        </div>
        <div className="tl-mono flex gap-6 text-xs text-white/70">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  )
}
