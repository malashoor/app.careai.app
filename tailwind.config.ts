import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn-style tokens for form accessibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        
        // Legacy brand colors
        brand: {
          50: "var(--brand-50)",
          100: "var(--brand-100)",
          200: "var(--brand-200)",
          300: "var(--brand-300)",
          400: "var(--brand-400)",
          500: "var(--brand-500)",
          600: "var(--brand-600)",
          700: "var(--brand-700)",
          800: "var(--brand-800)",
          900: "var(--brand-900)",
          // Legacy support
          bg: 'var(--brand-bg)',
          fg: 'var(--brand-fg)',
          muted: 'var(--brand-muted)',
          blue: {
            50:  'var(--brand-blue-50)',
            100: 'var(--brand-blue-100)',
            600: 'var(--brand-blue-600)',
            700: 'var(--brand-blue-700)',
            800: 'var(--brand-blue-800)',
          },
          border: 'var(--brand-border)',
          card: 'var(--brand-card)',
        },
        surface: { 
          0: "var(--surface-0)", 
          1: "var(--surface-1)", 
          card: "var(--surface-card)" 
        },
        ink: { 
          900: "var(--ink-900)", 
          700: "var(--ink-700)", 
          500: "var(--ink-500)" 
        },
        ok: { 500: "var(--ok-500)" },
        warn: { 500: "var(--warn-500)" },
        err: { 500: "var(--err-500)" },
        info: { 500: "var(--info-500)" },
      },
      fontFamily: { 
        sans: ['var(--font-sans)'] 
      },
      boxShadow: {
        card: "0 6px 30px rgba(0,0,0,0.12)",
        cardDark: "0 6px 30px rgba(0,0,0,0.35)",
        focus: "0 0 0 3px rgba(17,183,156,0.35)",
        brand: 'var(--brand-shadow)',
      },
      borderRadius: { 
        xl: "14px", 
        "2xl": "22px" 
      },
    },
  },
  plugins: [],
} satisfies Config;
