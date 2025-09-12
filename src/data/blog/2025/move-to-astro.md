---
title: 搬家到 Astro
description: "把博客从 VuePress 迁移到 Astro 了"
pubDatetime: 2025-09-12T10:35:46Z
tags:
  - 闲聊
  - 博客
  - Astro
  - VuePress
---

# 搬家到 Astro
上次写博客已经是两年前的事了，时间过得真快。那时候博客刚建好不久，还是用的 [VuePress](https://vuejs.press) 和 [Hope 主题](https://theme-hope.vuejs.press)

但是 VuePress 不太适合博客使用，即使有 Hope 主题和 blog2 插件；而且 VuePress 的配置项目太过繁琐并且有很多隐藏的配置，配置起来非常麻烦；VitePress 太新了，我也不太熟悉前端技术栈，最后选择了速度快的 Astro 并挑了一个看起来不错并且配置起来还比较清晰的 [Paper 主题](https://astro-paper.pages.dev)

过程还算顺利，大概就是用 Paper 主题的命令行工具新建一个项目，改改配置，把之前的 Markdown 文件和图片搬过来改改格式就差不多了，不过这个搜索看起来好像是 wasm 做的前端搜索，可能不用依赖之前白嫖的 Algolia 了，之后再看看有没有性能问题吧

另外之前博客是用 Netlify 托管的，发这篇博客之后准备换成 Cloudflare Pages，之前好像是要用它做一些 URL 的处理的，现在不用了，毕竟 Netlify 还是有一些限制的，而且在各个平台之间跑来跑去的体验有些割裂吧

大概就这样 UwU