import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		// prerender: {
		// 	default: false
		// }
		paths: {
			base: dev ? '' : '/global-archive'
		}
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
