import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const outputDir = 'public/js';
const filename = 'bundle';
export default {
    input: 'src/js/index.js',
    output: [
        {
            format: 'module',
            file: `${outputDir}/${filename}.esm.js`,
            sourcemap: true,
        },
        {
            format: 'iife',
            file: `${outputDir}/${filename}.js`,
            sourcemap: true,
        },
    ],
    plugins: [
        json(),
        nodeResolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        terser(),
    ],
};
