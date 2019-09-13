/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { blockNameToClassName, isMightyBlock } from '../../utils';

/**
 * Returns a custom class name for our blocks.
 *
 * @param  {string} className
 * @param  {string} blockName
 * @return {string}
 */
export function addCustomClassName( className, blockName ) {
	if ( ! isMightyBlock( blockName ) ) {
		return className;
	}

	return `${ className } ${ blockNameToClassName( blockName ) }`;
}

addFilter(
	'blocks.getBlockDefaultClassName',
	'mighty-blocks/custom-class-name',
	addCustomClassName
);
