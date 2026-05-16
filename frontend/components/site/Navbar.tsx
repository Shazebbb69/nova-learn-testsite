'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
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
    href: '/about',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          
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

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-5 md:flex">
          
          <Link
            href="/login"
            className="text-base font-bold text-slate-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 text-base font-bold text-white transition hover:bg-blue-700"
          >
            Sign Up
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
              href="/login"
              className="rounded-xl px-4 py-3 text-base font-bold text-slate-800 transition hover:bg-slate-50"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-base font-bold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}