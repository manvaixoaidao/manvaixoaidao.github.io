import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "smithaulait",
  description: 'nyan~',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Main Page', link: '/main-page' },
          { text: 'Credits', link: 'https://www.youtube.com/watch?v=EOTAWLaDa58' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/smithaulait' }
    ],

    footer: {
      message: 'From 🇻🇳 with 💝'
    }
  }
})
