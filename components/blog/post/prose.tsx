import type { ReactNode } from 'react'

/** External link that opens in a new tab. Use for every cited source. */
export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--blog-accent-blue)] underline decoration-[var(--blog-accent-blue)]/30 underline-offset-2 hover:decoration-[var(--blog-accent-blue)]"
    >
      {children}
    </a>
  )
}

type DataTableProps = {
  columns: string[]
  rows: ReactNode[][]
  note?: ReactNode
}

/** Comparison table that scrolls inside its own box on narrow screens. */
export function DataTable({ columns, rows, note }: DataTableProps) {
  return (
    <div className="my-6">
      <div className="overflow-x-auto rounded-xl border border-[var(--blog-border-default)] bg-white">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-[var(--blog-background-secondary)]">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-semibold text-black">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[var(--blog-border-default)] align-top">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 ${j === 0 ? 'font-medium text-black' : 'text-[var(--blog-text-secondary)]'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs text-[var(--blog-text-muted)]">{note}</p>}
    </div>
  )
}

/** One-line disclosure for any post that names Tough Tongue AI. */
export function Disclosure() {
  return (
    <p className="rounded-lg border border-[var(--blog-border-default)] bg-[var(--blog-background-secondary)] px-4 py-3 text-sm text-[var(--blog-text-secondary)]">
      Disclosure: Training Labs is published by the team behind Tough Tongue
      AI, which appears in this article. Every price below was read from a
      public page on the date shown.
    </p>
  )
}
