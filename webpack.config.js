const { DefinePlugin, LoaderOptionsPlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const poststylus = require('poststylus');
const { resolve, join } = require('path');

const plugins = [];
const minimizer = [];

// if(process.env.NODE_ENV != 'local') {
// 	minimizer.push(new UglifyJsPlugin({
// 		cache: true,
// 		parallel: true,
// 		uglifyOptions: {
// 			compress: true,
// 			ecma: 6,
// 			mangle: true
// 		},
// 		sourceMap: true
// 	}));
// }

plugins.push(new CompressionPlugin({
	asset: '[path].gz[query]',
	algorithm: 'gzip',
	test: /\.js$|\.css$|\.html$/,
	threshold: 0,
	minRatio: 0.8,
}));

plugins.push(new LoaderOptionsPlugin({
	options: {
		stylus: {
			use: [poststylus(['autoprefixer'])]
		}
	}
}));

plugins.push(new DefinePlugin({
	'process.env': {}
}));

module.exports = {
	entry: {
		app: resolve(__dirname, 'app/index.js')
	},
	output: {
		path: join(__dirname, 'public/dist'),
		filename: '[name].min.js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/dist/',
	},
	mode: 'development',
	devtool: '#source-map',
	module: {
		rules: [
			{
				test: /.js$/,
				include: [resolve('app')],
				loader: 'babel-loader'
			},
			{
      	test: /\.css$/,
      	use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /.styl$/,
				include: [resolve('app')],
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				}, {
					loader: 'stylus-loader',
					options: {
						'include css': true,
						preferPathResolver: 'webpack',
					}
				}]
			}
		]
	},
	resolve: {
		modules: ['node_modules', resolve('app')]
	},
	plugins,
	optimization: {
		minimizer
	}
};
