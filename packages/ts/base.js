// prettier-ignore
module.exports = {
	extends: [
		'airbnb-typescript/base',
		'@schlagerkhan/eslint-config-js/clean.base',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/indent': [1, 'tab'],

		'@typescript-eslint/camelcase': 0,

		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/no-explicit-any': 0,
	}
}
