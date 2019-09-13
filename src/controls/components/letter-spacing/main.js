/**
 * WordPress dependencies
 */
import { Fragment, useCallback } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import schema from './schema';
import { BreakpointsSwitcher } from '../../../components/breakpoints';
import {
	LETTER_SPACING_DEFAULT_VALUE,
	LETTER_SPACING_MIN_VALUE,
	LETTER_SPACING_MAX_VALUE,
	LETTER_SPACING_STEP,
} from './constants';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Letter Spacing" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function LetterSpacingControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.letterSpacing ]: value ? Number( value ) : undefined,
		} );
	} );

	return (
		<RangeControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Letter Spacing', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			min={ LETTER_SPACING_MIN_VALUE }
			max={ LETTER_SPACING_MAX_VALUE }
			step={ LETTER_SPACING_STEP }
			initialPosition={ LETTER_SPACING_DEFAULT_VALUE }
			value={ values.letterSpacing }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( LetterSpacingControl );
