const path = require('path')
// const defaultSettings = require('./src/config/index.js')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: './', // vue-router hash 模式使用
  // outputDir: 'dist', // 输出文件目录
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
  },
  // devServer: {
  //   proxy: {
  //     //配置跨域
  //     '/api': {
  //       target: 'https://test.xxx.com', // 接口的域名
  //       // ws: true, // 是否启用websockets
  //       changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   }
  // }
}