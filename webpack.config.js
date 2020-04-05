const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:{
        'common-utils':'./src/index.js',
        'common-utils.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'common-utils',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}