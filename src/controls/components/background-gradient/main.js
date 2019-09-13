/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import {
	Button,
	BaseControl,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import schema from './schema';
import ColorPicker from '../../../components/color-picker';
import Preview from './preview';
import {
	BACKGROUND_GRADIENT_LINEAR,
	BACKGROUND_GRADIENT_RADIAL,
} from './constants';
import { getGradientTypeOptions } from './utils';
import { withScopedAttributeValues } from '../../attributes';

class BackgroundControlGradient extends Component {
	/**
	 * Constructor.
	 *
	 * @return {void}
	 */
	constructor() {
		super( ...arguments );

		this.handleTypeChange = this.handleTypeChange.bind( this );
		this.handlePlaceAboveChange = this.handlePlaceAboveChange.bind( this );
		this.handleClearClick = this.handleClearClick.bind( this );
	}

	/**
	 * Handles the change of the color pickers.
	 *
	 * @param  {string} property
	 * @param  {string} value
	 * @return {void}
	 */
	handlePickerChange( property, value ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors[ property ] ]: value.color.toRgbString(),
		} );
	}

	/**
	 * Handles the change of the "Gradient Type" select.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handleTypeChange( value ) {
		const { accessors, onChange } = this.props;
		const attributes = {
			[ accessors.backgroundGradientType ]: value,
		};

		if ( value === BACKGROUND_GRADIENT_RADIAL ) {
			attributes[ accessors.backgroundGradientAngle ] = 0;
		}

		onChange( attributes );
	}

	/**
	 * Handles the change of the range controls.
	 *
	 * @param  {string} property
	 * @param  {string} value
	 * @return {void}
	 */
	handleRangeChange( property, value ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors[ property ] ]: value,
		} );
	}

	/**
	 * Handles the change of the "Place above image" toggle.
	 *
	 * @return {void}
	 */
	handlePlaceAboveChange() {
		const {
			values,
			accessors,
			onChange,
		} = this.props;

		onChange( {
			[ accessors.backgroundGradientAboveImage ]: ! values.backgroundGradientAboveImage,
		} );
	}

	/**
	 * Handles the click on the "Clear" button.
	 *
	 * @return {void}
	 */
	handleClearClick() {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors.backgroundGradientType ]: BACKGROUND_GRADIENT_LINEAR,
			[ accessors.backgroundGradientAngle ]: 0,
			[ accessors.backgroundGradientStartColor ]: undefined,
			[ accessors.backgroundGradientStopColor ]: undefined,
			[ accessors.backgroundGradientStartPosition ]: 0,
			[ accessors.backgroundGradientStopPosition ]: 100,
			[ accessors.backgroundGradientAboveImage ]: false,
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { values } = this.props;

		return (
			<BaseControl className="mighty-blocks-background-gradient-control">
				<div className="mighty-blocks-background-gradient-control__buttons">
					<ColorPicker
						value={ values.backgroundGradientStartColor }
						onChangeComplete={ ( value ) => this.handlePickerChange( 'backgroundGradientStartColor', value ) }
					/>

					<Preview values={ values } />

					<ColorPicker
						value={ values.backgroundGradientStopColor }
						onChangeComplete={ ( value ) => this.handlePickerChange( 'backgroundGradientStopColor', value ) }
					/>
				</div>

				<SelectControl
					className="mighty-blocks-control mighty-blocks-control--inline"
					label={ __( 'Type', 'mighty-blocks' ) }
					value={ values.backgroundGradientType }
					options={ getGradientTypeOptions() }
					onChange={ this.handleTypeChange }
				/>

				{ values.backgroundGradientType === BACKGROUND_GRADIENT_LINEAR && (
					<RangeControl
						className="mighty-blocks-control mighty-blocks-control--inline"
						label={ __( 'Angle (°)', 'mighty-blocks' ) }
						value={ values.backgroundGradientAngle }
						min={ -180 }
						max={ 180 }
						onChange={ ( value ) => this.handleRangeChange( 'backgroundGradientAngle', value ) }
					/>
				) }

				<RangeControl
					className="mighty-blocks-control mighty-blocks-control--inline"
					label={ __( 'Start (%)', 'mighty-blocks' ) }
					value={ values.backgroundGradientStartPosition }
					min={ 0 }
					max={ 100 }
					onChange={ ( value ) => this.handleRangeChange( 'backgroundGradientStartPosition', value ) }
				/>

				<RangeControl
					className="mighty-blocks-control mighty-blocks-control--inline"
					label={ __( 'Stop (%)', 'mighty-blocks' ) }
					value={ values.backgroundGradientStopPosition }
					min={ 0 }
					max={ 100 }
					onChange={ ( value ) => this.handleRangeChange( 'backgroundGradientStopPosition', value ) }
				/>

				<ToggleControl
					label={ __( 'Place Above Image', 'mighty-blocks' ) }
					checked={ values.backgroundGradientAboveImage }
					onChange={ this.handlePlaceAboveChange }
				/>

				<Button
					className="mighty-blocks-control__clear"
					type="button"
					isSmall={ true }
					isDefault={ true }
					onClick={ this.handleClearClick }
				>
					{ __( 'Clear', 'mighty-blocks' ) }
				</Button>
			</BaseControl>
		);
	}
}

export default withScopedAttributeValues( schema )( BackgroundControlGradient );
