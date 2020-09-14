const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const config = {
    entry: {
        app: './src/app.tsx',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // 加快编译速度
                        transpileOnly: true,
                        // 指定特定的ts编译配置，为了区分脚本的ts配置
                        configFile: path.resolve(__dirname, '../tsconfig.json')
                    }
                }],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
            ignoreOrder: true,
        })
    ]
};

module.exports = config;