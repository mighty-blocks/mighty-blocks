/**
 * External dependencies
 */
import { merge, isUndefined } from 'lodash';

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
	maybeWrapStylesInMediaRule,
	maybeWrapStylesInStateRule,
} from '../../styles';

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
	if ( control.type !== 'box-shadow' ) {
		return attributes;
	}

	return merge( attributes, createScopedAttributesSchema( schema, {
		breakpoints,
		states,
	} ) );
}

addFilter(
	'mighty-blocks.controls.registerAttributes',
	'mighty-blocks/controls/components/box-shadow',
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
	if ( control.type !== 'box-shadow' ) {
		return styles;
	}

	const {
		attributes,
		breakpoints,
		states,
	} = data;

	return breakpoints.reduce( ( memo, breakpoint ) => {
		const result = states.reduce( ( innerMemo, state ) => {
			const accessors = createScopedAttributesAccessors( schema, {
				state,
				breakpoint,
			} );

			if ( ! attributes[ accessors.boxShadowPreset ] ) {
				return innerMemo;
			}

			const declarations = {
				boxShadow: [
					attributes[ accessors.boxShadowPosition ],
					`${ attributes[ accessors.boxShadowOffsetX ] }px`,
					`${ attributes[ accessors.boxShadowOffsetY ] }px`,
					! isUndefined( attributes[ accessors.boxShadowBlur ] ) ? `${ attributes[ accessors.boxShadowBlur ] }px` : '',
					! isUndefined( attributes[ accessors.boxShadowSpread ] ) ? `${ attributes[ accessors.boxShadowSpread ] }px` : '',
					attributes[ accessors.boxShadowColor ],
				].join( ' ' ),
			};

			return merge( innerMemo, maybeWrapStylesInStateRule( declarations, state ) );
		}, {} );

		return merge( memo, maybeWrapStylesInMediaRule( result, breakpoint ) );
	}, styles );
}

addFilter(
	'mighty-blocks.controls.getStyles',
	'mighty-blocks/controls/components/box-shadow',
	getStyles
);
