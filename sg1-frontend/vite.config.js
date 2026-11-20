import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // les appels /api sont relayes vers laravel (php artisan serve sur le port 8000)
    // comme ca le front et l'api ont la meme origine et pas de probleme de CORS
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
})
