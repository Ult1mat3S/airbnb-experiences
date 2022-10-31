import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import { hash } from "./src/utils/functions.jsx";

export default defineConfig({
  base: "/airbnb-experiences/",
  server: {
    open: true,
  },
  plugins: [react(), svgrPlugin()],

  build: {
    emptyOutDir: true,
    outDir: "./dist",
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`,
      },
    },
  },
});
