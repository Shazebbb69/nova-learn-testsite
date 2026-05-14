import Link from 'next/link'

const footerLinks = {
  Platform: [
    { label: 'Resources', href: '/search' },
    { label: 'Branches', href: '/branches' },
    { label: 'Exam Packs', href: '/exam-packs' }
  ],

  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],

  Community: [
    { label: 'Telegram', href: '#' },
    { label: 'WhatsApp', href: '#' },
    { label: 'Instagram', href: '#' }
  ]
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-100 bg-white">
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        
        <div className="grid gap-14 lg:grid-cols-12">
          
          {/* LEFT */}
          <div className="lg:col-span-5">
            
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-black tracking-tight text-slate-950">
                Nova Learn
                <span className="text-blue-500">
                  .
                </span>
              </h2>
            </Link>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
  Nova Learn helps Alliance University engineering students quickly access notes, PYQs, manuals, and exam-focused resources without wasting hours searching across random groups and drives.
</p>

            <div className="mt-7 flex flex-wrap gap-3">
              
              {[
                'Semester-wise',
                'Exam-focused',
                'Fast navigation'
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            
            {Object.entries(footerLinks).map(([section, links]) => (
              
              <div key={section}>
                
                <h3 className="text-lg font-black text-slate-950">
                  {section}
                </h3>

                <div className="mt-5 flex flex-col gap-4">
                  
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-medium text-slate-600 transition hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          
          <p>
            © 2026 Nova Learn. Built for students.
          </p>

          <div className="flex items-center gap-6">
            
            <Link
              href="/privacy"
              className="transition hover:text-blue-600"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-blue-600"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}