module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        text: '393B44'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}