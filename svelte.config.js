import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	preprocess: [sveltePreprocess(), vitePreprocess()],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.markdoc']
};

export default config;
