/**
 * WordPress dependencies
 */
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import schema from './schema';
import ColorPaletteControl from '../../../components/color-pallete-control';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Color" tab of the background control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
export function BackgroundControlColor( props ) {
	const {
		values,
		accessors,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.backgroundColor ]: value,
		} );
	}, [ onChange ] );

	return (
		<ColorPaletteControl
			value={ values.backgroundColor }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( BackgroundControlColor );
