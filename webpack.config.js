const path = require('path');
const SRC_DIR = path.join(`${__dirname}/client/src`);
const Dist_DIR = path.join(`${__dirname}/client/dist`);

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(Dist_DIR)
  },
  name: 'recipeConverterConfig',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};