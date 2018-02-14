
const initEntry =  require('../initEntry.js')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

 const config = {
  entry: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2|gif)$/, loader: 'url-loader?limit=100000',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
}
initEntry(config)

module.exports  = config