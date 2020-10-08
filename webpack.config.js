const path = require('path');

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
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					test: /node_modules/,
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
	devtool: 'source-map',
};
