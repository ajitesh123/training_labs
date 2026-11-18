import type { ReactNode } from 'react'

// Page column shared by every homepage section.
export const wrap = 'mx-auto w-full max-w-[1180px] px-5 sm:px-10'

type SectionHeadProps = {
  kicker: string
  title: string
  aside?: ReactNode
}

/** Bracketed mono kicker, uppercase mono title, optional text or badge on the right. */
export function SectionHead({ kicker, title, aside }: SectionHeadProps) {
  return (
    <div className="mb-7 grid items-end gap-4 sm:mb-11 lg:grid-cols-2 lg:gap-10">
      <div>
        <p className="tl-mono mb-3.5 text-xs font-semibold text-ink-2">[ {kicker} ]</p>
        <h2 className="font-mono text-[28px] font-medium uppercase leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px]">
          {title}
        </h2>
      </div>
      {aside}
    </div>
  )
}

/** Muted paragraph used as the right side of a SectionHead. */
export function SectionLede({ children }: { children: ReactNode }) {
  return <p className="max-w-[32em] text-base text-ink-2 sm:text-[17px]">{children}</p>
}
