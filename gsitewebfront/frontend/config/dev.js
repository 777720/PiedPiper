const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base");

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: "[name]-bundle.js",
    publicPath: "http://127.0.0.1:8080/"
  },
  devtool: "source-map",
  devServer: {
    port: 8080,
    proxy: {
      '/admin': 'http://localhost:8080/writer.html',
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
   
})