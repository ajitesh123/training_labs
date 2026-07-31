import type { ReactNode } from 'react'

type AgenticFeatures = {
  google_meet: boolean
  phone: boolean
  slides: boolean
}

type ToolCardProps = {
  name: string
  tagline: string
  ranking: number
  isRecommended?: boolean
  features: string[]
  agenticFeatures?: AgenticFeatures
  pricing: string
  pros: string[]
  cons: string[]
  verdict: string
  websiteUrl?: string
}

function CapabilityBadge({
  label,
  enabled,
  icon,
}: {
  label: string
  enabled: boolean
  icon: ReactNode
}) {
  return (
    <div
      className={`p-3 rounded-lg text-center ${
        enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
      }`}
    >
      <div className="w-6 h-6 mx-auto mb-1">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
      <div className="mt-1">{enabled ? '✓' : '✗'}</div>
    </div>
  )
}

export function ToolCard({
  name,
  tagline,
  ranking,
  isRecommended,
  features,
  agenticFeatures,
  pricing,
  pros,
  cons,
  verdict,
  websiteUrl,
}: ToolCardProps) {
  return (
    <div
      className={`relative p-6 md:p-8 rounded-2xl border ${
        isRecommended
          ? 'border-[var(--blog-accent-blue)] bg-gradient-to-br from-blue-50/50 to-white'
          : 'border-[var(--blog-border-default)] bg-white'
      } shadow-sm`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 rounded-full bg-[var(--blog-accent-blue)] text-white text-xs font-semibold">
            Editor&apos;s Choice
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
              #{ranking}
            </span>
            <h3 className="text-2xl font-bold text-black">
              {websiteUrl ? (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--blog-accent-blue)] transition-colors"
                >
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
          </div>
          <p className="text-[var(--blog-text-secondary)]">{tagline}</p>
        </div>
      </div>

      {agenticFeatures && (
        <div className="mb-6 p-4 rounded-xl bg-[var(--blog-accent-blue)]/5 border border-[var(--blog-accent-blue)]/20">
          <h4 className="font-semibold text-black mb-3">Practice Channels</h4>
          <div className="grid grid-cols-3 gap-3">
            <CapabilityBadge
              label="Google Meet"
              enabled={agenticFeatures.google_meet}
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 10l5-3v10l-5-3" />
                  <rect x="3" y="6" width="12" height="12" rx="2" />
                </svg>
              }
            />
            <CapabilityBadge
              label="Phone"
              enabled={agenticFeatures.phone}
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              }
            />
            <CapabilityBadge
              label="Live Slides"
              enabled={agenticFeatures.slides}
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              }
            />
          </div>
        </div>
      )}

      <div className="mb-6">
        <h4 className="font-semibold text-black mb-3">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <svg
                className="w-5 h-5 text-[var(--blog-accent-blue)] shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-[var(--blog-text-secondary)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 p-4 rounded-xl bg-[var(--blog-background-secondary)]">
        <h4 className="font-semibold text-black mb-1">Pricing</h4>
        <p className="text-[var(--blog-text-secondary)]">{pricing}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
          <ul className="space-y-1">
            {pros.map((pro) => (
              <li key={pro} className="text-sm text-[var(--blog-text-secondary)]">
                + {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-500 mb-2">Cons</h4>
          <ul className="space-y-1">
            {cons.map((con) => (
              <li key={con} className="text-sm text-[var(--blog-text-secondary)]">
                − {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-black text-white">
        <h4 className="font-semibold mb-1">Our Verdict</h4>
        <p className="text-gray-300 text-sm">{verdict}</p>
      </div>
    </div>
  )
}
