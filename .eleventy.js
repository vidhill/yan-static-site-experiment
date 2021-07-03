const svgContents = require('eleventy-plugin-svg-contents');
const {
    fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

const { markdown: markdownShortcode } = require('./11ty/shortcodes');

const cssPath = './src/scss/';

const jsonFilter = function (value) {
    return JSON.stringify(value, null, 4);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.addPlugin(svgContents);
    eleventyConfig.addPlugin(fortawesomeBrandsPlugin);

    eleventyConfig.addFilter('json', jsonFilter);

    eleventyConfig.addWatchTarget(cssPath);
    eleventyConfig.addPassthroughCopy('./src/assets/');

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
