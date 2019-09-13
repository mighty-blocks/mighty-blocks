/**
 * Workaround the `regeneratorRuntime is not defined` error.
 */
require( '@babel/polyfill' );

/**
 * The `@wordpress/jest-console` package doesn't provide any useful things
 * for our tests so we don't need it.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/jest-preset-default/scripts/setup-test-framework.js#L1
 */
jest.mock( '@wordpress/jest-console', () => {} );
