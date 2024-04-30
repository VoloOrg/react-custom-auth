import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from 'vite-plugin-checker';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
    }),
    svgr({
      include: "**/*.svg",
    }),
  ],
  server: {
    open: true,
  },
});
