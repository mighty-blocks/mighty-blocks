/**
 * External dependencies
 */
import cx from 'classnames';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import schema from './schema';
import { getBackgroundTypeOptions } from './utils';
import {
	BACKGROUND_TYPE_COLOR,
	BACKGROUND_TYPE_GRADIENT,
} from './constants';
import { withScopedAttributeValues } from '../../attributes';

export class BackgroundControl extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const {
			values,
			accessors,
			renderColor,
			renderGradient,
			renderImage,
			onChange,
		} = this.props;

		return (
			<BaseControl className="mighty-blocks-base-control">
				<ButtonGroup className="mighty-blocks-background-control__toolbar">
					{ getBackgroundTypeOptions().map( ( option ) => (
						<Button
							key={ option.slug }
							className={ cx(
								'mighty-blocks-background-control__toolbar-button',
								{
									'is-active': option.slug === values.backgroundType,
								}
							) }
							onClick={ () => {
								onChange( {
									[ accessors.backgroundType ]: option.slug,
								} );
							} }
						>
							{ option.icon }
							{ option.title }
						</Button>
					) ) }
				</ButtonGroup>

				{ values.backgroundType === BACKGROUND_TYPE_COLOR && renderColor() }

				{ values.backgroundType === BACKGROUND_TYPE_GRADIENT && renderGradient() }

				<PanelBody>
					{ renderImage() }
				</PanelBody>
			</BaseControl>
		);
	}
}

export default withScopedAttributeValues( schema )( BackgroundControl );
