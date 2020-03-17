"use strict";

var tailwindcss = require('tailwindcss'); // postcss.config.js


var purgecss = require('@fullhuman/postcss-purgecss')();

module.exports = {
  "plugins": [require('tailwindcss')('./tailwind.config.js'), require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project 
    content: ['**/*.pug'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: function defaultExtractor(content) {
      return content.match(/[\w-/:]+(?<!:)/g) || [];
    }
  }), require('autoprefixer')()]
};