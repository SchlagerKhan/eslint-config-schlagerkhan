module.exports = {
	// General
	'no-console': 0,

	// Code logic
	'no-unreachable': 1,
	'no-unused-vars': 1,
	'no-return-assign': 0,
	'no-use-before-define': 0,
	'no-restricted-syntax': 1,
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
	'max-len': [1, { code: 120 }],

	'no-tabs': 0,
	indent: [2, 'tab', { SwitchCase: 1 }],

	camelcase: 0,

	'no-underscore-dangle': 0,

	// Imports
	'import/prefer-default-export': 0,
	'import/no-dynamic-require': 0,
	'import/no-named-as-default': 0,
	'import/no-named-as-default-member': 0,
	'import/no-extraneous-dependencies': 0,
	'import/named': 0,
	'import/no-cycle': 0
};
