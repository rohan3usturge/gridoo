const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const libraryName = "Gridoo";
function DtsBundlePlugin() {}
DtsBundlePlugin.prototype.apply = function(compiler) {
  compiler.plugin("done", function() {
    const dts = require("dts-bundle");

    dts.bundle({
      name: libraryName,
      main: "dist/src/js/main/Grid.d.ts",
      out: "../index.d.ts",
      baseDir: "dist",
      removeSource: true,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};

const PATHS = {
  root: path.resolve(__dirname),
  nodeModules: path.resolve(__dirname, "node_modules"),
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist")
};

const DEV_SERVER = {
  hot: true,
  hotOnly: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  },
  historyApiFallback: true,
  overlay: true,
  stats: "verbose",
  contentBase: PATHS.dist,
  inline: true,
  port: 8081
};

module.exports = (env = {}) => {
  console.log({ env });
  const isAnalyze = !!env.analyze;
  const isBuild = !!env.build;
  const isDev = !env.build;
  const isSourceMap = !!env.sourceMap || isDev;
  console.log({ isDev, isBuild, isSourceMap, isAnalyze });
  return {
    cache: true,
    target: "web",
    devtool: isDev ? "inline-source-map" : "none",
    devServer: DEV_SERVER,
    context: PATHS.root,
    entry: {
      "gridoo": path.join(PATHS.src, "js/main/Grid.ts"),
      "gridoo.min": path.join(PATHS.src, "js/main/Grid.ts")
    },
    output: {
      path: PATHS.dist,
      filename: "[name].js",
      library: "Gridoo",
      libraryTarget: "umd"
    },
    externals: {
      "jquery" :  "jQuery",
      "handlebars/runtime" : "Handlebars"
    },
    resolve: {
      modules: [PATHS.src, PATHS.nodeModules], // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    node: {
      fs: "empty"
    },
    module: {
      rules: [
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
          options: {
            helperDirs: path.join(PATHS.src, "hbs/helpers"),
            runtime: 'handlebars/runtime'
          }
        },
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
          include: PATHS.src,
          use: env.awesome
            ? [
                {
                  loader: "awesome-typescript-loader",
                  options: {
                    transpileOnly: false,
                    useTranspileModule: false,
                    sourceMap: isSourceMap
                  }
                }
              ]
            : [
                {
                  loader: "ts-loader",
                  options: {
                    transpileOnly: false,
                    compilerOptions: {
                      sourceMap: isSourceMap,
                      noEmitOnError: true
                    }
                  }
                }
              ]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(isDev ? "development" : "production")
        }
      }),
      new webpack.IgnorePlugin(new RegExp("^(handlebars)$")),
      ...(isDev ? [new DashboardPlugin()] : []),
      ...(isDev
        ? [
            new webpack.HotModuleReplacementPlugin({
              // multiStep: true, // better performance with many files
            }),
            new webpack.NamedModulesPlugin()
          ]
        : []),
      new webpack.LoaderOptionsPlugin({ debug: false }),
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        beautify: false,
        compress: {
          screw_ie8: true
        },
        comments: false,
        sourceMap: isSourceMap
      }),
      ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
      ...(isBuild ? [new DtsBundlePlugin()] : [])
    ]
  };
};
