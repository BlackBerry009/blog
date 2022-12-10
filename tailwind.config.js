/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%': {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.2)'
          }
        }
      },
      animation: {
        zoomIn: '1s linear 0s infinite alternate zoom'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
