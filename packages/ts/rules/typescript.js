module.exports = {
	rules: {
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/indent': [1, 'tab'],
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/promise-function-async': 0,
		'@typescript-eslint/no-untyped-public-signature': 0,
		'@typescript-eslint/no-dynamic-delete': 0,
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/await-thenable': 0,
		'@typescript-eslint/restrict-template-expressions': 0,
		'@typescript-eslint/no-extraneous-class': 0,
		'@typescript-eslint/restrict-plus-operands': 0,
		'@typescript-eslint/no-this-alias': 0,
		'@typescript-eslint/member-ordering': [
			2,
			{
				default: [
					// Static
					'public-static-field',
					'protected-static-field',
					'private-static-field',

					'public-static-method',
					'protected-static-method',
					'private-static-method',

					// Constructors
					'public-constructor',
					'protected-constructor',
					'private-constructor',

					// Fields
					'public-abstract-field',
					'protected-abstract-field',
					'private-abstract-field',

					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',

					// Methods
					'public-abstract-method',
					'protected-abstract-method',
					'private-abstract-method',

					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
				],
			},
		],
	},
};
