// prettier-ignore
module.exports = {
	extends: [
		'airbnb-base',
		
		'@schlagerkhan/eslint-config-shared/base',
		require.resolve('./config/general'),

		"prettier",
		"prettier/babel"
	],
};
