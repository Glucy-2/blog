---
title: 在 Proxmox VE 上直通笔记本 NVIDIA 显卡到 Windows 虚拟机
description: "记录一下在 Proxmox VE 上直通笔记本 NVIDIA 显卡到 Windows 虚拟机的过程"
ogImage: "@/assets/2026/laptop-proxmox-nvidia-gpu-passthrough-to-windows/ogimage.png"
featured: true
pubDatetime: 2026-02-15T17:41:46Z
tags:
- 笔记本
- 联想
- 技术笔记
- Proxmox VE
- PVE
- 显卡直通
- NVIDIA
---

# 在 Proxmox VE 上直通笔记本 NVIDIA 显卡到 Windows 虚拟机

## Table of contents

## 前言
直接按照常规平台的直通方法直通 NVIDIA 是没法工作的（至少在 Windows 上），NVIDIA（驱动）会检测到这是虚拟机而拒绝启动，让你去买专业的虚拟化卡（

其实是挺久之前折腾的东西了，也不复杂，简单记录一下过程，用的笔记本是 联想 拯救者 R9000P 2022，当时的 Proxmox VE 版本是 9.1，内核 `6.17.9-1-pve`

## 过程

### 前期准备

首先需要把笔记本切换到混合显示模式（除非你想在笔记本屏幕上直接显示虚拟机的画面而不是 Proxmox VE 的），并开启笔记本的硬件虚拟化

装好 Proxmox VE 之后，在 `/etc/modprobe.d/pve-blacklist.conf` 中添加 `blacklist nouveau` 屏蔽 NVIDIA 的内核驱动

### 识别显卡设备

1. 用 `lspci` 找到 NVIDIA 显卡的 PCI-E 设备：

```
01:00.0 VGA compatible controller: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q] (rev a1)
01:00.1 Audio device: NVIDIA Corporation GA106 High Definition Audio Controller (rev a1)
```

2. 然后看一下设备的 PCI-E ID（此处的 01:00 对应上面的 01:00.0，在不同设备上会不一样，不要照抄，下面的 PCI ID 也一样）：

```
$ lspci -s 01:00 -nnk
01:00.0 VGA compatible controller [0300]: NVIDIA Corporation GA106M [GeForce RTX 3060 Mobile / Max-Q] [10de:2560] (rev a1)
        Subsystem: Lenovo Device [17aa:3b07]
        Kernel modules: nvidiafb, nouveau
01:00.1 Audio device [0403]: NVIDIA Corporation GA106 High Definition Audio Controller [10de:228e] (rev a1)
        Kernel modules: snd_hda_intel
```

3. 记下这几个 PCI ID：

- `10de:2560`：GPU 设备的 Vendor:Device
- `17aa:3b07`：GPU 子设备 Sub-Vendor:Sub-Device
- `10de:228e`：GPU 的音频设备

4. 在 `/etc/modprobe.d/vfio.conf` 里面写：

```
options vfio-pci ids=10de:2560,10de:228e
```

5. 在 `/etc/modules-load.d/vfio.conf` 里面写：

```
vfio
vfio_iommu_type1
vfio_pci
```

6. 运行 `update-initramfs -u`

7. 没问题的话重启

8. 用 `lspci -s 01:00 -nnk` 确认一下输出有 `Kernel driver in use: vfio-pci`

### 虚拟机配置

创建虚拟机时确认 `Machine` 是 `q35`，`BIOS` 是 `OVMF (UEFI)`，这应该是现在 PVE 创建 Windows 虚拟机时的默认选项

#### 添加 PCI 设备

给虚拟机添加显卡 PCI-E 设备：

![Add PCI device](@/assets/2026/laptop-proxmox-nvidia-gpu-passthrough-to-windows/0-add-pci-device.png)

- 在虚拟机的 Hardware 中点 Add - PCI device
- 在弹出的界面中，勾上 All functions，Primary GPU，Advanced，ROM-Bar，PCI-Express
- 选 Raw Device，找到前面的 GPU 设备
- 填写 Vendor ID `0x10de`，Device ID `0x2560`，Sub-Vendor ID `0x17aa` 和 Sub-Device ID `0x3b07`

#### 添加虚拟电池

给虚拟机加一个假电池：

写入假电池文件：

```shell
echo \
U1NEVKEAAAAB9EJPQ0hTAEJYUENTU0RUAQAAAElOVEwYEBkgoA8AFVwuX1NCX1BDSTAGABBM\
Bi5fU0JfUENJMFuCTwVCQVQwCF9ISUQMQdAMCghfVUlEABQJX1NUQQCkCh8UK19CSUYApBIj\
DQELcBcLcBcBC9A5C1gCCywBCjwKPA0ADQANTElPTgANABQSX0JTVACkEgoEAAALcBcL0Dk=\
| base64 -d > /usr/local/bin/ssdt1.dat
```

编辑 `/etc/pve/qemu-server/<你的虚拟机ID>.conf`，添加一行：

```conf
args: -acpitable file=/usr/local/share/ssdt1.dat
```

如果已经有 args 这一行的话就直接在后面加 `-acpitable file=/usr/local/share/ssdt1.dat`

#### 驱动安装和验证

虚拟机开机，打上官方驱动（如果联网了的话 Windows 默认也会自己打上驱动不过一般不是最新的）；如果任务管理器里面报 43 的话检查一下前面的步骤

## 下一步
如果需要添加连接到 NVIDIA GPU 的虚拟显示器的话，可以用 [parsec-vdd](https://github.com/nomi-san/parsec-vdd)
- parsec-vdd 安装后它默认会开机自启动，并且每次开机都要手动添加虚拟显示器，虽然可能有点不方便，但是基本可以放心把 Windows 显示器设置更改为仅显示在虚拟显示器上，这样如果系统出点问题可以在内屏上操作不用来回切（可能算是优点叭）

然后就可以用 Sunshine + Moonlight 串流了，也能打游戏来，不过带反作弊的游戏很容易认出来这是虚拟机，之后如果折腾差不多了再单独讲讲叭