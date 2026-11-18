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
export function Figure({ title, children, caption, source, tone = 'light' }: FigureProps) {
  const dark = tone === 'dark'
  return (
    <figure
      className={`my-8 border-2 border-ink p-4 sm:p-6 ${dark ? 'bg-ink text-sheet' : 'bg-sheet text-ink'}`}
    >
      <p className={`tl-mono mb-5 border-b-2 pb-3 text-[12px] font-semibold ${dark ? 'border-sheet/20' : 'border-ink'}`}>
        {title}
      </p>
      {children}
      {(caption || source) && (
        <figcaption className={`mt-5 space-y-1 text-xs leading-relaxed ${dark ? 'text-sheet/60' : 'text-ink-2'}`}>
          {caption && <p>{caption}</p>}
          {source && <p>Source: {source}</p>}
        </figcaption>
      )}
    </figure>
  )
}
