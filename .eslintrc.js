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
    ignorePatterns: ['!.eleventy.js'],
    overrides: [
        {
            extends: ['vidhill/node'],
            files: ['11ty/**/*.js', '.eleventy.js', '.eslintrc.js'],
            env: {
                node: true,
            },
        },
    ],
};
