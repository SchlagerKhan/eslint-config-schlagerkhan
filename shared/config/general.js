module.exports = {
	extends: [
		// prettier-ignore
		'plugin:jest/recommended',
		'plugin:promise/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['jest'],
	env: {
		jest: true
	}
};
