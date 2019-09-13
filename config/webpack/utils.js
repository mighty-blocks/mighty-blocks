/**
 * External dependencies
 */
const { resolve } = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

/**
 * Returns a module configuration to extract CSS styles
 * into their own file.
 *
 * @param  {RegExp} pattern
 * @param  {string} name
 * @return {Object}
 */
function extractStyles( pattern, name ) {
	const plugin = new ExtractTextPlugin( {
		filename: name,
	} );

	const rule = {
		test: pattern,
		use: plugin.extract( {
			use: [
				{
					loader: 'css-loader',
					options: {
						importLoaders: 3,
					},
				},
				{ loader: 'postcss-loader' },
				{ loader: 'sass-loader' },
				{
					loader: 'sass-resources-loader',
					options: {
						resources: [
							resolve( './src/styles/settings/*.scss' ),
							resolve( './src/styles/tools/*.scss' ),
						],
					},
				},
			],
		} ),
	};

	return {
		plugin,
		rule,
	};
}

module.exports = {
	extractStyles,
};
