'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-sky-100/30 blur-3xl" />

        <div className="absolute -right-24 top-48 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 md:pb-32 md:pt-28">
        
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* TOP BADGE */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            Built for Alliance University engineering students
          </div>

          {/* HERO HEADING */}
          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl">
            Stop Searching,
            <br />

            Start
            <span className="text-blue-600">
              {' '}Learning.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Nova Learn helps Alliance University students quickly access notes,
            PYQs, manuals, exam packs, and semester resources without wasting
            hours searching through random drives and WhatsApp groups.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              href="/materials"
              className="inline-flex h-16 items-center justify-center rounded-2xl bg-slate-950 px-8 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02]"
            >
              Explore Resources
            </Link>

            <Link
              href="/community"
              className="inline-flex h-16 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 text-lg font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
            >
              Join Community
            </Link>
          </div>

          {/* QUICK STATS */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-600">
            
            {[
              'Semester-wise navigation',
              'PYQs & manuals',
              'Exam-focused resources',
              'Alliance University'
            ].map((item) => (
              
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}