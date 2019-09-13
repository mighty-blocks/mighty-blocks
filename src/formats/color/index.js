/**
 * WordPress dependencies
 */
import { Fragment, useCallback } from '@wordpress/element';
import {
	Button,
	Dropdown,
	ColorPicker,
	ToolbarButton,
} from '@wordpress/components';
import {
	registerFormatType,
	applyFormat,
	removeFormat,
	getActiveFormat,
} from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import FormatsToolbar from '../toolbar';
import { Icon } from '../../components/icons';

[
	{
		type: 'color',
		icon: <Icon icon="format-color" />,
		title: __( 'Color', 'mighty-blocks' ),
	},
	{
		type: 'background-color',
		icon: <Icon icon="format-background-color" />,
		title: __( 'Background Color', 'mighty-blocks' ),
	},
].forEach( ( format ) => {
	const type = `mighty-blocks/${ format.type }`;

	registerFormatType( type, {
		title: format.title,
		tagName: 'span',
		className: `mighty-blocks-format-${ format.type }`,
		attributes: {
			style: 'style',
		},
		edit( props ) {
			const {
				value,
				isActive,
				onChange,
			} = props;

			const handleColorChange = useCallback( ( color ) => {
				onChange( applyFormat( value, {
					type,
					attributes: {
						style: `${ format.type }: ${ color.hex }`,
					},
				} ) );
			}, [ value, onChange ] );

			const handleClearClick = useCallback( () => {
				onChange( removeFormat( value, type ) );
			}, [ value, onChange ] );

			let color;

			if ( isActive ) {
				color = getActiveFormat( value, type ).attributes.style.replace(
					new RegExp( `^${ format.type }:\\s*` ),
					''
				);
			}

			return (
				<FormatsToolbar.Fill>
					<Dropdown
						className="mighty-blocks-format-color__dropdown"
						position="bottom center"
						renderToggle={ ( { onToggle } ) => (
							<ToolbarButton
								icon={ format.icon }
								title={ format.title }
								isActive={ isActive }
								onClick={ onToggle }
							/>
						) }
						renderContent={ () => (
							<Fragment>
								<ColorPicker
									color={ color }
									disableAlpha={ true }
									onChangeComplete={ handleColorChange }
								/>

								<div className="mighty-blocks-format-color__dropdown-actions">
									<Button
										disabled={ ! isActive }
										isDefault={ true }
										isSmall={ true }
										onClick={ handleClearClick }
									>
										{ __( 'Clear', 'mighty-blocks' ) }
									</Button>
								</div>
							</Fragment>
						) }
					/>
				</FormatsToolbar.Fill>
			);
		},
	} );
} );
