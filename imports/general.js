module.exports = {
	extends: ['./globals'].map(require.resolve),
	parser: 'babel-eslint',
	plugins: ['jest'],
	env: {
		'jest/globals': true
	}
};
