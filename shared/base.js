module.exports = {
	extends: [
		// prettier-ignore
		require.resolve('./rules/general'),
		require.resolve('./rules/import'),
		require.resolve('./rules/promise'),
	],
};
