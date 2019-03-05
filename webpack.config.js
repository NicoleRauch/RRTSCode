const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const localPort = "3000";
const proxiedServer = "http://localhost:5555";

module.exports = {
    mode: "development",
    entry: [
        "./src/index"
    ],
    devServer: {
        contentBase: "./build",
        lazy: false,     // always compile immediately in order to save time
        compress: false, // do not spend time on this
        host: "0.0.0.0", // server is also available externally
        overlay: {       // overlay for compiler issues
          warnings: true,
          errors: true
        },
        port: localPort,
        hot: true,       // hot module replacement
        historyApiFallback: true,
        proxy: { "/": proxiedServer }
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"development"'
            }
        })
    ],
    module: {
        rules: [
            { test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: [{loader: "babel-loader"}]
            }
        ]
    }
};
