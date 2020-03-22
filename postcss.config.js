const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const minify = require('@node-minify/core');
const csso = require('@node-minify/csso');


module.exports = {
  "plugins": [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer'),
    purgecss({
      content: ['**/*.pug'],
      css: ['tailwind.css']
    }),
    minify({
      compressor: csso,
      input: './public/tailwind.css',
      output: './public/tailwind.css',
      callback: (err, min) => {
        return new Promise( (resolve, reject) => {
          return new resolve
        })
      }
    })()
  ]
}





