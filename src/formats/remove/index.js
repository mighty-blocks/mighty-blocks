/**
 * WordPress dependencies
 */
import { useCallback } from '@wordpress/element';
import { ToolbarButton } from '@wordpress/components';
import { registerFormatType } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import FormatsToolbar from '../toolbar';

registerFormatType( 'mighty-blocks/remove-formatting', {
	title: __( 'Remove Formatting', 'mighty-blocks' ),
	tagName: 'span',
	className: 'mighty-blocks-format-remove-formatting',
	edit( props ) {
		const { value, onChange } = props;

		const handleClick = useCallback( () => onChange( {
			...value,
			formats: Array( value.formats.length ),
		} ), [ value, onChange ] );

		return (
			<FormatsToolbar.Fill>
				<ToolbarButton
					icon="editor-removeformatting"
					title={ __( 'Remove Formatting', 'mighty-blocks' ) }
					onClick={ handleClick }
				/>
			</FormatsToolbar.Fill>
		);
	},
} );
