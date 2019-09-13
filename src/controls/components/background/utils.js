/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Icon } from '../../../components/icons';
import {
	BACKGROUND_TYPE_COLOR,
	BACKGROUND_TYPE_GRADIENT,
} from './constants';

/**
 * Returns a list of the background types.
 *
 * @return {Object[]}
 */
export function getBackgroundTypeOptions() {
	return [
		{
			slug: BACKGROUND_TYPE_COLOR,
			icon: <Icon icon="paint-bucket" className="mighty-blocks-background-color__toolbar-icon" />,
			title: __( 'Solid', 'mighty-blocks' ),
		},
		{
			slug: BACKGROUND_TYPE_GRADIENT,
			icon: <Icon icon="gradient" className="mighty-blocks-background-color__toolbar-icon" />,
			title: __( 'Gradient', 'mighty-blocks' ),
		},
	];
}
