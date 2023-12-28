import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'April',
  description: 'April 官方文档',
  icon: '/favicon.png',
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/april-projects' },
      { icon: 'wechat', mode: 'link', content: 'https://cdn.jsdelivr.net/gh/mobaijun/blog_css_js/image/about.png' },
    ],
  },
});
