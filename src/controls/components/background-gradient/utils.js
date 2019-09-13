/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	BACKGROUND_GRADIENT_LINEAR,
	BACKGROUND_GRADIENT_RADIAL,
} from './constants';

/**
 * Returns a list of the gradient types.
 *
 * @return {Object[]}
 */
export function getGradientTypeOptions() {
	return [
		{ value: BACKGROUND_GRADIENT_LINEAR, label: __( 'Linear', 'mighty-blocks' ) },
		{ value: BACKGROUND_GRADIENT_RADIAL, label: __( 'Radial', 'mighty-blocks' ) },
	];
}

/**
 * Returns a CSS gradient from the given colors.
 *
 * @param  {Object} options
 * @return {?string}
 */
export function getCSSGradient( options ) {
	const {
		type,
		angle = 0,
		startColor = 'transparent',
		stopColor = 'transparent',
		startPosition = 0,
		stopPosition = 100,
	} = options;

	switch ( type ) {
		case BACKGROUND_GRADIENT_LINEAR:
			return `
				linear-gradient(
					${ angle }deg,
					${ startColor } ${ startPosition }%,
					${ stopColor } ${ stopPosition }%
				)
			`;

		case BACKGROUND_GRADIENT_RADIAL:
			return `
				radial-gradient(
					ellipse at center,
					${ startColor } ${ startPosition }%,
					${ stopColor } ${ stopPosition }%
				)
			`;
	}
}
