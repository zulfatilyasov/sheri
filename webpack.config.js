var webpack = require('webpack');
var path = require('path');
require("babel/register")({
  plugins: ["jsx-control-statements/babel"]
});
module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/app'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/scripts/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        postLoaders: [],
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
