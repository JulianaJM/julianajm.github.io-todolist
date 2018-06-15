const HtmlWebPackPlugin = require("html-webpack-plugin");

// i can see the list of plugins I am using
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html" // The filename value is the name of the minified HTML that will be generated in the dist folder.
});

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
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
          loader: "babel-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ],
  },
  plugins: [htmlPlugin]
/*  or
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]*/
};
