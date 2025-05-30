// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';


// https://astro.build/config
export default defineConfig({
  site: 'https://mjhecht.github.io',
  base: '/keendreams',
  integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			remarkDirective,
			function attacher() {
				return (tree) => {
					visit(tree, (node) => {
						if (
							node.type === 'containerDirective' &&
							(node.name === 'ai' || node.name === 'human')
						) {
							node.data = {
								hName: 'div',
								hProperties: { className: node.name },
							};
						}
					});
				};
			},
		],
	},
});
