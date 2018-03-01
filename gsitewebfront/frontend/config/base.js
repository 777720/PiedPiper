
const initEntry =  require('../initEntry.js')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path")

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
    alias: {
      timeFormat: path.resolve(__dirname, '../src/entry/common/components/utils/timeformat.js'),
      SvgIcon: path.resolve(__dirname, "../src/entry/common/components/svg/SvgIcon.js")
    }
  },
}
initEntry(config)

module.exports  = config