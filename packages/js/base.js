// prettier-ignore
module.exports = {
	extends: [
		require.resolve('eslint-config-airbnb-base'),
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		require.resolve('eslint-config-prettier'),
		require.resolve('./rules/general'),
		require.resolve('./rules/globals'),
		require.resolve('./rules/rules'),
	],
};
