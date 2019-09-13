/**
 * External dependencies
 */
import { upperFirst, camelCase } from 'lodash';

/**
 * Converts to a `PascalCase` string.
 *
 * @param  {string} string
 * @return {string}
 */
export default function pascalCase( string ) {
	return upperFirst( camelCase( string ) );
}
