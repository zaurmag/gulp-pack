const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/base/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'scripts.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: [
							['@babel/preset-env', {modules: false}],
						],
					},
				},
			},
		],
	},
	mode: 'development',
	watch: true,
	devtool: 'source-map',
};

// eslint-disable-next-line eqeqeq
if (NODE_ENV === 'production') {
	module.exports.plugins(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true,
			},
		}),
	);
}
