const markdownShortcode = require('./mardown-shortcode');

const cssPath = "./src/scss/";

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
    
    eleventyConfig.addWatchTarget(cssPath);
    eleventyConfig.addPassthroughCopy(cssPath);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
