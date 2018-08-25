const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};