import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
});
module.exports = {
    outputDir: 'docs',
    publicPath: './'
  }