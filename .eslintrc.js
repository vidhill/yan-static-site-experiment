module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['vidhill'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
    ignorePatterns: ['!.eleventy.js', 'public/'],
    overrides: [
        {
            extends: ['vidhill/node'],
            files: [
                '11ty/**/*.js',
                'src/_data/siteData.js',
                '.eleventy.js',
                '.eslintrc.js',
            ],
            env: {
                node: true,
            },
        },
    ],
};
