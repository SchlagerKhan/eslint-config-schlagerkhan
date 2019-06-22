// prettier-ignore
module.exports = {
	extends: [
		'eslint-config-airbnb',
		require.resolve('./base'),
		require.resolve('./rules/react'),
	],
};
