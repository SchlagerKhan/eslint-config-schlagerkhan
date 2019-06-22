(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (global.base = global.base || {}, global.base.js = factory()));
}(this, function () { 'use strict';

    function isObject(o) {
        return o.toString() === '[object Object]' ? true : false;
    }

    function quickMerge(a, b) {
        a = a || {};
        for (var i in b) {
            if (isObject(b[i])) {
                a[i] = quickMerge(a[i], b[i]);
            } else {
                a[i] = b[i];
            }
        }
        return a;
    }

    var smartMerge = function merge(obj, base, secondary) {
        var args = [].slice.call(arguments);
        return args.reduce(function(acc, current, i) {
            return quickMerge(acc, current);
        }, {});
    };

    const general = {
    	parser: 'babel-eslint',
    	plugins: ['jest'],
    	env: {
    		'jest/globals': true,
    	},
    };

    const globals = {
    	globals: {
    		document: true,
    		window: true,
    	},
    };

    const rules = {
    	rules: {
    		// General
    		'no-console': 0,

    		// Code logic
    		'no-unreachable': 1,
    		'no-unused-vars': 1,
    		'no-return-assign': 0,
    		'no-use-before-define': 0,
    		'no-restricted-syntax': 0,
    		'no-param-reassign': 0,

    		'no-mixed-operators': 0,

    		'default-case': 0,
    		'no-case-declarations': 0,

    		'global-require': 0,

    		'class-methods-use-this': 0,

    		'no-await-in-loop': 0,
    		'guard-for-in': 0,

    		radix: 0,

    		// Code Style
    		'func-names': 0,

    		'max-len': [1, { code: 120 }],

    		'no-tabs': 0,
    		indent: [2, 'tab', { SwitchCase: 1 }],

    		camelcase: 0,

    		'no-underscore-dangle': 0,
    		'space-before-function-paren': 0,

    		'object-curly-newline': [
    			1,
    			{
    				multiline: true,
    				consistent: true,
    				minProperties: 5,
    			},
    		],

    		// Imports
    		'import/prefer-default-export': 0,
    		'import/no-dynamic-require': 0,
    		'import/no-named-as-default': 0,
    		'import/no-named-as-default-member': 0,
    		'import/no-extraneous-dependencies': 0,
    		'import/named': 0,
    		'import/no-cycle': 0,
    	},
    };

    const basic = {
    	extends: 'eslint-config-airbnb-base',
    };

    const config = smartMerge(basic, general, globals, rules);

    return config;

}));
