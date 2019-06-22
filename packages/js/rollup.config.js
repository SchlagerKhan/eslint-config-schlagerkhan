import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';

const output = {
	dir: 'lib',
	format: 'umd',
};

const plugins = [
	resolve(),
	common(),
	alias({
		imports: '../../imports',
	}),
];

export default [
	{
		input: 'src/index.js',
		output: {
			...output,
			name: 'index.js',
		},
		plugins,
	},
	{
		input: 'src/base.js',
		output: {
			...output,
			name: 'base.js',
		},
		plugins,
	},
];
