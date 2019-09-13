/**
 * External dependencies
 */
import { isString, isPlainObject } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import {
	Button,
	BaseControl,
	SelectControl,
} from '@wordpress/components';
import { MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import schema from './schema';
import {
	getBackgroundPositionOptions,
	getBackgroundSizeOptions,
	getBackgroundRepeatOptions,
	getBackgroundBlendModeOptions,
} from './utils';
import { withScopedAttributeValues } from '../../attributes';

class BackgroundControlImage extends Component {
	/**
	 * Local state.
	 *
	 * @type {Object}
	 */
	state = {
		isEditing: !! this.props.values.backgroundImageUrl,
	};

	/**
	 * Constructor.
	 *
	 * @return {void}
	 */
	constructor() {
		super( ...arguments );

		this.handleMediaOrURLSelect = this.handleMediaOrURLSelect.bind( this );
		this.handleSelectChange = this.handleSelectChange.bind( this );
		this.handleClearClick = this.handleClearClick.bind( this );
	}

	/**
	 * Handles the media selection.
	 *
	 * @param  {Object|string} mediaOrURL
	 * @return {void}
	 */
	handleMediaOrURLSelect( mediaOrURL ) {
		if ( ! isString( mediaOrURL ) && ! isPlainObject( mediaOrURL ) ) {
			return;
		}

		if ( isPlainObject( mediaOrURL ) && ! mediaOrURL.url ) {
			return;
		}

		const { accessors, onChange } = this.props;

		this.setState( {
			isEditing: true,
		} );

		onChange( {
			[ accessors.backgroundImageId ]: isString( mediaOrURL ) ? undefined : mediaOrURL.id,
			[ accessors.backgroundImageUrl ]: isString( mediaOrURL ) ? mediaOrURL : mediaOrURL.url,
		} );
	}

	/**
	 * Handles the change of the selects.
	 *
	 * @param  {string} property
	 * @param  {string} value
	 * @return {void}
	 */
	handleSelectChange( property, value ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors[ property ] ]: value,
		} );
	}

	/**
	 * Handles the click on the "Clear" button.
	 *
	 * @return {void}
	 */
	handleClearClick() {
		const { accessors, onChange } = this.props;

		this.setState( {
			isEditing: false,
		} );

		onChange( {
			[ accessors.backgroundImageUrl ]: undefined,
			[ accessors.backgroundImagePosition ]: undefined,
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { isEditing } = this.state;
		const { values } = this.props;

		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
		return (
			<BaseControl className="mighty-blocks-background-image">
				{ ! isEditing && (
					<MediaPlaceholder
						className="mighty-blocks-background-image__placeholder"
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						onSelect={ this.handleMediaOrURLSelect }
						onSelectURL={ this.handleMediaOrURLSelect }
					/>
				) }

				{ isEditing && (
					<Fragment>
						<MediaUpload
							allowedTypes={ [ 'image' ] }
							value={ values.backgroundImageId }
							render={ ( { open } ) => (
								<img
									className="mighty-blocks-background-image__preview"
									alt=""
									src={ values.backgroundImageUrl }
									onClick={ open }
									onKeyDown={ ( e ) => {
										if ( e.keyCode === 13 ) {
											open();
										}
									} }
								/>
							) }
							onSelect={ this.handleMediaOrURLSelect }
						/>

						<SelectControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Position', 'mighty-blocks' ) }
							value={ values.backgroundImagePosition }
							options={ getBackgroundPositionOptions() }
							onChange={ ( value ) => this.handleSelectChange( 'backgroundImagePosition', value ) }
						/>

						<SelectControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Size', 'mighty-blocks' ) }
							value={ values.backgroundImageSize }
							options={ getBackgroundSizeOptions() }
							onChange={ ( value ) => this.handleSelectChange( 'backgroundImageSize', value ) }
						/>

						<SelectControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Repeat', 'mighty-blocks' ) }
							value={ values.backgroundImageRepeat }
							options={ getBackgroundRepeatOptions() }
							onChange={ ( value ) => this.handleSelectChange( 'backgroundImageRepeat', value ) }
						/>

						<SelectControl
							className="mighty-blocks-control mighty-blocks-control--inline"
							label={ __( 'Blend Mode', 'mighty-blocks' ) }
							value={ values.backgroundImageBlendMode }
							options={ getBackgroundBlendModeOptions() }
							onChange={ ( value ) => this.handleSelectChange( 'backgroundImageBlendMode', value ) }
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
					</Fragment>
				) }
			</BaseControl>
		);
	}
}

export default withScopedAttributeValues( schema )( BackgroundControlImage );
