/**
 * External dependencies
 */
import { isUndefined } from 'lodash';

/**
 * WordPress dependencies
 */
import {
	Fragment,
	useMemo,
	useState,
	useCallback,
} from '@wordpress/element';
import {
	BaseControl,
	RangeControl,
	SelectControl,
	TabPanel,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import schema from './schema';
import ColorPicker from '../../../components/color-picker';
import { BreakpointsSwitcher } from '../../../components/breakpoints';
import { withScopedAttributeValues } from '../../attributes';
import {
	getSideTabs,
	getStyleOptions,
	getValuesOrAccessorsBySide,
	createSideAttributeIdentifier,
} from './utils';
import {
	BORDER_SIDE_ALL,
	BORDER_STYLE_SOLID,
} from './constants';

/**
 * Renders the "Border" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
export function BorderControl( props ) {
	const {
		values,
		accessors,
		breakpoint,
		onChange,
	} = props;

	const [ selectedSide, setSelectedSide ] = useState( BORDER_SIDE_ALL );
	const selectedSideValues = useMemo( () => getValuesOrAccessorsBySide( values, selectedSide ), [ values, selectedSide ] );
	const selectedSideAccessors = useMemo( () => getValuesOrAccessorsBySide( accessors, selectedSide ), [ accessors, selectedSide ] );

	const handleChange = ( property, value ) => {
		const allValue = values[ createSideAttributeIdentifier( BORDER_SIDE_ALL, property ) ];

		// The value is same as the value of "All" side so
		// we can fallback to it.
		if ( value === allValue && ! isUndefined( allValue ) ) {
			value = undefined;
		}

		onChange( {
			[ selectedSideAccessors[ property ] ]: value,
		} );
	};

	const handleWidthChange = useCallback( ( value ) => handleChange( 'width', value ), [ selectedSideAccessors, onChange ] );
	const handleColorChange = useCallback( ( value ) => handleChange( 'color', value.color.toRgbString() ), [ selectedSideAccessors, onChange ] );
	const handleStyleChange = useCallback( ( value ) => handleChange( 'style', value ), [ selectedSideAccessors, onChange ] );
	const handleClearClick = useCallback( () => {
		onChange( {
			[ selectedSideAccessors.width ]: undefined,
			[ selectedSideAccessors.style ]: selectedSide === BORDER_SIDE_ALL ? BORDER_STYLE_SOLID : undefined,
			[ selectedSideAccessors.color ]: undefined,
		} );
	}, [ selectedSideAccessors, onChange ] );

	/* eslint-disable no-nested-ternary */
	return (
		<BaseControl
			className="mighty-blocks-control"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Side', 'mighty-blocks' ) }
					</span>

					<BreakpointsSwitcher />
				</Fragment>
			}
		>
			<TabPanel
				tabs={ getSideTabs() }
				activeClass="is-active"
				onSelect={ setSelectedSide }
			>
				{ () => {
					return (
						<Fragment key={ `${ selectedSide }-${ breakpoint.slug }` }>
							<RangeControl
								className="mighty-blocks-control mighty-blocks-control--inline"
								label={ __( 'Width', 'mighty-blocks' ) }
								min={ 0 }
								max={ 100 }
								initialPosition={
									(
										isUndefined( selectedSideValues.width ) &&
										! isUndefined( values.borderAllWidth )
									) ?
										values.borderAllWidth :
										0
								}
								value={
									isUndefined( selectedSideValues.width ) ?
										(
											isUndefined( values.borderAllWidth ) ?
												'' :
												values.borderAllWidth
										) :
										selectedSideValues.width
								}
								onChange={ handleWidthChange }
							/>

							<BaseControl
								className="mighty-blocks-control mighty-blocks-control--inline"
								label={ __( 'Color', 'mighty-blocks' ) }
							>
								<ColorPicker
									value={ selectedSideValues.color || values.borderAllColor }
									onChangeComplete={ handleColorChange }
								/>
							</BaseControl>

							<SelectControl
								className="mighty-blocks-control mighty-blocks-control--inline"
								label={ __( 'Style', 'mighty-blocks' ) }
								value={ selectedSideValues.style || values.borderAllStyle }
								options={ getStyleOptions() }
								onChange={ handleStyleChange }
							/>

							<Button
								className="mighty-blocks-control__clear"
								type="button"
								isSmall={ true }
								isDefault={ true }
								onClick={ handleClearClick }
							>
								{ __( 'Clear', 'mighty-blocks' ) }
							</Button>
						</Fragment>
					);
				} }
			</TabPanel>
		</BaseControl>
	);
}

export default withScopedAttributeValues( schema )( BorderControl );
