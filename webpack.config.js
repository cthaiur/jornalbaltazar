const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  cache: false,
  output: {
    publicPath: 'http://localhost:3001/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3001,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Adicionando o postcss-loader
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'jornalbaltazar',
      remotes: {
        microfrontend: 'microfrontend@http://localhost:3000/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true }, // Forçar a carga imediata do react
        'react-dom': { singleton: true, eager: true }, // Forçar a carga imediata do react-dom
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
