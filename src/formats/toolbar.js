/**
 * WordPress dependencies
 */
import { Toolbar, createSlotFill } from '@wordpress/components';
import { BlockFormatControls } from '@wordpress/block-editor';

/**
 * Allows "portal" rendering of panel extensions.
 *
 * @type {Object}
 */
const { Fill, Slot } = createSlotFill( 'RichText.ToolbarControls.Custom' );

/**
 * Renders the toolbar used by our formats.
 *
 * @return {WPElement};
 */
function FormatsToolbar() {
	return (
		<BlockFormatControls>
			<Toolbar>
				<Slot />
			</Toolbar>
		</BlockFormatControls>
	);
}

FormatsToolbar.Fill = Fill;

export default FormatsToolbar;
