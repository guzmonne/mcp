var path = require('path')
var getConfig = require('hjs-webpack')
var webpack = require('webpack')

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	output: {
		hash: true
	},
	urlLoaderLimit: 10000,
	html: function(context){
		return {
			'index.html': context.defaultTemplate(),
			'200.html': context.defaultTemplate()
		}
	}
})

config.plugins || (config.plugins = [])

config.plugins = config.plugins.concat([
	
])

console.log(config)

module.exports = config;
