import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://tiagobarantini.github.io",
  integrations: [
    sitemap(),
    solidJs(),
    UnoCSS({ injectReset: true }),
  ],
});
