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
import { getCSSGradient } from './utils';
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
	'mighty-blocks/controls/components/background-gradient',
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

	if (
		! attributes[ accessors.backgroundGradientStartColor ] &&
		! attributes[ accessors.backgroundGradientStopColor ]
	) {
		return declarations;
	}

	declarations.push( {
		type: 'background',
		value: getCSSGradient( {
			type: attributes[ accessors.backgroundGradientType ],
			angle: attributes[ accessors.backgroundGradientAngle ],
			startColor: attributes[ accessors.backgroundGradientStartColor ],
			stopColor: attributes[ accessors.backgroundGradientStopColor ],
			startPosition: attributes[ accessors.backgroundGradientStartPosition ],
			stopPosition: attributes[ accessors.backgroundGradientStopPosition ],
		} ),
		priority: attributes[ accessors.backgroundGradientAboveImage ] ? 9 : 11,
	} );

	return declarations;
}

addFilter(
	'mighty-blocks.background-control.getDeclarations',
	'mighty-blocks/controls/components/background-gradient',
	getDeclarations
);
