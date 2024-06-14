/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  mode: 'jit',
  css: ['~/assets/css/tailwind.css'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Kanit', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

