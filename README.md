# 2nd Anniversary of PYC-ZWX

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<p align="center">
  <img src="resources/favicon/logo.ico" alt="2nd Anniversary Logo" width="96" height="96">
</p>

<h2 align="center">两周年纪念页</h2>

<p align="center">
  帮两位朋友制作的两周年纪念时间线，后期会根据需求持久更新
  <br />
  由于朋友分手，该项目无限延期。
  <br />
  <a href="https://alex-mcavoy.github.io/2nd_anniversary_of_pyc-zwx/"><strong>查看演示 »</strong></a>
  ·
  <a href="https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/issues">报告 Bug</a>
  ·
  <a href="https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/issues">提出建议</a>
</p>


## 开发指南

### 项目运行

1. 克隆项目

```sh
git clone https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx.git
```

2. 进入项目目录并安装依赖

```sh
cd 2nd_anniversary_of_pyc-zwx
npm i
```

3. 使用本地静态服务器打开项目

### 图片转换

将 `resources/images/original` 中的 PNG 图片转换为 WebP：

```sh
npm run convert:images
```

转换后的文件会输出到 `resources/images/webp`。

### 构建发布目录

生成压缩后的发布目录：

```sh
npm run build
```

构建产物输出到 `dist`。

```

### 目录结构

```text
.
├── resources/               # 页面运行资源
│   ├── audio/               # 背景音乐
│   ├── css/                 # 页面样式
│   ├── cursor/              # 鼠标指针
│   ├── favicon/             # 站点图标
│   ├── framework/           # 本地化第三方框架
│   ├── images/              # 图片资源
│   │   ├── common/          # 背景、樱花、波纹等通用图片
│   │   ├── original/        # 原始 PNG 图片
│   │   └── webp/            # WebP 运行图片
│   └── js/                  # 页面脚本
├── scripts/                 # 构建与图片转换脚本
├── dist/                    # 构建产物，忽略入库
├── index.html               # 页面入口
├── package.json
└── README.md
```

### 使用工具

- [AngularJS](https://angularjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootbox.js](https://bootboxjs.com/)
- [Font Awesome](https://fontawesome.com/)
- [GSAP](https://greensock.com/gsap/)
- [Sharp](https://sharp.pixelplumbing.com/)
- [clean-css](https://github.com/clean-css/clean-css)
- [html-minifier-terser](https://github.com/terser/html-minifier-terser)
- [terser](https://terser.org/)
- [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)

## 开源协议

本项目基于 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 开源。你可以使用、复制、修改和分发本项目；分发时需要提供源代码，且分发后的程序同样需要遵守 GPL 协议。

## 参与项目

欢迎提交 Issue 或 Pull Request。

基本流程：

1. Fork 本仓库
2. Clone 到本地
3. 新建分支并修改
4. Commit 并 Push 到你的分支
5. 提交 Pull Request

Commit 摘要建议使用如下格式：

```bash
[subject] message
```

常见 subject：

- `Feat`: 新功能
- `Fix`: 修复 bug
- `Docs`: 文档修改
- `Style`: 不影响运行逻辑的代码风格调整
- `Refactor`: 重构
- `Perf`: 性能优化
- `Test`: 测试相关
- `Chore`: 构建、依赖或辅助工具相关
- `Build`: 构建系统或外部依赖变更
- `CI`: CI 配置
- `Revert`: 回滚
- `Disuse`: 移除废弃代码

## 鸣谢

- [jQuery](https://jquery.com/)
- [AngularJS](https://angularjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootbox.js](https://bootboxjs.com/)
- [Font Awesome](https://fontawesome.com/)
- [GSAP](https://greensock.com/gsap/)

<!-- links -->

[contributors-shield]: https://img.shields.io/github/contributors/Alex-McAvoy/2nd_anniversary_of_pyc-zwx.svg?style=flat-square
[contributors-url]: https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Alex-McAvoy/2nd_anniversary_of_pyc-zwx.svg?style=flat-square
[forks-url]: https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/network/members
[stars-shield]: https://img.shields.io/github/stars/Alex-McAvoy/2nd_anniversary_of_pyc-zwx.svg?style=flat-square
[stars-url]: https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/stargazers
[issues-shield]: https://img.shields.io/github/issues/Alex-McAvoy/2nd_anniversary_of_pyc-zwx.svg?style=flat-square
[issues-url]: https://github.com/Alex-McAvoy/2nd_anniversary_of_pyc-zwx/issues
