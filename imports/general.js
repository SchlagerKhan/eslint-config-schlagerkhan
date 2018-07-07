module.exports = {
	extends: ['./globals'],
	parser: 'babel-eslint',
	plugins: ['jest'],
	env: {
		'jest/globals': true
	}
};
