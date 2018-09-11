'use strict'
require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const server = require('pushstate-server')

var spinner = ora('文件打包中...' )
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  因为一些错误打包失败.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  打包完成.\n'))
    console.log(chalk.yellow(
      '  提示:构建的文件可以放到服务器进行访问.\n' +
      '  打开打包后的index.html即可访问网站.\n'
    ))
    if(process.env.npm_config_preview){
      server.start({
          port: 8888,
          directory: './dist',
          file: '/index.html'
      });
      console.log('> 开启完毕,地址为： ' +  'http://localhost:8888' + '\n')
    }
  })
})
