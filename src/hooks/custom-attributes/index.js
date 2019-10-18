/**
 * External dependencies
 */
import { assign } from 'lodash';

/**
 * WordPress dependencies
 */
import { hasBlockSupport } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import CustomAttributesProvider from './provider';

/**
 * Adds a set of custom attributes to the blocks.
 *
 * @param  {Object} settings
 * @return {Object}
 */
export function addCustomAttributes( settings ) {
	const { attributes } = settings;

	if ( hasBlockSupport( settings, 'controls' ) ) {
		settings.attributes = assign( attributes, {
			mightyBlocksId: {
				type: 'string',
			},
			mightyBlocksStyles: {
				type: 'string',
			},
		} );
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'mighty-blocks/hooks/custom-attributes',
	addCustomAttributes
);

/**
 * Adds a unique identifier to the block.
 *
 * @param  {WPComponent} BlockEdit
 * @return {Function}
 */
export const withCustomAttributes = createHigherOrderComponent( ( BlockEdit ) => {
	/**
	 * Renders the original `BlockEdit` component with the unique identifier.
	 *
	 * @param  {Object} props
	 * @return {WPElement}
	 */
	return withSelect( ( select, { name } ) => {
		return {
			hasControls: select( 'core/blocks' ).hasBlockSupport( name, 'controls' ),
		};
	} )( ( props ) => {
		if ( ! props.hasControls ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		return (
			<CustomAttributesProvider { ...props }>
				<BlockEdit { ...props } />
			</CustomAttributesProvider>
		);
	} );
}, 'withCustomAttributes' );

addFilter(
	'editor.BlockEdit',
	'mighty-blocks/hooks/custom-attributes',
	withCustomAttributes
);
