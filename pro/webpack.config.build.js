const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname+'/dist'),//不管是js还是html文件都是以这个路径输出
		filename: 'app.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',//模板文件路径
			filename: 'index.html'//按照模板文件处理后（加了js引入）的文件名字
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
