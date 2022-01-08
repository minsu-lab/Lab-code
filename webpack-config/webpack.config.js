const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./script.js",
    output : {
        path: __dirname,
        filename: 'build.js',
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(
        {
             cleanAfterEveryBuildPatterns: ['build.js'],
        }
    )],
};