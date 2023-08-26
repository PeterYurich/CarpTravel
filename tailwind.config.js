import 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */

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
      error: "#FF5757"
    },

    extend: {
      padding: {
        "y-section": "56px",
      },
      textColor: {
        DEFAULT: "#fff",
      },
      
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        37: '37px',
        40: '40px',
        56: '56px',
        67: '67px',
        98: '98px',

      },
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
    // plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     '.section': {
    //       backgroundColor: theme('colors.white'),
    //       borderRadius: theme('borderRadius.lg'),
    //       padding: theme('spacing.6'),
    //       boxShadow: theme('boxShadow.xl'),
    //     }
    //   })
    // })
  ],
}

