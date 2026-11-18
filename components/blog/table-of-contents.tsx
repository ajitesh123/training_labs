type TocSection = {
  id: string
  label: string
}

export function TableOfContents({ sections }: { sections: TocSection[] }) {
  return (
    <nav className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-56 shrink-0 self-start overflow-y-auto lg:block">
      <div className="border-2 border-ink bg-sheet p-4">
        <p className="tl-mono mb-3 text-[11px] font-semibold text-ink-2">[ Contents ]</p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block py-1 text-sm text-ink-2 transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
