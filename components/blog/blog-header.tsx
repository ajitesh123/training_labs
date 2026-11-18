import Link from 'next/link'

export function BlogHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-ink sm:text-xl">
          <span className="grid h-8 w-8 place-items-center border-2 border-ink bg-butter font-mono text-sm font-bold shadow-[3px_3px_0_var(--color-ink)] sm:h-9 sm:w-9">
            T
          </span>
          Training Labs
        </Link>

        <nav className="tl-mono flex items-center gap-6 text-[13px] text-ink">
          <Link href="/" className="hover:underline hover:underline-offset-4">
            Home
          </Link>
          <Link href="/blog" className="font-semibold underline underline-offset-4">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
