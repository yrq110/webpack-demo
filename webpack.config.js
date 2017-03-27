const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　use: 'url-loader?limit=8192&name=images/[name].[ext]'
　　　 },
      {
　　　　　　test: /\.html$/,
　　　　　　use: 'html-loader'
　　　 }
    ]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({template: 'src/index.html'}),
      new ExtractTextPlugin("index.css"),
  ],
};

module.exports = webpackConfig;
