import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";
import { loadUserConfig } from "vuepress";

export default hopeTheme({
  hostname: "https://glucy2.cn",

  author: {
    name: "Glucy2",
    url: "https://glucy2.cn",
  },

  iconAssets: "iconfont",

  lastUpdated: true,

  logo: "/logo.jpg",

  repo: "Glucy2/blog",

  docsDir: "main",

  blog: {
    //articleInfo: ["Date", "Category", "Tag", "ReadingTime", "PageView"],
    articlePerPage: 16,
    name: "Glucy2",
    description: "Minecraft玩家/服主，学生，自由软件爱好者，Python菜鸟",
    intro: "/about/",
    medias: {
      //Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/85636804",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      Email: "mailto:Glucy-2@yandex.com",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      Gitee: "https://gitee.com/Glucy2",
      GitHub: "https://github.com/Glucy-2",
      //Gitlab: "https://example.com",
      //Gmail: "mailto:info@example.com",
      //Instagram: "https://example.com",
      //Lark: "https://example.com",
      //Lines: "https://example.com",
      //Linkedin: "https://example.com",
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      QQ: "https://qm.qq.com/cgi-bin/qm/qr?k=soxtzXwpWLI9UDKWXDF3cAkptnm1uLY4",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      Rss: "/rss.xml",
      //Steam: "https://example.com",
      Telegram: "https://t.me/Glucy2",
      //Twitter: "https://example.com",
      //Wechat: "https://example.com",
      //Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
    },
  },

  /*encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },*/

  navbar: Navbar,

  sidebar: false,

  plugins: {
    blog: {
    },

    comment: {
      provider: "Giscus",
      repo: "Glucy-2/blog",
      repoId: "R_kgDOJUPW8w",
      category: "Announcements",
      categoryId: "DIC_kwDOJUPW884CVtus",
    },

    copyright: {
      global: true,
      author: "Glucy2",
      license: "CC BY-SA 4.0",
      triggerWords: 100,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    feed: {
      channel: {
        title: "Glucy2's Blog",
        description: "Glucy2's blog",
        link: "https://glucy2.cn",
        language: "zh-CN",
      },
      atom: true,
      json: true,
      rss: true
    },

    git: {
      contributors: false
      //timezone: "Asia/Shanghai",
    }

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
