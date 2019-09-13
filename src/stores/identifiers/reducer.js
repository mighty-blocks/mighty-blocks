/**
 * External dependencies
 */
import { omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * The reducer that keeps track of the identifiers.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
export function items( state = {}, action ) {
	switch ( action.type ) {
		case 'TRACK_IDENTIFIER':
			const { identifier, clientId } = action.payload;

			// Overwriting of already tracked identifier isn't allowed.
			if ( state[ identifier ] && state[ identifier ] !== clientId ) {
				return state;
			}

			return {
				...state,
				[ identifier ]: clientId,
			};

		case 'UNTRACK_IDENTIFIER':
			return omit( state, action.payload.identifier );

		default:
			return state;
	}
}

export default combineReducers( {
	items,
} );
