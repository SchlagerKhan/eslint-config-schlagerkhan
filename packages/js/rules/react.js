module.exports = {
	rules: {
		// React
		'react/prop-types': 0,
		'react/no-unused-prop-types': 0,
		'react/forbid-prop-types': 0,
		'react/boolean-prop-naming': 0,

		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': 0,
		'react/no-string-refs': 0,
		'react/require-default-props': 0,
		'react/no-multi-comp': 0,
		'react/prefer-stateless-function': 0,
		'react/self-closing-comp': 2,

		// JSX
		'jsx-quotes': [1, 'prefer-single'],
		'react/jsx-tag-spacing': 0,
		'react/jsx-child-element-spacing': 0,
		'react/destructuring-assignment': 0,
		// 'react/jsx-one-expression-per-line': [1, { allow: 'literal' }], // Not playing well with prettier

		// JSX-A11Y
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/click-events-have-key-events': 0,
	},
};
