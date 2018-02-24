const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8888;

const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // inject: 'body',
      // hash: true,
      title: 'TEST!!!!!!!!!!!',
      options: {
        title: "TEST!!!!!!!!!!!!!*"
      }
    })
  ]
};

module.exports = config;