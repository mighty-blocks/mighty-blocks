/**
 * External dependencies
 */
import requireContext from 'require-context.macro';

/**
 * Registers the stores provided by the plugin.
 *
 * @return {void}
 */
export function registerStores() {
	const requireStore = requireContext(
		'.', // Look only in the current directory.
		true, // Look in the sub-directories.
		/^\.\/[^\/]+\/index\.js$/ // Include only top-level files.
	);

	requireStore.keys().forEach( requireStore );
}
