/**
 * External dependencies
 */
import cx from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { withSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Applies an `is-selected-next-sibling`, `is-selected-previous-sibling` and `is-parent-selected` class name
 * to the parent element of the block.
 *
 * @param  {WPComponent} BlockListBlock
 * @return {Function}
 */
const withSelectedClassNames = createHigherOrderComponent( ( BlockListBlock ) => {
	/**
	 * Renders the original `BlockListBlock` component with additional class names.
	 *
	 * @param  {Object} props
	 * @return {WPElement}
	 */
	return withSelect( ( select, ownProps ) => {
		const {
			clientId,
			rootClientId,
			className,
		} = ownProps;

		const {
			getNextBlockClientId,
			getPreviousBlockClientId,
			getSelectedBlockClientId,
		} = select( 'core/block-editor' );

		const nextClientId = getNextBlockClientId( clientId );
		const previousClientId = getPreviousBlockClientId( clientId );
		const selectedClientId = getSelectedBlockClientId();

		const classes = cx(
			className,
			{
				'is-parent-selected': selectedClientId && selectedClientId === rootClientId,
				'is-selected-next-sibling': selectedClientId && selectedClientId === previousClientId,
				'is-selected-previous-sibling': selectedClientId && selectedClientId === nextClientId,
			}
		);

		return { className: classes };
	} )( ( props ) => {
		return (
			<BlockListBlock { ...props } />
		);
	} );
}, 'withSelectedClassNames' );

addFilter(
	'editor.BlockListBlock',
	'mighty-blocks/hooks/selected-class-names',
	withSelectedClassNames
);
