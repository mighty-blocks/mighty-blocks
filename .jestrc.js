module.exports = {
	preset: '@wordpress/jest-preset-default',

	setupFilesAfterEnv: [
		'<rootDir>/tests/src/setup.js',
		'<rootDir>/node_modules/@wordpress/jest-preset-default/scripts/setup-test-framework.js',
	],

	transformIgnorePatterns: [
		// - https://github.com/facebook/jest/issues/6229
		// - https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/343
		'/node_modules/(?!simple-html-tokenizer)',
	],

	moduleNameMapper: {
		'^./src(.+)$': '<rootDir>/src$1',
		'^./tests(.+)$': '<rootDir>/tests/src$1',
	},
};
