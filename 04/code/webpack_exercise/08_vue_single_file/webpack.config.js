`use strict`;
const htmllWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        'main2':'./src/main.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename:'build.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        },{
            test:/\.less$/,
            loader: 'style-loader!css-loader!less-loader',
        },{
            test: /\.(jpg|png|svg|git|ttf)$/,
            loader: 'url-loader',
            options: {
                limit: 4096,
                name: 'my_[name].[ext]'
            }
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['env'],
                plugins: ['transform-runtime']
            }
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
        }
    ]
    },
    plugins:[
        new htmllWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}