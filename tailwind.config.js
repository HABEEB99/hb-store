module.exports = {
  mode:"jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "body": "#F2EDD7",
        "logo": "#393232",
        "cta" : "#3A6351",
        "btn" : "#E48257"
      }
    },
  },
  plugins: [],
}
