/**
 * WordPress dependencies
 */
import { Fragment, useCallback } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import schema from './schema';
import { BreakpointsSwitcher } from '../../../components/breakpoints';
import { getFontFamilyOptions } from './utils';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Font Family" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function FontFamilyControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.fontFamily ]: value ? value : undefined,
		} );
	} );

	return (
		<SelectControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Font', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			value={ values.fontFamily }
			options={ getFontFamilyOptions() }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( FontFamilyControl );
