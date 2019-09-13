module.exports = {
	linters: {
		'*.js': [
			'eslint',
		],

		'*.php': [
			'composer run-script lint',
		],
	},

	ignore: [
		'.*.js',
		'babel*',
		'vendor/**/*.php',
	],
};
