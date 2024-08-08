/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        howell: ['Howell', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#edc531',
          DEFAULT: '#edc531',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

