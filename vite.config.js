// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/API": {
        target: "https://health.code-faster.giize.com",
        changeOrigin: true,
        secure: true, // Add this if you're dealing with a self-signed SSL certificate
        // No rewrite necessary if you want to keep '/API' in the proxied URL
      },
    },
  },
  plugins: [react()],
});
