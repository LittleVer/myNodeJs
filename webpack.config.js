/**
 * Created by little_ver on 2017/4/24.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports={
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry:{
        bundle:'./public/javascripts/index.js'
    },
    output:{
        filename:'./dist/[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ]
}