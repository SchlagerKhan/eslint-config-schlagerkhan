// prettier-ignore
module.exports = {
	extends: [
		'eslint-config-airbnb-base',
		'./imports/general',
	].map(require.resolve),
};
