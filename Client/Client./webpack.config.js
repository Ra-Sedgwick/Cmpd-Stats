const path = require('path');

module.exports = {
    entry: ['./Scripts/ES6/Site.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/Build'),
        filename: 'bundle.js'
    },

    module: {

        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/
            }
        ]

    }

}