var path = require('path');

module.exports = {
    context: __dirname,
    entry: ['./src/login.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        library: '$',
        libraryTarget: 'umd',
        filename: 'libpack.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    mode: "development",

}