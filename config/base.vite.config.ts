import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import htmlTemplate from 'vite-plugin-html-template'
import mpa from 'vite-plugin-mpa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mpa({
      open: '/main',
      scanDir: 'src/pages',
      scanFile: 'main.tsx',
    }),
    htmlTemplate({
      // where is the pages' root directory?
      pagesDir: 'src/pages',
      // define pages like it is done in vue-cli
      pages: {
        main: {
          template: 'src/pages/main/index.html',
          entry: '',
          title: 'Homepage',
        },
        page2: {
          template: 'src/pages/page2/index.html',
          entry: '',
          title: 'Subpage',
        },
      },
      // expose to template
      data: {
        title: 'Homepage',
      },
    }),
  ]
})
