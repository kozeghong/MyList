const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: {
            renderer: './src/renderer/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'app'),
            filename: "[name].js"
        },
        target: 'electron-renderer',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'app'),
            port: 9080,
            inline: true
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'MyList',
                Chunks: ['renderer']
            })
        ],
    },
    {
        entry: {
            main: './src/main/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'app'),
            filename: "[name].js"
        },
        target: "electron-main",
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'app'),
            port: 9080,
            inline: true
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }]
        },
    }
];