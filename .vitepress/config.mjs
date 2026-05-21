import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ZALP',
  description: 'ZALP Mod Metadata',
  lang: 'zh-CN',
  outDir: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})