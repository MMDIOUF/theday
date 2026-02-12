/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic': {
          'bg': '#f5f0eb',
          'text': '#795548',
          'accent': '#c4a4a4',
          'card': '#faf8f5',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}