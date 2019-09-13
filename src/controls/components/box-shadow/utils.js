/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icon } from '../../../components/icons';

/**
 * Returns a list of available presets.
 *
 * @return {Object[]}
 */
export function getPresets() {
	return [
		{
			id: 'preset-1',
			name: __( 'Preset #1', 'mighty-blocks' ),
			icon: <Icon icon="box-shadow-preset-1" />,
			value: undefined,
			attributes: {
				offsetX: undefined,
				offsetY: undefined,
				blur: undefined,
				spread: undefined,
			},
		},
		{
			id: 'preset-2',
			name: __( 'Preset #2', 'mighty-blocks' ),
			icon: <Icon icon="box-shadow-preset-2" />,
			value: 'preset-2',
			attributes: {
				offsetX: 0,
				offsetY: 4,
				blur: 5,
				spread: 0,
			},
		},
		{
			id: 'preset-3',
			name: __( 'Preset #3', 'mighty-blocks' ),
			icon: <Icon icon="box-shadow-preset-3" />,
			value: 'preset-3',
			attributes: {
				offsetX: 0,
				offsetY: 0,
				blur: 6,
				spread: 0,
			},
		},
		{
			id: 'preset-4',
			name: __( 'Preset #4', 'mighty-blocks' ),
			icon: <Icon icon="box-shadow-preset-4" />,
			value: 'preset-4',
			attributes: {
				offsetX: 0,
				offsetY: 2,
				blur: 7,
				spread: 0,
			},
		},
		{
			id: 'preset-5',
			name: __( 'Preset #5', 'mighty-blocks' ),
			icon: <Icon icon="box-shadow-preset-5" />,
			value: 'preset-5',
			attributes: {
				offsetX: 2,
				offsetY: 2,
				blur: 0,
				spread: 0,
			},
		},
	];
}

/**
 * Returns a list of the range controls.
 *
 * @return {Object[]}
 */
export function getRangeControlOptions() {
	return [
		{
			label: __( 'Horizontal Offset', 'mighty-blocks' ),
			min: -100,
			max: 100,
			initial: 0,
			property: 'boxShadowOffsetX',
		},
		{
			label: __( 'Vertical Offset', 'mighty-blocks' ),
			min: -100,
			max: 100,
			initial: 0,
			property: 'boxShadowOffsetY',
		},
		{
			label: __( 'Blur', 'mighty-blocks' ),
			min: 0,
			max: 100,
			initial: 0,
			property: 'boxShadowBlur',
		},
		{
			label: __( 'Spread', 'mighty-blocks' ),
			min: 0,
			max: 100,
			initial: 0,
			property: 'boxShadowSpread',
		},
	];
}

/**
 * Returns a list of the available positions.
 *
 * @return {Object[]}
 */
export function getPositionOptions() {
	return [
		{
			label: __( 'Outer', 'mighty-blocks' ),
			value: '',
		},
		{
			label: __( 'Inner', 'mighty-blocks' ),
			value: 'inset',
		},
	];
}
