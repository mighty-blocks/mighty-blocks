/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Internal dependencies
 */
import {
	ITEMS_DEFAULT,
	CURRENT_DEFAULT,
} from './defaults';

/**
 * The reducer that keeps track of the breakpoints.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function items( state = ITEMS_DEFAULT ) {
	return state;
}

/**
 * The reducer that keeps track of the currently
 * active breakpoint.
 *
 * @param  {?string} state
 * @param  {Object} action
 * @return {Object}
 */
export function current( state = CURRENT_DEFAULT, action ) {
	switch ( action.type ) {
		case 'SELECT_BREAKPOINT':
			return action.payload.slug;

		default:
			return state;
	}
}

export default combineReducers( {
	items,
	current,
} );
