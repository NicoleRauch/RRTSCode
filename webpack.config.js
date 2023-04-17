const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')

const localPort = "3000";
const proxiedServer = "http://localhost:5555";

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

    entry: [
        "./src/index.tsx",
        // "./src-fortgeschritten/index.tsx",
        // "./src-solution-react/index.tsx",
        // "./src-solution-hooks/index.tsx",
        // "./src-solution-react-2/index.tsx",
        // "./src-solution-react-lifecycle/index.tsx",
        // "./src-solution-react-lifecycle-hooks/index.tsx",
        // "./src-solution-react-layout/index.tsx",
        // "./src-solution-redux-1/index.tsx",
        // "./src-solution-redux-2/index.tsx",
        // "./src-solution-redux-big/index.tsx",
        // "./src-solution-redux-tools/index_devtools_and_logger.tsx",
        // "./src-solution-useReducer/index.tsx",
        // "./src-solution-async-calls/index.tsx",
        // "./src-solution-tanstack-query/index.tsx",
        // "./src-solution-data-validation/index.tsx",
        // "./src-solution-routing/index.tsx",
        // "./src-solution-iots/index.tsx",
        // "./src-solution-forms/index.tsx",
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    mode: "development",
    devServer: {
        static: {
            directory: "./build",
        },
        compress: false, // do not spend time on this
        host: "0.0.0.0", // server is also available externally
        client: {
            overlay: {       // overlay for compiler issues
              warnings: false,
              errors: true
            },
        },
        port: localPort,
        hot: true,       // hot module replacement
        historyApiFallback: true,
        proxy: { "/": proxiedServer }
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[fullhash].bundle.js"
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"development"'
            }
        }),
        new ESLintPlugin({}),
        new CircularDependencyPlugin({
            // add errors to webpack instead of warnings
            failOnError: true,
            // `onStart` is called before the cycle detection starts
            onStart({ compilation }) {
                console.log('start detecting webpack modules cycles');
            },
            // `onDetected` is called for each module that is cyclical
            onDetected({ module, paths, compilation }) {
                // `paths` will be an Array of the relative module paths that make up the cycle
                // `module` will be the module record generated by webpack that caused the cycle
                if(paths[0].startsWith("src")){
                    compilation.errors.push(new Error(paths.join(' <- ')))
                }
            },
            // `onEnd` is called before the cycle detection ends
            onEnd({ compilation }) {
                console.log('end detecting webpack modules cycles');
            },
        }),
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
