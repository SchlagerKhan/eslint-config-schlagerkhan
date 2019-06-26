module.exports = {
	parserOptions: {
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	plugins: ['jest'],
	env: {
		'jest/globals': true,
	},
};
