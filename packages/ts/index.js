module.exports = {
	extends: [
		// prettier-ignore
		'airbnb-typescript',

		require.resolve('./base'),

		'@schlagerkhan/eslint-config-shared',

		'prettier',
		'prettier/babel',
		'prettier/react',
		'prettier/@typescript-eslint',

		'@schlagerkhan/eslint-config-shared/fix'
	]
};
