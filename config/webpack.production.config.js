const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    app: [
      './src/index.prod.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'jss',
      'react-jss',
      'jss-global',
      'classnames',
      'react-router',
      'jsoneditor',
      'react-rte'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('./dist')], {
      root: path.resolve('./'),
      exclude: ['CNAME'],
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome',
      template: './src/index.ejs',
      appMountId: 'root'
    }),
    new HtmlWebpackPlugin({
      title: 'Welcome',
      template: './src/index.ejs',
      appMountId: 'root',
      filename: '200.html'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    new CompressionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: "cheap-module-source-map"
};
