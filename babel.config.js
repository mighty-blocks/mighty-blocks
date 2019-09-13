module.exports = {
	presets: [
		[ '@babel/preset-env', {
			modules: false,
		} ],
	],

	plugins: [
		[ 'babel-plugin-macros' ],
		[ '@babel/plugin-proposal-export-default-from' ],
		[ '@babel/plugin-proposal-class-properties' ],
		[ '@babel/plugin-proposal-object-rest-spread' ],
		[ '@wordpress/babel-plugin-import-jsx-pragma', {
			source: '@wordpress/element',
			scopeVariable: 'createElement',
			isDefault: false,
		} ],
		[ '@babel/plugin-transform-react-jsx', {
			pragma: 'createElement',
		} ],
		[ 'babel-plugin-syntax-async-functions' ],
		[ '@babel/plugin-transform-runtime' ],
	],

	env: {
		test: {
			presets: [
				[ '@babel/preset-env' ],
			],
		},
	},
};
