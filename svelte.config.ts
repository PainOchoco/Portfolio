import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

const config: import('@sveltejs/kit').Config = {
	preprocess: [sveltePreprocess(), vitePreprocess()],
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.markdoc']
};

export default config;
