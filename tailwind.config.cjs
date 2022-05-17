const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkRose: '#EDA592'
			},
			fontFamily: {
				sans: ['JetBrains Mono', 'monospace', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
