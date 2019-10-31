const path = require('path')
const HtmlWebpckPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js','.css','.jsx','.ts','.tsx']//可以省略后缀名
  },
  plugins: [
    new HtmlWebpckPlugin({
        template: path.resolve(__dirname, './src/index.html') // 实例化
    }),
    new CleanWebpackPlugin() // 重新打包时删除上一次打包文件
  ],
  devServer: { // 服务器运行
    contentBase: './dist',
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      { test: /\.tsx$/, use: 'ts-loader' }
    ] 
  }
}