/**
 * External dependencies
 */
import { merge } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import schema from './schema';
import {
	createScopedAttributesSchema,
	createScopedAttributesAccessors,
} from '../../attributes';

/**
 * Extends the control attributes.
 *
 * @param  {Object} attributes
 * @param  {Object[]} breakpoints
 * @param  {Object[]} states
 * @return {Object}
 */
export function getAttributes( attributes, breakpoints, states ) {
	return merge( attributes, createScopedAttributesSchema( schema, {
		breakpoints,
		states,
	} ) );
}

addFilter(
	'mighty-blocks.background-control.getAttributes',
	'mighty-blocks/controls/components/background-image',
	getAttributes
);

/**
 * Returns the collected declarations.
 *
 * @param  {Object[]} declarations
 * @param  {Object} attributes
 * @param  {Object} breakpoint
 * @param  {Object} state
 * @return {Object}
 */
export function getDeclarations( declarations, attributes, breakpoint, state ) {
	const accessors = createScopedAttributesAccessors( schema, {
		breakpoint,
		state,
	} );

	if ( ! attributes[ accessors.backgroundImageUrl ] ) {
		return declarations;
	}

	declarations.push( {
		type: 'background',
		value: [
			`url(${ attributes[ accessors.backgroundImageUrl ] })`,
			attributes[ accessors.backgroundImagePosition ],
			attributes[ accessors.backgroundImageRepeat ],
		].join( ' ' ),
		priority: 10,
	} );

	declarations.push( {
		type: 'backgroundSize',
		value: attributes[ accessors.backgroundImageSize ],
		priority: 10,
	} );

	declarations.push( {
		type: 'backgroundBlendMode',
		value: attributes[ accessors.backgroundImageBlendMode ],
		priority: 10,
	} );

	return declarations;
}

addFilter(
	'mighty-blocks.background-control.getDeclarations',
	'mighty-blocks/controls/components/background-image',
	getDeclarations
);
