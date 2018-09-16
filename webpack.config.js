const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


// i can see the list of plugins I am using
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html', // The filename value is the name of the minified HTML that will be generated in the dist folder.
});


module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: __dirname/* path.resolve(__dirname, 'dist') */,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: './',
  },
  // resolve: { //pour ne pas avoir a mettre des extensions dans les imports
  //   extensions: ['.js', '.jsx']
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jp(e*)g|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(jp(e*)g|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [htmlPlugin],
/*  or
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ] */
};
