/**
 * External dependencies
 */
import { isString } from 'lodash';

/**
 * Returns the prefix applied to the specified control.
 *
 * @param  {Object} control
 * @return {?string}
 */
export function getControlPrefix( control ) {
	const { params } = control;

	if ( ! params || ! isString( params.prefix ) ) {
		return;
	}

	return params.prefix;
}
