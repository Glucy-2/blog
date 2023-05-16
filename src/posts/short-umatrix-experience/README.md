---
title: uMatrix 简短使用体验
icon: select
date: 2023-05-16
category:
  - 闲聊
tag:
  - 闲聊
  - 网络
  - 浏览器
  - 插件
---
# 发现

最近正在把浏览器从 Edge 逐步换到 Firefox，今天把桌面端的 Firefox 安装并简单配置了一下，找插件的过程中就发现了 [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/) 这个插件，看介绍：

> Point & click to forbid/allow any class of requests made by your browser. Use it to block scripts, iframes, ads, facebook, etc.

好像挺高级的，装上

# 问题

但是，我打开B站准备看的时候，问题来了——视频一直无法加载。期初我还以为是我设置的严格的跟踪保护的原因，但是关了也没用，看向 uMatrix ，在插件里面把功能关了之后也不行。于是开始排查脚本和浏览器扩展，让我没想到的是在浏览器扩展设置里面把 uMatrix 关了就行

似乎是在插件里面关闭功能，它还是会劫持请求但并不阻止，用来显示访问的资源，后面就没有深入看了

# 检索

卸载了插件之后我还是去网上搜了一下，uMatrix 已经停止更新了，并且插件本身也有一些问题和漏洞（比如丢 Cookies ），找了找有一个似乎还在更新的分支 [nuTensor.d](https://github.com/SteelEyeballSac1/nuTensor.d) ，看它的 README 说也不保证开箱即用，就没试了

# 浅浅的思考

![截图](https://addons.mozilla.org/user-media/previews/full/158/158458.png)

从这个插件的功能来看还是很实用的，尤其是对于那些对隐私要求高的用户来说。（或者就是用来看一个网页中使用的域名之类？）毕竟它可以对任意的域名放行或拦截图像/脚本/XHR等请求或者资源，比从代理那边实现会更高效。[它的 GitHub 仓库](https://github.com/gorhill/uMatrix)已经 Archive 了，从 README 和 issues 里面也没有看到什么停更原因

uMatrix 也许是这类扩展里面最好的了吧，它的功能也许可以用 [uBlock](https://github.com/gorhill/uBlock) 或者其他扩展/插件的自定义规则解决，不过就没有那么可视化了，并且似乎无法拦截 Cookies