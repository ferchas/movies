const config = require('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    app: './client/src/index.js',
  },
  output: {
    filename: 'bundle.[name].[hash].js',
    path: 'public/dist',
    publicPath: config.get('web-pack.public-path'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({ // include bundles into html. Defined in entry
      filename: 'index.html',
      template: './client/src/layout/layout.html',
    }),
    new ExtractTextPlugin({
      filename: 'bundle.[name].[hash].css',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // new CompressionPlugin({
    //   asset: '[path]',
    //   algorithm: 'gzip',
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },
};
