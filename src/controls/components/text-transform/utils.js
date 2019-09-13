/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	TEXT_TRANSFORM_DEFAULT,
	TEXT_TRANSFORM_NONE,
	TEXT_TRANSFORM_LOWERCASE,
	TEXT_TRANSFORM_UPPERCASE,
	TEXT_TRANSFORM_CAPITALIZE,
} from './constants';

/**
 * Returns a list of the text transform options.
 *
 * @return {Object[]}
 */
export function getTextTransformOptions() {
	return [
		{ label: __( 'Default', 'mighty-blocks' ), value: TEXT_TRANSFORM_DEFAULT },
		{ label: __( 'None', 'mighty-blocks' ), value: TEXT_TRANSFORM_NONE },
		{ label: __( 'Lowercase', 'mighty-blocks' ), value: TEXT_TRANSFORM_LOWERCASE },
		{ label: __( 'Uppercase', 'mighty-blocks' ), value: TEXT_TRANSFORM_UPPERCASE },
		{ label: __( 'Capitalize', 'mighty-blocks' ), value: TEXT_TRANSFORM_CAPITALIZE },
	];
}
