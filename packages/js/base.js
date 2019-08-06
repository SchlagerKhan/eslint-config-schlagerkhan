// prettier-ignore
module.exports = {
	extends: [
		'airbnb-base',
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		
		'@schlagerkhan/eslint-config-shared/base',
		require.resolve('./config/general'),

		"prettier",
		"prettier/babel"
	],
};
