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
import { getTextTransformOptions } from './utils';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Text Transform" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function TextTransformControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.textTransform ]: value ? value : undefined,
		} );
	} );

	return (
		<SelectControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Transform', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			value={ values.textTransform }
			options={ getTextTransformOptions() }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( TextTransformControl );
