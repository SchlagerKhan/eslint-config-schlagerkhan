// prettier-ignore
module.exports = {
	extends: [
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		require.resolve('eslint-config-prettier'),
		require.resolve('./config/general'),
		require.resolve('./config/globals'),
		require.resolve('./config/rules'),
		require.resolve('./config/import'),
		require.resolve('./config/promise'),
	],
};
