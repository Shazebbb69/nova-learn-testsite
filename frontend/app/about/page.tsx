import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        
        <div className="absolute left-1/2 top-[-250px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-sky-100/20 blur-3xl" />

        <div className="absolute -right-20 top-60 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6">
        
        {/* TOP BADGE */}
        <div className="flex justify-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            About Nova Learn
          </div>
        </div>

        {/* HERO */}
        <div className="mx-auto mt-10 max-w-5xl text-center">
          
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Built for students who are
            <span className="text-blue-600">
              {' '}tired of searching.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Nova Learn is an academic resource navigation platform focused on helping
            Alliance University engineering students quickly access notes, PYQs,
            manuals, exam packs, and semester-wise materials without depending on
            scattered WhatsApp groups and random drives.
          </p>
        </div>

        {/* MISSION CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          
          {[
            {
              title: 'Fast Access',
              desc: 'Quickly find important academic resources organized by semester, branch, and subject.'
            },
            {
              title: 'Exam Focused',
              desc: 'Built around real student behavior during internals, assignments, and final exams.'
            },
            {
              title: 'Student-Centric',
              desc: 'Designed specifically for Alliance University engineering students and their workflows.'
            }
          ].map((item) => (
            
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                ✦
              </div>

              <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                {item.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* STORY */}
        <div className="mt-24 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm sm:p-14">
          
          <div className="max-w-4xl">
            
            <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
              Why Nova Learn Exists
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Engineering students waste too much time searching.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              
              <p>
                Most students spend hours searching through WhatsApp groups,
                Telegram channels, Google Drives, and random PDFs just to find
                basic study material before exams.
              </p>

              <p>
                Nova Learn aims to organize academic resources into one clean,
                searchable, semester-wise platform built specifically around
                how engineering students actually study.
              </p>

              <p>
                The goal is simple:
                reduce friction, save time, and help students focus more on
                learning instead of endlessly searching.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          
          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Start exploring resources.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Browse semester-wise notes, PYQs, manuals, and exam-focused materials curated for Alliance University students.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              href="/search"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-slate-950 px-8 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02]"
            >
              Explore Resources
            </Link>

            <Link
              href="/community"
              className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 text-lg font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}