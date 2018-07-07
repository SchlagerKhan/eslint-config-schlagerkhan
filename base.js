const general = require('./imports/general');
const rules = require('./imports/rules');

module.exports = {
	extends: ['airbnb-base', general, rules]
};
