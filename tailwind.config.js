/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        88: '5.5rem',
        327: '20.4375rem',
      },
    },
  },
  plugins: [],
}
