const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base");

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: "[name]-bundle.js",
    publicPath: "http://127.0.0.1:8080/assets/"
  },
})