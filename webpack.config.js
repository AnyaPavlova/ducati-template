const path = require('path');
const webpackConfig = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        host: `localhost`,
    },
    entry: {
        'dist/js/bundle.js': './resources/js/main.js',
        "dist/css/bundle": "./resources/sass/main.scss"
    },
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name]",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "css-loader"
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                ]


            }
        ]
    },
    resolve: {
        alias: {}
    }
    ,
    plugins: [
        new webpackConfig.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
}