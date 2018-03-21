module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}

// require('autoprefixer')({
//   browsers: [
//     "> 5%",            // https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0
//     "last 2 versions", // http://caniuse.com/
//   ]
// }),
