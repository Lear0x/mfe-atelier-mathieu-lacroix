import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  output: {
    publicPath: 'http://localhost:8080/', // Important pour le chargement des modules
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        header: 'header@http://localhost:8081/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
