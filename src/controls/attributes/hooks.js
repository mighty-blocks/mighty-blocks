/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies
 */
import {
	isArray,
	isString,
	isUndefined,
	isPlainObject,
} from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter, applyFilters } from '@wordpress/hooks';
import { hasBlockSupport, getBlockSupport } from '@wordpress/blocks';
import { select } from '@wordpress/data';

/**
 * Adds a set of control attributes to the block types.
 *
 * @param  {Object} settings
 * @return {Object}
 */
export function addAttributes( settings ) {
	if ( ! hasBlockSupport( settings, 'controls' ) ) {
		return settings;
	}

	const { name } = settings;
	const controls = getBlockSupport( settings, 'controls' );

	if ( ! isArray( controls ) ) {
		console.error( 'Block controls must be an array.', name, controls );
		return settings;
	}

	const breakpoints = select( 'mighty-blocks/breakpoints' ).getBreakpoints();
	const states = select( 'mighty-blocks/states' ).getStates();

	// TODO: Remove this in favor of state in store.
	settings.supports.breakpoints = breakpoints;

	return controls.reduce( ( memo, control ) => {
		const {
			type,
			selector,
			params,
		} = control;

		if ( ! isString( type ) ) {
			console.error( 'Control type must be a string.', name, control );
			return memo;
		}

		if (
			! isUndefined( selector ) &&
			! isString( selector ) &&
			! isPlainObject( selector )
		) {
			console.error( 'Control selector must be a string, object or undefined.', name, control );
			return memo;
		}

		if ( ! isUndefined( params ) && ! isPlainObject( params ) ) {
			console.error( 'Control params must be an object.', name, control );
			return memo;
		}

		memo.attributes = applyFilters(
			'mighty-blocks.controls.registerAttributes',
			memo.attributes,
			control,
			breakpoints,
			states
		);

		return memo;
	}, settings );
}

addFilter(
	'blocks.registerBlockType',
	'mighty-blocks/controls/attributes',
	addAttributes
);
