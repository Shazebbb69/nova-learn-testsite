'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const branches = [
  'B.Tech Computer Science',
  'B.Tech Cybersecurity',
  'B.Tech AI & Data Science',
  'B.Tech Electronics'
]

const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6']

export default function QuickAccessPanel() {
  const [branch, setBranch] = useState(branches[1])
  const [semester, setSemester] = useState(semesters[2])

  const branchHref = useMemo(() => {
    // Keep routing concept; use existing scaffold link.
    return '/alliance-university/btech-cybersecurity'
  }, [])

  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-brand-200/70 bg-white/60 shadow-soft backdrop-blur"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-20 h-56 w-56 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex flex-col gap-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-800">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_18px_rgba(31,143,255,0.55)]" />
            Quick navigation
          </div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">Start with a branch</h2>
          <p className="text-sm text-slate-600">
            Pick a branch + semester to jump into curated resources and exam packs.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-700">Branch</span>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white/80 px-3 text-sm font-medium text-slate-800 shadow-soft focus:border-brand-300 focus:outline-none"
            >
              {branches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-700">Semester</span>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white/80 px-3 text-sm font-medium text-slate-800 shadow-soft focus:border-brand-300 focus:outline-none"
            >
              {semesters.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-700">Suggested jump</div>
              <div className="text-sm font-semibold text-slate-900">
                {semester} • curated notes & PYQs
              </div>
            </div>
            <Link
              href={branchHref}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-brand-500 px-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
            >
              Open resources
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

