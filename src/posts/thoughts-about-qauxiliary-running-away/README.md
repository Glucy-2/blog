---
title: 关于 QAuxiliary 跑路的一些想法
icon: loop
date: 2023-04-24
category:
  - 闲聊
tag:
  - 闲聊
---

[QAuxiliary](//github.com/cinit/QAuxiliary)，折腾过安卓 root 之类的应该都知道，用来“make OICQ great again”的。

今天（2023年4月11日）在翻它的 Telgram 群组聊天记录的时候，发现它群组的头像灰了，进去一看，全禁言了，上面 Pin 了一条关于跑路的消息。去 GitHub 一看，项目默认分支变成了`run`，README 也改了：

> ## 通知
> 经过慎重考虑，我们不得不遗憾地宣布，由于不可抗拒力因素，即日起将停止 QAuxiliary 项目的所有维护和更新工作。由此给您造成的不便，敬请谅解。
> 感谢一年多来大家对 QAuxiliary 的喜爱与支持。我们深知，正是因为有了用户的支持，QAuxiliary 才得以走到今天。
> 在 QAuxiliary 的开发历程中，我们有幸能在 QAuxiliary 讨论群组中与许多优秀用户进行交流，并收获了许多宝贵建议。 在此过程中，一些用户也参与到了 QAuxiliary 的开发中，这对我们的工作有很大的帮助。 在这里，我们要再次感谢大家对 QAuxiliary 的大力支持。
> 路再长也有终点，夜再长也有尽头。江湖路远，后会有期。我们衷心的祝愿大家能在未来的生活中找到属于自己的幸福。
> QAuxiliary
> 2023.04.21

QAuxiliary 是基于 QNotified 的，我之前一直在用 QNotified ，好像是我把我的 OPPO Reno3 给 root 之后准备装 QNotified ，POEG1726 跟我说，用 QAuxiliary 吧，QNotified 已经差不多跑路了，就很懵地，用上了 QAuxiliary ，一直用到现在。

也不是说 QAuxiliary 用不了了，只是不再更新了，我现在用的版本是 `1.4.1.r1395.eccb8bb`，QQ 版本 `8.9.33.10335`，大部分功能都是正常工作的。之后我去看了一下 [Icalingua++](https://github.com/Icalingua-plus-plus/Icalingua-plus-plus)（大概是 Linux 上的一个三方 QQ 客户端），它上一个 commit 和 release 还是上周，看起来都没有什么异常，但是去它的群里一看，标注“现任负责人”的，说：

> 现在不在常用环境下或没有手机 QQ 长时间同网络在线的不建议首次登录 Icalingua++ 或者发送大量消息了，没有签名和 t544 的协议目前会被严重风控，可能会导致账号被第一批强制踢下线强制升级，甚至账号被冻结
> 也不清楚现在这样能苟多久，有可能一个月内就会全部寄。
> 而且 tx 更新算法比较频繁，fekit 还有热更新，就算逆向算法也估计会迅速更换失效，在协议稳定下来之前应该是不用考虑第三方的 QQ 了

寄。

希望 QQ NT 能搞出来插件之类的，但是还是不像让腾讯的垃圾软件在自己的设备上拉屎。而且移动端目前也没有什么替代方案，只能用旧版 QQ 加个停更的 QAuxiliary 了，谁也不知道新版 QQ 会不会搞出什么新的屎山，也不知道腾讯会不会禁止旧版用户登录。

原本下午的时候脑子里还是有挺多东西的，现在大概就剩这些了。

希望有朝一日能不再用腾讯的垃圾软件。