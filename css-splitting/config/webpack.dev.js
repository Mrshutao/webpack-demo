const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
  mode: 'development',
  devtool: ' cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    open: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(common, dev);
