module.exports = {
  title: "除夕一梦",
  description: "人生路漫漫，你我共前行。",
  theme: "reco",
  // 主题设置
  themeConfig: {
    type: "blog",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    nav: [
      { location: 1, text: "home", link: "/", icon: "reco-home" },
      { text: "About", link: "/about/", icon: "reco-account" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "Contact",
        ariaLabel: "联系我-contact",
        icon: "reco-message",
        items: [
          {
            text: "github",
            link: "https://github.com/linzowo",
            icon: "reco-github",
          },
          {
            text: "gitee",
            link: "https://gitee.com/linzowo/",
            icon: "reco-mayun",
          },
          {
            text: "知乎",
            link: "https://www.zhihu.com/people/lin-chu-xi-71",
            icon: "reco-zhihu",
          },
        ],
      },
    ],
    // valine评论插件设置
    valineConfig: {
      appId: "Y56U2to74nFf3UGtkWW0QVSe-gzGzoHsz",
      appKey: "vte5MUM4XQxW8jKXbMUVEscS",
    },
    friendLink: [
      {
        title: "linzowo@qq.com",
        desc: "如有问题欢迎通过邮箱联系",
        email: "linzowo@qq.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    author: "林除夕",
    authorAvatar: "/images/avatar.jpg",
  },
  plugins: [
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hijiki",
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 20, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
  ],
  // 向head中注入设置标签
  head: [
    // 移动端搜索框优化
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/images/favicon.ico" }]
  ],
};
