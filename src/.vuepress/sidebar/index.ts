import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "note",
      link: "/article",
      prefix: "article/",
      //children: "structure",
    },
    "about/",
  ],
});
