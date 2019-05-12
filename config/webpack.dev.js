const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dirname = fs.realpathSync(process.cwd());

module.exports = env =>
  merge(common(env), {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,

          loader: 'eslint-loader',
        },
      ],
    },
    devServer: {
      contentBase: path.join(dirname, 'public/'),
      publicPath: '/',
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
