/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        white: '#ffffff',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        modalBg: 'rgba(1, 10, 5, 0.75)',
      },
    },
  },
  plugins: [],
};
