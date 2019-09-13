/**
 * External dependencies
 */
import { uniq } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import {
	ButtonGroup,
	IconButton,
	BaseControl,
	RangeControl,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import schema from './schema';
import { BreakpointsSwitcher } from '../../../components/breakpoints';
import { Icon } from '../../../components/icons';
import { DEFAULT_UNITS } from './defaults';
import { withScopedAttributeValues } from '../../attributes';

export class SpacingControl extends Component {
	/**
	 * Default properties.
	 *
	 * @type {Object}
	 */
	static defaultProps = {
		units: DEFAULT_UNITS,
		values: {},
		accessors: {},
		min: -Infinity,
		max: Infinity,
		onChange: () => {},
	};

	/**
	 * Constructor.
	 *
	 * @return {void}
	 */
	constructor() {
		super( ...arguments );

		const { values } = this.props;

		this.state = {
			mode: uniq( [
				values.top,
				values.right,
				values.bottom,
				values.left,
			] ).length > 1 ?
				'advanced' :
				'simple',
		};

		this.handleAdvancedButtonClick = this.handleAdvancedButtonClick.bind( this );
		this.handleLinkButtonClick = this.handleLinkButtonClick.bind( this );
		this.handleResetButtonClick = this.handleResetButtonClick.bind( this );
		this.handleRangeInputChange = this.handleRangeInputChange.bind( this );
		this.handleUnitSelectChange = this.handleUnitSelectChange.bind( this );
	}

	/**
	 * Updates the value of all sides.
	 *
	 * @param  {number} [margin]
	 * @return {void}
	 */
	updateAllSides( margin ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors.top ]: margin,
			[ accessors.right ]: margin,
			[ accessors.bottom ]: margin,
			[ accessors.left ]: margin,
		} );
	}

	/**
	 * Handles the click on the "Advanced" button.
	 *
	 * @return {void}
	 */
	handleAdvancedButtonClick() {
		this.setState( {
			mode: 'advanced',
		} );
	}

	/**
	 * Handles the click on the "Link sides" button.
	 *
	 * @return {void}
	 */
	handleLinkButtonClick() {
		const {
			values,
			accessors,
			onChange,
		} = this.props;

		onChange( {
			[ accessors.keepInSync ]: ! values.keepInSync,
		} );
	}

	/**
	 * Handles the click on the "Reset" button.
	 *
	 * @return {void}
	 */
	handleResetButtonClick() {
		const { accessors, onChange } = this.props;

		this.setState( {
			mode: 'simple',
		} );

		onChange( {
			[ accessors.top ]: undefined,
			[ accessors.right ]: undefined,
			[ accessors.bottom ]: undefined,
			[ accessors.left ]: undefined,
			[ accessors.unit ]: 'px',
			[ accessors.keepInSync ]: false,
		} );
	}

	/**
	 * Handles the change of the range input.
	 *
	 * @param  {number} margin
	 * @return {void}
	 */
	handleRangeInputChange( margin ) {
		this.updateAllSides( margin );
	}

	/**
	 * Handles the change of the side inputs.
	 *
	 * @param  {string} attribute
	 * @param  {string} margin
	 * @return {void}
	 */
	handleSideInputChange( attribute, margin ) {
		const { values, onChange } = this.props;

		margin = margin === '' ?
			undefined :
			Number( margin );

		if ( values.keepInSync ) {
			this.updateAllSides( margin );
		} else {
			onChange( {
				[ attribute ]: margin,
			} );
		}
	}

	/**
	 * Handles the change of the unit select.
	 *
	 * @param  {string} unit
	 * @return {void}
	 */
	handleUnitSelectChange( unit ) {
		const { accessors, onChange } = this.props;

		onChange( {
			[ accessors.unit ]: unit,
		} );
	}

	/**
	 * Renders the component.
	 *
	 * @return {WPElement}
	 */
	render() {
		const { mode } = this.state;

		const {
			label,
			min,
			max,
			units,
			values,
			accessors,
		} = this.props;

		return (
			<BaseControl
				className="mighty-blocks-control mighty-blocks-control--advanced mighty-blocks-spacing-control"
				label={
					<Fragment>
						<span className="mighty-blocks-control__label-text">
							{ label }
						</span>

						<ButtonGroup className="mighty-blocks-control__toolbar">
							{ mode === 'advanced' && (
								<Fragment>
									<IconButton
										icon={
											values.keepInSync ?
												'editor-unlink' :
												'admin-links'
										}
										tooltip={
											values.keepInSync ?
												__( 'Unlink sides', 'mighty-blocks' ) :
												__( 'Link sides', 'mighty-blocks' )
										}
										className="mighty-blocks-control__toolbar-button"
										onClick={ this.handleLinkButtonClick }
									/>

									<IconButton
										icon="image-rotate"
										tooltip={ __( 'Reset', 'mighty-blocks' ) }
										className="mighty-blocks-control__toolbar-button"
										onClick={ this.handleResetButtonClick }
									/>
								</Fragment>
							) }

							{ mode === 'simple' && (
								<IconButton
									className="mighty-blocks-control__toolbar-button"
									icon="admin-generic"
									label={ __( 'Advanced', 'mighty-blocks' ) }
									onClick={ this.handleAdvancedButtonClick }
								/>
							) }
						</ButtonGroup>

						<BreakpointsSwitcher />
					</Fragment>
				}
			>
				<div className="mighty-blocks-control__inner">
					{ mode === 'simple' && (
						<RangeControl
							className="mighty-blocks-spacing-control__range"
							min={ min }
							max={ max }
							value={ values.top }
							onChange={ this.handleRangeInputChange }
						/>
					) }

					{ mode === 'advanced' && (
						<Fragment>
							<TextControl
								type="number"
								help={ <Icon icon="side-top" /> }
								value={ values.top }
								onChange={ ( value ) => this.handleSideInputChange( accessors.top, value ) }
							/>

							<TextControl
								type="number"
								help={ <Icon icon="side-right" /> }
								value={ values.right }
								onChange={ ( value ) => this.handleSideInputChange( accessors.right, value ) }
							/>

							<TextControl
								type="number"
								help={ <Icon icon="side-bottom" /> }
								value={ values.bottom }
								onChange={ ( value ) => this.handleSideInputChange( accessors.bottom, value ) }
							/>

							<TextControl
								type="number"
								help={ <Icon icon="side-left" /> }
								value={ values.left }
								onChange={ ( value ) => this.handleSideInputChange( accessors.left, value ) }
							/>
						</Fragment>
					) }

					<SelectControl
						options={ units }
						value={ values.unit }
						onChange={ this.handleUnitSelectChange }
					/>
				</div>
			</BaseControl>
		);
	}
}

export default withScopedAttributeValues( schema )( SpacingControl );
