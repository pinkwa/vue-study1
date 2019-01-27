const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 启用热更新的 第2步
const webpack = require('webpack')
module.exports = {
    // 大家已经学会了举一反4， 大家觉得，在配置文件中，需要手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),// 入口，表示，要使用 webpack 打包哪个文件
    output: { // 输出文件相关的配置
      path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
      filename: 'bundle.js' // 这是指定 输出的文件的名称
    },

plugins: [

    // 装了插件表示当前项目有资格开启HMR

    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({

         title: '传智大法好!!!', // 如果模板中有title, 会覆盖这里的配置
         template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
         filename: 'index.html' // 指定生成的页面的名称

      })


  ],

devServer: {

    contentBase: "./src", // 托管的根目录

    hot: true, // 我要开启或关闭HMR

    open: true, // 自动打开浏览器

    port: 3000 // 设置devServer的端口号

  },


  
  

  }