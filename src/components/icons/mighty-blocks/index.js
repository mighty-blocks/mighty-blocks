/**
 * External dependencies
 */
import cx from 'classnames';
import requireContext from 'require-context.macro';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';

/**
 * Autoloads the SVG files.
 */
const requireSvg = requireContext( './svg', false, /\.js$/ );
const icons = requireSvg.keys().reduce( ( memo, path ) => {
	const svg = requireSvg( path );
	const slug = path.replace( /^\.\/(.+)\.js$/g, '$1' );

	memo[ slug ] = svg.default;

	return memo;
}, {} );

/**
 * Renders an icon provided by Mighty Blocks.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function MightyBlocksIcon( props ) {
	const {
		icon,
		className,
		...restProps
	} = props;

	const classes = cx(
		'mighty-blocks-icon',
		`mighty-blocks-icon--${ icon }`,
		className
	);

	return (
		<Icon
			className={ classes }
			icon={ icons[ icon ] }
			{ ...restProps }
		/>
	);
}

export default MightyBlocksIcon;
