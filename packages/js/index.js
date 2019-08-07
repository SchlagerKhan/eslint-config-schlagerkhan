module.exports = {
	extends: [
		// prettier-ignore
		'airbnb',

		'@schlagerkhan/eslint-config-shared',
		require.resolve('./config/general'),

		'prettier',
		'prettier/babel',
		'prettier/react',

		'@schlagerkhan/eslint-config-shared/fix'
	]
};
