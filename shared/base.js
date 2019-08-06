// prettier-ignore
module.exports = {
    extends: [
        require.resolve('./rules/general'),
		require.resolve('./rules/import'),
		require.resolve('./rules/promise'),
    ]
}
