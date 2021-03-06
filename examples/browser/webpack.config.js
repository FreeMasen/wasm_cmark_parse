const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
      extensions: ['.js', '.wasm'],
  },
  mode: "development",
  devtool: 'source-map'
};
