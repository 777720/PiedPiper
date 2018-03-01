const path = require('path');
const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const CommonConfig = require("./base");
const initEntry = require("../initEntry")
const CleanWebpackPlugin = require('clean-webpack-plugin');

 const config = webpackMerge(CommonConfig, {
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

initEntry(config)

module.exports = config