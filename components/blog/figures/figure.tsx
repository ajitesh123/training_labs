import type { ReactNode } from 'react'

type FigureProps = {
  title: string
  children: ReactNode
  caption?: ReactNode
  source?: ReactNode
  tone?: 'light' | 'dark'
}

/**
 * Frame for every animated figure: a title that says what to look at, the
 * figure itself, then a caption and source line. Keep captions honest: say
 * when a number is an example input rather than published data.
 */
export function Figure({
  title,
  children,
  caption,
  source,
  tone = 'light',
}: FigureProps) {
  const dark = tone === 'dark'
  return (
    <figure
      className={`my-8 rounded-2xl border p-4 sm:p-6 ${
        dark
          ? 'border-white/10 bg-[var(--blog-ink)] text-white'
          : 'border-[var(--blog-border-default)] bg-[var(--blog-background-secondary)]'
      }`}
    >
      <p
        className={`mb-4 text-sm font-semibold ${dark ? 'text-white' : 'text-black'}`}
      >
        {title}
      </p>
      {children}
      {(caption || source) && (
        <figcaption
          className={`mt-4 space-y-1 text-xs leading-relaxed ${
            dark ? 'text-white/60' : 'text-[var(--blog-text-muted)]'
          }`}
        >
          {caption && <p>{caption}</p>}
          {source && <p>Source: {source}</p>}
        </figcaption>
      )}
    </figure>
  )
}
