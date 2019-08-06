// prettier-ignore
module.exports = {
	extends: [
		'airbnb-base',
		// require.resolve('eslint-config-airbnb-base'),
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		
		require.resolve('shared/base'),
		require.resolve('./config/general'),

		// require.resolve('eslint-config-prettier'),
		"prettier",
		"prettier/babel"
	],
};
