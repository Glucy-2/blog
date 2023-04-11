import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
    { text: "主页", icon: "home", link: "/" },
    {
        text: "博文",
        icon: "edit",
        link: "/article",
        prefix: "/article/",
        /*children: [
            {
                text: "苹果",
                icon: "edit",
                prefix: "apple/",
                children: [
                    { text: "苹果1", icon: "edit", link: "1" },
                    { text: "苹果2", icon: "edit", link: "2" },
                    "3",
                    "4",
                ],
            },
            {
                text: "香蕉",
                icon: "edit",
                prefix: "banana/",
                children: [
                    {
                        text: "香蕉 1",
                        icon: "edit",
                        link: "1",
                    },
                    {
                        text: "香蕉 2",
                        icon: "edit",
                        link: "2",
                    },
                    "3",
                    "4",
                ],
            },
            { text: "樱桃", icon: "edit", link: "cherry" },
            { text: "火龙果", icon: "edit", link: "dragonfruit" },
            "tomato",
            "strawberry",
        ],*/
    },
    { text: "关于", icon: "profile", link: "/about" },
    {
        text: "看看Minecraft服务器？",
        icon: "link",
        link: "//skimit.cn",
    },
]);
