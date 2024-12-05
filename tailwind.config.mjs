/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
			  'jetbrains': [ 'JetBrainsMono Nerd Font', 'monospace']
		  },
    },
	},
	plugins: [],
}
