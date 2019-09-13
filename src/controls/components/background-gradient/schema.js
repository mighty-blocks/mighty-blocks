/**
 * Internal dependencies
 */
import { BACKGROUND_GRADIENT_LINEAR } from './constants';

export default {
	backgroundGradientType: {
		type: 'string',
		default: BACKGROUND_GRADIENT_LINEAR,
	},

	backgroundGradientAngle: {
		type: 'number',
		default: 0,
	},

	backgroundGradientStartColor: {
		type: 'string',
	},

	backgroundGradientStopColor: {
		type: 'string',
	},

	backgroundGradientStartPosition: {
		type: 'number',
		default: 0,
	},

	backgroundGradientStopPosition: {
		type: 'number',
		default: 100,
	},

	backgroundGradientAboveImage: {
		type: 'boolean',
		default: false,
	},
};
