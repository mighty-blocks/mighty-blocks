/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

/**
 * Registers the store.
 */
registerStore( 'mighty-blocks/breakpoints', {
	reducer,
	actions,
	selectors,
} );
