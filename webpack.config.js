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
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            ],
            exclude: path.resolve(__dirname, 'node_modules/'),
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
            exclude: path.resolve(__dirname, 'src/renderer/styles/'),
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ],
            include: path.resolve(__dirname, 'src/renderer/styles/'),
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
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            ],
            exclude: path.resolve(__dirname, 'node_modules/'),
        }]
    },
}

module.exports = [renderer, main];