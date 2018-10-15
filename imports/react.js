module.exports = {
	rules: {
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
		'react/destructuring-assignment': 0,

		'react/jsx-one-expression-per-line': 0,
		'react/prop-types': [1, { ignore: 'children', skipUndeclared: true }],

		// JSX-A11Y
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/click-events-have-key-events': 0,
	},
};
