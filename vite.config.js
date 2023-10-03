import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT || 3000
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src', 'pages'),
      components: path.resolve(__dirname, 'src', 'components')
    }
  }
})
