import json from '@rollup/plugin-json';

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
    plugins: [json()],
};
