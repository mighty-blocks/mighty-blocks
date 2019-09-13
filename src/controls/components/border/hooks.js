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
import {
	createSideAttributeIdentifier,
	getValuesOrAccessorsBySide,
} from './utils';
import {
	BORDER_SIDE_ALL,
	BORDER_SIDE_TOP,
	BORDER_SIDE_RIGHT,
	BORDER_SIDE_BOTTOM,
	BORDER_SIDE_LEFT,
} from './constants';

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
	if ( control.type !== 'border' ) {
		return attributes;
	}

	return merge( attributes, createScopedAttributesSchema( schema, {
		breakpoints,
		states,
	} ) );
}

addFilter(
	'mighty-blocks.controls.registerAttributes',
	'mighty-blocks/controls/components/border',
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
	if ( control.type !== 'border' ) {
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

			const accessorsAllSide = getValuesOrAccessorsBySide( accessors, BORDER_SIDE_ALL );

			const declarations = [
				BORDER_SIDE_ALL,
				BORDER_SIDE_TOP,
				BORDER_SIDE_RIGHT,
				BORDER_SIDE_BOTTOM,
				BORDER_SIDE_LEFT,
			].reduce( ( declarationsMemo, side ) => {
				const accessorsBySide = getValuesOrAccessorsBySide( accessors, side );

				if ( isUndefined( attributes[ accessorsBySide.width ] ) && side === BORDER_SIDE_ALL ) {
					return declarationsMemo;
				}

				return [
					'width',
					'style',
					'color',
				].reduce( ( innerDeclarationsMemo, property ) => {
					let value = attributes[ accessorsBySide[ property ] ];

					if (
						property === 'style' &&
						side !== BORDER_SIDE_ALL &&
						! isUndefined( attributes[ accessorsBySide.width ] ) &&
						isUndefined( attributes[ accessorsBySide.style ] )
					) {
						value = attributes[ accessorsAllSide.style ];
					}

					if ( isUndefined( value ) ) {
						return innerDeclarationsMemo;
					}

					if ( property === 'width' ) {
						value += 'px';
					}

					property = createSideAttributeIdentifier( side === BORDER_SIDE_ALL ? '' : side, property );

					innerDeclarationsMemo[ property ] = value;

					return innerDeclarationsMemo;
				}, declarationsMemo );
			}, {} );

			return merge( innerMemo, maybeWrapStylesInStateRule( declarations, state ) );
		}, {} );

		return merge( memo, maybeWrapStylesInMediaRule( result, breakpoint ) );
	}, styles );
}

addFilter(
	'mighty-blocks.controls.getStyles',
	'mighty-blocks/controls/components/border',
	getStyles
);
