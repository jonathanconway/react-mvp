const path = require('path')

module.exports = {
  entry: {
    lib: './lib/react-mvp.jsx'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'react-mvp',
    libraryTarget: 'umd'
  },

  externals: {
    'react': 'react'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
