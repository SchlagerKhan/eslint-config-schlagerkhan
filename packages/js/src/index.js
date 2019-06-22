import merge from 'smart-merge';

import { react } from 'imports/index.js';

import base from './base';

const basic = {
	extends: 'eslint-config-airbnb',
};

const config = merge(base, basic, react);

export default config;
