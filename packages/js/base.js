module.exports = {
	extends: [
		// prettier-ignore
		'airbnb-base',

		'@schlagerkhan/eslint-config-shared/base',
		require.resolve('./config/general'),

		'prettier',
		'prettier/babel',

		'@schlagerkhan/eslint-config-shared/fix'
	]
};
