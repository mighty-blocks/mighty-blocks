/**
 * External dependencies
 */
import createSelector from 'rememo';
import { find } from 'lodash';

/**
 * Returns all states.
 *
 * @param  {Object} state
 * @return {Object[]}
 */
export function getStates( state ) {
	return state.items;
}

/**
 * Returns the currently selected state, or null if there is no selected state.
 *
 * @param  {Object} state
 * @return {?Object}
 */
export const getCurrentState = createSelector(
	( state ) => {
		return find( state.items, [ 'slug', state.current ] ) || null;
	},
	( state ) => ( [
		state.items,
		state.current,
	] )
);
