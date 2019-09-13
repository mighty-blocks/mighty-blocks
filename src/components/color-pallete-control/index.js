/**
 * WordPress dependencies
 */
import { BaseControl, ColorPalette } from '@wordpress/components';
import { withColorContext } from '@wordpress/block-editor';

/**
 * Re-implements the color palette control from Gutenberg.
 *
 * @see https://github.com/WordPress/gutenberg/issues/13018
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function ColorPaletteControl( props ) {
	const { label, ...restProps } = props;

	return (
		<BaseControl
			className="editor-color-palette-control mighty-blocks-color-palette-control"
			label={ label }
		>
			<ColorPalette
				className="editor-color-palette-control__color-palette mighty-blocks-color-palette-control__color-palette"
				{ ...restProps }
			/>
		</BaseControl>
	);
}

export default withColorContext( ColorPaletteControl );
