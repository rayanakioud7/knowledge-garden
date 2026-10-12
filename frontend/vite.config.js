import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The Django API runs on :8000 in dev; Vite proxies /api to it so the SPA can
// use same-origin relative URLs and CORS is a non-issue during development.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
