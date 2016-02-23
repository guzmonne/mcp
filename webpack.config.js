var getConfig = require('hjs-webpack')

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: '!(images|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	output: {
		hash: true
	},
	urlLoaderLimit: 10000
})

console.log(config.module.loaders.filter(
	function(l){
		console.log(l.loader);
		return false;
		//return l.loader.includes('sass')
	})
)

module.exports = config;