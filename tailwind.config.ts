import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('../packages/ui-tokens/tailwind.preset.cjs')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'system-ui',
          'SF Pro Text',
          'Inter',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: ['SF Pro Display', 'Inter', 'system-ui'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.06)',
      },
      colors: {
        brand: {
          bg: '#0B1324',
          fg: '#E6EDF7',
          primary: '#4DA3FF',
          accent: '#7BD4FF',
        },
        'brand-bg': '#0B1324',
        'brand-fg': '#E6EDF7',
        'brand-muted': '#6c757d',
        'brand-border': '#dee2e6',
      },
    },
  },
  plugins: [],
}
export default config
