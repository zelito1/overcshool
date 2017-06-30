var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  // 入口
  // entry: './src/script/app.js',
  entry: {
    'scripts/app': './src/scripts/app.js'
  },

  // 出口
  output: {
    path: __dirname + '/build',
    filename: 'script/app.js'
    // filename: '[name]_[chunkhash:8].js'
  },

  // webserver服务器
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 7000,
    proxy: {
      '/api': {
        target: 'https://www.shangpin.com',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    //   '/json': {
    //     target: 'http://localhost:7001',
    //     pathRewrite: {'^/json': ''}
    //   }
    }
  },

  //模块
  module: {
    loaders: [
     
      // babel-loader, 解析.JSX文件
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
                presets: ['react', 'es2015']
            }
      },

      // CSS打包
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },

      // SCSS打包
      // {
      //   test: /\.scss$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // }
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },

  // 插件
  plugins: [
    // 1: 抽离CSS样式到文件
    new ExtractTextPlugin({
      filename: 'app.css',
      // filename: '[name]_[hash].css',
      allChunks: true,
      disable: false
    }),

    // 2: 根据模板自动生成html
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      title: '豆瓣电影',
      name: 'kailong'
    }),

    // 3: 压缩代码
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   }
    // }),

    // 4: 自动打开浏览器
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:7000'
    // }),

    // 5: 更改环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  // 组件抽离
  // externals: {
  //   'react': 'window.React',
  //   'react-dom': 'window.ReactDOM',
  //   'react-router': 'window.ReactRouter'
  // }
}
