/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '600': '600px'
      },
      width: {
        '500': '500px',
        '700': '700px',
      }
    },
  },
  plugins: [],
}