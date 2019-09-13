/**
 * WordPress dependencies
 */
import { Dashicon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import MightyBlocksIcon from './mighty-blocks';

/**
 * Renders an icon.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function Icon( props ) {
	const { provider = 'mighty-blocks', ...restProps } = props;
	let Component = null;

	switch ( provider ) {
		case 'dashicons':
			Component = Dashicon;
			break;

		case 'mighty-blocks':
			Component = MightyBlocksIcon;
			break;
	}

	return (
		<Component { ...restProps } />
	);
}

export default Icon;
