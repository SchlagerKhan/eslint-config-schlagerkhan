module.exports = {
	extends: ['./globals', './rules'].map(require.resolve),
	parser: 'babel-eslint',
	env: {
		'jest/globals': true
	}
};
