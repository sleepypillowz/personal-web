/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'polka': "url('/assets/images/polka.png')"
      },
      fontFamily: {
        ubuntu: ['Ubuntu']
      }
    },
  },
  plugins: [],
}

