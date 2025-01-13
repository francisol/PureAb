let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');
const imp = require('postcss-import')

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [imp(),tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
};

