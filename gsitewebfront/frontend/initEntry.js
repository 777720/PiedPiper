const _ = require('lodash')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const fs = require('fs');
const  path = require('path');

const entryDir = path.join(__dirname, 'src/entry/')
const templateFile = path.join(__dirname, 'index.html')


const addEntryFn = (config, key, value) => {
  console.log(`找到了entry！，key=${key},value=${value}`);
  config.entry[key] = [value, 'webpack-hot-middleware/client?reload=true']
  //config.entry[key] = value
  config.plugins.push(new HtmlWebpackPlugin(
    {
      title: key,
      filename: key + '.html',
      chunks: [key],
      template: templateFile,
      multihtmlCache: true,
    }
  ))
}

const getEntrys = (config, rootpath, fn) => {
  const files = fs.readdirSync(rootpath)
  for(let key in files) {
    const fullName = path.join(rootpath, "/", files[key])
    const stat = fs.lstatSync(fullName)
    if (stat.isDirectory()) {
      getEntrys(config, fullName, fn)
    } else {
      const fileName = path.basename(fullName, '.jsx')
      if (_.startsWith(fileName, 'entry-')) {
        const entryKey = fileName.replace('entry-', '')
        fn(config, entryKey, fullName)
      }
    }
  }
}

 module.exports = function (config) {
  getEntrys(config, entryDir, addEntryFn);
}