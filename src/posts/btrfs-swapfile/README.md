---
title: 在 BTRFS 文件系统中创建与挂载 Swap 文件
icon: info
date: 2023-06-24
category:
  - Linux
tag:
  - Linux
  - BTRFS
  - Swap
---
想到 swap 文件会比 swap 分区管理起来更加灵活，所以昨天（6月23日）尝试在服务器上创建 Swap 文件，但是用以前的方法在 swapon 的时候就会报错（`swapon: /swapfile: swapon failed: 无效的参数 # 英文就是 Invalid argument`），于是去查了半天，发现是因为用的 BTRFS 文件系统，创建方式不一样，记录一下。

<!-- more -->

参考：[BTRFS 官方文档](https://btrfs.readthedocs.io/en/latest/Swapfile.html)，有更详细的信息

Linux 内核 `6.1` 开始，可以直接：

```shell
btrfs filesystem mkswapfile --size 2G /swapfile
# 输出：create swapfile /swapfile size 2.00GiB (2147483648)
swapon /swapfile
# 无输出
```
> `2G` 是 Swap 文件的大小，`/swapfile` 是 Swap 文件路径，可以自行修改
> 如果是普通用户记得加 `sudo`

然后用 `free` 就可以看到已经有 Swap 了

如果要开机的时候自动挂载，可以使用 `nano` 或者 `vim` 等编辑器 在 `/etc/fstab` 里加一行：

```fstab
/swapfile	swap	swap	defaults	0	0
```
> 其中 `/swapfile` 是刚刚创建的 Swap 文件的路径

如果是 Linux `6.1` 以下的内核，下面是官方文档的方法：

```shell
truncate -s 0 /swapfile
chattr +C /swapfile
fallocate -l 2G /swapfile
chmod 0600 /swapfile
# 这里可能需要 dd 一下
mkswap /swapfile
swapon /swapfile
```
> 同样， `2G` 是 Swap 文件的大小，`/swapfile` 是 Swap 文件路径，可以自行修改
