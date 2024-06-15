import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), dts({ include: "./src" })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "./src/index.tsx"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
