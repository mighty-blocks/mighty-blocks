/**
 * External dependencies
 */
import { kebabCase } from 'lodash';

/**
 * WordPress dependencies
 */
import { Fragment, useCallback } from '@wordpress/element';
import {
	ButtonGroup,
	IconButton,
	BaseControl,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import schema from './schema';
import { Icon } from '../../../components/icons';
import UnitControl from '../../../components/unit-control';
import { BreakpointsSwitcher } from '../../../components/breakpoints';
import { withScopedAttributeValues } from '../../attributes';

/**
 * Renders the "Rounded Corners" control.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
export function BorderRadiusControl( props ) {
	const {
		values,
		accessors,
		onChange,
	} = props;

	const handleLinkButtonClick = useCallback( () => {
		onChange( {
			[ accessors.borderRadiusKeepInSync ]: ! values.borderRadiusKeepInSync,
		} );
	}, [ values, onChange ] );

	const handleResetButtonClick = useCallback( () => {
		onChange( {
			[ accessors.borderRadiusTopLeft ]: undefined,
			[ accessors.borderRadiusTopRight ]: undefined,
			[ accessors.borderRadiusBottomRight ]: undefined,
			[ accessors.borderRadiusBottomLeft ]: undefined,
			[ accessors.borderRadiusUnit ]: 'px',
			[ accessors.borderRadiusKeepInSync ]: true,
		} );
	}, [ values, onChange ] );

	const handleInputChange = useCallback( ( property, value ) => {
		value = value === '' ?
			undefined :
			Number( value );

		if ( values.borderRadiusKeepInSync ) {
			onChange( {
				[ accessors.borderRadiusTopLeft ]: value,
				[ accessors.borderRadiusTopRight ]: value,
				[ accessors.borderRadiusBottomRight ]: value,
				[ accessors.borderRadiusBottomLeft ]: value,
			} );
		} else {
			onChange( {
				[ accessors[ property ] ]: value,
			} );
		}
	}, [ values, onChange ] );

	const handleUnitChange = useCallback( ( value ) => {
		onChange( {
			[ accessors.borderRadiusUnit ]: value,
		} );
	}, [ values, onChange ] );

	return (
		<BaseControl
			className="mighty-blocks-control mighty-blocks-control--advanced"
			label={
				<Fragment>
					<span className="mighty-blocks-control__label-text">
						{ __( 'Rounded Corners', 'mighty-blocks' ) }
					</span>

					<ButtonGroup className="mighty-blocks-control__toolbar">
						<IconButton
							icon={
								values.borderRadiusKeepInSync ?
									'editor-unlink' :
									'admin-links'
							}
							tooltip={
								values.borderRadiusKeepInSync ?
									__( 'Unlink sides', 'mighty-blocks' ) :
									__( 'Link sides', 'mighty-blocks' )
							}
							className="mighty-blocks-control__toolbar-button"
							onClick={ handleLinkButtonClick }
						/>

						<IconButton
							icon="image-rotate"
							tooltip={ __( 'Reset', 'mighty-blocks' ) }
							className="mighty-blocks-control__toolbar-button"
							onClick={ handleResetButtonClick }
						/>
					</ButtonGroup>

					<BreakpointsSwitcher />
				</Fragment>
			}
		>
			<div className="mighty-blocks-control__inner">
				{
					[
						'borderRadiusTopLeft',
						'borderRadiusTopRight',
						'borderRadiusBottomRight',
						'borderRadiusBottomLeft',
					].map( ( key ) => (
						<TextControl
							type="number"
							key={ key }
							min={ 0 }
							value={ values[ key ] === undefined ? '' : values[ key ] }
							onChange={ ( value ) => handleInputChange( key, value ) }
							help={ <Icon icon={ kebabCase( key ) } /> }
						/>
					) )
				}

				<UnitControl
					value={ values.borderRadiusUnit }
					units={ [ 'px', '%' ] }
					onChange={ handleUnitChange }
				/>
			</div>
		</BaseControl>
	);
}

export default withScopedAttributeValues( schema )( BorderRadiusControl );
