import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],
	kit: {
		adapter: adapter({ fallback: '404.html' })
	},
	vite: {
		optimizeDeps: {
			exclude: ['@babichjacob/svelte-localstorage']
		},
		ssr: {
			noExternal: ['@babichjacob/svelte-localstorage']
		}
	}
};

export default config;
