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
	if ( control.type !== 'text-transform' ) {
		return attributes;
	}

	return merge( attributes, createScopedAttributesSchema( schema, {
		breakpoints,
		states,
	} ) );
}

addFilter(
	'mighty-blocks.controls.registerAttributes',
	'mighty-blocks/controls/components/text-transform',
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
	if ( control.type !== 'text-transform' ) {
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

			if ( ! attributes[ accessors.textTransform ] ) {
				return innerMemo;
			}

			const declarations = {
				textTransform: attributes[ accessors.textTransform ],
			};

			return merge( innerMemo, maybeWrapStylesInStateRule( declarations, state ) );
		}, {} );

		return merge( memo, maybeWrapStylesInMediaRule( result, breakpoint ) );
	}, styles );
}

addFilter(
	'mighty-blocks.controls.getStyles',
	'mighty-blocks/controls/components/text-transform',
	getStyles
);
