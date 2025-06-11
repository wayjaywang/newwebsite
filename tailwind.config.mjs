/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class', '.theme-black'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config; 