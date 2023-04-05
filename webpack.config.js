'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: {
     "main": './app/js/main.js',
     "about_us": './app/js/about_us.js',
     "contact": './app/js/contact.js',
     "faq": './app/js/faq.js',
     "support": './app/js/support.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};