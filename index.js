module.exports = {
	extends: ['eslint-config-airbnb', './imports/rules', './imports/react'].map(require.resolve)
};
