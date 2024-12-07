/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'gruv-green': '#b8bb26',
			'gruv-green-dark': '#98971a',
			'gruv-bg-1': '#fbf1c7',
			'gruv-bg-1-dark': '#282828',
			'gruv-bg-2': '#ebdbb2',
			'gruv-bg-2-dark': '#1d2021',
			'gruv-blue': '#83a598',
			'gruv-blue-dark': '#458588',
			'gruv-red': '#fb4934',
			'gruv-red-dark': '#cc241d',
			'gruv-yellow': '#fabd2f',
			'gruv-yellow-dark': '#d79921',
			'gruv-aqua': '#8ec07c',
			'gruv-aqua-dark': '#689d6a',
			'gruv-purple': '#d3869b',
			'gruv-purple-dark': '#b16286'

		},
		
		fontFamily: {
			'jet': [ '"JetBrainsMono Nerd Font"' ]
		},
		
    	
	},
	plugins: [],
}
