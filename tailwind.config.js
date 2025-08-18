/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#dc2626', // Red-600
        'primary-light': '#ef4444', // Red-500
        'primary-dark': '#b91c1c', // Red-700
        secondary: '#1e40af', // Blue-600 (now secondary)
        accent: '#f59e0b', // Amber-500
      },
    },
  },
  plugins: [],
}
