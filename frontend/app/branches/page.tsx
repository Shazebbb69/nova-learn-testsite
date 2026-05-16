import Link from 'next/link'

const branches = [
  {
    title: 'Aerospace',
    icon: '🚀',
    slug: 'aerospace-engineering',
  },
  {
    title: 'Civil',
    icon: '🏗️',
    slug: 'civil-engineering',
  },
  {
    title: 'Electrical & Electronics',
    icon: '⚡',
    slug: 'electrical-electronics-engineering',
  },
  {
    title: 'Electronics & Communication',
    icon: '📡',
    slug: 'electronics-communication-engineering',
  },
  {
    title: 'Mechanical',
    icon: '⚙️',
    slug: 'mechanical-engineering',
  },
  {
    title: 'Production',
    icon: '🏭',
    slug: 'production-engineering',
  },
  {
    title: 'Biotechnology',
    icon: '🧬',
    slug: 'biotechnology',
  },
  {
    title: 'AI & Data Science',
    icon: '🤖',
    slug: 'ai-data-science',
  },
  {
    title: 'AI & ML',
    icon: '🧠',
    slug: 'ai-ml',
  },
  {
    title: 'Blockchain Technologies',
    icon: '⛓️',
    slug: 'blockchain-technologies',
  },
  {
    title: 'Cloud Computing',
    icon: '☁️',
    slug: 'cloud-computing',
  },
  {
    title: 'DevOps',
    icon: '🛠️',
    slug: 'devops',
  },
  {
    title: 'Full Stack Development',
    icon: '💻',
    slug: 'full-stack-development',
  },
  {
    title: 'IoT',
    icon: '📶',
    slug: 'iot',
  },
  {
    title: 'AI & Future Technologies',
    icon: '✨',
    slug: 'ai-future-technologies',
  },
  {
    title: 'Software Product Engineering',
    icon: '📦',
    slug: 'software-product-engineering',
  },
  {
    title: 'Cyber Security',
    icon: '🔐',
    slug: 'cyber-security',
  },
  {
    title: 'AR / VR',
    icon: '🥽',
    slug: 'ar-vr',
  },
  {
    title: 'Data Analytics',
    icon: '📊',
    slug: 'data-analytics',
  },
]

export default function BranchesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        
        {/* TOP */}
        <div className="text-center">
          
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">
            Nova Learn Branches
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            Explore Engineering Branches
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Access semester-wise notes, PYQs, manuals, lab files and exam
            resources organized by branch.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {branches.map((branch) => (
            <Link
              key={branch.slug}
              href={`/materials/${branch.slug}`}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              
              {/* ICON */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-5xl shadow-inner">
                {branch.icon}
              </div>

              {/* TITLE */}
              <h2 className="mt-7 text-3xl font-black tracking-tight text-slate-950 transition group-hover:text-blue-600">
                {branch.title}
              </h2>

              {/* DESC */}
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Access all semester study materials, notes and academic
                resources.
              </p>

              {/* BUTTON */}
              <div className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-blue-600 px-7 text-sm font-bold text-white transition hover:bg-blue-700">
                Explore Materials
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}