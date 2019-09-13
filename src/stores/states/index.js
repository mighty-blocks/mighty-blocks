/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';

/**
 * Registers the store.
 */
registerStore( 'mighty-blocks/states', {
	reducer,
	selectors,
} );
