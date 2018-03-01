const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base");
const initEntry = require('../initEntry')


const config = webpackMerge(commonConfig, {
  output: {
    filename: "[name]-bundle.js",
    publicPath: "http://127.0.0.1:8080/assets/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  
})
initEntry(config)

module.exports = config