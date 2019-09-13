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
	FONT_SIZE_DEFAULT_VALUE,
	FONT_SIZE_MIN_VALUE,
	FONT_SIZE_MAX_VALUE,
} from './constants';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Font Size" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function FontSizeControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.fontSize ]: value ? Number( value ) : undefined,
		} );
	} );

	return (
		<RangeControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Size', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			min={ FONT_SIZE_MIN_VALUE }
			max={ FONT_SIZE_MAX_VALUE }
			value={ values.fontSize }
			onChange={ handleChange }
			initialPosition={ FONT_SIZE_DEFAULT_VALUE }
		/>
	);
}

export default withScopedAttributeValues( schema )( FontSizeControl );
