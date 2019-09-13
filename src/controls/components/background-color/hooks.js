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
	'mighty-blocks/controls/components/background-color',
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

	if ( ! attributes[ accessors.backgroundColor ] ) {
		return declarations;
	}

	declarations.push( {
		type: 'background',
		value: attributes[ accessors.backgroundColor ],
		priority: 30,
	} );

	return declarations;
}

addFilter(
	'mighty-blocks.background-control.getDeclarations',
	'mighty-blocks/controls/components/background-color',
	getDeclarations
);
