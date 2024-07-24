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
        red: '#FF5757',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        modalBg: 'rgba(1, 10, 5, 0.75)',
        heroBtn: 'rgba(255, 255, 255, 0.10)',
        heroBtnHover: 'rgba(255, 255, 255, 0.20)',
        inputBg: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
