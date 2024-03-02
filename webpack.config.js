const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "./build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          template: "./public/index.html"
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    devServer: {
        hot: true,
        port: 3001
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx?)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    ['@babel/preset-env', { targets: "defaults" }], "@babel/preset-react"
                ]
              },
            },
          },
        ]
    }
}