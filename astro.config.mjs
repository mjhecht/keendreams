// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkDirective from "remark-directive";
import wikiLink from "@portaljs/remark-wiki-link";

import { visit } from "unist-util-visit";

// https://astro.build/config
export default defineConfig({
  site: "https://mjhecht.github.io",
  base: "/",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      function attacher() {
        return tree => {
          visit(tree, node => {
            if (
              node.type === "containerDirective" &&
              (node.name === "ai" ||
                node.name === "human" ||
                node.name === "written")
            ) {
              node.data = {
                hName: "div",
                hProperties: { className: node.name },
              };
            }
          });
        };
      },
      [
        wikiLink,
        {
          // "obsidian-short" handles [[filename]] and [[filename|Alias]]
          pathFormat: "obsidian-short",
          hrefTemplate: (permalink, alias) => `/blog/${permalink}`,
        },
      ],
    ],
  },
});
