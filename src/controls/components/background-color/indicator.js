/**
 * WordPress dependencies
 */
import { ColorIndicator } from '@wordpress/components';
import { getColorObjectByColorValue, withColorContext } from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Renders the color indicator in "Background" panel.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function BackgroundColorIndicator( props ) {
	const { color, colors } = props;

	if ( ! color ) {
		return null;
	}

	const colorObject = getColorObjectByColorValue( colors, color );
	const colorName = colorObject && colorObject.name;
	const ariaLabel = sprintf(
		__( '(Background Color: %s)' ),
		colorName || color
	);

	return (
		<ColorIndicator
			colorValue={ color }
			aria-label={ ariaLabel }
		/>
	);
}

export default withColorContext( BackgroundColorIndicator );
