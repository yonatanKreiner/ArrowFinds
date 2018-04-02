const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports =  {
	entry: {
		vendor: ['babel-polyfill', path.resolve(__dirname, 'src/vendor')],
		main: ['babel-polyfill', path.resolve(__dirname, 'src/index')]
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js']
	},
	optimization: {
		concatenateModules: true,
		noEmitOnErrors: true,
		splitChunks: {
			name: 'vendor',
			minChunks: 2,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
					enforce: true
				}
			}
		},
		minimizer: [
			new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
      filename: "[name].css"
    }),

		// Create HTML file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			excludeChunks: ['base'],
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
				collapseInlineTagWhitespace: true
			},
			inject: 'head',
			// Properties defined here are available in index.html
			// using htmlWebpackPlugin.options.varName
			googleAnalyticsToken: 'UA-108800671-1',
			trackJSToken: 'c052939146f74fefbd3b4564797c0b10'
		}),

		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		})
	],
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
			{test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
			{test: /\.html$/, exclude: /index.html/, use: ['html-loader']},
			{test: /\.(png|jp(e*)g|png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader']}
		]
	}
}
