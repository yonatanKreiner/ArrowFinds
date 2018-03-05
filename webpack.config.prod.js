const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
	plugins: [
		new BundleAnalyzerPlugin({analyzerMode: 'static', openAnalyzer: true}),

		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),	

		new webpack.optimize.ModuleConcatenationPlugin(),

		new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

		// Generate an external css file with a hash in the filename
		new ExtractTextPlugin('[name].[contenthash].css'),

		// Hash the files using MD5 so that their names change when the content changes
		new WebpackMd5Hash(),

		new webpack.HashedModuleIdsPlugin(),

		// Create a seperate bundle of vendor libraries to cache seperately
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.[chunkhash].js',
			minChunks (module) {
				return module.context &&
					module.context.indexOf('node_modules') >= 0;
			}
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

		new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
		}),

		new PreloadWebpackPlugin({
			rel: 'preload',
			as: 'script',
			include: 'all',
			fileBlacklist: [/\.(css|map)$/, /base?.+/]
		}),

		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		}),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			output: {
				comments: false
			}
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
			{
				test: /\.css$/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ 
							loader: 'css-loader',
							options: { minimize: true } 
						}
					]
				})
			},
			{test: /\.html$/, exclude: /index.html/, use: ['html-loader']},
			{test: /\.(png|jp(e*)g|png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader']}
		]
	}
}
