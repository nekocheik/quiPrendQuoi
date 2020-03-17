const tailwindcss = require('tailwindcss')

// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')()


module.exports = {
  "plugins": [
    require('tailwindcss')('./tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      // Specify the paths to all of the template files in your project 
      content: [
        '**/*.pug',
      ],
      css: ['./public/general.css'],
      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('autoprefixer')(),
  ]
}
