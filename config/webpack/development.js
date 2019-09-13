/**
 * External dependencies.
 */
const merge = require( 'webpack-merge' );

/**
 * Internal dependencies.
 */
const base = require( './base' );
const { extractStyles } = require( './utils' );

const editorCSS = extractStyles( /editor\.scss$/, 'editor.css' );

module.exports = merge( base, {
	mode: 'development',

	output: {
		filename: '[name].js',
	},

	module: {
		rules: [
			editorCSS.rule,
		],
	},

	plugins: [
		editorCSS.plugin,
	],

	devtool: 'cheap-eval-source-map',
} );
