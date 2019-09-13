/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import {
	Button,
	Dropdown,
	ColorPicker as BaseColorPicker,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './styles/editor.scss';

/**
 * Renders a color picker.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function ColorPicker( props ) {
	const {
		label,
		value,
		...restProps
	} = props;

	return (
		<Dropdown
			className="mighty-blocks-color-picker"
			renderToggle={ ( { onToggle } ) => (
				<Fragment>
					{ label && (
						<div className="mighty-blocks-color-picker__label">
							{ label }
						</div>
					) }

					<div className="mighty-blocks-color-picker__toggle">
						<Button
							className="mighty-blocks-color-picker__button"
							style={ {
								backgroundColor: value,
							} }
							onClick={ onToggle }
						/>
					</div>
				</Fragment>
			) }
			renderContent={ () => (
				<BaseColorPicker color={ value } { ...restProps } />
			) }
		/>
	);
}

export default ColorPicker;
