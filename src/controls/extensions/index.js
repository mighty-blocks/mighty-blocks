/**
 * External dependencies
 */
import { assign } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { isCoreBlock } from '../../utils';

/**
 * Adds the controls to the core blocks.
 *
 * @param  {Object} settings
 * @return {Object}
 */
export function addControls( settings ) {
	if ( ! isCoreBlock( settings.name ) ) {
		return settings;
	}

	let { name } = settings;

	// Fallback all embeds to `core/embed` block.
	if ( name.indexOf( 'core-embed' ) === 0 ) {
		name = 'core/embed';
	}

	if ( ! window.mightyBlocks.controls[ name ] ) {
		return settings;
	}

	settings.supports = assign( settings.supports, {
		controls: window.mightyBlocks.controls[ name ],
	} );

	return settings;
}

/**
 * This function must be called before our other hooks
 * in order to attach the controls to the core blocks.
 */
addFilter(
	'blocks.registerBlockType',
	'mighty-blocks/controls/extensions',
	addControls,
	9
);
