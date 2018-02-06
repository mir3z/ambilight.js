const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "main.js"),
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    devServer: {
        contentBase: __dirname
    },
    devtool: "#cheap-module-eval-source-map"
};