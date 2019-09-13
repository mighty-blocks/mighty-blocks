/**
 * Internal dependencies
 */
import {
	BACKGROUND_POSITION_CENTER_CENTER,
	BACKGROUND_SIZE_COVER,
	BACKGROUND_REPEAT_NO_REPEAT,
	BACKGROUND_BLEND_MODE_NORMAL,
} from './constants';

export default {
	backgroundImageId: {
		type: 'number',
	},

	backgroundImageUrl: {
		type: 'string',
	},

	backgroundImagePosition: {
		type: 'string',
		default: BACKGROUND_POSITION_CENTER_CENTER,
	},

	backgroundImageSize: {
		type: 'string',
		default: BACKGROUND_SIZE_COVER,
	},

	backgroundImageRepeat: {
		type: 'string',
		default: BACKGROUND_REPEAT_NO_REPEAT,
	},

	backgroundImageBlendMode: {
		type: 'string',
		default: BACKGROUND_BLEND_MODE_NORMAL,
	},
};
