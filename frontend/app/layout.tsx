import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {

  title: {
    default: 'Nova Learn',
    template: '%s | Nova Learn'
  },
  description: 'University-specific academic resource navigation for engineering students.'
}

import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[radial-gradient(900px_circle_at_20%_0%,rgba(31,143,255,0.12),transparent_50%),radial-gradient(700px_circle_at_90%_10%,rgba(0,180,255,0.10),transparent_45%),linear-gradient(to_bottom,#ffffff, #f8fbff)]">
          {/** Defer client component rendering to avoid invalid element crashes during prerender */}
          <div suppressHydrationWarning>
            <Navbar />
          </div>
          {children}
          <div suppressHydrationWarning>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}


