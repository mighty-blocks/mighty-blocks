/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';

/**
 * The units supported by the control.
 *
 * @type {Object[]}
 */
const UNITS = [
	{ label: 'px', value: 'px' },
	{ label: 'em', value: 'em' },
	{ label: '%', value: '%' },
];

/**
 * Renders the "Unit" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function UnitControl( props ) {
	const { units, ...restProps } = props;

	const options = useMemo( () => {
		if ( ! units ) {
			return UNITS;
		}

		return UNITS.filter( ( { value } ) => units.indexOf( value ) > -1 );
	}, [ units ] );

	return (
		<SelectControl
			options={ options }
			{ ...restProps }
		/>
	);
}

export default UnitControl;
