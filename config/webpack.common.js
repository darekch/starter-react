const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getClientEnvironment = require('./env');

const dirname = fs.realpathSync(process.cwd());

module.exports = env => ({
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(dirname, 'src'), 'node_modules'],
  },
  output: {
    filename: '[hash].bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    path: path.resolve(dirname, 'dist/'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new webpack.DefinePlugin(getClientEnvironment(env)),
  ],
});
