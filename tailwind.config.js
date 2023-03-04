/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'mono': ['Major Mono Display', 'monospace','sans-serif']
      }
    },
  },
  plugins: [],
}
