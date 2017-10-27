const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const renderer = {
    entry: {
        renderer: path.resolve(__dirname, 'src/renderer/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "[name].js"
    },
    target: 'electron-renderer',
    devServer: {
        contentBase: path.resolve(__dirname, 'app'),
        port: 9080,
        inline: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules/'),
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['env', 'react', 'stage-2']
            }
        }, {
            test: /\.scss$/,
            exclude: path.resolve(__dirname, 'src/renderer/styles/'),
            loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]!sass-loader?sourceMap=true"
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'src/renderer/styles/'),
            loader: 'style-loader!css-loader!sass-loader?sourceMap=true'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MyList',
            Chunks: ['renderer'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/renderer/index.html')
        })
    ],
}

const main = {
    entry: {
        main: path.resolve(__dirname, 'src/main/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: "[name].js"
    },
    target: "electron-main",
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules/'),
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['env', 'stage-2']
            }
        }]
    },
}

module.exports = [renderer, main];