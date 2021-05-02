const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: "development",
  // The application entry point
  entry: resolve("src/index.js"),

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the styles inside the <style> block in `.vue` file.
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve("public"),
    port: 3000,
    publicPath: "/dist/"
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: resolve('static/img'), to: resolve('dist/static/img'), toType: 'dir' },
            { from: resolve('static/css'), to: resolve('dist/static/css'), toType: 'dir' },
            { from: resolve('static/data'), to: resolve('dist/static/data'), toType: 'dir' },
        ]
      })
  ]
};