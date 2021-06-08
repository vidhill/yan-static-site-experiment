/* eslint-env node */
const svgContents = require('eleventy-plugin-svg-contents');
const markdownShortcode = require('./markdown-shortcode');

const fortawesomeBrand = require('./11ty/shortcodes/fortawesome-brands');

const cssPath = './src/scss/';

const jsonFilter = function (value) {
    return JSON.stringify(value, null, 4);
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.addPlugin(svgContents);

    eleventyConfig.addFilter('json', jsonFilter);

    eleventyConfig.addWatchTarget(cssPath);
    eleventyConfig.addPassthroughCopy(cssPath);

    eleventyConfig.addShortcode('fortawesomeBrand', fortawesomeBrand);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
