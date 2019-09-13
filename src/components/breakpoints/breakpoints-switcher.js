/**
 * WordPress dependencies
 */
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { DropdownMenu } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icon } from '../icons';

/**
 * Finds the icon associated with the given breakpoint.
 *
 * @param  {Object} breakpoint
 * @return {WPComponent}
 */
function getIcon( breakpoint ) {
	return (
		<Icon icon={ `breakpoint-${ breakpoint.slug }` } />
	);
}

/**
 * Renders the control used to switch between
 * the breakpoints.
 *
 * @param  {Object} props
 * @return {WPElement}
 */
function BreakpointsSwitcher( props ) {
	const {
		breakpoints,
		current,
		selectBreakpoint,
	} = props;

	return (
		<DropdownMenu
			className="breakpoints-switcher"
			position="top right"
			label={ __( 'Change breakpoint', 'mighty-blocks' ) }
			icon={ getIcon( current ) }
			controls={
				breakpoints.map( ( breakpoint ) => ( {
					icon: getIcon( breakpoint ),
					title: breakpoint.name,
					isActive: breakpoint.slug === current.slug,
					onClick: () => selectBreakpoint( breakpoint.slug ),
				} ) )
			}
		/>
	);
}

export default compose(
	withSelect( ( select ) => {
		const { getBreakpoints, getCurrentBreakpoint } = select( 'mighty-blocks/breakpoints' );

		return {
			current: getCurrentBreakpoint(),
			breakpoints: getBreakpoints(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { selectBreakpoint } = dispatch( 'mighty-blocks/breakpoints' );

		return {
			selectBreakpoint,
		};
	} )
)( BreakpointsSwitcher );
