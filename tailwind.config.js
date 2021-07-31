const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js

  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/