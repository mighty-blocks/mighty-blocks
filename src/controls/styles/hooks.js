/**
 * External dependencies
 */
import cx from 'classnames';

/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { blockNameToClassName } from '../../utils';
import StylesCollector from './collector';
import StylesProvider from './provider';

/**
 * Runs the monitor that collects
 * the styles for the frontend.
 */
window._wpLoadBlockEditor.then( () => {
	render(
		<StylesCollector />,
		document.createElement( 'div' )
	);
} );

/**
 * Applies the gathered styles from the controls to the block.
 *
 * @param  {WPComponent} BlockListBlock
 * @return {Function}
 */
const withStylesToBlockListBlock = createHigherOrderComponent( ( BlockListBlock ) => {
	/**
	 * Renders the original `BlockListBlock` component with additional styles.
	 *
	 * @param  {Object} props
	 * @return {WPElement}
	 */
	return withSelect( ( select, props ) => {
		const { hasBlockSupport } = select( 'core/blocks' );

		return {
			hasControls: hasBlockSupport( props.name, 'controls', false ),
		};
	} )( ( props ) => {
		const {
			name,
			attributes,
			hasControls,
		} = props;

		if ( ! hasControls ) {
			return (
				<BlockListBlock { ...props } />
			);
		}

		return (
			<StylesProvider name={ name } attributes={ attributes }>
				{ ( { className } ) => {
					const { className: originalClassName, ...restProps } = props;

					return (
						<BlockListBlock
							className={ cx( originalClassName, className ) }
							{ ...restProps }
						/>
					);
				} }
			</StylesProvider>
		);
	} );
}, 'withStylesToBlockListBlock' );

addFilter(
	'editor.BlockListBlock',
	'mighty-blocks/controls/styles',
	withStylesToBlockListBlock
);

/**
 * Saves CSS class name used to apply the control styles.
 *
 * @param  {Object} props
 * @param  {string} blockType
 * @param  {Object} attributes
 * @return {Object}
 */
function saveStylesClassName( props, blockType, attributes ) {
	const { mightyBlocksId } = attributes;

	if ( mightyBlocksId ) {
		props.className = cx(
			props.className,
			blockNameToClassName( blockType.name, mightyBlocksId )
		);
	}

	return props;
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'mighty-blocks/controls/styles',
	saveStylesClassName
);
