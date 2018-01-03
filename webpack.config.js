const path = require('path');

module.exports = {
  entry: './src/routes/index.js',
  output: {
    path: path.resolve('./'),
    filename: 'out.js',
    publicPath: './',
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
  },
  watch: true,
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
