/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/'],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background))',
        'form-back': 'rgba(var(--form-back))',
        'form-text': 'rgba(var(--form-text))',
        secondary: 'rgba(var(--secondary))',
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
