/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import FontFamilyControl from '../../components/font-family';
import FontWeightControl from '../../components/font-weight';
import FontSizeControl from '../../components/font-size';
import TextTransformControl from '../../components/text-transform';
import LetterSpacingControl from '../../components/letter-spacing';
import LineHeightControl from '../../components/line-height';

class PanelText extends Component {
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

		const hasFontFamily = hasControl( 'font-family' );
		const hasFontWeight = hasControl( 'font-weight' );
		const hasFontSize = hasControl( 'font-size' );
		const hasTextTransform = hasControl( 'text-transform' );
		const hasLetterSpacing = hasControl( 'letter-spacing' );
		const hasLineHeight = hasControl( 'line-height' );

		if (
			! hasFontFamily &&
			! hasFontWeight &&
			! hasFontSize &&
			! hasTextTransform &&
			! hasLetterSpacing &&
			! hasLineHeight
		) {
			return null;
		}

		return (
			<PanelBody
				title={ __( 'Text', 'mighty-blocks' ) }
				initialOpen={ false }
			>
				{ hasFontFamily && (
					<FontFamilyControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasFontWeight && (
					<FontWeightControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasTextTransform && (
					<TextTransformControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasFontSize && (
					<FontSizeControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasLetterSpacing && (
					<LetterSpacingControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }

				{ hasLineHeight && (
					<LineHeightControl
						values={ attributes }
						onChange={ setAttributes }
					/>
				) }
			</PanelBody>
		);
	}
}

export default PanelText;
