import merge from 'smart-merge';

import { general, globals, rules } from 'imports/index.js';

const basic = {
	extends: 'eslint-config-airbnb-base',
};

const config = merge(basic, general, globals, rules);

export default config;
