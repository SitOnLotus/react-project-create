module.exports = function(name) {
    const template = `
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        const path = require('path');
        const webpack=require('webpack');


        const config = {
            entry: {
                index:'./src/index.js'
            },
            output: {
                filename: 'js/[name].min.js',
                path: __dirname + '/dist'
            },
            module: {
                rules: [{
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },{
                    test: /\.(png|jpg|gif)$/,
                    use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                    ]
                }]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $:'jquery',
                    jQuery:'jquery',
                    'window.jQuery':'jquery'
                }),
                new HtmlWebpackPlugin({
                    title: '主页',
                    filename: './index.html',
                    chunks:['index']
                })
            ],
            devServer: {
                contentBase: './dist',
                port: 3000
            }
        };

        module.exports = config;
    `;
    return { template, dir: "", name: "webpack.config.js" };
  };
  