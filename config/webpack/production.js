/**
 * External dependencies.
 */
const merge = require( 'webpack-merge' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

/**
 * Internal dependencies.
 */
const base = require( './base' );
const { extractStyles } = require( './utils' );

const editorCSS = extractStyles( /editor\.scss$/, 'editor.min.css' );

module.exports = merge( base, {
	mode: 'production',

	output: {
		filename: '[name].min.js',
	},

	module: {
		rules: [
			editorCSS.rule,
		],
	},

	plugins: [
		editorCSS.plugin,

		new TerserPlugin( {
			cache: true,
			parallel: true,
		} ),

		new OptimizeCssAssetsPlugin( {
			cssProcessorPluginOptions: {
				preset: [ 'default', { discardComments: { removeAll: true } } ],
			},
		} ),
	],
} );
