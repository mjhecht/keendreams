// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkDirective from "remark-directive";
import wikiLink from "@portaljs/remark-wiki-link";
import rehypeExternalLinks from "rehype-external-links";

import { visit } from "unist-util-visit";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.pltfrm.com",
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
          hrefTemplate: (permalink, alias) => `/${permalink}`,
        },
      ],
    ],
    rehypePlugins: [
      // Mark off-site links: open in a new tab + add a Wikipedia-style icon
      // (the icon itself is drawn via CSS on a[target="_blank"]).
      // Relative/internal links are left untouched.
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
});
