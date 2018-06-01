const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FontelloPlugin = require("fontello-webpack-plugin");
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const env = process.env.NODE_ENV

// var autoprefixer = require('autoprefixer');
// var precss = require('precss');

module.exports = env => { return {
  cache: true,
  // ["babel-polyfill", "src/main.js"]
  entry: {
    // bp: 'babel-polyfill',
    index: './src/apps/pashinin.com/index.js',
    // another: './src/app.js',
  },
  output: {
    filename: 'bundle.js'
  },
  // devServer: {
  //   historyApiFallback:{
  //     index: 'dist/index.html'
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            //   js: 'babel-loader!eslint-loader'
            // html: 'html-loader!'
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      // {
      //   test: /\.(min.css)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // },
      {
        test: /\.(css|scss)$/,
        // exclude: /node_modules/,   // some .min.css are there!
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve("./node_modules")
                // path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
      // {
      //   test: /.(png|woff(2)?|eot|ttf|svg)(?[a-z0-9=.]+)?$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 100000, // Convert images < 8kb to base64 strings
      //         // name: 'images/[hash]-[name].[ext]'
      //       }
      //       // '?limit=100000'
      //     }
      //   ]
      // }
    ]
  },
  // optimization.splitChunks.chunks: "all"
  optimization: {
    // minimize: false,
    runtimeChunk: { name: 'common' },
    splitChunks: {
      // chunks: "all",
      cacheGroups: {
        default: false,
        commons: {
          test: /material/,
          name: "vendor",
          chunks: "initial",
          minSize: 1,
          reuseExistingChunk: true
        }
        // commons: {
        //   test: /\.jsx?$/,
        //   chunks: 'all',
        //   minChunks: 2,
        //   name: 'common',
        //   enforce: true,
        // },
      },
    },
  },
  plugins: [
    // new ChunksPlugin({
    //   to: 'vendor',
    //   test: /node_modules/ // or an array of regex
    // }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify('production')
        NODE_ENV: env.production ? '"production"' : '"development"'
      }
    }),
    // new BundleAnalyzerPlugin(),
    // new FontelloPlugin({
    //   config: require("./src/fontello/config.json")
    //   /* ...options */
    // })
  ],
  resolve: {
    alias: {
      // https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds
      // vue: 'vue/dist/vue.js'
      // vue: 'vue/dist/vue.runtime.min.js'  // prod
      vue: env.production ? 'vue/dist/vue.runtime.min.js' : 'vue/dist/vue.runtime.esm.js'  // dev
      // vue: env.production ? 'vue/dist/vue.runtime.min.js' : 'vue/dist/vue.js'
    }
  }
}};


// console.log(process.env['NODE_ENV']);
// if (process.env.NODE_ENV === 'production') {
// if (env.production) {
//   module.exports.devtool = '#source-map'

//   module.exports.resolve.alias.vue =  'vue/dist/vue.runtime.min.js'  // prod

//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// };
