module.exports = {
	extends: [
		// prettier-ignore
		'airbnb-typescript/base',
		'plugin:import/typescript',

		'@schlagerkhan/eslint-config-shared/base',
		require.resolve('./config/general'),
		require.resolve('./rules/general'),

		'prettier',
		'prettier/babel',
		'prettier/@typescript-eslint',
	],
};

// Checkout https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675
