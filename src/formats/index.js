/**
 * External dependencies
 */
import requireContext from 'require-context.macro';

/**
 * Internal dependencies
 */
import './hooks';

/**
 * Registers the `RichText` formats provided by the plugin.
 *
 * @return {void}
 */
export function registerFormats() {
	const requireFormat = requireContext( '.', true, /index\.js$/ );

	requireFormat.keys().forEach( requireFormat );
}
