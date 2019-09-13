/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BorderControl from '../../components/border';
import BorderRadiusControl from '../../components/border-radius';

class PanelBorder extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const {
			attributes,
			hasControl,
			setAttributes,
		} = this.props;

		const hasBorderRadius = hasControl( 'border-radius' );
		const hasBorder = hasControl( 'border' );

		if (
			! hasBorderRadius &&
			! hasBorder
		) {
			return null;
		}

		return (
			<PanelBody
				title={ __( 'Border', 'mighty-blocks' ) }
				initialOpen={ false }
			>
				{ hasBorder && (
					<BorderControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasBorderRadius && (
					<PanelBody>
						<BorderRadiusControl
							values={ attributes }
							onChange={ setAttributes }
						/>
					</PanelBody>
				) }
			</PanelBody>
		);
	}
}

export default PanelBorder;
