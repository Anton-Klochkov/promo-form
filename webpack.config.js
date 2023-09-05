const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const variable = process.env.VARIABLE_BUILD;

module.exports = {
  entry: [
    (variable === 'dialog' && './src/indexDialog.tsx') ||
      (variable === 'form' && './src/indexForm.tsx'),
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /.(png|jp(e*)g)$/,
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
    }),
  ],
};
