import Link from 'next/link'

const materials = [
  {
    branch: 'B.Tech Aerospace Engineering',
    slug: 'aerospace-engineering',
  },
  {
    branch: 'B.Tech Civil Engineering',
    slug: 'civil-engineering',
  },
  {
    branch: 'B.Tech Electrical & Electronics Engineering',
    slug: 'electrical-electronics-engineering',
  },
  {
    branch: 'B.Tech Electronics & Communication Engineering',
    slug: 'electronics-communication-engineering',
  },
  {
    branch: 'B.Tech Mechanical Engineering',
    slug: 'mechanical-engineering',
  },
  {
    branch: 'B.Tech Production Engineering',
    slug: 'production-engineering',
  },
  {
    branch: 'B.Tech Biotechnology',
    slug: 'biotechnology',
  },
  {
    branch: 'B.Tech Artificial Intelligence & Data Science',
    slug: 'ai-data-science',
  },
  {
    branch: 'B.Tech Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
  },
  {
    branch: 'B.Tech CSE - Blockchain Technologies',
    slug: 'blockchain-technologies',
  },
  {
    branch: 'B.Tech CSE - Cloud Computing',
    slug: 'cloud-computing',
  },
  {
    branch: 'B.Tech CSE - DevOps',
    slug: 'devops',
  },
  {
    branch: 'B.Tech CSE - Full Stack Development',
    slug: 'full-stack-development',
  },
  {
    branch: 'B.Tech CSE - IoT',
    slug: 'iot',
  },
  {
    branch: 'B.Tech CSE - AI & Future Technologies',
    slug: 'ai-future-technologies',
  },
  {
    branch: 'B.Tech CSE - Software Product Engineering',
    slug: 'software-product-engineering',
  },
  {
    branch: 'B.Tech CSE - Cyber Security',
    slug: 'cyber-security',
  },
  {
    branch: 'B.Tech IT - AR/VR',
    slug: 'ar-vr',
  },
  {
    branch: 'B.Tech IT - Data Analytics',
    slug: 'data-analytics',
  }
]

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        
        {/* TOP */}
        <div className="text-center">
          
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">
            Nova Learn Materials
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            Academic Materials
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Browse engineering branches and access semester-wise resources,
            notes, PYQs, manuals and academic materials.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {materials.map((section) => (
            <Link
              key={section.slug}
              href={`/materials/${section.slug}`}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              
              {/* STATUS */}
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700">
                Work In Progress
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-2xl font-black leading-snug tracking-tight text-slate-950 transition group-hover:text-blue-600">
                {section.branch}
              </h2>

              {/* DESC */}
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Materials for this branch are currently being organized and will
                be available soon on Nova Learn.
              </p>

              {/* FOOTER */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                
                <span className="text-sm font-semibold text-slate-500">
                  Open Branch
                </span>

                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}