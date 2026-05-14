import Hero from '@/components/site/Hero'

const resourceCards = [
  {
    title: 'VVIMP Questions',
    desc: 'Important exam-focused questions to maximize scores.',
    icon: '✦'
  },
  {
    title: 'Question Banks',
    desc: 'Comprehensive collections to practice every possible question.',
    icon: '📚'
  },
  {
    title: 'PYQs',
    desc: 'Practice with previous year questions to ace exams.',
    icon: '⟳'
  },
  {
    title: 'Syllabus',
    desc: 'Stay updated with the latest curriculum and subject structure.',
    icon: '☰'
  }
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      <Hero />

      {/* RESOURCE LIBRARY SECTION */}
      <section className="relative overflow-hidden pb-24 pt-6">
        
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* TOP BADGE */}
          <div className="flex justify-center">
            
            <div className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-600">
              All Materials
            </div>
          </div>

          {/* HEADING */}
          <div className="mx-auto mt-8 max-w-5xl text-center">
            
            <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Your Complete
              <span className="text-blue-600">
                {' '}Resource Library
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Access high-quality syllabus-aligned notes, PYQs,
              manuals, and exam resources curated specifically
              for Alliance University engineering students.
            </p>
          </div>


          {/* RESOURCE CARDS */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            
            {resourceCards.map((card) => (
              
              <div
                key={card.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                
                {/* ICON */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-4xl text-white shadow-lg shadow-blue-500/20">
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-black tracking-tight text-slate-950">
                  {card.title}
                </h3>

                {/* DESC */}
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {card.desc}
                </p>

                {/* LINK */}
                <button className="mt-8 text-base font-bold text-blue-600 transition group-hover:translate-x-1">
                  Explore →
                </button>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </main>
  )
}