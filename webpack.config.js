const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};

module.exports = config;
