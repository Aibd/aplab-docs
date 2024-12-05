import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "APLab",
  description: "网站描述",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  lang: "zh-CN",
  // cleanUrls: true,
  srcDir: "./src",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/doc" },
      {
        text: "更多",
        items: [
          { text: "关于", link: "/about" },
          { text: "联系我们", link: "/contact" },
        ],
      },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          {
            text: "希肤科技",
            items: [
              { text: "提成核算", link: "/snf/commission/calculation_process.md" },
            ],
            collapsed: true,
          },
        ],
      },
    ],

    footer: {
      message: "鄂ICP备2024057019号 ",
      copyright: "Copyright © 2024 aplab.cn, Built with VitePress.",
    },

    aside: true,
    outline: "deep",
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    search: {
      provider: 'local'
    }
  },
});
