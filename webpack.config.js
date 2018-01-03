var path = require("path");
var webpack = require("webpack");
var libraryName = "Gridoo";
function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function(){
    var dts = require('dts-bundle');

    dts.bundle({
      name: libraryName,
      main: 'dist/src/js/main/Grid.d.ts',
      out: '../index.d.ts',
      baseDir: "dist",
      removeSource: true,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};
module.exports = {
  target: "web",
  entry: __dirname + "/src/js/main/Grid.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "gridoo-bundle.js",
    library: libraryName,
    libraryTarget: "umd"
  },
  externals: {
    jquery : 'jQuery'
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"], // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.min.js'
    }
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
  },
  plugins: [ new DtsBundlePlugin()]
};