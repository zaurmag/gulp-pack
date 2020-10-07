const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'scripts.js',
	},
	devtool: 'source-map',
};

// eslint-disable-next-line eqeqeq
if (NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true,
			},
		}),
	);
}
