const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Reemplaza con la ruta correcta a tu punto de entrada JS
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: __dirname + '/dist', // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Ruta al archivo HTML de entrada
    }),
  ],
};
