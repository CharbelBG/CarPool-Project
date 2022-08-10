const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/.js$/i,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react'],
                    }
                }
            },
            {
                test:/.(png|jpg|jpeg|svg|gif)$/i,
                type:'asset/resource',
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
        })
    ]
}