const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
          }
        ]
      },
      resolve: {
        modules: ['node_modules'],
        alias: {
          'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js'
        }
      },
      plugins: [

        new ExtractTextPlugin({
             filename: 'style.css'
         }),
         new webpack.ProvidePlugin({
           '$': 'jquery',
           'jQuery': 'jquery',
           'windows.jQuery': 'jquery'
         })
        
        ],

};