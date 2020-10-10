const path = require('path');

module.exports = {
	entry: './src/base/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendor: {
	// 				chunks: 'initial',
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name: 'vendor',
	// 				enforce: true,
	// 			},
	// 		},
	// 	},
	// },
	devtool: 'source-map',
};
