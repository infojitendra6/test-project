var fs = require('fs');
var path = require('path');
var ExternalsPlugin = require('webpack2-externals-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'server/worker/autoworker/examadda-worker.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'examadda-worker.bundle.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ],
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
              'react',
              'es2015',
              'stage-0',
            ],
            plugins: [
              [
                'babel-plugin-webpack-loaders', {
                config: './webpack.config.babel.js',
                verbose: false,
              },
              ],
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, 'node_modules'),
    }),
  ],
};
