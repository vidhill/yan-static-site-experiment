const markdownShortcode = require('./mardown-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);

    return {};
};
