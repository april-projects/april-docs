import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'April-官网文档',
    description: 'April 官方文档',
    logo: {
        light: '/logo.png',
        dark: '/logo.png',
    },
    logoText: 'April 项目组',
    icon: '/favicon.png',
    themeConfig: {
        socialLinks: [
            {icon: 'github', mode: 'link', content: 'https://github.com/april-projects'},
            {icon: 'wechat', mode: 'link', content: 'https://cdn.jsdelivr.net/gh/mobaijun/blog_css_js/image/about.png'},
            {icon: 'lark', mode: 'link', content: 'https://www.mobaijun.com'},
        ],
        footer: {
            message: '© 2024 April Inc. All Rights Reserved.'
        },
        // 在右侧边栏中配置大纲的标题。
        outlineTitle: '目录',
        // 是否显示最后更新时间，默认情况下不显示。
        lastUpdated: true,
        // 最后更新时间的文本。
        lastUpdatedText: '最后更新时间',
        // 上一页的文本。
        prevPageText: '上一章',
        // 下一页的文本。
        nextPageText: '下一章',
        // 搜索框的占位符文本
        searchPlaceholderText: '搜索',
        // 没有搜索结果时的显示文本。
        searchNoResultsText: '未找到要搜索的内容',
        // 没有搜索结果时的建议查询提示文本。
        searchSuggestedQueryText: '建议：Java，Python',
        // "always" | "auto" | "never"
        hideNavbar: 'auto',
        // 在页面切换的时候是否显示转场动画
        enableContentAnimation: true,
        // 源代码按钮的文本
        sourceCodeText: 'Source',
        // 启用文档上的滚动到顶部按钮
        enableScrollToTop: true,

    },
    markdown: {
        showLineNumbers: true,
        defaultWrapCode: true,
        codeHighlighter: "prism",
    },
    builderConfig: {
        output: {
            distPath: {
                root: 'doc_build',
            },
        },
        html: {
            tags: [
                {
                    tag: 'script',
                    // 通过 window.RSPRESS_THEME 变量来指定默认的主题模式，可选值为 'dark' 和 'light'
                    children: "window.RSPRESS_THEME = 'dark';",
                },
            ],
        },
    },
    // 配置 CSS 选择器，自定义要放大的图片，默认为 '.rspress-doc img'
    mediumZoom: {
        selector: '.rspress-doc img',
    },
});
