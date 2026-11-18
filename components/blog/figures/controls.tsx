'use client'

type Option<V extends string> = { value: V; label: string }

type SegmentedProps<V extends string> = {
  options: Option<V>[]
  value: V
  onChange: (v: V) => void
  label: string
}

/** Pill toggle for switching a figure between views. */
export function Segmented<V extends string>({
  options,
  value,
  onChange,
  label,
}: SegmentedProps<V>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
            value === o.value
              ? 'border-[var(--blog-accent-blue)] bg-[var(--blog-accent-blue)] text-white'
              : 'border-[var(--blog-border-default)] bg-white text-[var(--blog-text-secondary)] hover:border-gray-400'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

type SliderFieldProps = {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format: (n: number) => string
  hint?: string
}

/** Labeled range input that shows its formatted value. */
export function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  hint,
}: SliderFieldProps) {
  return (
    <label className="block">
      <span className="mb-1 flex items-baseline justify-between gap-3 text-sm">
        <span className="text-[var(--blog-text-secondary)]">{label}</span>
        <span className="font-semibold tabular-nums text-black">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-[var(--blog-accent-blue)]"
      />
      {hint && (
        <span className="mt-0.5 block text-[11px] text-[var(--blog-text-muted)]">
          {hint}
        </span>
      )}
    </label>
  )
}
