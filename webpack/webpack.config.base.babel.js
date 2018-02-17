import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { DIST_DIR, ENTRY_DIR, ALEXS_THINGS_BUNDLE_NAME } from './constants';

const NODE_MODULES = path.resolve(process.cwd(), 'node_modules');

export default {
  entry: [ENTRY_DIR],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('main.css')],
  output: {
    path: DIST_DIR,
    filename: ALEXS_THINGS_BUNDLE_NAME,
  },
  stats: {
    errorDetails: true,
  },
  resolve: {
    modules: [NODE_MODULES],
    extensions: ['.js', '.jsx', 'json'],
  },
};
