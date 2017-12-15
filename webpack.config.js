var path = require("path");
var webpack = require("webpack");


module.exports = {
  target: "web",
  entry: __dirname + "/src/js/Grid.ts",
  devtool: "inline-source-map",
  output: {
    filename: "gridoo-bundle.js",
    library: "rohanGrid",
    libraryTarget: "umd"
  },
  externals: {
    jquery : 'jQuery'
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"], // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          emitErrors: true,
          failOnHint: true
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  }
};