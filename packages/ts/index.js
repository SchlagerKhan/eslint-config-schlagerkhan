module.exports = {
	extends: [
		'@schlagerkhan/js',
		'xo-typescript',

		'plugin:@typescript-eslint/recommended',
		require.resolve('./rules/typescript'),
		'prettier/@typescript-eslint',
	],
};
