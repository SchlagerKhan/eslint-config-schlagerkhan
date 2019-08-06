// prettier-ignore
module.exports = {
	extends: [
		'airbnb',

		require.resolve('./base'),

		'@schlagerkhan/eslint-config-shared',

		"prettier",
		"prettier/babel",
		"prettier/react",
	],
};
