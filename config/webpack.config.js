const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
    mode: 'none',
    entry: {
        main: path.join(__dirname, '../src/main.ts')
    },
    output: {
        filename: '[name][hash].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    resolve: {
        // 执行import { showHelloWorld } from './common'; 
        // 先尝试 ts 后缀的 TypeScript 源码文件，在尝试 js 后缀 JavaScript 源码文件
        extensions: ['.ts', '.js'] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            inject: true,
            minify: {
                removeComments: true
            }
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'less-loader',
                  'postcss-loader'
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 1024
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8080,  // 端口号
        host: '0.0.0.0', // 主机名，设为该值可通过IP访问
        open: true
    }
}

module.exports = config
