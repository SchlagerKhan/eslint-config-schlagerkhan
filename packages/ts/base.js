// prettier-ignore
module.exports = {
	extends: [
		'airbnb-typescript/base',
		'plugin:import/typescript',

		require.resolve('shared/base'),
		require.resolve('./config/general'),
		require.resolve('./rules/general'),
	],
}

// Checkout https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675
