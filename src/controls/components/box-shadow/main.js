/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import {
	BaseControl,
	RangeControl,
	SelectControl,
	Toolbar,
	ToolbarButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import schema from './schema';
import ColorPicker from '../../../components/color-picker';
import { withScopedAttributeValues } from '../../attributes';
import {
	getPresets,
	getRangeControlOptions,
	getPositionOptions,
} from './utils';

export class BoxShadowControl extends Component {
	/**
	 * Default properties.
	 *
	 * @type {Object}
	 */
	static defaultProps = {
		values: {},
		accessors: {},
	};

	/**
	 * Constructor.
	 *
	 * @return {void}
	 */
	constructor() {
		super( ...arguments );

		this.handlePresetChange = this.handlePresetChange.bind( this );
		this.handleColorChange = this.handleColorChange.bind( this );
		this.handleRangeChange = this.handleRangeChange.bind( this );
		this.handlePositionChange = this.handlePositionChange.bind( this );
	}

	/**
	 * Handles the change of the selected preset.
	 *
	 * @param  {Object} preset
	 * @return {void}
	 */
	handlePresetChange( preset ) {
		const { accessors, onChange } = this.props;

		const attributes = {
			[ accessors.boxShadowPreset ]: preset.value,
			[ accessors.boxShadowOffsetX ]: preset.attributes.offsetX,
			[ accessors.boxShadowOffsetY ]: preset.attributes.offsetY,
			[ accessors.boxShadowBlur ]: preset.attributes.blur,
			[ accessors.boxShadowSpread ]: preset.attributes.spread,
		};

		if ( ! preset.value ) {
			attributes[ accessors.boxShadowColor ] = undefined;
			attributes[ accessors.boxShadowPosition ] = undefined;
		}

		onChange( attributes );
	}

	/**
	 * Handles the change of the "Color" input.
	 *
	 * @param  {Object} value
	 * @return {void}
	 */
	handleColorChange( value ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors.boxShadowColor ]: value.color.toRgbString(),
		} );
	}

	/**
	 * Handles the change of the range input.
	 *
	 * @param  {string} property
	 * @param  {?number} value
	 * @return {void}
	 */
	handleRangeChange( property, value ) {
		this.props.onChange( {
			[ property ]: value,
		} );
	}

	/**
	 * Handles the change of the "Position" input.
	 *
	 * @param  {string} value
	 * @return {void}
	 */
	handlePositionChange( value ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors.boxShadowPosition ]: value ? value : undefined,
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { accessors, values } = this.props;

		return (
			<Fragment>
				<BaseControl label={ __( 'Box Shadow', 'mighty-blocks' ) }>
					<Toolbar>
						{ getPresets().map( ( preset ) => (
							<ToolbarButton
								key={ preset.id }
								icon={ preset.icon }
								title={ preset.name }
								isActive={ values.boxShadowPreset === preset.value }
								onClick={ () => this.handlePresetChange( preset ) }
							/>
						) ) }
					</Toolbar>
				</BaseControl>

				{ values.boxShadowPreset && (
					<Fragment>
						<BaseControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Color', 'mighty-blocks' ) }
						>
							<ColorPicker
								value={ values.boxShadowColor }
								onChangeComplete={ this.handleColorChange }
							/>
						</BaseControl>

						{ getRangeControlOptions().map( ( control, index ) => (
							<RangeControl
								className="mighty-blocks-control mighty-blocks-control--inline"
								key={ index }
								label={ control.label }
								min={ control.min }
								max={ control.max }
								initialPosition={ control.initial }
								value={ values[ control.property ] }
								onChange={ ( value ) => this.handleRangeChange( accessors[ control.property ], value ) }
							/>
						) ) }

						<SelectControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Position', 'mighty-blocks' ) }
							value={ values.boxShadowPosition }
							options={ getPositionOptions() }
							onChange={ this.handlePositionChange }
						/>
					</Fragment>
				) }
			</Fragment>
		);
	}
}

export default withScopedAttributeValues( schema )( BoxShadowControl );
