/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'main': '#e002a2',
        'pgreen': '#0C513F',
        'pyellow': '#FFC501',
        'myellow': '#FFF3CC',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

