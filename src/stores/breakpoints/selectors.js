/**
 * External dependencies
 */
import createSelector from 'rememo';
import { find } from 'lodash';

/**
 * Returns all breakpoints.
 *
 * @param  {Object} state
 * @return {Object[]}
 */
export function getBreakpoints( state ) {
	return state.items;
}

/**
 * Returns the currently selected breakpoint, or null if there is no selected breakpoint.
 *
 * @param  {Object} state
 * @return {?Object}
 */
export const getCurrentBreakpoint = createSelector(
	( state ) => {
		return find( state.items, [ 'slug', state.current ] ) || null;
	},
	( state ) => ( [
		state.items,
		state.current,
	] )
);
