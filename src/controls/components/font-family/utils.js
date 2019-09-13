/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	FONT_FAMILY_DEFAULT,
	FONT_FAMILY_ARIAL,
	FONT_FAMILY_GEORGIA,
	FONT_FAMILY_HELVETICA,
	FONT_FAMILY_TIMES_NEW_ROMAN,
} from './constants';

/**
 * Returns a list of the font families.
 *
 * @return {Object[]}
 */
export function getFontFamilyOptions() {
	return [
		{ label: __( 'Default', 'mighty-blocks' ), value: FONT_FAMILY_DEFAULT },
		{ label: __( 'Arial', 'mighty-blocks' ), value: FONT_FAMILY_ARIAL },
		{ label: __( 'Georgia', 'mighty-blocks' ), value: FONT_FAMILY_GEORGIA },
		{ label: __( 'Helvetica', 'mighty-blocks' ), value: FONT_FAMILY_HELVETICA },
		{ label: __( 'Times New Roman', 'mighty-blocks' ), value: FONT_FAMILY_TIMES_NEW_ROMAN },
	];
}
