/**
 * External dependencies
 */
import {
	flow,
	merge,
	reduce,
	orderBy,
} from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter, applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import schema from './schema';
import { createScopedAttributesSchema } from '../../attributes';
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
	if ( control.type !== 'background' ) {
		return attributes;
	}

	return merge(
		attributes,
		createScopedAttributesSchema( schema, {
			breakpoints,
			states,
		} ),
		applyFilters(
			'mighty-blocks.background-control.getAttributes',
			attributes,
			breakpoints,
			states
		)
	);
}

addFilter(
	'mighty-blocks.controls.registerAttributes',
	'mighty-blocks/controls/components/background',
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
	if ( control.type !== 'background' ) {
		return styles;
	}

	const {
		attributes,
		breakpoints,
		states,
	} = data;

	return breakpoints.reduce( ( memo, breakpoint ) => {
		const result = states.reduce( ( innerMemo, state ) => {
			return flow( [
				( declarations ) => orderBy( declarations, [ 'priority' ] ),
				( declarations ) => reduce( declarations, ( declarationsMemo, declaration ) => {
					const { type } = declaration;

					if ( ! declarationsMemo[ type ] ) {
						declarationsMemo[ type ] = '';
					}

					if ( declarationsMemo[ type ] ) {
						declarationsMemo[ type ] += `, ${ declaration.value }`;
					} else {
						declarationsMemo[ type ] += declaration.value;
					}

					return declarationsMemo;
				}, {} ),
				( declarations ) => merge( innerMemo, maybeWrapStylesInStateRule( declarations, state ) ),
			] )( applyFilters(
				'mighty-blocks.background-control.getDeclarations',
				[],
				attributes,
				breakpoint,
				state
			) );
		}, {} );

		return merge( memo, maybeWrapStylesInMediaRule( result, breakpoint ) );
	}, styles );

	// let declarations;

	// declarations = ;
	// declarations = orderBy( declarations, [ 'priority' ] );
	// declarations = reduce( declarations, ( memo, declaration ) => {
	// 	const { type } = declaration;

	// 	if ( ! memo[ type ] ) {
	// 		memo[ type ] = '';
	// 	}

	// 	if ( memo[ type ] ) {
	// 		memo[ type ] += `, ${ declaration.value }`;
	// 	} else {
	// 		memo[ type ] += declaration.value;
	// 	}

	// 	return memo;
	// }, {} );

	// return merge( styles, declarations );
}

addFilter(
	'mighty-blocks.controls.getStyles',
	'mighty-blocks/controls/components/background',
	getStyles
);
