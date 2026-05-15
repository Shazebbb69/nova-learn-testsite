const branches = [
  {
    title: 'B.Tech Aerospace Engineering',
    slug: 'aerospace-engineering',
  },
  {
    title: 'B.Tech Civil Engineering',
    slug: 'civil-engineering',
  },
  {
    title: 'B.Tech Electrical & Electronics Engineering',
    slug: 'electrical-electronics-engineering',
  },
  {
    title: 'B.Tech Electronics & Communication Engineering',
    slug: 'electronics-communication-engineering',
  },
  {
    title: 'B.Tech Mechanical Engineering',
    slug: 'mechanical-engineering',
  },
  {
    title: 'B.Tech Production Engineering',
    slug: 'production-engineering',
  },
  {
    title: 'B.Tech Biotechnology',
    slug: 'biotechnology',
  },
  {
    title: 'B.Tech Artificial Intelligence & Data Science',
    slug: 'ai-data-science',
  },
  {
    title: 'B.Tech Artificial Intelligence & Machine Learning',
    slug: 'ai-ml',
  },
  {
    title: 'B.Tech CSE - Blockchain Technologies',
    slug: 'blockchain-technologies',
  },
  {
    title: 'B.Tech CSE - Cloud Computing',
    slug: 'cloud-computing',
  },
  {
    title: 'B.Tech CSE - DevOps',
    slug: 'devops',
  },
  {
    title: 'B.Tech CSE - Full Stack Development',
    slug: 'full-stack-development',
  },
  {
    title: 'B.Tech CSE - IoT',
    slug: 'iot',
  },
  {
    title: 'B.Tech CSE - AI & Future Technologies',
    slug: 'ai-future-technologies',
  },
  {
    title: 'B.Tech CSE - Software Product Engineering',
    slug: 'software-product-engineering',
  },
  {
    title: 'B.Tech CSE - Cyber Security',
    slug: 'cyber-security',
  },
  {
    title: 'B.Tech IT - AR/VR',
    slug: 'ar-vr',
  },
  {
    title: 'B.Tech IT - Data Analytics',
    slug: 'data-analytics',
  }
]

export default async function MaterialBranchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const branch = branches.find((b) => b.slug === slug)

  if (!branch) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <h1 className="text-3xl font-black text-slate-950">
          Branch Not Found
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        
        {/* TOP */}
        <div className="text-center">
          
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">
            Work In Progress
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            {branch.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Materials for this branch are currently being organized and will be
            uploaded soon on Nova Learn.
          </p>
        </div>

        {/* CONTENT BOX */}
        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center">
          
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
            📚
          </div>

          <h2 className="mt-8 text-3xl font-black text-slate-950">
            Content Coming Soon
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Notes, PYQs, manuals, assignments, exam packs and semester-wise
            resources for this branch will be available here soon.
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-sm">
            Nova Learn is actively uploading resources
          </div>
        </div>
      </section>
    </main>
  )
}