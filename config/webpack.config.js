const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Potato',
      template: './src/index.ejs',
      appMountId: 'root',
      favicon: './assets/images/favicon.png'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
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
        test: /\.(woff|woff2|eot|ttf|svg|otf)(\?\S*)?$/,
        exclude: /node_modules/,
        use: ['url-loader?limit=1024&name=[path][name].[ext]']
      }
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    contentBase: path.join("./dist"),
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};
