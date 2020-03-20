const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  "plugins": [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer'),
    // purgecss({
    //   content: ['**/*.pug'],
    //   css: ['tailwind.css']
    // })
  ]
} 