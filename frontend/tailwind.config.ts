import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dbeeff',
          200: '#b8dcff',
          300: '#86c6ff',
          400: '#4fb0ff',
          500: '#1f8fff',
          600: '#1374e6',
          700: '#0f5fbf',
          800: '#0b4d95',
          900: '#083a6c'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 24, 60, 0.10)'
      }
    }
  },
  plugins: []
} satisfies Config

