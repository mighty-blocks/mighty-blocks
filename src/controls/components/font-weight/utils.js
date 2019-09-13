/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	FONT_WEIGHT_DEFAULT,
	FONT_WEIGHT_THIN,
	FONT_WEIGHT_EXTRA_LIGHT,
	FONT_WEIGHT_LIGHT,
	FONT_WEIGHT_NORMAL,
	FONT_WEIGHT_MEDIUM,
	FONT_WEIGHT_SEMI_BOLD,
	FONT_WEIGHT_BOLD,
	FONT_WEIGHT_EXTRA_BOLD,
	FONT_WEIGHT_BLACK,
} from './constants';

/**
 * Returns a list of the font weights.
 *
 * @return {Object[]}
 */
export function getFontWeightOptions() {
	return [
		{ label: __( 'Default', 'mighty-blocks' ), value: FONT_WEIGHT_DEFAULT },
		{ label: __( 'Thin (100)', 'mighty-blocks' ), value: FONT_WEIGHT_THIN },
		{ label: __( 'Extra Light (200)', 'mighty-blocks' ), value: FONT_WEIGHT_EXTRA_LIGHT },
		{ label: __( 'Light (300)', 'mighty-blocks' ), value: FONT_WEIGHT_LIGHT },
		{ label: __( 'Normal (400)', 'mighty-blocks' ), value: FONT_WEIGHT_NORMAL },
		{ label: __( 'Medium (500)', 'mighty-blocks' ), value: FONT_WEIGHT_MEDIUM },
		{ label: __( 'Semi-bold (600)', 'mighty-blocks' ), value: FONT_WEIGHT_SEMI_BOLD },
		{ label: __( 'Bold (700)', 'mighty-blocks' ), value: FONT_WEIGHT_BOLD },
		{ label: __( 'Extra Bold (800)', 'mighty-blocks' ), value: FONT_WEIGHT_EXTRA_BOLD },
		{ label: __( 'Black (900)', 'mighty-blocks' ), value: FONT_WEIGHT_BLACK },
	];
}
