import 'tailwindcss/plugin'

module.exports = {
  content: ["./src/**/*.{html,js,jsx,scss}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
    },
    colors: {
      DEFAULT: "#fff",
      background: "#010A05",
      primary: "#fff",
      error: "#FF5757",
    },

    extend: {
      minWidth: {
        phone: "320px"
      },
      maxWidth: {
        phone: '480px',
        tab: '768px',
        pc: '1280px',
      }
    },
  },
  plugins: [
  ],
}

