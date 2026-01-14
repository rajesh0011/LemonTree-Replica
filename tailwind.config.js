/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17A2B8',
        dark: '#1a1a1a',
        'light-bg': '#f8f9fa',
        gold: '#d4af37',
      },
    },
  },
  plugins: [],
};
