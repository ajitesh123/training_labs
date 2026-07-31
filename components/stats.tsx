export default function Stats() {
  const stats = [
    {
      value: '50,000+',
      label: 'Active Learners',
      description: 'Growing community worldwide'
    },
    {
      value: '200+',
      label: 'Expert Instructors',
      description: 'Industry professionals teaching'
    },
    {
      value: '150+',
      label: 'Courses Available',
      description: 'Constantly expanding library'
    },
    {
      value: '98%',
      label: 'Completion Rate',
      description: 'Students achieving their goals'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
