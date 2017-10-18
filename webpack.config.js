const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {presets: "es2015"}
        }]
      }
    ]
  }
}