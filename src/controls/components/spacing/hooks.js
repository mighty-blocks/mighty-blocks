/**
 * External dependencies
 */
import { merge, isNumber } from 'lodash';

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
import {
	getPrefixedProperty,
	maybeWrapStylesInMediaRule,
	maybeWrapStylesInStateRule,
} from '../../styles';
import { getControlPrefix } from '../../utils';

/**
 * Adds the control attributes to the block type.
 *
 * @param  {Object} attributes
 * @param  {Object} control
 * @param  {Object[]} breakpoints
 * @param  {Object[]} states
 * @return {Object}
 */
export function addAttributes( attributes, control, breakpoints, states ) {
	if ( control.type !== 'spacing' ) {
		return attributes;
	}

	return merge( attributes, createScopedAttributesSchema( schema, {
		prefix: getControlPrefix( control ),
		breakpoints,
		states,
	} ) );
}

addFilter(
	'mighty-blocks.controls.registerAttributes',
	'mighty-blocks/controls/components/spacing',
	addAttributes
);

/**
 * Returns the collected styles from the control.
 *
 * @param  {Object} styles
 * @param  {Object} control
 * @param  {Object} data
 * @return {Object}
 */
export function getStyles( styles, control, data ) {
	if ( control.type !== 'spacing' ) {
		return styles;
	}

	const {
		attributes,
		breakpoints,
		states,
	} = data;

	const prefix = getControlPrefix( control );

	return breakpoints.reduce( ( memo, breakpoint ) => {
		const result = states.reduce( ( innerMemo, state ) => {
			const accessors = createScopedAttributesAccessors( schema, {
				prefix,
				state,
				breakpoint,
			} );

			const getValue = ( property ) => {
				const value = attributes[ accessors[ property ] ];

				if ( ! isNumber( value ) ) {
					return;
				}

				return `${ value }${ attributes[ accessors.unit ] }`;
			};

			const declarations = {
				[ getPrefixedProperty( 'top', prefix ) ]: getValue( 'top' ),
				[ getPrefixedProperty( 'right', prefix ) ]: getValue( 'right' ),
				[ getPrefixedProperty( 'bottom', prefix ) ]: getValue( 'bottom' ),
				[ getPrefixedProperty( 'left', prefix ) ]: getValue( 'left' ),
			};

			return merge( innerMemo, maybeWrapStylesInStateRule( declarations, state ) );
		}, {} );

		return merge( memo, maybeWrapStylesInMediaRule( result, breakpoint ) );
	}, styles );
}

addFilter(
	'mighty-blocks.controls.getStyles',
	'mighty-blocks/controls/components/spacing',
	getStyles
);
