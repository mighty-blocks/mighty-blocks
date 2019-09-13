/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import BoxShadowControl from '../../components/box-shadow';
import TextShadowControl from '../../components/text-shadow';

class PanelBoxShadow extends Component {
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

		const hasBoxShadow = hasControl( 'box-shadow' );
		const hasTextShadow = hasControl( 'text-shadow' );

		if ( ! hasBoxShadow && ! hasTextShadow ) {
			return null;
		}

		return (
			<PanelBody
				title={ __( 'Shadows', 'mighty-blocks' ) }
				initialOpen={ false }
			>
				{ hasBoxShadow && (
					<BoxShadowControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasTextShadow && (
					<TextShadowControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }
			</PanelBody>
		);
	}
}

export default PanelBoxShadow;
