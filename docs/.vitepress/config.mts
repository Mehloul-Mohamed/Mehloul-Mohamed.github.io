import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "/var/log",
  description: "Made With VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction.md' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Introduction', link: '/introduction.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mehloul-Mohamed' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mohamed-mehloul-73b8732a4/' }
    ],
  }
})
