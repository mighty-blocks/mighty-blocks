/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { PanelBody, createSlotFill } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import SpacingControl from '../../components/spacing';
import { getControlPrefix } from '../../utils';

/**
 * Allows "portal" rendering of panel extensions.
 *
 * @type {Object}
 */
const { Fill, Slot } = createSlotFill( 'PanelSpacings' );

class PanelSpacings extends Component {
	/**
	 * Reference to the fill component.
	 *
	 * @type {WPComponent}
	 */
	static Fill = Fill;

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const {
			controls,
			attributes,
			setAttributes,
			hasControl,
		} = this.props;

		const propsPerPrefix = {
			padding: {
				label: __( 'Padding', 'mighty-blocks' ),
				min: 0,
			},

			margin: {
				label: __( 'Margin', 'mighty-blocks' ),
				min: -100,
				max: 100,
			},
		};

		return (
			<Slot>
				{ ( fills ) => {
					const hasSpacing = hasControl( 'spacing' );
					const hasFills = !! fills.length;

					if ( ! hasSpacing && ! hasFills ) {
						return null;
					}

					return (
						<PanelBody
							title={ __( 'Spacings', 'mighty-blocks' ) }
							initialOpen={ false }
						>
							{ controls.map( ( control, index ) => {
								if ( control.type !== 'spacing' ) {
									return null;
								}

								const prefix = getControlPrefix( control );

								return (
									<SpacingControl
										key={ index }
										prefix={ prefix }
										values={ attributes }
										onChange={ setAttributes }
										{ ...propsPerPrefix[ prefix ] }
									/>
								);
							} ) }

							{ fills }
						</PanelBody>
					);
				} }
			</Slot>
		);
	}
}

export default PanelSpacings;
