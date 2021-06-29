import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const outputDir = 'public/js';
const filename = 'bundle';
export default {
    input: 'src/js/index.js',
    output: [
        {
            format: 'module',
            file: `${outputDir}/${filename}.cjs.js`,
        },
        {
            format: 'iife',
            file: `${outputDir}/${filename}.js`,
        },
    ],
    plugins: [json(), commonjs(), babel({ babelHelpers: 'bundled' })],
};
