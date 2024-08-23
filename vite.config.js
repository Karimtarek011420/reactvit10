
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  server: {
    proxy: {
      "/API": {
        target: "https://health.code-faster.giize.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/API/, ""),
      },
    },
  },
  plugins: [react()],
});

