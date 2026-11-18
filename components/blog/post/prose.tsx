import type { ReactNode } from 'react'

/** External link that opens in a new tab. Use for every cited source. */
export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-signal underline decoration-signal/40 underline-offset-2 hover:decoration-signal"
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
      <div className="overflow-x-auto border-2 border-ink bg-sheet">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b-2 border-ink bg-paper">
            <tr>
              {columns.map((c) => (
                <th key={c} className="tl-mono px-4 py-3 text-[11px] font-semibold text-ink">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-ink/15 align-top first:border-t-0">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-medium text-ink' : 'text-ink-2'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs text-ink-2">{note}</p>}
    </div>
  )
}

/** One-line disclosure for any post that names Tough Tongue AI. */
export function Disclosure() {
  return (
    <p className="border-2 border-dashed border-ink bg-paper px-4 py-3 text-sm text-ink-2">
      <span className="tl-mono mr-2 font-semibold text-ink">Disclosure</span>
      Training Labs is published by the team behind Tough Tongue AI, which appears in this
      article. Every price below was read from a public page on the date shown.
    </p>
  )
}
