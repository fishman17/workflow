// 运行环境是node, common.js规范
const webpack = 
require('webpack');
const path =
require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: path.resolve(__dirname
   + "/src/main.js"),
output: {
  path: path.resolve(__dirname
   + "/dist/js"),
  filename: "bundle.js"
},
devtool: 'source-map',
watch: true,
watchOptions: {
  ignored: 
  /node_modules|dist|build|docs|css/,
  poll: 1000
},
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
},
resolve:{
  extensions: ['.js', '.vue'],
  alias:{
      'vue$':'vue/dist/vue.esm.js'
  }
},
devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,     //实时刷新
    hot : true,
},
plugins: [
  new HtmlWebpackPlugin({
    template: __dirname + '/index.tmpl.html'
  }),
  new webpack.HotModuleReplacementPlugin()
],
}
