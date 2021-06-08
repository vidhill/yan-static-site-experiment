const fortawesomeCore = require('@fortawesome/fontawesome-svg-core');
const brandIcons = require('@fortawesome/free-brands-svg-icons');

const BRANDS_PREFIX = 'fab';

function makeFortawesomeShortcode(icons, iconPrefix) {
    for (const key in icons[iconPrefix]) {
        fortawesomeCore.library.add(icons[key]);
    }

    function fortawesomeShortcode(iconName, additionalClasses) {
        const iconResult = fortawesomeFree.icon(
            {
                prefix: iconPrefix,
                iconName,
            },
            {
                classes: [additionalClasses],
            }
        );

        if (!iconResult) {
            return '';
        }

        const svgOutput = iconResult.abstract.map((abstract) => {
            return fortawesomeCore.toHtml(abstract);
        });

        return svgOutput.join('');
    }
    return fortawesomeShortcode;
}

const fortawesomeBrands = makeFortawesomeShortcode(brandIcons, BRANDS_PREFIX);

module.exports = fortawesomeBrands;
