const fortawesomeCore = require('@fortawesome/fontawesome-svg-core');
const brandIcons = require('@fortawesome/free-brands-svg-icons');

const BRANDS_PREFIX = 'fab';

function makeFortawesomeShortcode(icons, iconPrefix) {
    for (const key in icons[iconPrefix]) {
        fortawesomeCore.library.add(icons[key]);
    }

    /**
     *
     * Shortcode function that returns inline svg
     *
     * @param {string} iconName - The id of the icon
     * @param {string} [additionalClasses] - css class names to add to the svg element, separate multiple class names with a comma
     * @return {string} String representation inline SVG
     *
     */
    function fortawesomeShortcode(iconName, additionalClassesString) {
        const additionalClasses = additionalClassesString.split(',');
        const iconResult = fortawesomeCore.icon(
            {
                prefix: iconPrefix,
                iconName,
            },
            {
                classes: additionalClasses,
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
