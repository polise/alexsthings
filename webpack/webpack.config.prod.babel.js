import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"PRODUCTION"',
      PRODUCTION: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
