const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "ambilight",
        filename: "ambilight.js"
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }),
    ],

    devtool: "source-map"
};