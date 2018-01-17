const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	
	output: {
		path: __dirname,
		filename: 'dist/app.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html'
			
		})
	],
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
		
		
	}
}
