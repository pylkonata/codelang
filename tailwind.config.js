/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // background: 'rgba(var(--background))',
        // border: 'rgba(var(--border))',
        // card: 'rgba(var(--card))',
        // 'copy-primary': 'rgba(var(--copy-primary))',
        // 'copy-secondary': 'rgba(var(--copy-secondary))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
