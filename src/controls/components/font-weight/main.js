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
import { getFontWeightOptions } from './utils';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Font Weight" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function FontWeightControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.fontWeight ]: value ? Number( value ) : undefined,
		} );
	} );

	return (
		<SelectControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Weight', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			value={ values.fontWeight }
			options={ getFontWeightOptions() }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( FontWeightControl );
