const base = require('eslint-config-schlagerkhan-base');

module.exports = {
	extends: ['airbnb'],
	parser: base.parser,
	globals: base.globals,
	plugins: base.plugins,
	env: base.env,
	rules: Object.assign({}, base.rules, {
		// React
		'react/forbid-prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': 0,
		'react/no-unused-prop-types': 1,
		'react/sort-comp': [1, { order: ['static-methods', 'lifecycle', 'everything-else', 'render'] }],
		'react/no-string-refs': 0,
		'react/require-default-props': 0,
		'react/no-multi-comp': 0,
		'react/prefer-stateless-function': 0,

		// JSX
		'jsx-quotes': [1, 'prefer-single'],

		// JSX-A11Y
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0
	})
};
