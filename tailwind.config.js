/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'mono': ['Major Mono Display', 'monospace','sans-serif'],
        'raleway': ['Raleway', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0.0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1.0 }
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s linear',
        'fade-in-long': 'fadeIn 2s linear'
      },
    },
  },
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  },

  plugins: [],
}
