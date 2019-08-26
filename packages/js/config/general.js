module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	plugins: ['jest', 'promise'],
	env: {
		'jest/globals': true,
	},
};
