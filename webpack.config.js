const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'js/hires.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'js/chunks/[contenthash:16].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[contenthash:16].[ext]',
                },
            },
            {
                test: /\.(pdf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/docs/[contenthash:16].[ext]',
                },
            },
            {
                test: /\.(aac)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/sounds/[contenthash:16].[ext]',
                },
            },
            {
                test: /\.(mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/videos/[contenthash:16].[ext]',
                },
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/svgs/[contenthash:16].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            favicon: "./src/app/assets/favicons/favicon.ico"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/manifest', to: '' },
                { from: 'public/robots', to: '' },
                { from: 'public/images', to: '' },
            ],
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};