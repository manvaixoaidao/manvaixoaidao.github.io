import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "smithaulait",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Main Page', link: '/main-page' },
          { text: 'Credits', link: '/credits' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/smithaulait' }
    ],

    footer: {
      message: 'From 🇻🇳 with 💝'
    }
  },
  sitemap: {
    hostname: 'https://salt.io.vn'
  }
})
