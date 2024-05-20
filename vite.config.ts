import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        typescript: true,
      }),
      svgr({
        include: '**/*.svg',
      }),
    ],
    define: {
      __API_BASE: JSON.stringify(mode === 'production' ? "https://app.biobrainpro.net/" : "http://localhost:5200")
    },
    server: {
      open: true,
      port: 4200,
    },
  }
})
