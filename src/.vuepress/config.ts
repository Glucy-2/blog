import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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

  plugins: [
    docsearchPlugin({
      appId: "646KMYX0UZ",
      apiKey: "60f78f977143c2a5eee8a3bdbf745f40",
      indexName: "glucy2",
      translations: {
        button:
        {
          buttonText: "搜索",
          buttonAriaLabel: "搜索",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清空搜索内容",
            resetButtonAriaLabel: '清空搜索内容',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '最近搜索',
            noRecentSearchesText: '无最近搜索',
            saveRecentSearchButtonTitle: '保存此搜索',
            removeRecentSearchButtonTitle: '移除此搜索',
            favoriteSearchesTitle: '收藏搜索',
            removeFavoriteSearchButtonTitle: '移除此收藏',
          },
          errorScreen: {
            titleText: '搜索失败',
            helpText: '检查一下网络？',
          },
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: '回车键',
            navigateText: '导航',
            navigateUpKeyAriaLabel: '向上键',
            navigateDownKeyAriaLabel: '向下键',
            closeText: '关闭',
            closeKeyAriaLabel: 'Esc 键',
            searchByText: '搜索',
          },
          noResultsScreen: {
            noResultsText: '无搜索结果',
            suggestedQueryText: '搜索建议',
            reportMissingResultsText: '没有找到你想要的结果？',
            reportMissingResultsLinkText: '反馈给我们',
          },
        },
      },
      locales: {
        '/': {
          placeholder: '搜索博客',
          translations: {
            button: {
              buttonText: '搜索博客',
            },
          },
        },
      },
    }),
    removeHtmlExtensionPlugin(),
  ],

  // TODO: docsearch
  // https://theme-hope.vuejs.press/zh/guide/feature/search.html#%E4%BD%BF%E7%94%A8-vuepress-plugin-docsearch

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
