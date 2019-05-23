const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: "./src/js/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build")
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss/,
				use: [
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};

if (process.env.NODE_ENV !== "production") {
	config.devServer = {
		hot: true,
		publicPath: "/build/",
		port: 9001,
		quiet: false
	};

	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	);
}

module.exports = config;
