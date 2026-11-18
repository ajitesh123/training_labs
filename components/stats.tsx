const stats = [
  {
    value: '50,000+',
    label: 'Active Learners',
    description: 'Reps and managers training weekly',
  },
  {
    value: '200+',
    label: 'Sales Coaches',
    description: 'Practitioners from top revenue orgs',
  },
  {
    value: '150+',
    label: 'Courses Available',
    description: 'From ramp to advanced negotiation',
  },
  {
    value: '98%',
    label: 'Completion Rate',
    description: 'Teams finishing what they start',
  },
]

// 2 × 2 grid on phones, one row of four from lg; borders follow the grid.
const CELL_BORDERS = [
  'border-b-2 border-r-2 lg:border-b-0',
  'border-b-2 lg:border-b-0 lg:border-r-2',
  'border-r-2',
  '',
]

/** Scoreboard strip directly under the hero. */
export default function Stats() {
  return (
    <section className="border-b-2 border-ink bg-sheet">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`border-ink px-5 py-5 sm:px-10 sm:py-7 ${CELL_BORDERS[i]}`}>
            <div className="font-mono text-[28px] font-semibold leading-none tracking-[-0.03em] text-ink tabular-nums sm:text-[38px]">
              {stat.value}
            </div>
            <div className="tl-mono mt-2 text-xs font-semibold text-ink">{stat.label}</div>
            <div className="text-[13px] text-ink-2">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
