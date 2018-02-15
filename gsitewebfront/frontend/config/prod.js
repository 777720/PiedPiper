const path = require('path');
const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const CommonConfig = require("./base");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = webpackMerge(CommonConfig, {
  output: {
    path: path.resolve(
      __dirname,
      '../bulid/gsite'
    ),
    filename: '[name]-[hash].js',
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(['gsite/*.*'], {
      root: path.resolve(__dirname, '../bulid'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
})