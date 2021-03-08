const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const localPort = "3000";
const proxiedServer = "http://localhost:5555";

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

    entry: [
        "./src/index.tsx",
        // "./src-solution-redux-tools/index_devtools_and_logger.tsx",
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    mode: "development",
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
        // proxy: { "/": proxiedServer }
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].bundle.js"
    },
    plugins: [
        isDevelopment && new webpack.HotModuleReplacementPlugin(),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"development"'
            }
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            plugins: [
                                isDevelopment && require.resolve('react-refresh/babel')
                            ].filter(Boolean),
                        },
                    }],
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: { transpileOnly: true },
                }]
            },
        ]
    }
};
