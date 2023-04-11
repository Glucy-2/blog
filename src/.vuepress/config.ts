import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Glucy2",
      description: "Glucy2 的博客",
    },
  },

  plugins: [removeHtmlExtensionPlugin()],

  // TODO: docsearch
  // https://theme-hope.vuejs.press/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-plugin-docsearch

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
