
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: "web",
    devtool: 'source-map',
    entry: {
        app: ["./src/front/app.tsx"]
    },
    mode: "development",
    output: {
        path: path.resolve(__dirname, "../build/front"),
        filename: "./app-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.front.json"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "template.html")
        })
    ]
}