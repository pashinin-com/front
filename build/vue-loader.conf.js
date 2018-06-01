'use strict'

const path = require('path');
const utils = require('./utils');
const config = require('../config');

const isProduction = process.env.NODE_ENV === 'production';

// console.log(path.join(__dirname, '..', 'src'));

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  // resolveLoader: {
  //   '@': path.join(__dirname, '..', 'src'),
  // },
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
