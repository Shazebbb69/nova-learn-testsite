'use client'

import Link from 'next/link'
import { Users, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  {
    label: 'Branches',
    href: '/branches',
  },
  {
    label: 'Materials',
    href: '/materials',
  },
  {
    label: 'About Us',
    href: '/about'
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
        >
          <span className="text-4xl font-black tracking-tight text-slate-950">
            Nova Learn
            <span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-14 md:flex">
          
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-semibold text-slate-800 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <div className="hidden md:flex">
          
          <Link
            href="/community"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-blue-500 px-8 py-4 text-lg font-bold text-blue-500 transition hover:bg-blue-50"
          >
            <Users size={22} />

            Join Community
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          
          <div className="flex flex-col gap-2 px-4 py-5">
            
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/community"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-500 px-4 py-3 text-base font-bold text-blue-500"
            >
              <Users size={18} />

              Join Community
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}