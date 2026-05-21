import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ZALP',
  description: 'ZALP Official Site - A mod installer for Мир кораблей.',
  head: [
    ['style', {}, `
      :root {
        --vp-c-brand-1: #E37400;
        --vp-c-brand-2: #FF8C1A;
        --vp-c-brand-3: #B85E00;
      }
    `]
  ],
  locales: {
    chs: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/chs/',
      themeConfig: {
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '选择语言',
        outline: { label: '本页目录' },
        nav: [
          { text: '首页', link: '/chs/' },
          { text: '下载', link: '/chs/download' },
          { text: '关于', link: '/chs/about' },
        ],
        footer: {
          message: 'ZALP — 面向 Мир кораблей 的模组安装器',
          copyright: `© ${new Date().getFullYear()} ZALP`
        },
      }
    },
    cht: {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/cht/',
      themeConfig: {
        darkModeSwitchLabel: '外觀',
        lightModeSwitchTitle: '切換至淺色模式',
        darkModeSwitchTitle: '切換至深色模式',
        sidebarMenuLabel: '選單',
        returnToTopLabel: '返回頂部',
        langMenuLabel: '選擇語言',
        outline: { label: '本頁目錄' },
        nav: [
          { text: '首頁', link: '/cht/' },
          { text: '下載', link: '/cht/download' },
          { text: '關於', link: '/cht/about' },
        ],
        footer: {
          message: 'ZALP — 面向 Мир кораблей 的模組安裝器',
          copyright: `© ${new Date().getFullYear()} ZALP`
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Download', link: '/en/download' },
          { text: 'About', link: '/en/about' },
        ],
        footer: {
          message: 'ZALP — A Mod Installer for Мир кораблей',
          copyright: `© ${new Date().getFullYear()} ZALP`
        },
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      themeConfig: {
        darkModeSwitchLabel: '外観',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップに戻る',
        langMenuLabel: '言語切り替え',
        outline: { label: 'このページの内容' },
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ダウンロード', link: '/ja/download' },
          { text: 'について', link: '/ja/about' },
        ],
        footer: {
          message: 'ZALP — Мой кораблей 向け Mod インストーラー',
          copyright: `© ${new Date().getFullYear()} ZALP`
        },
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'ZАЛП',
      themeConfig: {
        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключиться на светлую тему',
        darkModeSwitchTitle: 'Переключиться на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        langMenuLabel: 'Выбрать язык',
        outline: { label: 'Содержание страницы' },
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Скачать', link: '/ru/download' },
          { text: 'О проекте', link: '/ru/about' },
        ],
        footer: {
          message: 'ZАЛП — Установщик модов для Мира кораблей',
          copyright: `© ${new Date().getFullYear()} ZАЛП`
        },
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
