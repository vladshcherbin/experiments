const path = require('path')

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              ['@babel/preset-env', { modules: false, targets: { browsers: 'last 2 Chrome versions' }}]
            ]
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map'
}
