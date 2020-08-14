var path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", "*"],
    },
    module: {
        rules: [
            {
                test: [/\.js?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env"],
                    },
                },
            },
        ],
    },
};
