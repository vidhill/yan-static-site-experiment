const svgContents = require('eleventy-plugin-svg-contents');
const markdownShortcode = require('./markdown-shortcode');

const cssPath = './src/scss/';

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.addPlugin(svgContents);

    eleventyConfig.addWatchTarget(cssPath);
    eleventyConfig.addPassthroughCopy(cssPath);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
