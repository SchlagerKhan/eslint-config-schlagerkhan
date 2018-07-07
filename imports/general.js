module.exports = {
	extends: ['./globals', './rules'].map(require.resolve),
	parser: 'babel-eslint',
	plugins: ['eslint-plugin-jest', 'eslint-plugin-import'].map(require.resolve),
	env: {
		'jest/globals': true
	}
};
