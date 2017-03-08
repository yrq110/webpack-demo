const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
  entry :
    { 
      app: path.resolve(__dirname, 'src/index')
    },
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename : '[name].bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', "es2015"],
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader'],
    }]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({template: 'src/index.html'})
  ],
};

module.exports = webpackConfig;
