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
 * The reducer that keeps track of the states.
 *
 * @param  {Object} state
 * @return {Object}
 */
export function items( state = ITEMS_DEFAULT ) {
	return state;
}

/**
 * The reducer that keeps track of the currently
 * active state.
 *
 * @param  {?string} state
 * @return {Object}
 */
export function current( state = CURRENT_DEFAULT ) {
	return state;
}

export default combineReducers( {
	items,
	current,
} );
