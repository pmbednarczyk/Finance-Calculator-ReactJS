const path = require('path');

module.exports = {
  entry: './src/containers/App/index.js',
  output: {
    path: path.resolve('./'),
    filename: 'out.js',
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets:	['es2015', 'stage-2', 'react'] },
      },
    ],
  },
};
