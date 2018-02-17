import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel';
import { PUBLIC_DIR } from './constants';

export default merge(baseConfig, {
  devServer: {
    contentBase: PUBLIC_DIR,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"DEVELOPMENT"', DEVELOPMENT: true })],
});
