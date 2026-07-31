type TocSection = {
  id: string
  label: string
}

export function TableOfContents({ sections }: { sections: TocSection[] }) {
  return (
    <nav className="hidden lg:block sticky top-24 w-56 shrink-0 self-start max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="p-4 rounded-xl bg-[var(--blog-background-secondary)] border border-[var(--blog-border-default)]">
        <h4 className="font-semibold text-black mb-3 text-sm">
          Table of Contents
        </h4>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-[var(--blog-text-secondary)] hover:text-[var(--blog-accent-blue)] transition-colors block py-1"
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
