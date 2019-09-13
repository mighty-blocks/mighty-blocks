/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import FormatsToolbar from './toolbar';

/**
 * Extends the default formatting controls provided to the `RichText` component.
 *
 * @param  {WPComponent} RichText
 * @return {Function}
 */
export const withFormattingControls = createHigherOrderComponent( ( RichText ) => {
	/**
	 * Renders the original `RichText` component with additional formatting controls.
	 *
	 * @param  {Object} props
	 * @return {WPElement}
	 */
	return ( props ) => {
		return (
			<Fragment>
				<RichText { ...props } />

				{ props.isSelected && (
					<FormatsToolbar />
				) }
			</Fragment>
		);
	};
}, 'withFormattingControls' );

addFilter(
	'experimentalRichText',
	'mighty-blocks/formats',
	withFormattingControls
);
