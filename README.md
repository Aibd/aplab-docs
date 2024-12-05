# APLab Documentation

这里是 APLab 的文档库，欢迎与大家交流学习！

## VitePress

APLab 使用[vitepress](https://vitepress.vuejs.org/)作为文档框架，它是一个基于静态网站生成器(SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。。

## 目录结构

```
aplab-docs
├── README.md
├── .vitepress
│   ├── config.mjs
│   ├── theme
|—— src
│   ├──index.md
│   ├── guide
│   │   ├── index.md
│   │   ├── getting-started.md
│   │   ├── ...
│   ├── blog
│   │   ├── index.md
│   │   ├── ...
|—— package.json
|—— pnpm-lock.yaml
|—— Dockerfile
```

## 安装依赖

```
pnpm i
```
## 开发

```
pnpm run docs:dev
```

## 构建

```
pnpm run docs:build
```

## 预览

```
pnpm run docs:preview
```

