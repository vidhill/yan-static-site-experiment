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
        {
            files: ['src/_data/*'],
            rules: {
                // filenames form 11ty data files need to be camelCase to allow for variable not to contain dash for nunjucks
                // https://github.com/11ty/11ty-website/pull/216
                'unicorn/filename-case': [
                    'error',
                    {
                        case: 'camelCase',
                    },
                ],
            },
        },
    ],
};
