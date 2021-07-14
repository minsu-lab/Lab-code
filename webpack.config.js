
// const pkg = require('./package');
const path = require('path');
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

let folder = 'flip-time'
module.exports = {
	mode: 'development',
	entry: {
		// 'sample': "./web_site/src/js/sample.js",
		// 'dn_index': "./web_site/src/js/dn_index.js",
		/* 'index': "./slider/src/js/index.js",
		'slider': "./slider/src/js/slider.js", */
	     filename :path.resolve(__dirname,  `${folder}/src/js/${folder}.js`),
		// about: './src/js/about.js'
	},
	output: {
		path: path.resolve(__dirname, `${folder}/dist/js`),
		filename: `${folder}.js`,
		library: 'sass-test',
		libraryExport: 'default',
		libraryTarget: 'window'
	},
	/* resolve: {
		alias:{
			'@page': path.resolve(__dirname, `${folder}/dist/js`),
			'@src' :path.resolve(__dirname, `${folder}/src/`)
		},
			modules: [
				path.join(__dirname, './node_modules')
			]
	}, */
	/* resolve: {
		alias:{
			'@page': path.resolve(__dirname, `${folder}/dist/js`),
			'@src' :path.resolve(__dirname, `${folder}/src/`)
		},
	}, */
	module:{
		rules:
		[
			{
				test:/\.js$/,
				use:{
					loader: 'babel-loader',
					options:{
						presets:[
							[
								'@babel/preset-env',
								{
									modules: 'auto',
									targets : {
										'browsers' :[
											'last 2 versions',
											'ie >= 10'
										]
									}
								}
							]
						]
					}
				}
			}
		]
	},

}