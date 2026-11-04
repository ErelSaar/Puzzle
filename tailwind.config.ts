import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        /* Frank Ruhl Libre — major headings, logo wordmark */
        frank: ['var(--font-frank)', 'Georgia', 'serif'],
        /* IBM Plex Sans Hebrew — body, nav, buttons, forms */
        plex: ['var(--font-plex)', 'Arial', 'sans-serif'],
      },
      colors: {
        canvas: '#0a0a0b',
        surface: '#111113',
        elevated: '#18181b',
        border: '#27272a',
        accent: {
          DEFAULT: '#0f766e',
          hover: '#0d9488',
          light: '#14b8a6',
          subtle: '#042f2e',
        },
        text: {
          primary: '#f4f4f5',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
