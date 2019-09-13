/* eslint quote-props: off */

/**
 * External dependencies.
 */
const { resolve } = require( 'path' );

module.exports = {
	entry: {
		editor: resolve( './src/editor.js' ),
	},

	output: {
		path: resolve( './dist' ),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					},
				],
			},
		],
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'jquery': 'jQuery',
		'lodash': 'lodash',
		'@wordpress': 'wp',
		'@wordpress/i18n': 'wp.i18n',
		'@wordpress/data': 'wp.data',
		'@wordpress/hooks': 'wp.hooks',
		'@wordpress/blocks': 'wp.blocks',
		'@wordpress/plugins': 'wp.plugins',
		'@wordpress/element': 'wp.element',
		'@wordpress/compose': 'wp.compose',
		'@wordpress/components': 'wp.components',
		'@wordpress/rich-text': 'wp.richText',
		'@wordpress/block-editor': 'wp.blockEditor',
		'@wordpress/editor': 'wp.editor',
		'@wordpress/edit-post': 'wp.editPost',
		'@wordpress/dom-ready': 'wp.domReady',
		'@wordpress/api-fetch': 'wp.apiFetch',
	},

	stats: {
		modules: false,
		hash: false,
		builtAt: false,
		children: false,
	},
};
