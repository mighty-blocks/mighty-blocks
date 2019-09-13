/**
 * External dependencies
 */
import memize from 'memize';
import { mapValues } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { createScopedAttributesAccessors } from './utils';

/**
 * Returns a higher order component used to inject the values scoped
 * by the given breakpoint.
 *
 * @param  {Object} schema
 * @return {Function}
 */
export default function withScopedAttributeValues( schema ) {
	return createHigherOrderComponent( ( WrappedComponent ) => {
		class ScopedAttributes extends Component {
			/**
			 * Default properties.
			 *
			 * @type {Object}
			 */
			static defaultProps = {
				prefix: undefined,
				values: {},
				breakpoint: {},
			};

			/**
			 * Constructor.
			 *
			 * @return {void}
			 */
			constructor() {
				super( ...arguments );

				this.memoizedGetAccessors = memize( createScopedAttributesAccessors );
				this.memoizedGetScopedValues = memize( this.getScopedValues.bind( this ) );
			}

			/**
			 * Returns a map of the values for the given breakpoint.
			 *
			 * @param  {Object} accessors
			 * @param  {Object} values
			 * @return {Object}
			 */
			getScopedValues( accessors, values ) {
				return mapValues( accessors, ( value ) => values[ value ] );
			}

			/**
			 * Renders the component.
			 *
			 * @return {WPElement}
			 */
			render() {
				const {
					prefix,
					values,
					state,
					breakpoint,
				} = this.props;

				// console.log( values );

				const accessors = this.memoizedGetAccessors( schema, {
					breakpoint,
					prefix,
					state,
				} );

				const scopedValues = this.memoizedGetScopedValues( accessors, values );

				return (
					<WrappedComponent { ...{
						...this.props,
						accessors,
						values: scopedValues,
					} } />
				);
			}
		}

		return withSelect( ( select ) => {
			const { getCurrentBreakpoint } = select( 'mighty-blocks/breakpoints' );
			const { getCurrentState } = select( 'mighty-blocks/states' );

			return {
				breakpoint: getCurrentBreakpoint(),
				state: getCurrentState(),
			};
		} )( ScopedAttributes );
	}, 'withScopedAttributeValues' );
}
