// prettier-ignore
module.exports = {
	extends: [
		'airbnb-base',
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		'prettier',
		require.resolve('./rules/general'),
		require.resolve('./rules/globals'),
		require.resolve('./rules/rules'),
	],
};
