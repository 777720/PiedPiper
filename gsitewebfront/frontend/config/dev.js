const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base");
const initEntry = require('../initEntry')


const config = webpackMerge(commonConfig, {
  output: {
    filename: "[name]-bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  
})
initEntry(config, false)

module.exports = config