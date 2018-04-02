const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
	devtool: 'inline-source-map',
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		// Create HTML file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
	],
	optimization: {
		namedModules: true
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{test: /\.html$/, exclude: /index.html/, use: ['html-loader']},
			{test: /\.(png|jp(e*)g|png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader']}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		hot: true,
		inline: true,
		port: 3000,
		historyApiFallback: true,
		open: true
	}
}
