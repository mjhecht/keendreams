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
        // Map container-directive names (:::name) to a wrapping div + class.
        const classFor = {
          ai: "ai",
          human: "human",
          written: "written",
          left: "img-left", // :::left  — float a figure left, text wraps
          right: "img-right", // :::right — float a figure right, text wraps
        };
        return tree => {
          visit(tree, node => {
            if (
              node.type === "containerDirective" &&
              classFor[node.name]
            ) {
              // Merge any author-supplied classes, e.g. :::left{.wide}
              const extra =
                node.attributes && node.attributes.class
                  ? ` ${node.attributes.class}`
                  : "";
              node.data = {
                hName: "div",
                hProperties: { className: `${classFor[node.name]}${extra}` },
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
