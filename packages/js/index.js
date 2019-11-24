module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	extends: [
		'plugin:promise/recommended',
		'plugin:jest/recommended',
		'plugin:import/recommended',

		'xo/esnext',
		'xo-react',

		require.resolve('./rules/general'),
		require.resolve('./rules/import'),
		require.resolve('./rules/promise'),
		require.resolve('./rules/react'),

		'plugin:prettier/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		'jest/globals': true,
	},
};
