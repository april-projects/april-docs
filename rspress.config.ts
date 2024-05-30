import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'April',
    description: 'April 官方文档',
    logo: {
        light: '/logo.png',
        dark: '/logo.png',
    },
    icon: '/favicon.png',
    themeConfig: {
        socialLinks: [
            {icon: 'github', mode: 'link', content: 'https://github.com/april-projects'},
            {icon: 'wechat', mode: 'link', content: 'https://cdn.jsdelivr.net/gh/mobaijun/blog_css_js/image/about.png'},
            {icon: 'lark', mode: 'link', content: 'https://www.mobaijun.com'},
        ],
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
    }
});
