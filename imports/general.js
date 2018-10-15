module.exports = {
	extends: ['./globals', './rules'].map(require.resolve),
	parser: 'babel-eslint',
	plugins: ['jest'],
	env: {
		'jest/globals': true,
	},
};
