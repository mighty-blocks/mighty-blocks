/**
 * External dependencies
 */
import memize from 'memize';
import { some } from 'lodash';

/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import PanelSpacings from './spacings';
import PanelShadows from './shadows';
import PanelBackground from './background';
import PanelBorder from './border';
import PanelText from './text';
import { getControlPrefix } from '../utils';

/**
 * Shared reference to an empty array for cases where the block doesn't support
 * any of our controls.
 *
 * @type {Array}
 */
const EMPTY_ARRAY = [];

/**
 * @param  {Object[]} controls
 * @return {Function}
 */
const hasControl = memize( ( controls ) => {
	/**
	 * Returns whether the given control type is supported by the block.
	 *
	 * @param  {string} controlType
	 * @param  {string} [controlPrefix]
	 * @return {boolean}
	 */
	return memize( ( controlType, controlPrefix ) => {
		return some( controls, ( control ) => {
			const isSameType = control.type === controlType;

			if ( ! controlPrefix ) {
				return isSameType;
			}

			const isSamePrefix = getControlPrefix( control ) === controlPrefix;

			return isSameType && isSamePrefix;
		} );
	} );
} );

/**
 * Extends the inspector with the controls attached to the block.
 *
 * @param  {WPComponent} BlockEdit
 * @return {Function}
 */
export const withPanels = createHigherOrderComponent( ( BlockEdit ) => {
	/**
	 * Renders the original `BlockEdit` component with additional inspector controls.
	 *
	 * @param  {Object} props
	 * @return {WPElement}
	 */
	return withSelect( ( select, props ) => {
		const { getBlockSupport } = select( 'core/blocks' );
		const controls = getBlockSupport( props.name, 'controls', EMPTY_ARRAY );

		return {
			controls,
			hasControl: hasControl( controls ),
		};
	} )( ( props ) => {
		const { controls } = props;

		if ( ! controls.length ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />

				<InspectorControls>
					<PanelSpacings { ...props } />

					<PanelText { ...props } />

					<PanelBackground { ...props } />

					<PanelBorder { ...props } />

					<PanelShadows { ...props } />
				</InspectorControls>
			</Fragment>
		);
	} );
}, 'withPanels' );

/**
 * This function must be called before our other hooks
 * so we can add proper configuration to the core blocks.
 */
addFilter(
	'editor.BlockEdit',
	'mighty-blocks/hooks/controls',
	withPanels
);
