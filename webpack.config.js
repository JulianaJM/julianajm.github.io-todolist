const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

// i can see the list of plugins I am using
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/template/index.html",
  filename: "index.html" // The filename value is the name of the minified HTML that will be generated in the dist folder.
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: "[name]-[hash].js"
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300, // The default
    poll: 5000 // Check for changes every 5 seconds
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'docs'),/* By default it will use your current working directory to serve content. To disable contentBase set it to false */
    //contentBase:[__dirname, path.join(__dirname, 'assets')], /* serve from multiple directories */
    publicPath:"./",
    compress: true /* Enable gzip compression for everything served */,
    //historyApiFallback: true,
    //hotOnly: true, /* Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures. */
    inline: true,
    // port: 9091, /* default is 8080 */
    progress: true,
    /*proxy: {
      '/api': 'http://localhost:3000' /* Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain. */
    /*},*/
    // stats: {
    //   cached: false
    // }
  },
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
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      // { //it returns a DataURL if the file is < 10000 bytes
      //   test: /\.(jp(e*)g|png)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8000, // Convert images < 8kb to base64 strings
      //       name: '[name].[ext]',
      //       //publicPath: 'images',
      //     },
      //   },
      // },
      {
        test: /\.(jp(e*)g|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[path][name]-[hash:8].[ext]', // réplique le chemin dans le repertoire de sortie
            // outputPath: 'images', si on veut un répertoire différent dans le repertoire de sortie
          }
        }
      }
    ]
  },
  plugins: [htmlPlugin/*, hmrPlugin*/]
  /*  or
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ] */
};
