/* eslint-disable no-shadow */

/**
 * External dependencies
 */
import {
	flow,
	reduce,
	mapKeys,
	mapValues,
	upperFirst,
} from 'lodash';

/**
 * Internal dependencies
 */
import { pascalCase } from '../../utils';

/**
 * Returns a scoped version of the given property.
 *
 * @param  {string} prop
 * @param  {string} breakpoint
 * @param  {string} [prefix]
 * @return {string}
 */
export function createScopedAttributeIdentifier( prop, breakpoint, prefix ) {
	prop = prefix ? upperFirst( prop ) : prop;
	breakpoint = pascalCase( breakpoint );

	return `${ prefix || '' }${ prop }${ breakpoint }`;
}

/**
 * Returns a prefixed version of the given property.
 *
 * @param  {string} prop
 * @param  {string} prefix
 * @return {string}
 */
export function createPrefixedAttributeProperty( prop, prefix ) {
	if ( ! prefix ) {
		return prop;
	}

	return `${ prefix }${ upperFirst( prop ) }`;
}

/**
 * Returns a scoped version of the given property.
 *
 * @param  {string} prop
 * @param  {Object} scopes
 * @return {stirng}
 */
export function createdScopedAttributeProperty( prop, scopes ) {
	return flow( [
		// Add the prefix.
		// E.g `top` => `paddingTop`
		( prop ) => {
			if ( ! scopes.prefix ) {
				return prop;
			}

			return `${ scopes.prefix }${ upperFirst( prop ) }`;
		},

		// Add the state.
		// E.g `paddingTop` => `paddingTop:hover`
		( prop ) => {
			if ( ! scopes.state ) {
				return prop;
			}

			return `${ prop }:${ scopes.state.slug }`;
		},

		// Add the breakpoint.
		// E.g `paddingTop:hover` => `paddingTop:hover@desktop`
		( prop ) => {
			if ( ! scopes.breakpoint ) {
				return prop;
			}

			return `${ prop }@${ scopes.breakpoint.slug }`;
		},
	] )( prop );
}

/**
 * Returns a scoped version of the given attributes schema.
 *
 * @param  {Object} schema
 * @param  {Object} scopes
 * @return {Object}
 */
export function createScopedAttributesSchema( schema, scopes ) {
	return flow( [
		( schema ) => mapKeys( schema, ( definition, prop ) => createdScopedAttributeProperty(
			prop,
			{ prefix: scopes.prefix }
		) ),

		( schema ) => {
			if ( ! scopes.states ) {
				return schema;
			}

			return reduce( scopes.states, ( memo, state ) => ( {
				...memo,
				...mapKeys( schema, ( definition, prop ) => createdScopedAttributeProperty( prop, { state } ) ),
			} ), {} );
		},

		( schema ) => {
			if ( ! scopes.breakpoints ) {
				return schema;
			}

			return reduce( scopes.breakpoints, ( memo, breakpoint ) => ( {
				...memo,
				...mapKeys( schema, ( definition, prop ) => createdScopedAttributeProperty( prop, { breakpoint } ) ),
			} ), {} );
		},
	] )( schema );
}

/**
 * Returns a scoped version of the given attributes accessors.
 *
 * @param  {Object} schema
 * @param  {Object} scopes
 * @return {Object}
 */
export function createScopedAttributesAccessors( schema, scopes ) {
	return mapValues( schema, ( definition, prop ) => createdScopedAttributeProperty( prop, scopes ) );
}

/**
 * Returns a scoped version of the schema for easier access to
 * the values.
 *
 * @param  {Object} schema
 * @param  {Object} breakpoint
 * @param  {string} [prefix]
 * @return {Object}
 */
export function createScopedAttributesDictionary( schema, breakpoint, prefix ) {
	return mapValues( schema, ( definition, prop ) => {
		return createScopedAttributeIdentifier( prop, breakpoint.slug, prefix );
	} );
}
