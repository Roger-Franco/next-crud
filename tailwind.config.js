module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /ˆbg-/,
      /ˆto-/,
      /ˆfrom-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
