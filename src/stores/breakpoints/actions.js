/**
 * Returns an action object used to select a breakpoint with the given slug.
 *
 * @param  {string} slug
 * @return {Object}
 */
export function selectBreakpoint( slug ) {
	return {
		type: 'SELECT_BREAKPOINT',
		payload: {
			slug,
		},
	};
}
