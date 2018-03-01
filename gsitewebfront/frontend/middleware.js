const path = require('path')
const express = require('express')
const webpack = require('webpack')
const initEntry = require('./initEntry')

const webpackHotMiddleware = require('webpack-hot-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const proxy = require('http-proxy-middleware');
const webpackConfig = require('./config/dev.js')
const compiler = webpack(webpackConfig)

const app = new express();

initEntry(webpackConfig)

const proxyConfig = {
  target: 'http://localhost:10008', // target host
  changeOrigin: true,               // needed for virtual hosted sites
}
const GsiteProxy = proxy(proxyConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: "http://0.0.0.0:8080/assets/",
  stats: {
    colors: true,
    chunks: true,
  },
  progress: true,
  inline: true,
  hot: true,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
  }
})


app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))
app.use('/api(/.*)?', GsiteProxy)


// app.get('/:pagename', function (req, res, next) {
//   const pagename = req.params.pagename ? req.params.pagename + '.html' : 'index.html'
//   const filePath = path.join(compiler.outputPath, pagename)

//   compiler.outputFileSystem.readFile(filePath, function (err, result) {
//     if (err) {
//       return next("输入路径无效，请输入目录名作为路径")
//     }
//     res.set('content-type', 'text/html')
//     res.send(result)
//     res.end()

//   })
// })

app.get("/writter", function (req, res, next) {
  const pagename = "writter.html"
  const filePath = path.join(compiler.outputPath, pagename)
  compiler.outputFileSystem.readFile(filePath, function (err, result) {
    if (err) {
      return next("输入路径无效，请输入目录名作为路径")
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()

  })
})
app.get(/(.)*/, function(req, res, next) {
  const pagename = "index.html"
  const filePath = path.join(compiler.outputPath, pagename)
  compiler.outputFileSystem.readFile(filePath, function (err, result) {
    if (err) {
      return next("输入路径无效，请输入目录名作为路径")
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()

  })
})



module.exports = app.listen(8080, function (err) {
  if (err) {
    // do something
    return
  }
  console.log('Listening at http://localhost:8080\n')
})
