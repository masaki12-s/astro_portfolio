import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	site: "https://masaki12-s.github.io/",
	base: "https://github.com/masaki12-s/portfolio_astro"
});
