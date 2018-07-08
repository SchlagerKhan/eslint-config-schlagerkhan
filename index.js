module.exports = {
	extends: ['eslint-config-airbnb', './imports/general', './imports/react'].map(require.resolve)
};
