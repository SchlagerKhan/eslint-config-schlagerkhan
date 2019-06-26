module.exports = {
	rules: {
		// General
		'no-console': 0,

		// Code logic
		'no-unreachable': 1,
		'no-unused-vars': 1,
		'no-return-assign': 0,
		'no-use-before-define': 0,
		'no-restricted-syntax': 0,
		'no-param-reassign': 0,

		'no-mixed-operators': 0,

		'default-case': 0,
		'no-case-declarations': 0,

		'global-require': 0,

		'class-methods-use-this': 0,

		'no-await-in-loop': 0,
		'guard-for-in': 0,

		radix: 0,

		// Code Style
		'func-names': 0,

		'max-len': [1, { code: 150 }],

		'no-tabs': 0,
		indent: [2, 'tab', { SwitchCase: 1 }],

		camelcase: 0,

		'no-underscore-dangle': 0,
		'space-before-function-paren': 0,

		'object-curly-newline': [
			1,
			{
				multiline: true,
				consistent: true,
				minProperties: 5
			}
		]
	}
};
