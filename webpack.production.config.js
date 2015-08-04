var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: [
        './app/app'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name][hash].js'
    },
    plugins: [
        new Clean(['build/js']),
        new HtmlWebpackPlugin({
            template: 'build/template.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader!autoprefixer"
        }, {
            test: /\.(woff|ttf|eot|svg|png)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!autoprefixer!stylus-loader'
        }, {
            test: /\.coffee$/,
            loader: 'coffee'
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'react-hot!babel!jstransform-loader?jsx-control-statements/jstransform'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6', '.jsx', '.css', 'styl', '.coffee'],
        alias: {
            actions: __dirname + '/app/actions',
            constants: __dirname + '/app/constants',
            stores: __dirname + '/app/stores'
        }
    }
};
