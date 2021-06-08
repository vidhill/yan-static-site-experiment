/* eslint-env node */
const MarkdownIt = require('markdown-it');
const path = require('path');

module.exports = {
    configFunction: function (eleventyConfig, options = {}) {
        const md = new MarkdownIt(options);

        eleventyConfig.addNunjucksTag('includeMd', function (nunjucksEngine) {
            return new (function () {
                this.tags = ['includeMd'];

                this.parse = function (parser, nodes) {
                    var tok = parser.nextToken();

                    var args = parser.parseSignature(null, true);
                    parser.advanceAfterBlockEnd(tok.value);

                    return new nodes.CallExtensionAsync(this, 'run', args);
                };

                this.run = function (context, filePath, callback) {
                    const { env } = context;
                    const { loaders } = env;
                    const loadedContentArr = loaders.map((loader) =>
                        loader.getSource(filePath)
                    );

                    const loadedContent = loadedContentArr.find((item) => {
                        if (item === null) {
                            return false;
                        }
                        return item.src !== undefined;
                    });

                    if (path.extname(filePath) != '.md') {
                        throw new Error('Expected filetype of .md');
                    }

                    if (!loadedContent) {
                        throw new Error(
                            `File at path '${filePath}' not found in includes folder`
                        );
                    }

                    const html = md.render(loadedContent.src);

                    const ret = new nunjucksEngine.runtime.SafeString(html);

                    callback(null, ret);
                };
            })();
        });
    },
};
