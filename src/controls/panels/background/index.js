/**
 * WordPress dependencies
 */
import { Fragment, Component } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BackgroundControl from '../../components/background';
import BackgroundControlColor, { BackgroundColorIndicator } from '../../components/background-color';
import BackgroundControlImage from '../../components/background-image';
import BackgroundControlGradient from '../../components/background-gradient';

class PanelBackground extends Component {
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

		if ( ! hasControl( 'background' ) ) {
			return null;
		}

		return (
			<PanelBody
				title={
					<Fragment>
						{ __( 'Background', 'mighty-blocks' ) }

						<BackgroundColorIndicator color={ attributes.backgroundColor } />
					</Fragment>
				}
				initialOpen={ false }
			>
				<BackgroundControl
					values={ attributes }
					onChange={ setAttributes }
					renderColor={ () => (
						<BackgroundControlColor
							values={ attributes }
							onChange={ setAttributes }
						/>
					) }
					renderImage={ () => (
						<BackgroundControlImage
							values={ attributes }
							onChange={ setAttributes }
						/>
					) }
					renderGradient={ () => (
						<BackgroundControlGradient
							values={ attributes }
							onChange={ setAttributes }
						/>
					) }
				/>
			</PanelBody>
		);
	}
}

export default PanelBackground;
