const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
        userServices: path.resolve(__dirname, 'src/js/userService.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'

    },
    devServer:{
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugings: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
        })
    ]
}