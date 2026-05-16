'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    setMessage('Account created successfully!')
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      
      <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
        
        <div className="text-center">
          
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            Nova Learn
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950">
            Create Account
          </h1>

          <p className="mt-3 text-slate-600">
            Sign up to access Nova Learn resources.
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-10 space-y-5">
          
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-blue-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-2xl bg-blue-600 text-lg font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {message && (
          <div className="mt-6 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
            {message}
          </div>
        )}
      </div>
    </main>
  )
}