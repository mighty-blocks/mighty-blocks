/**
 * External dependencies
 */
import { isString } from 'lodash';

/**
 * Checks whether the given block is provided by Gutenberg.
 *
 * @param  {string} blockName
 * @return {boolean}
 */
export function isCoreBlock( blockName ) {
	return blockName.indexOf( 'core' ) === 0;
}

/**
 * Checks whether the given block is provided by Mighty Blocks.
 *
 * @param  {string} blockName
 * @return {boolean}
 */
export function isMightyBlock( blockName ) {
	return blockName.indexOf( 'mighty-blocks' ) === 0;
}

/**
 * Returns a CSS class name composed by the name of the block
 * and the rest of params.
 *
 * @param  {string} blockName
 * @param  {...any} rest
 * @return {string}
 */
export function blockNameToClassName( blockName, ...rest ) {
	blockName = blockName.replace( /\//, '-' );
	rest = rest.filter( isString );
	rest = rest.filter( Boolean );

	return [
		blockName,
		...rest,
	].join( '-' );
}
