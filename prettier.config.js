module.exports = {
	printWidth: 150,
	trailingComma: 'all',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	useTabs: true,
	overrides: [
		{
			files: '*.yml',
			options: {
				semi: true,
				tabWidth: 2,
			},
		},
	],
};
