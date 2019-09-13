/**
 * Internal dependencies
 */
import {
	BORDER_STYLE_SOLID,
	BORDER_SIDE_ALL,
	BORDER_SIDE_TOP,
	BORDER_SIDE_RIGHT,
	BORDER_SIDE_BOTTOM,
	BORDER_SIDE_LEFT,
} from './constants';
import { createSideAttributeIdentifier } from './utils';

export default [
	BORDER_SIDE_ALL,
	BORDER_SIDE_TOP,
	BORDER_SIDE_RIGHT,
	BORDER_SIDE_BOTTOM,
	BORDER_SIDE_LEFT,
].reduce( ( memo, side ) => {
	return {
		...memo,
		[ createSideAttributeIdentifier( side, 'width' ) ]: {
			type: 'number',
		},
		[ createSideAttributeIdentifier( side, 'style' ) ]: {
			type: 'string',
			default: side === BORDER_SIDE_ALL ? BORDER_STYLE_SOLID : undefined,
		},
		[ createSideAttributeIdentifier( side, 'color' ) ]: {
			type: 'string',
		},
	};
}, {} );
