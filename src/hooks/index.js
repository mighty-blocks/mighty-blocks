/**
 * External dependencies
 */
import requireContext from 'require-context.macro';

/**
 * Registers the hooks provided by the plugin.
 *
 * @return {void}
 */
export function registerHooks() {
	const requireHook = requireContext(
		'.', // Look only in the current directory.
		true, // Look in the sub-directories.
		/^\.\/[^\/]+\/index\.js$/ // Include only top-level files.
	);

	requireHook.keys().forEach( requireHook );
}
