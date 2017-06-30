var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cookie = require('cookie');

var theme = require('./theme.js').default;

var ROOT_PATH = path.join(__dirname);

var defaultEnv = {};

module.exports = function (env = defaultEnv) {
  return {
    // 入口文件
    entry: {
      index: path.resolve(ROOT_PATH, 'app/scripts/index.jsx'),
    },

    // 输出路径
    output: {
      path: path.join(ROOT_PATH, 'dist'),
      filename: '[name].js',
      publicPath: '/antd_performance_test/dist/',
    },

    // 开启source-map
    devtool: 'source-map',

    // 开启webpack-dev-server
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      compress: true,
      port: 8330,
      hot: false,
      inline: true,
      publicPath: '/',
      contentBase: 'dev',
      disableHostCheck: true,
      proxy: {
        '/appchannel/**': {
          changeOrigin: true,
          target: 'http://nj02-lbs-impala5.nj02.baidu.com:8669',
          secure: false,
        },
      },
    },
    //babel重要的loader在这里
    // 使用lessLoader的modifyVars功能直接改变less中变量的值
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              'postcss-loader',
            ],
          }),
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              {
                loader: 'less-loader',
                options: { modifyVars: theme },
              },
            ],
          }),
        },
        {
          test: /\.(png|jpg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 40000,
            },
          }],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: [
                  [
                    'es2015',
                    {
                      modules: false,
                    },
                  ],
                  'es2016',
                  'es2017',
                  'stage-2',
                  'react',
                ],
                plugins: [],
              },
            },
            // 'eslint-loader',
          ],
        },

        // 字体文件
        {
          test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          }],
        },
      ],
    },

    plugins: [
      // 将部分内容输出成文本文件
      new ExtractTextPlugin({
        filename: '[name].css',
        disable: false,
        allChunks: true,
      }),

      // 生成一个HTML文件
      new HtmlwebpackPlugin({
        title: 'Index',
        filename: 'index.html',
        template: 'app/scripts/index.html',
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: ['index'],
        //要把script插入到标签里
        inject: 'body',
      }),

      // 代码压缩
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        comments: false,
        sourceMap: false,
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告
          warnings: false,
          // 删除所有的 `console` 语句
          // 还可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
        },
      }),

      // 生产环境
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('product'),
      }),
    ],

    // 设置
    resolve: {
      // 设置“模块”所在文件夹
      modules: [
        path.resolve('app'),
        'node_modules',
        'static',
      ],
      extensions: ['.js', '.jsx'],

      // 暂时不使用jsnext:main
      // mainFields: ['jsnext:main', 'main'],
    },
  };
};
