/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	BACKGROUND_POSITION_TOP_LEFT,
	BACKGROUND_POSITION_TOP_CENTER,
	BACKGROUND_POSITION_TOP_RIGHT,
	BACKGROUND_POSITION_CENTER_LEFT,
	BACKGROUND_POSITION_CENTER_CENTER,
	BACKGROUND_POSITION_CENTER_RIGHT,
	BACKGROUND_POSITION_BOTTOM_LEFT,
	BACKGROUND_POSITION_BOTTOM_CENTER,
	BACKGROUND_POSITION_BOTTOM_RIGHT,

	BACKGROUND_SIZE_COVER,
	BACKGROUND_SIZE_CONTAIN,
	BACKGROUND_SIZE_INITIAL,

	BACKGROUND_REPEAT_REPEAT,
	BACKGROUND_REPEAT_REPEAT_X,
	BACKGROUND_REPEAT_REPEAT_Y,
	BACKGROUND_REPEAT_NO_REPEAT,

	BACKGROUND_BLEND_MODE_NORMAL,
	BACKGROUND_BLEND_MODE_MULTIPLY,
	BACKGROUND_BLEND_MODE_OVERLAY,
	BACKGROUND_BLEND_MODE_SCREEN,
	BACKGROUND_BLEND_MODE_DARKEN,
	BACKGROUND_BLEND_MODE_LIGHTEN,
	BACKGROUND_BLEND_MODE_COLOR_DODGE,
	BACKGROUND_BLEND_MODE_HARD_LIGHT,
	BACKGROUND_BLEND_MODE_SOFT_LIGHT,
	BACKGROUND_BLEND_MODE_DIFFERENCE,
	BACKGROUND_BLEND_MODE_EXCLUSION,
	BACKGROUND_BLEND_MODE_HUE,
	BACKGROUND_BLEND_MODE_SATURATION,
	BACKGROUND_BLEND_MODE_COLOR,
	BACKGROUND_BLEND_MODE_LUMINOSITY,
} from './constants';

/**
 * Returns a list of the background positions.
 *
 * @return {Object[]}
 */
export function getBackgroundPositionOptions() {
	return [
		{ value: BACKGROUND_POSITION_TOP_LEFT, label: __( 'Top Left', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_TOP_CENTER, label: __( 'Top Center', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_TOP_RIGHT, label: __( 'Top Right', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_CENTER_LEFT, label: __( 'Center Left', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_CENTER_CENTER, label: __( 'Center', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_CENTER_RIGHT, label: __( 'Center Right', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_BOTTOM_LEFT, label: __( 'Bottom Left', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_BOTTOM_CENTER, label: __( 'Bottom Center', 'mighty-blocks' ) },
		{ value: BACKGROUND_POSITION_BOTTOM_RIGHT, label: __( 'Bottom Right', 'mighty-blocks' ) },
	];
}

/**
 * Returns a list of the background sizes.
 *
 * @return {Object[]}
 */
export function getBackgroundSizeOptions() {
	return [
		{ value: BACKGROUND_SIZE_INITIAL, label: __( 'Actual Size', 'mighty-blocks' ) },
		{ value: BACKGROUND_SIZE_COVER, label: __( 'Cover', 'mighty-blocks' ) },
		{ value: BACKGROUND_SIZE_CONTAIN, label: __( 'Contain', 'mighty-blocks' ) },
	];
}

/**
 * Returns a list of the background repeats.
 *
 * @return {Object[]}
 */
export function getBackgroundRepeatOptions() {
	return [
		{ value: BACKGROUND_REPEAT_REPEAT, label: __( 'Repeat', 'mighty-blocks' ) },
		{ value: BACKGROUND_REPEAT_REPEAT_X, label: __( 'Repeat Horizontally', 'mighty-blocks' ) },
		{ value: BACKGROUND_REPEAT_REPEAT_Y, label: __( 'Repeat Vertically', 'mighty-blocks' ) },
		{ value: BACKGROUND_REPEAT_NO_REPEAT, label: __( 'No Repeat', 'mighty-blocks' ) },
	];
}

/**
 * Returns a list of the background blend modes.
 *
 * @return {Object[]}
 */
export function getBackgroundBlendModeOptions() {
	return [
		{ value: BACKGROUND_BLEND_MODE_NORMAL, label: __( 'Normal', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_MULTIPLY, label: __( 'Multiply', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_OVERLAY, label: __( 'Overlay', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_SCREEN, label: __( 'Screen', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_DARKEN, label: __( 'Darken', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_LIGHTEN, label: __( 'Lighten', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_COLOR_DODGE, label: __( 'Color Dodge', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_HARD_LIGHT, label: __( 'Hard Light', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_SOFT_LIGHT, label: __( 'Soft Light', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_DIFFERENCE, label: __( 'Difference', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_EXCLUSION, label: __( 'Exclusion', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_HUE, label: __( 'Hue', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_SATURATION, label: __( 'Saturation', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_COLOR, label: __( 'Color', 'mighty-blocks' ) },
		{ value: BACKGROUND_BLEND_MODE_LUMINOSITY, label: __( 'Luminosity', 'mighty-blocks' ) },
	];
}
