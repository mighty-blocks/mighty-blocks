/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import {
	BaseControl,
	RangeControl,
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
import { getPresets, getRangeControlOptions } from './utils';

export class TextShadowControl extends Component {
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
	}

	/**
	 * Handles the change of the selected preset.
	 *
	 * @param  {Object} preset
	 * @return {void}
	 */
	handlePresetChange( preset ) {
		const { accessors } = this.props;

		const attributes = {
			[ accessors.textShadowPreset ]: preset.value,
			[ accessors.textShadowOffsetX ]: preset.attributes.offsetX,
			[ accessors.textShadowOffsetY ]: preset.attributes.offsetY,
			[ accessors.textShadowBlur ]: preset.attributes.blur,
		};

		if ( ! preset.value ) {
			attributes[ accessors.textShadowColor ] = undefined;
		}

		this.props.onChange( attributes );
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
			[ accessors.textShadowColor ]: value.color.toRgbString(),
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
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { accessors, values } = this.props;

		return (
			<Fragment>
				<BaseControl label={ __( 'Text Shadow', 'mighty-blocks' ) }>
					<Toolbar>
						{ getPresets().map( ( preset ) => (
							<ToolbarButton
								key={ preset.id }
								icon={ preset.icon }
								title={ preset.name }
								isActive={ values.textShadowPreset === preset.value }
								onClick={ () => this.handlePresetChange( preset ) }
							/>
						) ) }
					</Toolbar>
				</BaseControl>

				{ values.textShadowPreset && (
					<Fragment>
						<BaseControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Color', 'mighty-blocks' ) }
						>
							<ColorPicker
								value={ values.textShadowColor }
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
					</Fragment>
				) }
			</Fragment>
		);
	}
}

export default withScopedAttributeValues( schema )( TextShadowControl );
