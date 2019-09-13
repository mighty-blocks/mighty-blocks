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
	LINE_HEIGHT_DEFAULT_VALUE,
	LINE_HEIGHT_MIN_VALUE,
	LINE_HEIGHT_MAX_VALUE,
	LINE_HEIGHT_STEP_VALUE,
} from './constants';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Line Height" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function LineHeightControl( props ) {
	const {
		accessors,
		values,
		onChange,
	} = props;

	const handleChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.lineHeight ]: value ? Number( value ) : undefined,
		} );
	} );

	return (
		<RangeControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Line Height', 'mighty-block' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
			min={ LINE_HEIGHT_MIN_VALUE }
			max={ LINE_HEIGHT_MAX_VALUE }
			step={ LINE_HEIGHT_STEP_VALUE }
			initialPosition={ LINE_HEIGHT_DEFAULT_VALUE }
			value={ values.lineHeight }
			onChange={ handleChange }
		/>
	);
}

export default withScopedAttributeValues( schema )( LineHeightControl );
